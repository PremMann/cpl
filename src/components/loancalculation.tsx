"use client";

import { useState } from "react";

// Updated products based on provided HTML
const products = [
  {
    name: "Quick Loan",
    min: 100,
    max: 5000,
    min_riel: 400000,
    max_riel: 20000000,
  },
  {
    name: "Electronic Installment Loan",
    min: 100,
    max: 20000,
    min_riel: 0,
    max_riel: 0,
  },
  {
    name: "Motor Installment Loan",
    min: 100,
    max: 5000,
    min_riel: 0,
    max_riel: 0,
  },
  {
    name: "Car Loan",
    min: 5000,
    max: 50000,
    min_riel: 0,
    max_riel: 0,
  },
];

const currencies = ["KHR", "USD"];
const terms = [13, 24, 36];

function getInterestRate(product: string) {
  switch (product) {
    case "Quick Loan":
      return 0.12;
    case "Electronic Installment Loan":
      return 0.1;
    case "Motor Installment Loan":
      return 0.09;
    case "Car Loan":
      return 0.06;
    default:
      return 0.08;
  }
}

export default function LoanCalculator() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [currency, setCurrency] = useState(currencies[0]);
  const [amount, setAmount] = useState(products[0].min);
  const [months, setMonths] = useState(terms[0]);

  // Helper to get min/max for current currency and product
  const getMin = () =>
    currency === "KHR"
      ? selectedProduct.min_riel && selectedProduct.min_riel > 0
        ? selectedProduct.min_riel
        : selectedProduct.min
      : selectedProduct.min;

  const getMax = () =>
    currency === "KHR"
      ? selectedProduct.max_riel && selectedProduct.max_riel > 0
        ? selectedProduct.max_riel
        : selectedProduct.max
      : selectedProduct.max;

  const handleProductChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const prod = products.find((p) => p.name === e.target.value)!;
    setSelectedProduct(prod);
    setAmount((prev) => {
      const min = currency === "KHR"
        ? prod.min_riel && prod.min_riel > 0 ? prod.min_riel : prod.min
        : prod.min;
      const max = currency === "KHR"
        ? prod.max_riel && prod.max_riel > 0 ? prod.max_riel : prod.max
        : prod.max;
      if (prev < min) return min;
      if (prev > max) return max;
      return prev;
    });
  };

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCurrency = e.target.value;
    setCurrency(newCurrency);
    setAmount((prev) => {
      const min = newCurrency === "KHR"
        ? selectedProduct.min_riel && selectedProduct.min_riel > 0 ? selectedProduct.min_riel : selectedProduct.min
        : selectedProduct.min;
      const max = newCurrency === "KHR"
        ? selectedProduct.max_riel && selectedProduct.max_riel > 0 ? selectedProduct.max_riel : selectedProduct.max
        : selectedProduct.max;
      if (prev < min) return min;
      if (prev > max) return max;
      return prev;
    });
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    const min = getMin();
    const max = getMax();
    setAmount(isNaN(val) ? min : Math.max(min, Math.min(val, max)));
  };

  const handleMonthsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMonths(Number(e.target.value));
  };

  const monthlyRate = getInterestRate(selectedProduct.name) / 12;
  const monthlyPayment =
    monthlyRate > 0
      ? (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months))
      : amount / months;

  return (
    <div className="bg-white mx-auto p-6 md:p-10 flex flex-col gap-8  max-w-3xl w-full m-3">
      <h2 className="text-2xl md:text-3xl font-bold text-red-500 mb-2 text-center">Loan Calculator</h2>
      <div className="flex flex-col gap-8 w-full items-center content-center">
        <div className="w-full flex flex-col gap-6 max-w-96">
          <div className="bg-blue-50 rounded-xl p-5 flex flex-col items-center mb-4">
            <span className="text-red-500 text-lg">Estimated Monthly Payment</span>
            <span className="text-2xl md:text-3xl font-bold text-red-500 mt-2">
              {monthlyPayment.toFixed(2)} {currency}
            </span>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block mb-1 font-semibold text-red-500">Product & Service</label>
              <select
                className="w-full border border-blue-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50 text-gray-700"
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
              <label className="block mb-1 font-semibold text-red-500">Currency</label>
              <select
                className="w-full border border-blue-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50 text-gray-700"
                value={currency}
                onChange={handleCurrencyChange}
              >
                {currencies.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block mb-1 font-semibold text-red-500">Amount</label>
              <input
                type="number"
                className="w-full border border-blue-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50 text-gray-700"
                value={amount}
                onChange={handleAmountChange}
                min={getMin()}
                max={getMax()}
              />
              <div className="text-xs text-gray-500 mt-1">
                Min: {getMin()} {currency}, Max: {getMax()} {currency}
              </div>
            </div>
            <div>
              <label className="block mb-1 font-semibold text-red-500">Term (months)</label>
              <select
                className="w-full border border-blue-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50 text-gray-700"
                value={months}
                onChange={handleMonthsChange}
              >
                {terms.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        {/* Removed the table and repayment schedule */}
      </div>
    </div>
  );
}
