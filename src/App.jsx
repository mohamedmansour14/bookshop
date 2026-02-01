import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import ForgetPasswordPage from "./pages/ForgetPasswordPage";

import LoginPages from "./pages/LoginPages";
 import ResetPasswordPage from "./pages/ResetPasswordPage";
import RestPasswordOtpPage from "./pages/ResetPasswordOtpPage";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="/LoginPages" element={<LoginPages />} />
        <Route path="/ForgetPasswordPage" element={<ForgetPasswordPage />} />
        <Route path="/RestPasswordOtpPage" element={<RestPasswordOtpPage />} />
          <Route path="/ResetPasswordPage" element={<ResetPasswordPage />} />
      </Routes>
    </BrowserRouter>
  );
}
