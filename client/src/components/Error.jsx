function Error(error) {
  return (
    <div className="h-[50vh] flex items-center justify-center">
      <div className="flex-col space-y-4 text-left px-6">
        <div className="text-7xl font-bold text-[#67595E]">404</div>
        <div className="text-stone-500 font-medium">
          Error ❗, {error.error} 😭
        </div>
      </div>
    </div>
  );
}

export default Error;
