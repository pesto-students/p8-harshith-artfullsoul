import "../styles.css";
import MidSectionGraphic from "../assets/MidSectionGraphic.png";
import { useState } from "react";
import Loader from "../assets/Loader.gif";
import isUrl from "is-url";

export default function Midsection() {
  const [loading, setLoading] = useState(false);
  const [link, setLink] = useState("");
  const [shortenLinksData, setshortenLinksData] = useState([]);
  return (
    <div >
      {/* MIDSECTION */}
      <div className="mid-sec bck-clr-gry">
        <div className="mid-sec-cont">
          <div className="flx-dir-rw wid-70 mid-sec-upp-cont">
            <div className="mid-sec-upp-lft-cont" style={{ flex: 2 }}>
              <p className="clr-black fnt-size-1">
                More than just shorter Links
              </p>
              <p className="clr-black fnt-size-3">
                Build your brand's recognition and get detailed insights on how
                your links are performing
              </p>
            </div>

            <div className="mid-sec-upp-right-cont" style={{ flex: 1 }}>
              <img src={MidSectionGraphic} />
            </div>
          </div>

          <div className="wid-70 mid-sec-low-cont">
            <div className="url-input-cont flx-dir-rw bck-clr-gry">
              <input
                value={link}
                onChange={(e) => {
                  setLink(e.target.value);
                }}
                placeholder="Enter the link here!!"
              />
              <div
                className="butt-skl bck-clr-blu bdr-rad-10"
                style={{ marginLeft: "auto" }}
                onClick={() => {
                  if (link.length === 0 || !isUrl(link)) {
                    alert("Please enter a Valid Link!!");
                    return;
                  }
                  var requestOptions = {
                    method: "GET",
                    redirect: "follow"
                  };
                  setLoading(true);
                  fetch(
                    `https://api.shrtco.de/v2/shorten?url=${link}`,
                    requestOptions
                  )
                    .then((response) => response.json())
                    .then((result) => {
                      console.log(result);
                      setshortenLinksData([...shortenLinksData, result.result]);
                      setLink("");
                      setLoading(false);
                    })
                    .catch((error) => {
                      console.log("error", error);
                      setLoading(false);
                    });
                }}
              >
                <p className="mrg-0 clr-white fnt-size-3">Shorten It!</p>
              </div>
            </div>
            <div className="url-output-cont bck-clr-white">
              {/* <p className="mrg-0 fnt-size-3 clr-black fnt-wt-400">
                Main Link:-
                <b>
                  {shortenLinksData != null && shortenLinksData.original_link}
                </b>
              </p> */}
              {shortenLinksData != null &&
                shortenLinksData.map((data, indx) => {
                  return (
                    <div className="flx-dir-rw indi-output-cont" key={indx}>
                      <p className="mrg-0 fnt-size-3 clr-black flx-1 ovr-flw">
                        {` ${data.original_link}`}
                      </p>
                      <p
                        className="mrg-0 fnt-size-3 clr-aqua flx-1 ovr-flw"
                        style={{ textAlign: "right" }}
                      >
                        {` ${data.full_short_link}`}
                      </p>
                      <div
                        className="butt-skl bck-clr-blu bdr-rad-10"
                        style={{ marginLeft: "auto" }}
                        onClick={async () => {
                          try {
                            navigator.clipboard.writeText(
                              `${data.full_short_link}`
                            );
                            alert("Copied the text: " + data.full_short_link);
                          } catch (err) {
                            alert("Failed to copy: ", err);
                          }
                        }}
                      >
                        <p className="mrg-0 clr-white fnt-size-3">Copy</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      {loading && (
        <div className="loader-modal">
          <img src={Loader} />
        </div>
      )}
    </div>
  );
}
