import { useEffect, useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import {
  googleRatingStatic,
  googleReviewCountStatic,
  googleReviewsStatic,
  type StaticReview,
} from "@/data/googleReviews";

export interface GoogleReview extends StaticReview {
  profilePhotoUrl?: string;
}

interface GoogleReviewsData {
  reviews: GoogleReview[];
  rating: number;
  totalReviews: number;
  source: "google" | "static";
}

interface PlacesReview {
  authorAttribution?: { displayName?: string; photoUri?: string };
  text?: { text?: string };
  rating?: number;
  relativePublishTimeDescription?: string;
}

const mapGoogleReview = (review: PlacesReview): GoogleReview => ({
  name: review.authorAttribution?.displayName ?? "Google User",
  feedback: review.text?.text ?? "",
  rating: review.rating ?? 5,
  relativeTime: review.relativePublishTimeDescription,
  profilePhotoUrl: review.authorAttribution?.photoUri,
});

const resolvePlaceId = async (apiKey: string): Promise<string | null> => {
  if (siteConfig.googlePlaceId) return siteConfig.googlePlaceId;

  try {
    const response = await fetch(
      "https://places.googleapis.com/v1/places:searchText",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": "places.id",
        },
        body: JSON.stringify({
          textQuery: "ScanXperts Panampilly Nagar Kochi Kerala",
        }),
      }
    );

    if (!response.ok) return null;

    const result = await response.json();
    const placeId = result.places?.[0]?.id as string | undefined;
    return placeId?.replace("places/", "") ?? placeId ?? null;
  } catch {
    return null;
  }
};

const fetchPlaceReviews = async (
  apiKey: string,
  placeId: string
): Promise<GoogleReviewsData | null> => {
  const cleanId = placeId.replace("places/", "");
  const response = await fetch(
    `https://places.googleapis.com/v1/places/${cleanId}`,
    {
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "reviews,rating,userRatingCount",
      },
    }
  );

  if (!response.ok) return null;

  const result = await response.json();
  const googleReviews = (result.reviews ?? [])
    .slice(0, 9)
    .map(mapGoogleReview)
    .filter((r: GoogleReview) => r.feedback.length > 0);

  if (googleReviews.length === 0) return null;

  return {
    reviews: googleReviews,
    rating: result.rating ?? googleRatingStatic,
    totalReviews: result.userRatingCount ?? googleReviews.length,
    source: "google",
  };
};

export const useGoogleReviews = (): GoogleReviewsData & { loading: boolean } => {
  const [data, setData] = useState<GoogleReviewsData>({
    reviews: googleReviewsStatic,
    rating: googleRatingStatic,
    totalReviews: googleReviewCountStatic,
    source: "static",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const apiKey = siteConfig.googlePlacesApiKey;
    if (!apiKey) return;

    let cancelled = false;

    const loadLiveReviews = async () => {
      setLoading(true);
      try {
        const placeId = await resolvePlaceId(apiKey);
        if (!placeId) return;

        const liveData = await fetchPlaceReviews(apiKey, placeId);
        if (!cancelled && liveData) {
          setData(liveData);
        }
      } catch (error) {
        console.warn("Google reviews fetch failed, using static reviews:", error);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    loadLiveReviews();
    return () => {
      cancelled = true;
    };
  }, []);

  return { ...data, loading };
};
