import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <button>
        <span className="loading loading-spinner"></span>
        loading ...
      </button>
    </div>
  );
};

export default Loading;
