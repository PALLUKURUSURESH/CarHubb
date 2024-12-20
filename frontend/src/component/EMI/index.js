import React, { useState, useEffect } from 'react';
import { Calculator } from 'lucide-react';
import './index.css'

export default function EmiCalculator() {
  const [amount, setAmount] = useState(1000000);
  const [interest, setInterest] = useState(8.5);
  const [tenure, setTenure] = useState(36);
  const [emi, setEmi] = useState(0);

  useEffect(() => {
    const p = amount;
    const r = interest / 12 / 100;
    const n = tenure;
    const emi = p * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    setEmi(Math.round(emi));
  }, [amount, interest, tenure]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center mb-8">
          <Calculator className="w-8 h-8 text-blue-600 mr-3" />
          <h2 className="text-3xl font-bold text-gray-900">EMI Calculator</h2>
        </div>

        <div className="space-y-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Loan Amount (₹)
            </label>
            <input
              type="range"
              min="100000"
              max="10000000"
              step="100000"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="mt-2 text-lg font-semibold text-gray-900">
              ₹{amount.toLocaleString()}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Interest Rate (%)
            </label>
            <input
              type="range"
              min="5"
              max="20"
              step="0.5"
              value={interest}
              onChange={(e) => setInterest(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="mt-2 text-lg font-semibold text-gray-900">
              {interest}%
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Loan Tenure (months)
            </label>
            <input
              type="range"
              min="12"
              max="84"
              step="12"
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="mt-2 text-lg font-semibold text-gray-900">
              {tenure} months
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-xl">
            <div className="text-center">
              <div className="text-sm font-medium text-gray-600 mb-2">
                Your Monthly EMI
              </div>
              <div className="text-4xl font-bold text-blue-600">
                ₹{emi.toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}