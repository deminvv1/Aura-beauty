"use client";

import React, { useState } from "react";
import CookieComponent from "./CookieComponent";
import PrivacyModal from "./PrivacyModal";
import Footer from "./Footer";

export default function Manager() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <>
      <Footer onOpenPrivacy={() => setIsPrivacyOpen(true)} />
      <CookieComponent onOpenPrivacy={() => setIsPrivacyOpen(true)} />
      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />
    </>
  );
}
