import React, { useState } from "react";
import Lottie from "lottie-react";
import loginLottie from "../../assets/lottie/login.json";
import { useAuth } from "../../context/AuthProvider";
import { Input, Button, Typography, Card } from "@material-tailwind/react";
import Swal from "sweetalert2";



function Login() {
  const [errorMessage, setErrorMessage] = useState("");
  const { signInWithEmailAndPassword,error} = useAuth();
  const {signInWithGoogle,googleError} = useAuth();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const email = form.email.value;
  //   const password = form.password.value;
  
  //   setErrorMessage(""); // Clear error message before submission
  
  //   //! Logging in with react firebase hook
  //   const [userCredential, error] = await signInWithEmailAndPassword(email, password);
  
  //   if (error) {
  //     // Show error message when login fails
  //     console.error("Error logging in:", error);
  //     Swal.fire({
  //       position: "top-end",
  //       icon: "error",
  //       title: "Login Failed",
  //       text: error.message,
  //       showConfirmButton: true,
  //     });
  //     return; // Exit early
  //   }
  
  //   // Success message when login succeeds
  //   Swal.fire({
  //     position: "top-end",
  //     icon: "success",
  //     title: "Login Successful",
  //     showConfirmButton: false,
  //     timer: 1500,
  //   });
  
  //   // Clear the form after successful login
  //   form.reset();
  // };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
  
    setErrorMessage(""); // Clear error message before submission
  
    //! Logging in with react firebase hook
    const result = await signInWithEmailAndPassword(email, password);
  
    if (!result) {
      // Show error message when login fails
      console.error("Error logging in:", error);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Login Failed",
        showConfirmButton: true,
      });
      return; // Exit early
    }
  
    // Success message when login succeeds
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Login Successful",
      showConfirmButton: false,
      timer: 1500,
    });
  
    // Clear the form after successful login
    form.reset();
  };

  const handleGoogle  = async()=>{

    try {
      const result = await signInWithGoogle();
      if(result){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      
    } catch (error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Google Login Failed",
        text: googleError?.message || "An error occurred",
        showConfirmButton: true,
      });
      
    }
    
  }
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-gray-50 rounded-2xl">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Animation Section */}
          <div className="w-full lg:w-1/2">
            <Lottie animationData={loginLottie} />
          </div>
          {/* Login Card Section */}
          <Card className="w-full max-w-md p-6 shadow-lg">
            <Typography variant="h4" color="blue-gray" className="text-center mb-6">
              Login Now!
            </Typography>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="form-control">
                <label htmlFor="email" className="block mb-1 font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  label="Email"
                  size="lg"
                  color="blue"
                  required
                />
              </div>
              <div className="form-control">
                <label htmlFor="password" className="block mb-1 font-medium">
                  Password
                </label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  label="Password"
                  size="lg"
                  color="blue"
                  required
                />
                {errorMessage && (
                  <Typography variant="small" color="red" className="mt-2">
                    {errorMessage}
                  </Typography>
                )}
              </div>
              <div className="flex justify-between items-center">
                <a href="#" className="text-sm text-blue-500 hover:underline">
                  Forgot password?
                </a>
              </div>
              <Button type="submit" color="blue" fullWidth className="mt-4">
                Login
              </Button>
              <Button onClick={handleGoogle} color="red" fullWidth className="mt-4 flex justify-center items-center gap-2">
                Login With Google 
              </Button>
            </form>
          </Card>
          
        </div>
      </div>
    </div>
  );
}

export default Login;
