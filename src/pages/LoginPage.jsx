import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { toast, ToastContainer } from "react-toastify";

const Register = () => {
  const { signinWithAndPass } = use(AuthContext);

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const location = useLocation()
  const navigate = useNavigate()

  const handleLogin = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    setError("");
    setSuccess(false);

    signinWithAndPass(email, password)
      .then((result) => {
        setSuccess(result.user);
        toast.success("Successfully logged in!");
        event.target.reset();
        navigate(`${location.state? location.state : "/"}`)
      })
      .catch((err) => {
        setError(err.message);
        toast.error(err.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col w-full">
        <div className="text-center lg:text-left mb-4">
          <h1 className="text-4xl font-bold">Login your account!</h1>
        </div>

        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <fieldset className="fieldset">

                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                  required
                />

                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                  required
                />

                <button type="submit" className="btn btn-neutral mt-4 w-full">
                  Login
                </button>

                <p className="text-center mt-3">
                  Already have an account?{" "}
                  <Link className="text-blue-500" to="/auth/register">
                    Register
                  </Link>
                </p>
              </fieldset>
              {success && (
                <p className="text-green-400 mt-3 text-center">
                  Login successful!
                </p>
              )}
              {error && <p className="text-red-400 mt-3 text-center">{error}</p>}
            </form>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
