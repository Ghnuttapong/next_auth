import React from "react";
import CookieConsent, { Cookies } from "react-cookie-consent";

function PopUp() {
  return (
    <div>
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ backgroundColor: "#ED8936" , color: "#fff", fontWeight: "bold", fontSize: "13px" }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </div>
  );
}

export default PopUp;
