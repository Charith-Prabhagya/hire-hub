import Link from "next/link";

const Navigation = () => {
  return (
    <div className="bg-gray-800 text-white p-4">
      <div className="max-w-4xl mx-auto flex space-x-4 justify-center">
        <Link
          href="/"
          className="px-6 py-3 text-xl font-semibold rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Home
        </Link>
        <Link
          href="/contact-us"
          className="px-6 py-3 text-xl font-semibold rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Contact Us
        </Link>
        <Link
          href="/employees"
          className="px-6 py-3 text-xl font-semibold rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Employees
        </Link>
        <Link
          href="/test"
          className="px-6 py-3 text-xl font-semibold rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Test Component
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
