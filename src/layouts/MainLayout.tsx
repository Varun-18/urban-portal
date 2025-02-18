import React from "react";

import { Footer, Header } from "../components";
import { Outlet, useLocation } from "react-router-dom";
import { AuthWrapper } from "../wrappers";
import { Sidebar } from "../components/SideBar";

export const MainLayout: React.FC = () => {
  const location = useLocation();
  const noSideBarPaths = ["/login", "/signup", "/404"];
  console.log("inside main layout");
  return (
    <>
      <Header />
      <main className="flex w-full mx-auto">
        {!noSideBarPaths.includes(location.pathname) && <Sidebar />}
        <div className="p-8 mt-12">
          <AuthWrapper>
            <Outlet />
          </AuthWrapper>
        </div>
      </main>
      <Footer />
    </>
  );
};
