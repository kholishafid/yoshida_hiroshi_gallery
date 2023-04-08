"use client";

import { useEffect, useState } from "react";

export default function NotFound() {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((countdown) => countdown - 1);
    }, 1000);

    if (countdown === 0) {
      window.location.replace("/");
    }

    return () => clearInterval(timer);
  }, [countdown]);

  return (
    <div className="flex-1 grid place-items-center">
      <div>
        <h1 className="text-5xl font-semibold mb-2">404 Not Found</h1>
        <p>redirect in {countdown}</p>
      </div>
    </div>
  );
}
