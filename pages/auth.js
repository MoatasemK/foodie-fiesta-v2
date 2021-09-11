import AuthButton from "../components/auth-buttons/AuthButton.component";

const Signin = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-gray-100 text-center bg-white w-1/3 rounded shadow-md">
        <AuthButton />
      </div>
    </div>
  );
};

export default Signin;
