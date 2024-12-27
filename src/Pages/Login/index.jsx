import { useEffect, useState } from "react";
import Register from "./Register";
import LoginForm from "./Login";
import Terms from "../../Components/Modals/Terms";

const Login = () => {
  const [active, setActive] = useState("login");

  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      <Terms />
      <div className="flex items-center justify-center">
        <div className="flex bg-[#1f1f1f] p-1 rounded-full w-[300px]">
          <button
            onClick={() => setActive("login")}
            className={`flex-1 text-center py-2 rounded-full font-medium text-sm transition-all ${
              active === "login" ? "bg-white text-black" : "text-white"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setActive("register")}
            className={`flex-1 text-center py-2 rounded-full font-medium text-sm transition-all ${
              active === "register" ? "bg-white text-black" : "text-white"
            }`}
          >
            Register
          </button>
        </div>
        {/* Login / Register Box */}
      </div>
      <div className="flex items-center justify-center">
        {active === "login" ? (
          <LoginForm isLogin={active} />
        ) : (
          <Register isLogin={active} />
        )}
      </div>
    </section>
  );
};

export default Login;
