"use client";
import React from "react";
import { ReactNode } from "react";
import { TopBar, Header, Footer } from "../components";

const Layout = ({ children }: { children: ReactNode }) => {

  return (
    <>
      <div className="homeLayout">
        <TopBar />
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default React.memo(Layout);