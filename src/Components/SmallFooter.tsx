"use client";
import React, { useState, useEffect } from "react";

const SmallFooter = () => {
  return (
    <footer className="w-full">
      <svg
        viewBox="0 0 1440 200" // Increase height here from 111 to 200
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0L59.625 7.17052C120.375 14.34104 239.625 28.6821 360 51.7977C480.375 75.2341 599.625 109.7659 720 116.9364C840.375 124.1069 959.625 103.5954 1080 96.7457C1200.38 89.5751 1319.62 96.7457 1380.38 99.6705L1440 102.5954V200H1380.38C1319.62 200 1200.38 200 1080 200C959.625 200 840.375 200 720 200C599.625 200 480.375 200 360 200C239.625 200 120.375 200 59.625 200H0V0Z"
          fill="#20DF7F"
          fillOpacity="0.09"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 80L48 96.28C96 112.56 192 143.92 288 136.48C384 129.04 480 80.4 576 48.64C672 16.88 768 0 864 0C960 0 1056 16.88 1152 46.42C1248 75.96 1344 112.16 1392 132.26L1440 152.36V200H1392C1344 200 1248 200 1152 200C1056 200 960 200 864 200C768 200 672 200 576 200C480 200 384 200 288 200C192 200 96 200 48 200H0V80Z"
          fill="#E5E5E5"
          fillOpacity="0.13"
        />
      </svg>
    </footer>
  );
};

export default SmallFooter;
