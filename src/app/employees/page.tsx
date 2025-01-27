"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Employee } from "@/types/employee";
import Navigation from "@/components/Navigation";

const Employees: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await fetch("http://localhost:5000/api/employees");
      const data = await response.json();
      setEmployees(data);
      setLoading(false);
    };

    fetchEmployees();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <Navigation />
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4">Employee List</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {employees.map((employee) => (
            <div
              key={employee.id}
              className="bg-white shadow-md rounded-lg p-4"
            >
              <h2 className="text-xl font-bold">{employee.fullName}</h2>
              <p className="text-gray-700">{employee.email}</p>
              <p className="text-gray-500">{employee.hourlyRate}</p>
              <h3 className="text-lg font-semibold mt-2">Skills:</h3>
              <ul className="list-disc list-inside text-gray-600">
                {employee.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
              <Link
                href={`/employees/${employee.id}`}
                className="text-blue-500 hover:underline mt-2 block"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Employees;
