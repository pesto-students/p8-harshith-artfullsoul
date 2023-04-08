import "../styles.css";
import { useState } from "react";

export default function Navbar() {
  return (
      <div className="nav">
        <div className="nav-cont flx-dir-rw wid-70">
          <p className="flx-1 mrg-0 fnt-size-2">Shortly</p>
          <div className="flx-dir-rw flx-1">
            <p className="mrg-0 clr-blu nav-link fnt-size-3">Features</p>
            <p className="mrg-0 clr-blu nav-link fnt-size-3">Pricing</p>
            <p className="mrg-0 clr-blu nav-link fnt-size-3">Recources</p>
          </div>
          <div className="flx-dir-rw flx-1">
            <p
              className="mrg-0 clr-blu nav-link fnt-size-3"
              style={{ marginLeft: "auto" }}
            >
              Login
            </p>
            <p className="mrg-0 clr-blu nav-link fnt-size-3">Sign Up</p>
          </div>
        </div>
      </div>
  );
}
