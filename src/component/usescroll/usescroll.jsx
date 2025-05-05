"use client";

import { motion, useScroll } from "framer-motion";
import React from "react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "5px",
          background: "linear-gradient(to right, #00ff87, #60efff)",
          transformOrigin: "0%",
          zIndex: 1000
        }}
      />
      <div style={{ 
        minHeight: "300vh",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "2rem"
      }}>
        <h1 className="text-4xl font-bold">Scroll Down</h1>
        <p className="text-lg">Content goes here...</p>
        {/* Add more content to enable scrolling */}
        <div style={{height: "100vh"}}>Section 1</div>
        <div style={{height: "100vh"}}>Section 2</div>
        <div style={{height: "100vh"}}>Section 3</div>
      </div>
    </>
  );
}
