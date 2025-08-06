import React from "react";

const availableDates = ["2025-08-10", "2025-08-12", "2025-08-15", "2025-08-21"];

const CarAvailabilityCalendar = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth(); // 0 = January
  const monthStart = new Date(year, month, 1);
  const monthEnd = new Date(year, month + 1, 0);
  const daysInMonth = monthEnd.getDate();
  const startDay = monthStart.getDay();

  const calendarDays = [];
  for (let i = 0; i < startDay - 1; i++) {
    calendarDays.push(null);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(new Date(year, month, day));
  }

  const formatDate = (date: Date): string => date.toISOString().split("T")[0]; // yyyy-mm-dd

  return (
    <div className="bg-neutral-950 text-white min-h-screen flex flex-col items-center justify-center p-6">
      <h2 className="text-3xl font-bold mb-6">
        Dostępność aut – {today.toLocaleString("pl-PL", { month: "long" })}{" "}
        {year}
      </h2>

      <div className="grid grid-cols-7 gap-2 w-full max-w-2xl text-center">
        {["Pn", "Wt", "Śr", "Cz", "Pt", "So", "Nd"].map((d, i) => (
          <div key={i} className="font-semibold text-gray-400">
            {d}
          </div>
        ))}

        {calendarDays.map((date, i) => (
          <div
            key={i}
            className={`h-16 flex items-center justify-center rounded-md border
            ${date ? "border-gray-700" : "border-transparent"}
            ${
              date && availableDates.includes(formatDate(date))
                ? "bg-green-600 text-white"
                : ""
            }
            `}
          >
            {date ? date.getDate() : ""}
          </div>
        ))}
      </div>

      <div className="mt-6 text-sm text-gray-400">
        <span className="inline-block w-4 h-4 bg-green-600 mr-2 rounded-sm" />
        Dostępne auta
      </div>
    </div>
  );
};

export default CarAvailabilityCalendar;
