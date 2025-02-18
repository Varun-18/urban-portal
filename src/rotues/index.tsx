import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import { HomePage, LoginPage, NotFound } from "../pages";

import { MainLayout } from "../layouts";

export const AppRouter = () => {
  console.log("inside app router");
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/" element={<MainLayout />}>
          <Route index path="/dashboard" element={<HomePage />} />
        </Route>
        <Route path="*" element={<Navigate to={"/404"} />} />
      </Routes>
    </Router>
  );
};
