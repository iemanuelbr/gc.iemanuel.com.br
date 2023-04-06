import React from "react";
import { Copyright } from "../../contents/copyright";
import { PoweredBy } from "../../contents/poweredby";
import { Divisor } from "../../contents/div";

export function Footer() {
  return (
    <>
      <Divisor />
      <Copyright />
      <PoweredBy />
    </>
  );
}
