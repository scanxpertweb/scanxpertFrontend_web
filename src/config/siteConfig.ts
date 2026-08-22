export const siteConfig = {
  phone: "+918891240082",
  phoneDisplay: "+91-88912 40082",
  whatsapp: "918891240082",
  whatsappMessage:
    "Hi ScanXperts, I would like to book an appointment for a scan.",
  email: "scan.xperts@gmail.com",
  address:
    "Plot No. 475, 11th Cross Road, Panampilly Nagar, Kochi, Kerala, India",
  googleMapsUrl:
    "https://www.google.com/maps/place/ScanXperts/@9.9603153,76.2947442,1018m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3b08732382457031:0xe57e58d14cfe0cb9!8m2!3d9.9603153!4d76.2973191!16s%2Fg%2F11x7tqp4qy?entry=ttu",
  googleReviewsUrl:
    "https://www.google.com/maps/place/ScanXperts/@9.9603153,76.2973191,17z/data=!4m8!3m7!1s0x3b08732382457031:0xe57e58d14cfe0cb9!8m2!3d9.9603153!4d76.2973191!9m1!1b1!16s%2Fg%2F11x7tqp4qy?entry=ttu",
  /** Set VITE_GOOGLE_PLACE_ID in .env for live reviews (find via Google Place ID Finder) */
  googlePlaceId: import.meta.env.VITE_GOOGLE_PLACE_ID as string | undefined,
  googlePlacesApiKey: import.meta.env.VITE_GOOGLE_PLACES_API_KEY as
    | string
    | undefined,
  /** Fallback when Google Places API is not configured */
  googleRatingFallback: 5.0,
  googleReviewCountFallback: 0,
};

export const getWhatsAppUrl = (message?: string) => {
  const text = encodeURIComponent(message ?? siteConfig.whatsappMessage);
  return `https://wa.me/${siteConfig.whatsapp}?text=${text}`;
};
