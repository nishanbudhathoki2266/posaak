import React from "react";

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="bg-blue-800 text-white w-64 min-h-screen p-4">
        {/* Sidebar content */}
        <nav>
          <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-blue-300">
                Dashboard
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-blue-300">
                Orders
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-blue-300">
                Products
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-4">
        {/* Page Title */}
        <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>

        {/* Content Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          {/* Add your dashboard content here */}
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
