const Box = ({ value, description, highlighted }) => {
  return (
    <div
      className={`h-60 p-10 rounded-lg text-white text-center transition-colors duration-300 ${
        highlighted ? "bg-purple-700" : "bg-gray-800 hover:bg-purple-700"
      }`}
    >
      <div className="text-4xl font-bold">{value}</div>
      <div className="mt-2 text-lg opacity-80">{description}</div>
    </div>
  );
};

export default Box;
