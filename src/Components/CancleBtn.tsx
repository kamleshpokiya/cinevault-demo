// components/SubmitButton.tsx

import React from "react";
import { useRouter } from "next/navigation";
interface SubmitButtonProps {
  onClick?: () => void;
  label: string;
  variant?: "primary" | "secondary"; // Adding variant prop
  classbtn?: string;
  type?: "button" | "submit" | "reset" | undefined;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  onClick,
  label,
  variant = "primary",
  classbtn,
  type,
}) => {
  const history = useRouter(); // Initialize useHistory

  const handleClick = () => {
    if (onClick) {
      onClick(); // Call the onClick prop if provided
    }
    history.push("/home"); // Redirect to the home page
  };

  const baseStyles =
    "h-[56px] w-[202px] px-[28px] py-[16px] text-white text-nowrap text-[16px]";
  const primaryStyles = "w-[179px] rounded-[10px] bg-[#2BD17E]";
  const secondaryStyles =
    "w-[167px] px-[55px] rounded-[10px] border border-[rgba(255,255,255,1)]"; // Fixed missing closing bracket
  const custombtn = classbtn || "";

  const variantStyles = variant === "primary" ? primaryStyles : secondaryStyles;

  return (
    <button
      type={type}
      onClick={handleClick} // Use handleClick for the onClick event
      className={`${baseStyles} ${variantStyles} ${custombtn}`}
    >
      {label}
    </button>
  );
};

export default SubmitButton;
