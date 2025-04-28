
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import ColaGame from "@/components/ColaGame";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <ColaGame />
    </div>
  );
};

export default Index;
