"use client";
import React from "react";

interface Props {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset}: Props) => {
  console.log(error);
  return (
    <div>
      <div> An unexpected error has occured</div>
      <button 
        className="btn" 
        onClick={() => reset()}>
          Retry
      </button>
    </div>
  );
};

export default ErrorPage;
