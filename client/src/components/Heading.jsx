function Heading({ children, position = "" }) {
  return (
    <h1
      className={`sm:text-4xl ${
        position === "center" ? "text-center" : ""
      } text-3xl mb-4 font-bold text-gray-900`}
    >
      {children}
    </h1>
  );
}

export default Heading;
