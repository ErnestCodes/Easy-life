import React from "react";

const stats = [
  { name: "USD Account", stat: "$11,897" },
  { name: "GBP Account", stat: "£58.16" },
  { name: "EUR Account", stat: "€24.57" },
];

export default function Stats({ usdAcc }) {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-medium leading-6 text-gray-900">Balance</h3>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {usdAcc ? (
          <div className="overflow-hidden rounded-lg bg-[#013f28] px-4 py-5 shadow-md sm:p-6">
            <dt className="truncate text-sm font-medium text-gray-400">
              SGD Account
            </dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-white">
              ${usdAcc}
            </dd>
          </div>
        ) : (
          <div className="overflow-hidden rounded-lg bg-[#013f28] px-4 py-5 shadow-md sm:p-6">
            <dt className="truncate text-sm font-medium text-gray-400">
              SGD Account
            </dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-white">
              $0.00
            </dd>
          </div>
        )}

        <div className="overflow-hidden rounded-lg bg-[#013f28] px-4 py-5 shadow-md sm:p-6">
          <dt className="truncate text-sm font-medium text-gray-400">
            GBP Account
          </dt>
          <dd className="mt-1 text-3xl font-semibold tracking-tight text-white">
            £0.00
          </dd>
        </div>

        <div className="overflow-hidden rounded-lg bg-[#013f28] px-4 py-5 shadow-md sm:p-6">
          <dt className="truncate text-sm font-medium text-gray-400">
            EUR Account
          </dt>
          <dd className="mt-1 text-3xl font-semibold tracking-tight text-white">
            €0.00
          </dd>
        </div>
      </dl>
    </div>
  );
}