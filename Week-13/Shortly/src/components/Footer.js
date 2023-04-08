import "../styles.css";
import { useState } from "react";

export default function Footer() {
  return (
      <div className="footer bck-clr-black">
        <div className="footer-cont wid-70 flx-dir-rw">
          <div className="flx-1">
            <p className="mrg-0 clr-white fnt-size-2">Shortly</p>
          </div>

          <div className="" style={{ flex: 2, display: "flex" }}>
            <div className="flx-1 flx-dir-cl">
              <p className="mrg-0 footer-mid-links-head clr-white fnt-size-3 fnt-wt-bld">
                Features
              </p>
              <p className="mrg-0 footer-mid-links fnt-wt-200 clr-white fnt-size-3">
                Link Shortning
              </p>
              <p className="mrg-0 footer-mid-links fnt-wt-200 clr-white fnt-size-3">
                Branded Links
              </p>
              <p className="mrg-0 footer-mid-links fnt-wt-200 clr-white fnt-size-3">
                Analytics
              </p>
            </div>

            <div className="flx-1 flx-dir-cl">
              <p className="mrg-0 footer-mid-links-head clr-white fnt-size-3 fnt-wt-bld">
                Resources
              </p>
              <p className="mrg-0 footer-mid-links fnt-wt-200 clr-white fnt-size-3">
                Blog
              </p>
              <p className="mrg-0 footer-mid-links fnt-wt-200 clr-white fnt-size-3">
                Developer
              </p>
              <p className="mrg-0 footer-mid-links fnt-wt-200 clr-white fnt-size-3">
                Support
              </p>
            </div>

            <div className="flx-1 flx-dir-cl">
              <p className="mrg-0 footer-mid-links-head clr-white fnt-size-3 fnt-wt-bld">
                Company
              </p>
              <p className="mrg-0 footer-mid-links fnt-wt-200 clr-white fnt-size-3">
                About
              </p>
              <p className="mrg-0 footer-mid-links fnt-wt-200 clr-white fnt-size-3">
                Our Team
              </p>
              <p className="mrg-0 footer-mid-links fnt-wt-200 clr-white fnt-size-3">
                Careers
              </p>
              <p className="mrg-0 footer-mid-links fnt-wt-200 clr-white fnt-size-3">
                contact
              </p>
            </div>
          </div>

          <div className="flx-dir-rw flx-1">
            <p
              className="mrg-0 clr-white fnt-size-3 marg-vrt-2"
              style={{ marginLeft: "auto" }}
            >
              Login
            </p>
            <p className="mrg-0 clr-white fnt-size-3 v">SignUp</p>
          </div>
        </div>
      </div>
  );
}
