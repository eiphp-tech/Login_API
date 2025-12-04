import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Pages
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
// import { VerifyCode } from "./pages/VerifyCode";
// import { SetPassword } from "./pages/SetPassword";
// import { ResetPasswordRequest } from "./pages/ResetPasswordRequest";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/signin" replace />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        {/*
        <Route path="/verify-code" element={<VerifyCode />} />
        <Route path="/set-password" element={<SetPassword />} />
        <Route path="/reset-password" element={<ResetPasswordRequest />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
