import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminLogin from "./Admin/AdminLogin";
import Dashboard from "./components/Dashboard";
import CustomerLogin from "./components/CustomerLogin";
import CustomerSignUp from "./components/CustomerSignUp";
import Navigation from "./components/Navigation";
import Menu from "./components/Menu";
import AdminSignUp from "./Admin/AdminSignUp";
import ForgetPassword from "./components/ForgetPassword";
import ResetPassword from "./components/ResetPassword";
import AdminForgotPassword from "./Admin/AdminForgotPassword";
import AdminResetPassword from "./Admin/AdminResetPassword";
import CreateQuery from "./components/CreateQuery";
import CheckStatus from "./components/CheckStatus";
import AllQueries from "./Admin/AllQueries";
import UpdateStatus from "./Admin/UpdateStatus";

//backend url
export const url = "https://querysupportbackend.onrender.com";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-sign-up" element={<AdminSignUp />} />
          <Route path="/createQuery" element={<CreateQuery />} />
          <Route path="/getAllQueries" element={<AllQueries />} />
          <Route path="/checkStatus" element={<CheckStatus />} />
          <Route path="/updateStatus" element={<UpdateStatus />} />
          <Route
            path="/admin-forgotPassword"
            element={<AdminForgotPassword />}
          />
          <Route
            path="/admin-reset-password/:id/:token"
            element={<AdminResetPassword />}
          />
          <Route path="/customer-login" element={<CustomerLogin />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route
            path="/reset-password/:id/:token"
            element={<ResetPassword />}
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/customer-sign-up" element={<CustomerSignUp />} />
          <Route path="/navbar" element={<Navigation />} />
          <Route path="/menu" element={<Menu />} />

          <Route path="*" element={<Navigate to="/Dashboard" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
