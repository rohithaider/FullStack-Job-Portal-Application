import Lottie from "lottie-react";
import React, { useState } from "react";
import registerLottie from "../../assets/lottie/register.json";
import { useAuth } from "../../context/AuthProvider";
import Swal from "sweetalert2";

function Register() {
  const [errorMessage, setErrorMessage] = useState("");
  const { createUserWithEmailPassword,signOut} = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;

    //password validation

    if (!passwordRegex.test(password)) {
      setErrorMessage(
        "Password must be at least 6 characters long, include at least one uppercase letter, and one number."
      );
      return;
    }
    setErrorMessage("");


    //!registering  with react firebase hook
    try {
      await createUserWithEmailPassword(email, password);

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "New Account Created",
        showConfirmButton: false,
        timer: 1500,
      });
      signOut();

      // Clear the form after successful submission
      form.reset();
    } catch (error) {
      console.error("Error creating user:", error);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Failed to create account",
        text: error.message,
        showConfirmButton: true,
      });
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen rounded-3xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left lg:w-5/12">
          <Lottie animationData={registerLottie}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl font-bold text-center mt-4">Register now!</h1>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              {errorMessage && (
                <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
              )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
