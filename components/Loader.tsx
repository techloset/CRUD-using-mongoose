const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-8 border-b-8 border-blue-900"></div>{" "}
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Loader;
