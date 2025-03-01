import React from 'react';

function SignUp() {
  return (
    <div className="container mx-auto mt-20 px-4">
      {/* Signup Section */}
      <div className="flex flex-wrap items-center p-3">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 p-5 flex justify-center">
          <img
            className="max-w-full h-auto"
            src="https://signup.zerodha.com/img/landing.46a77378.png"
            alt="Sign Up"
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-5 text-center md:text-left">
          <h1 className="text-gray-700 font-serif text-3xl font-bold mb-6">
            Sign Up Now
          </h1>
          <h6 className="mb-4 font-bold text-gray-700 text-lg">
            Or track your existing application
          </h6>

          {/* Phone Input */}
          <div className="flex items-center border-b-2 border-blue-300 py-2 mb-3">
            <span className="text-2xl text-blue-700">&#9990;</span>
            <input
              className="ml-2 p-2 w-full outline-none text-lg"
              type="tel"
              name="phone"
              pattern="[0-9]{10}"
              placeholder="Enter Mobile Number"
              required
            />
          </div>
          <span className="font-bold text-gray-500 block">
            You will receive an OTP on your number
          </span>

          {/* Continue Button */}
          <button className="bg-blue-500 text-white font-bold text-lg font-serif py-2 px-6 rounded mt-5 hover:bg-blue-600 transition duration-300">
            Continue
          </button>

          {/* NRI Account Link */}
          <div className="mt-4">
            <a href="#" className="text-blue-500 hover:underline font-bold font-serif">
              Want to open an NRI account?
            </a>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mb-10 md:mt-10 text-center px-4">
        <p className="text-gray-700 font-serif text-sm mb-3">
          I authorize Zerodha to contact me even if my number is registered on DND. I authorize Zerodha to fetch my KYC information from the C-KYC registry with my PAN.
          <br />
          Please visit this article to know more.
        </p>
        <p className="text-gray-700 font-serif text-sm">
          If you are looking to open a HUF, Corporate, Partnership, or NRI account, you have to use the offline forms. For help, click here.
        </p>
      </div>
    </div>
  );
}

export default SignUp;

