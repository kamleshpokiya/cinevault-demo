// components/SubmitButton.tsx

import React from "react";

interface SubmitButtonProps {
  onClick?: () => void;
  label: string;
  variant?: "primary" | "secondary"; // Adding variant prop
  classbtn?: string
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick, label, variant = "primary", classbtn }) => {
  const baseStyles = "h-[56px] px-[28px] py-[16px] text-white";
  const primaryStyles = "w-[179px] rounded-[10px] bg-[#2BD17E]";
  const secondaryStyles = "w-[167px] px-[55px] rounded-[10px] border border-[rgba(255,255,255,1)";


  const variantStyles = variant === "primary" ? primaryStyles : secondaryStyles;

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles}`}
    >
      {label}
    </button>
  );
};

export default SubmitButton;
