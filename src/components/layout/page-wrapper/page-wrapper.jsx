import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import { StyledPage } from "./styles";
import { Outlet } from "react-router-dom";

// Обёртка для контента страниц
function PageWrapper() {
  return (
    <>
      <Header />
      <StyledPage>
        <Outlet />
      </StyledPage>
      <Footer />
    </>
  );
}

export default PageWrapper;
