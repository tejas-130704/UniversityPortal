import React from "react";

const programs = [
  { id: 1, name: "Civil Engineering", intake: 60, ciwgc: 3, fn: 6 },
  { id: 2, name: "Computer Engineering", intake: 60, ciwgc: 3, fn: 6 },
  { id: 3, name: "Electrical Engineering", intake: 60, ciwgc: 3, fn: 6 },
  { id: 4, name: "Electronics Engineering", intake: 60, ciwgc: 3, fn: 6 },
  { id: 5, name: "Electronics & Telecommunication Engineering", intake: 60, ciwgc: 3, fn: 6 },
  { id: 6, name: "Information Technology", intake: 60, ciwgc: 3, fn: 6 },
  { id: 7, name: "Mechanical Engineering", intake: 60, ciwgc: 3, fn: 6 },
  { id: 8, name: "Production Engineering (Sandwich)", intake: 60, ciwgc: 3, fn: 6 },
  { id: 9, name: "Textile Technology", intake: 60, ciwgc: 3, fn: 6 },
];

const IntakeTable = () => {
  return (
    <div className="p-6 w-full  mx-auto font-sans">
      <h2 className="text-xl md:text-2xl font-semibold text-center mb-12 ">
        Undergraduate Program Intake for First-Year B.Tech. at University Pune for the Academic Year 2025-2026
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border-x-0 border-y  bg-white">
          <thead className="bg-gray-100 text-sm  ">
            <tr>
              <th className="border-x-0 border-y border-gray-200 px-4 py-2 text-left">Sr. No.</th>
              <th className="border-x-0 border-y border-gray-200 px-4 py-2 text-left">Name of the Program</th>
              <th className="border-x-0 border-y border-gray-200 px-4 py-2 text-left">Sanctioned Intake</th>
              <th className="border-x-0 border-y border-gray-200 px-4 py-2 text-left">Sanctioned Intake for CIWGC</th>
              <th className="border-x-0 border-y border-gray-200 px-4 py-2 text-left">Sanctioned Intake for FN/PIO/OCI</th>
              <th className="border-x-0 border-y border-gray-200 px-4 py-2 text-left">Information Brochure</th>
            </tr>
          </thead>
          <tbody>
            {programs.map((p) => (
              <tr key={p.id} className="hover:bg-gray-50  text-sm">
                <td className="border-x-0 border-y border-gray-200 px-4 py-2">{p.id}</td>
                <td className="border-x-0 border-y border-gray-200 px-4 py-2">{p.name}</td>
                <td className="border-x-0 border-y border-gray-200 px-4 py-2">{p.intake}</td>
                <td className="border-x-0 border-y border-gray-200 px-4 py-2">{p.ciwgc}</td>
                <td className="border-x-0 border-y border-gray-200 px-4 py-2">{p.fn}</td>
                <td className="border-x-0 border-y border-gray-200 px-4 py-2 hover:text-red-500  cursor-pointer">
                  Click Here
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IntakeTable;
