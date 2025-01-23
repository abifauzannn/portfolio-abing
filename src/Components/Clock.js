import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Perbarui waktu setiap detik
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Bersihkan interval saat komponen unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div data-aos="fade-right">
      <p className="text-[20px] text-gray-300 poppins-regular">
        Local/<span className="font-bold text-white">
          {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })} {/* Format waktu tanpa AM/PM */}
        </span>
      </p>
    </div>
  );
}

export default Clock;
