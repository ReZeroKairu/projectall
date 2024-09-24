import React from "react";
import { Route, Routes } from "react-router-dom";
import Protected from "./Protected";
import { AuthContextProvider } from "./Authcontext";
import Account from "./pages/Account";
import Home from "./pages/Home";
import SignUp from "./pages/signUp";
import SignIn from "./pages/SignIn";
import Navbar from "./pages/Navbar";
import { VscAccount } from "react-icons/vsc";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route
            path="/account"
            element={
              <Protected>
                <Account />
                <VscAccount />
              </Protected>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
