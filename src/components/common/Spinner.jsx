import React, { useState } from "react";
import GridLoader from "react-spinners/GridLoader";

const Spinner = ({ loading = false, color = "#000000", size = 20 }) => {
  const [isShowLoader, setShowLoader] = useState(loading);

  window.addEventListener("load", function() {
    setShowLoader(true)
  });

  

  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      setShowLoader(false);
    }, 2000);
})
  return (
    <>
      {isShowLoader && (
        <div className="fixed inset-0 flex justify-center items-center bg-white/70 z-50">
          <GridLoader color={color} size={size} />
        </div>
      )}
    </>
  );
};

export default Spinner;
