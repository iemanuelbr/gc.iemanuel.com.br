import React from "react";

export function PoweredBy() {
  return (
    <div className="_powered">
      <span>
        Powered by{" "}
        <a
          className="_poweredby"
          title="Cats`s Flow"
          href="https://catsflow.com/?poweredby"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img loading="lazy" src="/config/assets/catsflow/logo.svg" alt="Logo da Cat's Flow" />
          Cat's Flow
        </a>
      </span>
    </div>
  );
}
