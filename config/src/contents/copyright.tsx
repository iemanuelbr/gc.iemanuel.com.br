import { GitBranch } from "@phosphor-icons/react";
import React from "react";

export function Copyright() {
  return (
    <div className="_sub">
      <p>© 2023 IME - Deus Conosco!</p>
      <span>
        <GitBranch />
        B1.0.1
      </span>
    </div>
  );
}
