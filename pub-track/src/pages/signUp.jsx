import React, { useState } from "react";
import { UserAuth } from "../Authcontext";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const SignUp = () => {
  const { emailSignUp } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      await emailSignUp(email, password);
      setError("");
      setSuccessMessage("You have successfully registered!");
    } catch (error) {
      console.log(error);
      setError("Failed to sign up with email and password");
    }
  };


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex items-center justify-center flex-grow bg-gray-300">
        <form className="bg-white p-6 rounded shadow-md border-2 border-black w-full max-w-sm" onSubmit={signUp}>
          <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
          {error && <p className="text-red-600 text-center">{error}</p>}
          {successMessage && <p className="text-green-600 text-center">{successMessage}</p>}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
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

          <div className="mb-4 relative">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password:
            </label>
            <input
              className="shadow appearance-none border-2 rounded border-black w-full py-2 px-3 placeholder-gray-500 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 pt-6 flex items-center leading-5"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <div className="mb-6 relative">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
              Confirm Password:
            </label>
            <input
              className="shadow appearance-none border-2 rounded border-black w-full py-2 px-3 placeholder-gray-500 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 pt-6 flex items-center"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <div className="flex flex-col items-center">
            <button
              className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none block focus:shadow-outline mx-auto"
              type="button"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
          
            <div className="pt-5"> 
            <p>Already have an account?</p>

            <p className="ml-5">Click here to <Link to='/signIn' className="text-blue-500 underline">
                                Sign In
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

export default SignUp;
