/* eslint-disable */

import React, { useRef, useState } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "./firebase";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

declare global {
  interface Window {
    recaptchaVerifier: RecaptchaVerifier;
    confirmationResult: any;
  }
}

const Login = () => {
  const [phone, setPhone] = useState("+91");
  const [otp, setOtp] = useState("");
  const [hasSent, setHasSent] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);
  const [_token, setToken] = useState("");
  const [formData, setFormData] = useState({ name: "", age: "", sex: "" });
  const recaptchaRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const setupRecaptcha = () => {
    return new Promise<void>((resolve, reject) => {
      if (!window.recaptchaVerifier) {
        try {
          window.recaptchaVerifier = new RecaptchaVerifier(
            auth,
            "recaptcha-container",
            {
              size: "invisible",
              callback: (response: any) => {
                console.log("reCAPTCHA solved:", response);
                resolve();
              },
              "expired-callback": () => {
                console.warn("reCAPTCHA expired");
                reject();
              },
            }
          );
          window.recaptchaVerifier.render().then(() => {
            resolve();
          });
        } catch (err) {
          reject(err);
        }
      } else {
        resolve();
      }
    });
  };

  const checkUserExistence = async () => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_HOST}/api/auth/check-user`,
        { phone }
      );
      return res.data.exists;
    } catch (err) {
      console.error("Error checking user:", err);
      return false;
    }
  };

  const sendOtp = async () => {
    try {
      const confirmationResult = await signInWithPhoneNumber(
        auth,
        phone,
        window.recaptchaVerifier
      );
      window.confirmationResult = confirmationResult;
      setHasSent(true);
    } catch (error) {
      console.error("Error sending OTP:", error);
      toast.error("Failed to send OTP. Please try again.");
    }
  };

  const handleSendClick = async (e: React.FormEvent) => {
    e.preventDefault();
    const exists = await checkUserExistence();
    if (exists) {
      try {
        await setupRecaptcha();
        await sendOtp();
      } catch (error) {
        console.error("Recaptcha or OTP error:", error);
      }
    } else {
      setShowRegistration(true); 
    }
  };

  const handleRegisterAndSendOTP = async () => {
    if (loading) return;
    setLoading(true);
    try {
      await axios.post(`${import.meta.env.VITE_API_HOST}/api/auth/register`, {
        ...formData,
        phone,
        age: Number(formData.age),
      });
      setShowRegistration(false);
      toast.success('Registration successful. Please click "Send OTP" again.');
    } catch (err) {
      console.error("Registration failed:", (err as Error).message);
      toast.error("Registration failed");
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async () => {
    try {
      const result = await window.confirmationResult.confirm(otp);
      const idToken = await result.user.getIdToken();
      setToken(idToken);

      const res = await axios.post(
        `${import.meta.env.VITE_API_HOST}/api/auth/verify-token`,
        { idToken }
      );
      if (res.data.exists) {
        toast.success("Welcome back! Redirecting...");
  
        if (String(res.data.role) === "67e434059b46fdbdc1c2cf42") {
          navigate("/admin-dashboard");
        } else if (res.data.userId) {
          localStorage.setItem("userId", res.data.userId);
          navigate(`/user-dashboard/${res.data.userId}`);
        } else {
          toast.error("User ID not found!");
        }
      
      }
    } catch (error) {
      toast.error("❌ Invalid OTP");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 p-4 relative">
  {/* Background Decorative Elements */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
  <div className="absolute top-0 right-0 w-52 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
  <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000"></div>

  {/* Main Container */}
  <div className="w-full max-w-4xl bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row transition-all duration-300">
    {/* Left Side - Form */}
    <div className="w-full md:w-1/2 p-10 flex flex-col justify-center bg-gray-50">
      {showRegistration ? (
        <>
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Register <span className="text-primaryBlue">Here</span>
          </h2>
          <input
            placeholder="Name"
            name="name"
            className="border border-gray-300 focus:border-primaryBlue focus:ring-primaryBlue px-5 py-3 rounded-lg outline-none w-full mb-3 transition duration-200 ease-in-out"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            required
          />
          <input
            placeholder="Age"
            name="age"
            type="number"
            className="border border-gray-300 focus:border-primaryBlue focus:ring-primaryBlue px-5 py-3 rounded-lg outline-none w-full mb-3 transition duration-200 ease-in-out"
            value={formData.age}
            onChange={(e) =>
              setFormData({ ...formData, age: e.target.value })
            }
            required
          />
          <input
            placeholder="Gender"
            name="sex"
            className="border border-gray-300 focus:border-primaryBlue focus:ring-primaryBlue px-5 py-3 rounded-lg outline-none w-full mb-4 transition duration-200 ease-in-out"
            value={formData.sex}
            onChange={(e) =>
              setFormData({ ...formData, sex: e.target.value })
            }
            required
          />
          <button
            onClick={handleRegisterAndSendOTP}
            className="bg-primaryBlue hover:bg-darkOrange text-white font-semibold px-5 py-3 rounded-lg transition-all w-full"
          >
            Register & Send OTP
          </button>
        </>
      ) : !hasSent ? (
        <>
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Welcome to <span className="text-primaryBlue">ScanXperts</span>
          </h2>
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            Enter Phone <span className="text-primaryBlue">Number</span>
          </h3>
          <form onSubmit={handleSendClick} className="flex flex-col gap-4">
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border border-gray-300 focus:border-primaryBlue focus:ring-primaryBlue px-5 py-3 rounded-lg outline-none w-full transition duration-200 ease-in-out"
              placeholder="+91..."
              required
            />
            <button
              type="submit"
              className="bg-primaryBlue text-white font-semibold px-5 py-3 rounded-lg hover:bg-darkOrange transition-all w-full"
            >
              Send OTP
            </button>
          </form>
          <div
            id="recaptcha-container"
            ref={recaptchaRef}
            className="mt-4"
          ></div>
        </>
      ) : (
        <>
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Enter <span className="text-primaryBlue">OTP</span>
          </h2>
          <input
            type="text"
            maxLength={6}
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="border border-gray-300 focus:border-primaryBlue focus:ring-primaryBlue px-5 py-3 rounded-lg outline-none w-full transition duration-200 ease-in-out"
            placeholder="Enter OTP"
            required
          />
          <button
            onClick={verifyOtp}
            className="bg-green-500 text-white font-semibold px-5 py-3 rounded-lg hover:bg-green-600 transition-all mt-4 w-full"
          >
            Verify OTP
          </button>
        </>
      )}
    </div>

    {/* Right Side - Image/Illustration */}
    <div className="w-full md:w-1/2 hidden md:block relative">
      <div className="h-full">
        <img
          src={
            showRegistration ? "/images/3dXray.webp" : "/images/cbct.webp"
          }
          alt="Clinic"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  </div>
</div>

  );
};

export default Login;
