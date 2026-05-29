import LoginForm from "../pages/Login/LoginForm.tsx";
import React from "react";


export default function LoginPage(): React.JSX.Element {
    return (
        <section className="li-section li-container li-max-w-600 ">
            <div className="li-grid-bg"></div>
            <div className="hero-glow-1"></div>
            <div className="hero-glow-2"></div>
            <LoginForm/>
        </section>
    )
}
