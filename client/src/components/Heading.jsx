function Heading({ children, position = "" }) {
  return (
    <h1
      className={`sm:text-3xl ${
        position === "center" ? "text-center " : ""
      } text-2xl mb-4 font-bold text-gray-600`}
    >
      {children}
    </h1>
  );
}

export default Heading;
