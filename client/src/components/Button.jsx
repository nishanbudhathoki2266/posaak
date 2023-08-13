function Button({ variant, children, onClick }) {
  const baseClassName =
    "inline-flex border-0 py-2 px-6 focus:outline-none rounded text-lg";
  let className;
  if (variant === "primary") {
    className = baseClassName + " bg-[#67595E] text-white";
  }

  if (variant === "secondary") {
    className = baseClassName + " ml-4 bg-gray-100 text-gray-700";
  }
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}

export default Button;
