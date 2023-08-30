import React from "react";
import { SpinningCircles } from "react-loading-icons";

const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center">
      <div className="w-10 h-10 relative">
        <SpinningCircles />
      </div>
      <p className="mt-5 text-sm text-muted-foreground">Let me think...</p>
    </div>
  );
};

export default Loader;
