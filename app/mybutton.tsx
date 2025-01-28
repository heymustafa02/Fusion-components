"use client";
import FireflyButton from "@/components/ui/firefly-button";
import React from "react";

// Define the props for MyButton
interface MyButtonProps {
  text: string;
  size?: string; // Optional prop
  href: string;
  className?: string; // Optional prop
}

// Use React.forwardRef to forward the ref to the <a> tag
const MyButton = React.forwardRef<HTMLAnchorElement, MyButtonProps>(
  ({ text, size, href, className }, ref) => {
    return (
      <a
        ref={ref} // Forward the ref to the <a> tag
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: "none", // Removes the underline from the link
        }}
        className={className} // Pass the className prop
      >
        <FireflyButton
          text={text}
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
);

// Add a display name for debugging
MyButton.displayName = "MyButton";

export default MyButton;