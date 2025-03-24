import { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import PrivacyPolicy from "@/pages/PrivacyPolicy/PrivacyPolicy";
import Disclamer from "@/pages/Disclamer/Disclamer";
import TermsOfServices from "@/pages/TermsOfServices/TermsOfServices";
import RefundPolicy from "@/pages/RefundPolicy/RefundPolicy";

// Lazy-loaded pages
const Home = lazy(() => import("../pages/Hero/Home"));
const Login = lazy(() => import("../pages/Login/Login"));
const About = lazy(() => import("../pages/About/About"));
const Services = lazy(() => import("../pages/Services/Services"));
const Contact = lazy(() => import("../pages/Contact/Contact"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));
const AdminDashboard = lazy(() => import("../pages/AdminDashboard/AdminDashboard"));
const OnBoardPatient = lazy(() => import("../pages/OnboardPatient/OnBoardPatient"));
const PatientListing = lazy(() => import("../pages/PatientListing/PatientListing"));
const UserDashboard = lazy(() => import("../pages/UserDashboard/Userdashboard"));


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
            <Route path="/login" element={<Login />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/ourservices" element={<Services />} />
            <Route path="/contactus" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/disclaimer" element={<Disclamer />} />
            <Route path="/terms-of-services" element={<TermsOfServices />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/onboard-patient" element={<OnBoardPatient />} />
            <Route path="/patient-list" element={<PatientListing />} />
            <Route path="/user-dashboard" element={<UserDashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      )}
    </>
  );
};

export default AppRouter;
