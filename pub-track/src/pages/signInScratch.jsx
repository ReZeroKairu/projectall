import React, { useState, useEffect } from "react";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../Authcontext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
const SignIn = () => {
  const { googleSignIn, emailSignIn, user } = UserAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
    const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
      setError("Failed to sign in with Google");
    }
  };

  const handleEmailSignIn = async () => {
    try {
      await emailSignIn(auth, email, password);
      navigate("/accounts");
      setError("");
    } catch (error) {
      console.log(error);
      setError("Failed to sign in with email and password");
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/account");
    }
  }, [user, navigate]);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex items-center justify-center flex-grow bg-gray-300">
        <form className="bg-white p-6 rounded shadow-md border-2 border-black w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-4 text-center">Sign in</h2>
          {error && <p className="text-red-600 text-center">{error}</p>}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className="shadow appearance-none border-2 rounded border-black w-full py-2 px-3 placeholder-gray-500 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password:
            </label>
            <input
              className="shadow appearance-none border-2 rounded border-black w-full placeholder-gray-500 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute  right-0 pr-3"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <div className="flex flex-col items-center">
            <button
              className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none block focus:shadow-outline mx-auto"
              type="button"
              onClick={handleEmailSignIn}
            >
              Sign in
            </button>
          </div>

          <div className="mt-3 text-center">
            <p>or</p>
          </div>

          <div className="flex flex-col items-center mx-auto">
            <div className="max-w-[240px] m-auto py-4">
              <GoogleButton onClick={handleGoogleSignIn} />
            </div>
          <div> 
            <p>Don't have an account yet?</p>
            
            <p className="ml-6">Click here to <Link to='/signUp' className="text-blue-500 underline">
                                Sign Up
                            </Link></p>
          </div>
          </div>
        </form>
      </div>
      <footer className="flex flex-col items-center bg-red-800 h-20 w-full justify-center absolute bottom-0">
        <p className="text-white">© 2024 Liceo De Cagayan University. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SignIn;