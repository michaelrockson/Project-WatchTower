import React from "react";
import type { ErrorPayload } from "./models/UiModels.ts";

export default function ErrorScreen({
  statusCode,
  message,
}: ErrorPayload): React.JSX.Element {
  return (
    <section className="li-section li-text-center">
      <div className="li-container li-animate-fade-in">
        <h1 className="li-text-hero li-mb-lg">{statusCode}</h1>
        <p className="li-text-lg li-text-secondary li-mx-auto li-mb-xl">
          {message}
        </p>
      </div>
    </section>
  );
}
