"use client";
import React from "react";
import { ReactNode } from "react";
import { TopBar, Header, Footer } from "../components";
import { Toaster } from 'sonner';

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const Layout = ({ children }: { children: ReactNode }) => {

  return (
    <>
      <div className="homeLayout">
        <Toaster richColors />
        <TopBar />
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default React.memo(Layout);