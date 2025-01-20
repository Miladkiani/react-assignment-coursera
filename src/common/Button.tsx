import clsx from "clsx";
import { FunctionComponent } from "react";
import "./Button.scss";

interface ButtonPropsType {
  label: string;
  color?: "primary" | "secondary";
  onClick?: () => void;
}

export const Button: FunctionComponent<ButtonPropsType> = ({
  label,
  color = "primary",
  onClick,
}) => {
  return (
    <button className={clsx("button", `button__${color}`)} onClick={onClick}>
      {label}
    </button>
  );
};
