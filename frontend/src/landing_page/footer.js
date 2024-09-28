import React from 'react';

function Footer() {
    return (
        <div className=' bg-gray-200 p-8'>
            <div className='max mx-auto'>
                <div className='flex flex-col md:flex-row'>
                    <div className='link-infoZ flex-1 mb-5'>
                        <img 
                            src='https://zerodha.com/static/images/logo.svg' 
                            class="w-36"
                            alt='logo'
                        /> 
                        <p className='footer-about mt-10'>&copy; 2010 - 2024, Zerodha Broking Ltd.<br />All rights reserved.</p>
                    </div>
                    <div className='link-info flex-1'>
                        <h5 className='mt-4'>Company</h5>
                        <a href='#' className='footer-about text-gray-600 hover:underline'>About</a><br />
                        <a href='#' className='footer-about text-gray-600 hover:underline'>Product</a><br />
                        <a href='#' className='footer-about text-gray-600 hover:underline'>Pricing</a><br />
                        <a href='#' className='footer-about text-gray-600 hover:underline'>Referral Program</a><br />
                        <a href='#' className='footer-about text-gray-600 hover:underline'>Careers</a><br />
                        <a href='#' className='footer-about text-gray-600 hover:underline'>Zerodha.tech</a><br />
                        <a href='#' className='footer-about text-gray-600 hover:underline'>Press & media</a><br />
                        <a href='#' className='footer-about text-gray-600 hover:underline'>Zerodha Cares (CSR)</a>
                    </div>
                    <div className='link-info flex-1'>
                        <h5 className='mt-4'>Support</h5>
                        <a href='#' className='footer-about text-gray-600 hover:underline'>Contact Us</a><br />
                        <a href='#' className='footer-about text-gray-600 hover:underline'>Support portal</a><br />
                        <a href='#' className='footer-about text-gray-600 hover:underline'>Z-connect blog</a><br />
                        <a href='#' className='footer-about text-gray-600 hover:underline'>List of charges</a><br />
                        <a href='#' className='footer-about text-gray-600 hover:underline'>Download & resources</a><br />
                        <a href='#' className='footer-about text-gray-600 hover:underline'>Market overview</a><br />
                        <a href='#' className='footer-about text-gray-600 hover:underline'>How to file a complaint?</a><br />
                    </div>
                    <div className='link-info flex-1'>
                        <h5 className='mt-4'>Account</h5>
                        <a href='#' className='footer-about text-gray-600 hover:underline'>Open an account</a><br />
                        <a href='#' className='footer-about text-gray-600 hover:underline'>Fund transfer</a>
                    </div>
                </div>
                <div className='mt-5'>
                    <p className='footer-descri text-gray-600'>
                        Zerodha Broking Ltd.: Member of NSE, BSE & MCX  SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
                        SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related
                        to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
                    </p>
                    <p className='footer-about footer-descri text-gray-600'>
                        Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
                    </p>
                    <p className='footer-about footer-descri text-gray-600'>
                        Investments in securities market are subject to market risks; read all the related documents carefully before investing.
                    </p>
                    <p className='footer-about footer-descri text-gray-600'>
                        <u>Attention investors:</u> 1. Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020.
                        <br /> 2. Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge.
                        <br />3. Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
                    </p>
                    <p className='footer-about footer-descri text-gray-600'>
                        "Prevent unauthorized transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one-time exercise while dealing in securities markets
                        - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to
                        authorize your bank to make payment in case of allotment. In case of non-allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
