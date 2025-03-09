import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // ✅ Redirect after login
import header from "../assets/logo.png";
import background from "../assets/background_banner.jpg";
import { login, signUp } from "../firebase";
import { toast } from "react-toastify";

function Login() {
  const [name, setName] = useState("");
  const [signState, setSignState] = useState("Sign in");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);  // ✅ Loading state
  const [showPassword, setShowPassword] = useState(false); // ✅ Password visibility
  const navigate = useNavigate(); // ✅ Redirect after successful login

  const user_auth = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      if (signState === "Sign in") {
        await login(email, password);
        toast.success("Login successful!");
        navigate("/");
      } else {
        await signUp(name, email, password);
        toast.success("Account created! Please verify your email before logging in.");
        setSignState("Sign in"); 
      }
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        toast.error("Invalid email or password. Please try again.");
      } else if (error.code === "auth/user-not-found") {
        toast.error("No account found. Please sign up first.");
      } else if (error.code === "auth/wrong-password") {
        toast.error("Incorrect password. Try again or reset your password.");
      } else {
        toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="w-full h-screen bg-black relative">
      {/* Background Image */}
      <img src={background} className="w-full h-full object-cover absolute" alt="Background" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/70 to-transparent"></div>

      {/* Logo */}
      <img src={header} className="relative w-[250px] z-20 p-5 ml-[90px]" alt="Logo" />

      {/* Login Form Container */}
      <div className="flex justify-center items-center w-full max-w-[400px] absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black p-8 rounded-lg shadow-lg">
        <div className="w-full">
          <h1 className="text-2xl font-bold text-white mb-4 text-center">{signState}</h1>
          
          {/* Form */}
          <form className="space-y-3" onSubmit={user_auth}>
            {signState === "Sign up" && (
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            )}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full p-2 bg-black border border-gray-300 rounded"
              required
            />
            
            {/* Password Input with Toggle Visibility */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
              <span
                className="absolute right-3 top-2 cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" className="text-sm text-gray-600">Remember me</label>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white p-2 rounded"
              disabled={loading}  // ✅ Disable while loading
            >
              {loading ? "Processing..." : signState}
            </button>
          </form>

          {/* Toggle Sign-In/Sign-Up */}
          <div className="mt-3 text-center">
            {signState === "Sign in" ? (
              <p className="text-[#737373]">
                New to Netflix?{" "}
                <span onClick={() => setSignState("Sign up")} className="text-white cursor-pointer">
                  Sign up
                </span>
              </p>
            ) : (
              <p className="text-[#737373]">
                Already have an account?{" "}
                <span onClick={() => setSignState("Sign in")} className="text-white cursor-pointer">
                  Sign in
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
