import { useState } from "react";
import logoSrc from "../../assets/insta.jpeg";

const SignIn = () => {
  function debounce(func, timeout = 3000) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }

  function saveInput() {
    console.log("Saving data");
  }
  const processChange = debounce(() => saveInput());

  return (
    <>
      <input type="text" onKeyUp={processChange} />
    </>
  );
};

export default SignIn;
