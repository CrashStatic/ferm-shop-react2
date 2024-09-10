import React from "react";
import About from "../../blocks/about/about";
import Advantages from "../../blocks/advantages/advantages";
import advantagesList from "/src/mocks/advantagesList";

function MainPage() {
  return (
    <>
      <About />
      <Advantages advantages={advantagesList} />
    </>
  );
}

export default MainPage;
