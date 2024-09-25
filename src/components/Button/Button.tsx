import Link from "next/link";
import { ButtonHTMLAttributes } from "react";

interface IButton {
  children: React.ReactNode;
  className?: string;
  variant?: "secondary" | "tertiary" | "quaternary";
  onClick?: () => void;
  href?: string;
  // type: ButtonHTMLAttributes<HTMLButtonElement>; 
}

const Button = ({
  children,
  className = "",
  variant = "secondary",
  onClick,
  href = "/products",
}: IButton) => {
  return (
    <Link href={href}>
      <button
        className={
          "relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden font-bold text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
        }
        onClick={onClick}
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          {children}
        </span>
      </button>
    </Link>
    /*
`p-2 border-2 border-tertiary rounded transition-all text-black hover:scale-105 active:scale-95 bg-${variant} ${className}}`
*/
  );
};

export default Button;
