import React, { useRef, useState } from 'react';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from './firebase';
import axios from 'axios';

declare global {
  interface Window {
    recaptchaVerifier: RecaptchaVerifier;
    confirmationResult: any;
  }
}

const Login: React.FC = () => {
  const [phone, setPhone] = useState('+91');
  const [otp, setOtp] = useState('');
  const [hasSent, setHasSent] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);
  const [_token, setToken] = useState('');
  const [formData, setFormData] = useState({ name: '', age: '', sex: '' });
  const recaptchaRef = useRef<HTMLDivElement>(null);

  const setupRecaptcha = () => {
    return new Promise<void>((resolve, reject) => {
      if (!window.recaptchaVerifier) {
        try {
          window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
            size: 'invisible',
            callback: (response: any) => {
              console.log('reCAPTCHA solved:', response);
              resolve();
            },
            'expired-callback': () => {
              console.warn('reCAPTCHA expired');
              reject();
            },
          });
          window.recaptchaVerifier.render().then(() => {
            resolve(); // ✅ Ensure it's ready
          });
        } catch (err) {
          reject(err);
        }
      } else {
        resolve(); // Already exists
      }
    });
  };
  
  

  const checkUserExistence = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/check-user', { phone });
      return res.data.exists; // true or false
    } catch (err) {
      console.error('Error checking user:', err);
      return false;
    }
  };

  const sendOtp = async () => {
    try {
      const confirmationResult = await signInWithPhoneNumber(auth, phone, window.recaptchaVerifier);
      window.confirmationResult = confirmationResult;
      setHasSent(true);
    } catch (error) {
      console.error('Error sending OTP:', error);
      alert('Failed to send OTP. Please try again.');
    }
  };
  
  const handleSendClick = async (e: React.FormEvent) => {
    e.preventDefault();
    const exists = await checkUserExistence();
    if (exists) {
      try {
        await setupRecaptcha();  // ✅ Wait until recaptcha fully set
        await sendOtp();         // ✅ Then send OTP
      } catch (error) {
        console.error('Recaptcha or OTP error:', error);
      }
    } else {
      setShowRegistration(true);
    }
  };
  
  

  const [loading, setLoading] = useState(false);

  const handleRegisterAndSendOTP = async () => {
    if (loading) return; // prevent double submit
    setLoading(true);
    try {
      await axios.post('http://localhost:5000/api/auth/register', {
        ...formData,
        phone,
        age: Number(formData.age),
      });
      setShowRegistration(false);
      alert('Registration successful. Please click "Send OTP" again.');
    } catch (err) {
      console.error('Registration failed:', err);
      alert('Registration failed');
    } finally {
      setLoading(false);
    }
  };
  

  const verifyOtp = async () => {
    try {
      const result = await window.confirmationResult.confirm(otp);
      const idToken = await result.user.getIdToken();
      setToken(idToken);

      const res = await axios.post('http://localhost:5000/api/auth/verify-token', { idToken });
      if (res.data.exists) {
        alert('Welcome back! Redirecting...');
        window.location.href = '/home';
      }
    } catch (error) {
      alert('❌ Invalid OTP');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-[320px] bg-white rounded-xl shadow-lg p-6">
        {!hasSent ? (
          <>
            <h2 className="text-xl font-semibold mb-4 text-center">Enter Phone Number</h2>
            <form onSubmit={handleSendClick} className="flex flex-col gap-4">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border px-3 py-2 rounded"
                placeholder="+91..."
              />
              <button type="submit" className="bg-blue-500 text-white rounded py-2">
                Send OTP
              </button>
            </form>
            <div id="recaptcha-container" ref={recaptchaRef}></div>
          </>
        ) : (
          <>
            <h2 className="text-xl font-semibold mb-4 text-center">Enter OTP</h2>
            <input
              type="text"
              maxLength={6}
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="border px-3 py-2 rounded w-full"
              placeholder="OTP"
            />
            <button onClick={verifyOtp} className="bg-green-500 text-white mt-3 rounded py-2 w-full">
              Verify OTP
            </button>
          </>
        )}
      </div>

      {/* MODAL */}
      {showRegistration && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-6 rounded-lg w-[300px] shadow-md">
            <h2 className="text-lg font-semibold mb-3 text-center">Register First</h2>
            <input
              placeholder="Name"
              name="name"
              className="border px-3 py-2 mb-2 rounded w-full"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              placeholder="Age"
              name="age"
              type="number"
              className="border px-3 py-2 mb-2 rounded w-full"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            />
            <input
              placeholder="Sex"
              name="sex"
              className="border px-3 py-2 mb-4 rounded w-full"
              value={formData.sex}
              onChange={(e) => setFormData({ ...formData, sex: e.target.value })}
            />
            <button
              onClick={handleRegisterAndSendOTP}
              className="bg-purple-600 hover:bg-purple-700 text-white rounded py-2 w-full"
            >
              Register
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
