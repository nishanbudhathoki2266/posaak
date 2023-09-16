function Heading({ children, position = "", className = "" }) {
  return (
    <h1
      className={`sm:text-4xl ${
        position === "center" ? "text-center " : ""
      } text-2xl mb-4 font-bold text-gray-800 ${className}`}
    >
      {children}
    </h1>
  );
}

export default Heading;
