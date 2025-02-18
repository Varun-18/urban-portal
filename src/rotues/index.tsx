import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import { HomePage, LoginPage, NotFound, SignupPage } from "../pages";

import { MainLayout } from "../layouts";
import { AuthWrapper } from "../wrappers";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<AuthWrapper />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to={"/404"} />} />
          <Route
            path="/dashboard"
            element={
              <AuthWrapper>
                <HomePage />
              </AuthWrapper>
            }
          ></Route>
        </Route>
      </Routes>
    </Router>
  );
};
