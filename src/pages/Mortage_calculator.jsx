import { useState } from "react";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export default function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(300000);
  const [downPayment, setDownPayment] = useState(60000);
  const [loanTerm, setLoanTerm] = useState(30);
  const [interestRate, setInterestRate] = useState(3.5);
  const [propertyTax, setPropertyTax] = useState(265);

  const loanAmount = homePrice - downPayment;
  const monthlyInterestRate = interestRate / 100 / 12;
  const numberOfPayments = loanTerm * 12;
  const monthlyPayment =
    (loanAmount * monthlyInterestRate) /
    (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
  const totalMonthlyPayment = monthlyPayment + propertyTax;

  return (
    <>
      <Navbar />
      <div className="bg-[#004733] p-5  min-h-screen  flex flex-col items-center justify-center text-white">
        <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10 text-black">
          <h2 className="text-xl font-semibold text-gray-700 text-center mb-4">Mortgage Calculator</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">Home Price</label>
              <input
                type="number"
                value={homePrice}
                onChange={(e) => setHomePrice(Number(e.target.value))}
                className="w-full p-2 border rounded mt-1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Down Payment</label>
              <input
                type="number"
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
                className="w-full p-2 border rounded mt-1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Loan Term (Years)</label>
              <input
                type="number"
                value={loanTerm}
                onChange={(e) => setLoanTerm(Number(e.target.value))}
                className="w-full p-2 border rounded mt-1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Interest Rate (%)</label>
              <input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                step="0.1"
                className="w-full p-2 border rounded mt-1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Property Tax (Monthly)</label>
              <input
                type="number"
                value={propertyTax}
                onChange={(e) => setPropertyTax(Number(e.target.value))}
                className="w-full p-2 border rounded mt-1"
              />
            </div>
            <div className="mt-4 p-4 bg-gray-100 rounded">
              <h3 className="text-lg font-semibold text-gray-700">Estimated Monthly Payment</h3>
              <p className="text-xl font-bold text-blue-600">${totalMonthlyPayment.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#004733]  text-white">
      <Footer />
      </div>
    </>
  );
}
