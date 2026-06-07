import { useState } from "react";
import { getGreeting } from "../utils/getGreeting.tsx";


export function useDashboardGreeting() {
    const {message, icon} = getGreeting();

    const [greetingMessage] = useState(message);
    const [greetingIcon] = useState(icon);

    return {greetingMessage, greetingIcon};
}