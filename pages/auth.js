import AuthButton from "../components/auth-buttons/AuthButton.component";

const Signin = () => {
  return (
    <div className="bg-green-100 min-h-screen flex flex-col items-center justify-center">
      <div className="text-center bg-white md:w-1/3 w-4/5 rounded shadow-lg">
        <AuthButton />
      </div>
    </div>
  );
};

export default Signin;
