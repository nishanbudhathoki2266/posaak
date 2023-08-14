function Button({ variant, children, onClick, className, type = "" }) {
  const baseClassName =
    "inline-flex border-0 py-2 px-6 focus:outline-none rounded text-lg";
  let compoundClasses = className;
  if (variant === "primary") {
    compoundClasses =
      compoundClasses + " " + baseClassName + " bg-[#67595E] text-white";
  }

  if (variant === "secondary") {
    compoundClasses =
      compoundClasses + " " + baseClassName + " ml-4 bg-gray-100 text-gray-700";
  }

  return (
    <button type={type} onClick={onClick} className={compoundClasses}>
      {children}
    </button>
  );
}

export default Button;
