import AuthButton from "../components/auth-buttons/AuthButton.component";

const Signin = () => {
  return (
    <div className="bg-green-100 min-h-screen flex flex-col items-center justify-center">
      <div className="text-center bg-white w-1/3 rounded shadow-lg">
        <AuthButton />
      </div>
    </div>
  );
};

export default Signin;
