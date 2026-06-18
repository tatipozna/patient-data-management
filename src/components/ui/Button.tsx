interface Props {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void; variant?: "primary" | "secondary";
  type?: "button" | "submit";
}

function Button({
  children,
  onClick,
  variant = "primary",
  type = "button",
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={variant === "primary"
        ? "primary-button"
        : "secondary-button"}
    >
      {children}
    </button>
  );
}

export default Button;