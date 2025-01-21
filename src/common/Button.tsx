import clsx from "clsx";
import { ButtonHTMLAttributes, FunctionComponent } from "react";
import "./Button.scss";

interface ButtonPropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "secondary";
}

export const Button: FunctionComponent<ButtonPropsType> = ({
  color = "primary",
  onClick,
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={clsx("button", `button__${color}`, className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
