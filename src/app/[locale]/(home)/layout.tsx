import Footer from "@/components/Layout/footer";
import Header from "@/components/Layout/header";
import React, { ReactNode } from "react";

const HomeLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="min-h-screen bg-[#07051a]">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default HomeLayout;
