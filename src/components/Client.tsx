'use client';

import { useState } from "react";
import LoadingScreen from "@/components/Loading";
import Navbar from "@/components/Navbar";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <LoadingScreen onFinished={() => setLoading(false)}/>
      
      <div className={`transition-opacity duration-700 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        {children}
      </div>
    </>
  );
}