import React from "react";
import { MdNightsStay, MdWbSunny, MdWbTwilight } from "react-icons/md";

export function getGreeting(): { message: string; icon: React.ReactNode } {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) {
    return {
      message: "Good Morning",
      icon: <MdWbSunny className="li-greeting-icon li-greeting-icon--morning" />,
    };
  } else if (hour >= 12 && hour < 18) {
    return {
      message: "Good Afternoon",
      icon: <MdWbTwilight className="li-greeting-icon li-greeting-icon--afternoon" />,
    };
  } else {
    return {
      message: "Good Evening",
      icon: <MdNightsStay className="li-greeting-icon li-greeting-icon--evening" />,
    };
  }
}
