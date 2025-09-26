import React, { useState, useEffect } from "react";
import GridLoader from "react-spinners/GridLoader";

const Spinner = ({ loading = true, color = "#088395", size = 20 }) => {
  const [isShowLoader, setShowLoader] = useState(loading);

  useEffect(() => {
    const handleLoad = () => {
      setShowLoader(true);
      setTimeout(() => {
        setShowLoader(false);
      }, 2000); // hide loader after 2s
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

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
