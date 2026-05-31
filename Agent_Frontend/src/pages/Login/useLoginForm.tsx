import React, { useState } from "react";
import { type NavigateFunction, useNavigate } from "react-router-dom";

export function useLoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate: NavigateFunction = useNavigate();

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function signIn(): void {
    if (!email || !password) {
      return;
    }
    navigate("/dashboard");
  }

  return {
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
    signIn,
  };
}
