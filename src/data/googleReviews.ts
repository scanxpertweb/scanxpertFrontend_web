/**
 * Patient reviews copied from Google Maps.
 * Update manually when new reviews are added on Google.
 */
export interface StaticReview {
  name: string;
  feedback: string;
  rating: number;
  relativeTime?: string;
}

export const googleReviewsStatic: StaticReview[] = [
  {
    name: "Abilash KM",
    rating: 5,
    relativeTime: "4 months ago",
    feedback:
      "Had a really smooth and hassle-free experience at ScanXperts. From the moment I walked in, everything was well-organized and efficient. The team handled the entire process with care and precision, and the scan results were delivered quickly without any confusion. What stood out to me was the level of accuracy and the modern equipment they use—it truly feels like a place you can trust for detailed imaging. Highly recommended for anyone looking for reliable and advanced imaging services in Kochi!",
  },
  {
    name: "Shinto John",
    rating: 5,
    relativeTime: "2 weeks ago",
    feedback:
      "I had a great experience at ScanXperts, Kochi. The staff were professional, polite, and made the entire process smooth and comfortable. The centre was very clean, well maintained, and had a pleasant smell, which made the environment feel fresh and welcoming. The service was quick, and I received clear guidance throughout my visit. I would definitely recommend ScanXperts, Kochi, to anyone looking for quality diagnostic services.",
  },
  {
    name: "C Thomas",
    rating: 5,
    relativeTime: "4 weeks ago",
    feedback:
      "I recently visited ScanXperts in Kochi with my daughter, and we had an excellent experience. From the moment we walked in, the staff were warm, friendly, and welcoming, making us feel comfortable throughout our visit. The service was professional and well organized. I highly recommend ScanXperts to anyone looking for quality diagnostic services in Kochi.",
  },
  {
    name: "Abin Isaac",
    rating: 5,
    relativeTime: "1 month ago",
    feedback:
      "Went there for a dental scan. The process was quick. I visited around 12:30 PM and was done by 1 PM. The office is spotless, modern, and the staff named Pistis made checking in seamless. The scan cost me ₹650 and I received the report in 20 minutes. I highly recommend them to anyone looking for a comfortable dental checkup.",
  },
  {
    name: "Jibin Nj",
    rating: 5,
    relativeTime: "2 months ago",
    feedback:
      "Professional service, friendly staff, and a well-organized facility. The process was quick, comfortable, and efficient. Highly satisfied with the overall experience. Recommended.",
  },
];

export const googleRatingStatic = 5.0;
export const googleReviewCountStatic = googleReviewsStatic.length;
