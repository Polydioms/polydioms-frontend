import React from "react";

export default function TiteDescription({
  title = "Lorem ipsum dolor",
  description = "",
}) {
  return (
    <div>
      <h1 className="mb-5 text-5xl font-bold  font-[spectral]  transition-all">
        {title || "Lorem ipsum dolor"}
      </h1>
      <span className="mb-5 text-m font-bold  font-[spectral]  transition-all">
        {description}
      </span>
    </div>
  );
}
