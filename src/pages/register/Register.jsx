import React, { useState } from "react";
import { Card, Input, Button, Typography, Alert } from "@material-tailwind/react";
import Lottie from "lottie-react";
import registerLottie from "../../assets/lottie/register.json";
import { useAuth } from "../../context/AuthProvider";
import Swal from "sweetalert2";

function Register() {
  const [errorMessage, setErrorMessage] = useState("");
  const { createUserWithEmailPassword, signOut } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;

    // Password validation
    if (!passwordRegex.test(password)) {
      setErrorMessage(
        "Password must be at least 6 characters long, include at least one uppercase letter, and one number."
      );
      return;
    }
    setErrorMessage("");

    //! Registering with react firebase hook
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
    <div className="flex items-center justify-center min-h-screen bg-blue-gray-50 p-4 rounded-2xl mt-1">
      <div className="flex flex-col lg:flex-row w-full max-w-5xl items-center gap-10">
        {/* Lottie Animation Section */}
        <div className="w-full lg:w-1/2">
          <Lottie animationData={registerLottie} />
        </div>

        {/* Form Section */}
        <Card shadow={true} className="p-8 w-full max-w-sm">
          <Typography variant="h3" color="blue-gray" className="text-center mb-6">
            Register Now!
          </Typography>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div>
              <Typography variant="small" color="blue-gray" className="mb-1">
                Email
              </Typography>
              <Input
                name="email"
                type="email"
                placeholder="Enter your email"
                color="blue"
                size="lg"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <Typography variant="small" color="blue-gray" className="mb-1">
                Password
              </Typography>
              <Input
                name="password"
                type="password"
                placeholder="Enter your password"
                color="blue"
                size="lg"
                required
              />
              {errorMessage && (
                <Alert color="red" className="mt-2">
                  {errorMessage}
                </Alert>
              )}
            </div>

            {/* Forgot Password Link */}
            <div className="text-right">
              <Typography
                as="a"
                href="#"
                variant="small"
                color="blue"
                className="hover:underline"
              >
                Forgot password?
              </Typography>
            </div>

            {/* Submit Button */}
            <Button type="submit" fullWidth color="blue" size="lg" ripple={true}>
              Register
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default Register;
