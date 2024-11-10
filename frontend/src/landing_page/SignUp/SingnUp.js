import React from 'react';

function SignUp() {
    return (
        <div className='container mx-auto mt-20'>
            <div className='flex flex-wrap p-3 mt-5'>
                <div className='w-full md:w-1/2 p-5'>
                    <img className='mt-5' src='https://signup.zerodha.com/img/landing.46a77378.png' alt='Sign Up' />
                </div>
                <div className='w-full md:w-1/2 p-5'>
                    <h1 className='text-gray-600 text-2xl text-center mb-5 mt-3 font-semibold'>Sign Up Now</h1>
                    <h6 className='mb-3'>Or track your existing application</h6>
                    <div className='flex items-center mb-3'>
                        <label className='text-gray-600'>&#9990;</label>
                        <input
                            className='ml-2 border border-gray-300 p-2 rounded w-full'
                            type="tel"
                            name="phone"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            placeholder="Enter Number"
                            required
                        />
                    </div>
                    <span className="" id='notify'>You will receive an OTP on your number</span>
                    <br />
                    <button className='bg-blue-500 text-white font-semibold py-2 px-4 rounded mt-4'>
                        Continue
                    </button>
                    <br />
                    <div className='mt-3'>
                        <a href='#' className='text-blue-500 hover:underline'>Want to open an NRI account?</a>
                    </div>
                </div>
            </div>
            <div className='mb-10 flex justify-center'>
  <div className='text-center'>
    <p className='text-gray-500 text-xs'>
      I authorize Zerodha to contact me even if my number is registered on DND. I authorize Zerodha to fetch my KYC information from the C-KYC registry with my PAN.<br />
      Please visit this article to know more.
    </p>
    <p className='text-gray-500 text-xs'>
      If you are looking to open a HUF, Corporate, Partnership, or NRI account, you have to use the offline forms. For help, click here.
    </p>
  </div>
</div>

        </div>
    );
}

export default SignUp;
