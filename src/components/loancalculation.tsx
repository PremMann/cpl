"use client";

import { useState } from "react";

const products = [
  { name: "Personal Loan", min: 100, max: 5000 },
  { name: "Car Loan", min: 1000, max: 30000 },
  { name: "Home Loan", min: 5000, max: 100000 },
];

const currencies = ["USD", "EUR", "GBP"];

function getInterestRate(product: string) {
  switch (product) {
    case "Personal Loan":
      return 0.12;
    case "Car Loan":
      return 0.06;
    case "Home Loan":
      return 0.045;
    default:
      return 0.08;
  }
}

export default function LoanCalculator() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [currency, setCurrency] = useState(currencies[0]);
  const [amount, setAmount] = useState(products[0].min);
  const [months, setMonths] = useState(12);

  const handleProductChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const prod = products.find((p) => p.name === e.target.value)!;
    setSelectedProduct(prod);
    // Do not reset amount; allow free input independent of product limits
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    // Allow any non-negative number; no clamping to product min/max
    setAmount(isNaN(val) ? 0 : Math.max(0, val));
  };

  const handleMonthsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMonths(Number(e.target.value));
  };

  const monthlyRate = getInterestRate(selectedProduct.name) / 12;
  const monthlyPayment =
    monthlyRate > 0
      ? (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months))
      : amount / months;

  let remaining = amount;
  const repaymentTable = Array.from({ length: months }, (_, i) => {
    const month = i + 1;
    const interest = remaining * monthlyRate;
    let principal = monthlyPayment - interest;
    let payment = monthlyPayment;

    if (month === months || remaining - principal < 0.005) {
      principal = remaining;
      payment = principal + interest;
    }

    const nextRemaining = Math.max(remaining - principal, 0);

    const row = {
      month,
      payment,
      principal,
      interest,
      balance: nextRemaining,
    };

    remaining = nextRemaining;
    return row;
  });

  return (
    <div className="bg-white shadow-2xl rounded-2xl mx-auto p-10 flex flex-col md:flex-row gap-10 border border-gray-200">
      <div className="md:w-1/2 w-full flex flex-col gap-8 justify-center">
        <h2 className="text-3xl font-bold text-red-500 mb-2">Loan Calculator</h2>
        <p className="text-gray mb-6">
          Calculate your monthly payments and see a detailed repayment schedule. Choose your loan product, currency, amount, and term.
        </p>
        <div className="space-y-5">
          <div>
            <label className="block mb-2 font-semibold text-red-500">Product & Service</label>
            <select
              className="w-full border border-blue-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50 text-gray"
              value={selectedProduct.name}
              onChange={handleProductChange}
            >
              {products.map((p) => (
                <option key={p.name} value={p.name}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-2 font-semibold text-red-500">Currency</label>
            <select
              className="w-full border border-blue-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50 text-gray"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              {currencies.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-2 font-semibold text-red-500">Amount</label>
            <input
              type="number"
              className="w-full border border-blue-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50 text-gray"
              value={amount}
              onChange={handleAmountChange}
              min={0}
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold text-red-500">Term (months)</label>
            <select
              className="w-full border border-blue-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50 text-gray"
              value={months}
              onChange={handleMonthsChange}
            >
              {[...Array(36)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-8 bg-blue-50 rounded-xl p-5 flex flex-col items-center">
          <span className="text-red-500 text-lg">Estimated Monthly Payment</span>
          <span className="text-3xl font-bold text-red-500 mt-2">
            {monthlyPayment.toFixed(2)} {currency}
          </span>
        </div>
      </div>

      <div className="md:w-1/2 w-full">
        <h3 className="font-bold text-xl text-red-500 mb-4">Repayment Schedule</h3>
        <div className="overflow-x-auto rounded-lg border border-gray-100 bg-gray-50">
          <table className="min-w-full text-sm text-gray">
            <thead>
              <tr className="bg-blue-100 text-red-500">
                <th className="px-3 py-2 font-semibold">Month</th>
                <th className="px-3 py-2 font-semibold">Payment</th>
                <th className="px-3 py-2 font-semibold">Principal</th>
                <th className="px-3 py-2 font-semibold">Interest</th>
                <th className="px-3 py-2 font-semibold">Balance</th>
              </tr>
            </thead>
            <tbody>
              {repaymentTable.map((row) => (
                <tr key={row.month} className={row.month % 2 === 0 ? "bg-white" : "bg-red-50"}>
                  <td className="px-3 py-2 text-center">{row.month}</td>
                  <td className="px-3 py-2 text-center">
                    {row.payment.toFixed(2)} {currency}
                  </td>
                  <td className="px-3 py-2 text-center">
                    {row.principal.toFixed(2)} {currency}
                  </td>
                  <td className="px-3 py-2 text-center">
                    {row.interest.toFixed(2)} {currency}
                  </td>
                  <td className="px-3 py-2 text-center">
                    {row.balance.toFixed(2)} {currency}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
