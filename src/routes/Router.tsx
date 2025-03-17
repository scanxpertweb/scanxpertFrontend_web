import { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import PrivacyPolicy from "@/pages/PrivacyPolicy/PrivacyPolicy";
import Disclamer from "@/pages/Disclamer/Disclamer";
import TermsOfServices from "@/pages/TermsOfServices/TermsOfServices";
import RefundPolicy from "@/pages/RefundPolicy/RefundPolicy";

// Lazy-loaded pages
const Home = lazy(() => import("../pages/Hero/Home"));
const About = lazy(() => import("../pages/About/About"));
const Services = lazy(() => import("../pages/Services/Services"));
const Contact = lazy(() => import("../pages/Contact/Contact"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

const AppRouter = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 2000); 
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {isTransitioning && <Loading />}
      {!isTransitioning && (
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/ourservices" element={<Services />} />
            <Route path="/contactus" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/disclaimer" element={<Disclamer />} />
            <Route path="/terms-of-services" element={<TermsOfServices />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      )}
    </>
  );
};

export default AppRouter;
