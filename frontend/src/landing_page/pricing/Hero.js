import React from "react";

function Hero() {
  return (
    <div className="container mx-auto text-center mt-10">
      <h3 className="text-3xl md:text-5xl font-bold mb-3 text-blue-600">
        Pricing
      </h3>
      <p className="mt-6 text-gray-600 font-bold text-xl ">
        Free equity investments and flat ₹20 intraday and F&O trades
      </p>
      <section className="border-r-8 border-l-8 border-blue-300 mt-20 mb-8">
        <div className="flex flex-wrap justify-center gap-8 p-5">
          {/* Free Equity Delivery */}
          <div className="w-full sm:w-1/2 lg:w-1/3 text-center">
            <img
              src="https://zerodha.com/static/images/pricing-eq.svg"
              alt="Free equity delivery"
              className="w-36 mx-auto cursor-pointer"
            />
            <h4 className="text-2xl font-bold mb-4 mt-2">
              Free equity delivery
            </h4>
            <p className="text-gray-600 font-bold mt-1">
              All equity delivery investments (NSE, BSE) are absolutely free — ₹
              0 brokerage.
            </p>
          </div>

          {/* Flat ₹20 on Trades */}
          <div className="w-full sm:w-1/2 lg:w-1/3 text-center">
            <img
              src="https://zerodha.com/static/images/other-trades.svg"
              alt="Flat ₹20 trades"
              className="w-36 mx-auto cursor-pointer"
            />
            <h4 className="text-2xl font-bold mb-4 mt-2">Flat ₹20 on trades</h4>
            <p className="text-gray-600 font-bold mt-1">
              Flat ₹20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>

          {/* Free Direct MF */}
          <div className="w-full sm:w-1/2 lg:w-1/3 text-center">
            <img
              src="https://zerodha.com/static/images/pricing-eq.svg"
              alt="Free direct MF"
              className="w-36 mx-auto cursor-pointer"
            />
            <h4 className="text-2xl font-bold mb-4 mt-2">Free direct MF</h4>
            <p className="text-gray-600 font-bold mt-1">
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
