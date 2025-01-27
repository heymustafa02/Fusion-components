"use client";
import FireflyButton from "@/components/ui/firefly-button";
import React from "react";

function MyButton() {
  return (
    <a
      href="https://mustafa-mallebhari.vercel.app" // Link to your website
      target="_blank" // Opens the link in a new tab
      rel="noopener noreferrer" // Security for opening links in a new tab
      style={{
        textDecoration: "none", // Removes the underline from the link
      }}
    >
      <FireflyButton
        text="Connect with me!"
        backgroundColor="#ffa500"
        textColor="#ffffff"
        glowColor="#ff4500"
        fireflyCount={15}
        fontSize="1.2rem"
        padding="1.5rem 3rem"
      />
    </a>
  );
}

export default MyButton;
