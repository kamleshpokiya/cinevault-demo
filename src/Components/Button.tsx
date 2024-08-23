"use client";
// // components/SubmitButton.tsx

// import Link from "next/link";
// import React from "react";

// interface SubmitButtonProps {
//   onClick?: () => void;
//   label: string;
//   variant?: "primary" | "secondary"; // Adding variant prop
//   classbtn?: string;
// }

// const SubmitButton: React.FC<SubmitButtonProps> = ({
//   onClick,
//   label,
//   variant = "primary",
//   classbtn,
// }) => {
//   const baseStyles =
//     "h-[56px] w-[202px] px-[28px] py-[16px] text-white text-nowrap text-[16px]";
//   const primaryStyles = "w-[179px] rounded-[10px] bg-[#2BD17E]";
//   const secondaryStyles =
//     "w-[179px] rounded-[10px] border border-[rgba(255,255,255,1)";

//   const variantStyles = variant === "primary" ? primaryStyles : secondaryStyles;

//   return (
//     <Link
//       href={`?page=${label}`}
//       className={`${baseStyles} ${variantStyles} ${classbtn}`}
//     >
//       {label}
//     </Link>
//   );
// };

// export default SubmitButton;

// components/SubmitButton.tsx

import React from "react";

interface SubmitButtonProps {
  onClick?: () => void;
  label: string;
  variant?: "primary" | "secondary"; // Adding variant prop
  classbtn?: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  onClick,
  label,
  variant = "primary",
  classbtn,
}) => {
  const baseStyles =
    "h-[56px] w-[202px] px-[28px] py-[16px] text-white text-nowrap text-[16px]";

  // Handling the variant styles using an object
  const variantStyles = {
    primary: "w-[179px] rounded-[10px] bg-[#2BD17E]",
    secondary: "w-[179px] rounded-[10px] border border-[rgba(255,255,255,1)]",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${classbtn}`}
    >
      {label}
    </button>
  );
};

export default SubmitButton;
