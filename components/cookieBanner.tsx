'use client'
import React, { useEffect, useState } from "react";
import cookie from "js-cookie";
import { startCart } from "@/utils/cartActions";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
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
    cookie.set("cookieConsent", "rejected", { expires: 365 });
  };
return (
  <Modal show={showBanner} onHide={handleReject} animation={false}>
  <Modal.Header closeButton>
  <Modal.Title>This website uses cookies to improve your browsing experience.</Modal.Title>
  </Modal.Header>
  <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
  <Modal.Footer>
    <Button variant="primary" onClick={handleAccept}>
      Accept
    </Button>
    <Button variant="secondary" onClick={handleReject}>
      Reject
    </Button>
  </Modal.Footer>
</Modal>

)



};

export default CookieConsentBanner;