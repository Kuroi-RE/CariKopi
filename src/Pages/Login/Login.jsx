import React from "react";
import CardForm from "../../Components/Form/FormAuth";

const Login = ({ isLogin }) => {
  return (
    <div className="py-10">
      {/*<!-- Component: Horizontal card--> */}
      <div className="flex flex-col overflow-hidden bg-white rounded text-slate-500 sm:flex-row">
        {/*  <!-- Image --> */}
        <figure className="flex-1">
          <img
            src="/images/bg-hero.jpg"
            height={500}
            width={500}
            alt="card image"
            className="object-cover min-h-full aspect-auto"
          />
        </figure>
        {/*  <!-- Body--> */}
        <div className="flex flex-col justify-center flex-1 p-8">
          {/*  <!-- Form --> */}
          <CardForm isLogin={isLogin} />
        </div>
      </div>
      {/*<!-- End Horizontal card--> */}
    </div>
  );
};

export default Login;
