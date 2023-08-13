function Button({ variant, children, onClick, className }) {
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

  console.log(compoundClasses);

  return (
    <button onClick={onClick} className={compoundClasses}>
      {children}
    </button>
  );
}

export default Button;
