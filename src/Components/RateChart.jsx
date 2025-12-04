// src/components/RateChart.jsx
import React from "react";

export default function RateChart() {
  const rates = [
    {
      type: "1 BHK Home",
      values: [
        "₹ 6,500 – 10,000",
        "₹ 10,000 – 15,000",
        "₹ 18,000 – 24,000",
        "₹ 24,000 – 30,000",
        "₹ 30,000 – 38,000",
      ],
    },
    {
      type: "2 BHK Home",
      values: [
        "₹ 10,000 – 14,000",
        "₹ 18,000 – 22,000",
        "₹ 25,000 – 32,000",
        "₹ 32,000 – 42,000",
        "₹ 42,000 – 52,000",
      ],
    },
    {
      type: "3 BHK Home",
      values: [
        "₹ 14,000 – 18,000",
        "₹ 24,000 – 30,000",
        "₹ 35,000 – 45,000",
        "₹ 45,000 – 55,000",
        "₹ 55,000 – 70,000",
      ],
    },
    {
      type: "4 BHK / Villa",
      values: [
        "₹ 22,000 – 28,000",
        "₹ 32,000 – 40,000",
        "₹ 50,000 – 60,000",
        "₹ 60,000 – 70,000",
        "₹ 75,000 – 95,000",
      ],
    },
    {
      type: "Car Transportation",
      values: [
        "₹ 8,000 – 11,000",
        "₹ 12,000 – 15,000",
        "₹ 16,000 – 20,000",
        "₹ 20,000 – 25,000",
        "-",
      ],
    },
    {
      type: "Bike Transportation",
      values: [
        "₹ 3,000 – 6,000",
        "₹ 6,000 – 8,000",
        "₹ 8,000 – 12,000",
        "₹ 12,000 – 15,000",
        "-",
      ],
    },
  ];

  const headers = [
    "Shifting Type",
    "Up to 50 KM",
    "Up to 500 KM",
    "Up to 1000 KM",
    "Up to 1500 KM",
    "Within 2500 KM",
  ];

  return (
    <section className="py-12 px-4 sm:px-8 lg:px-16 bg-gradient-to-br from-white to-[#F7F8F9]">
      <div className="max-w-6xl mx-auto">
        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-[#0B0B0C]">
          Standard Rates & Charges –{" "}
          <span className="text-[#0A66A3]">Angel Packers & Movers</span>
        </h2>

        {/* TABLE */}
        <div className="overflow-x-auto shadow-xl rounded-2xl border border-[#BFC4C8]">
          <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden">
            <thead>
              <tr className="bg-gradient-to-r from-[#0A66A3] to-[#4FA9E6] text-white text-sm sm:text-base">
                {headers.map((head, idx) => (
                  <th
                    key={idx}
                    className="px-4 sm:px-6 py-3 text-center font-semibold border-r border-white/20 last:border-none"
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {rates.map((row, idx) => (
                <tr
                  key={idx}
                  className="text-center text-[#0B0B0C] text-sm sm:text-base hover:bg-[#F1F5F8] transition"
                >
                  <td className="px-4 sm:px-6 py-3 font-bold bg-[#F9FAFB] border-r border-[#BFC4C8]">
                    {row.type}
                  </td>
                  {row.values.map((val, i) => (
                    <td
                      key={i}
                      className="px-4 sm:px-6 py-3 border-r border-[#E3E5E7] last:border-none"
                    >
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* NOTE */}
        <p className="text-center text-gray-600 text-sm mt-6">
          *Note: Prices are approximate and may vary depending on distance,
          volume of goods, manpower, and additional services.
        </p>
      </div>
    </section>
  );
}
