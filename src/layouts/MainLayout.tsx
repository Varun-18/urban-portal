import React from "react";

import { Footer, Header } from "../components";
import { Outlet, useLocation } from "react-router-dom";

export const MainLayout: React.FC = () => {
  const location = useLocation();
  const noSideBarPaths = ["/login", "/signup", "/404"];

  return (
    <>
      <Header />
      <main className="flex w-full mx-auto max-w-[1400px] bg-blue-200">
        {!noSideBarPaths.includes(location.pathname) && (
          <aside className="bg-blue-900 grow max-w-[300px] max-h-screen">
            This is aside section
          </aside>
        )}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
