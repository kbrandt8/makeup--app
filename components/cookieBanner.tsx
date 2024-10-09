'use client'
import React, { useEffect, useState } from "react";
import cookie from "js-cookie";
import { startCart } from "@/utils/cartActions";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
const CookieConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consentCookie = cookie.get("cookieConsent");

    if (!consentCookie) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    setShowBanner(false);
    cookie.set("cookieConsent", "accepted", { expires: 365 });
    startCart()
  };

  const handleReject = () => {
    setShowBanner(false);
    cookie.set("cookieConsent", "rejected", { expires: 0.01 });
  };
  return (

    <>


      <Offcanvas show={showBanner} onHide={handleReject} placement="bottom">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>This website uses cookies to improve your browsing experience.</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body >
          <ButtonToolbar aria-label="This website uses cookies to improve your browsing experience.">
            <ButtonGroup className="me-2" aria-label="Accept Browser Cookies">
              <Button variant="primary" size="lg" onClick={handleAccept}>
                Accept
              </Button></ButtonGroup>
            <ButtonGroup className="me-2" aria-label="Reject Browser Cookies">

              <Button variant="secondary" size="lg" onClick={handleReject}>
                Reject
              </Button></ButtonGroup>

          </ButtonToolbar>

        </Offcanvas.Body>
      </Offcanvas>
    </>


  )



};

export default CookieConsentBanner;