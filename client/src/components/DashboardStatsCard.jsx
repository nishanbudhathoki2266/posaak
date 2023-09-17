import React from "react";

function DashboardStatsCard({ icon, title, text }) {
  return (
    <div className="w-full p-4 bg-white shadow-lg rounded-lg flex items-center justify-start gap-6">
      <div className="bg-amber-100 p-4 rounded-full flex justify-center items-center">
        {icon}
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="text-sm tracking-tight uppercase font-semibold text-gray-700">
          {title}
        </h3>
        <p className="text-2xl font-semibold">{text}</p>
      </div>
    </div>
  );
}

export default DashboardStatsCard;
