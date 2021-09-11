const Signin = () => {
  return (
    <div className="px-3 py-4 h-1/2">
      <input
        type="text"
        className="bg-gray-200 text-gray-400 py-2 px-2 w-full rounded my-2 focus:outline-none"
        placeholder="Username"
      />

      <input
        type="password"
        className="bg-gray-200 text-gray-400 py-2 px-2 w-full rounded my-2 focus:outline-none"
        placeholder="Password"
      />

      <button className="bg-green-500 py-1 px-2 mt-3 rounded shadow-md text-white text-lg block w-full">
        Sign In
      </button>
    </div>
  );
};

export default Signin;
