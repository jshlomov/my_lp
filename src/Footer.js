import React from "react";
import { Typography } from "@mui/material";
import { WhatsApp, Email, LocationOn } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer
      id="Footer"
      style={{
        padding: "20px",
        backgroundColor: "#222",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <Typography variant="h6">Company Name</Typography>
      <div>
        <a
          href="https://wa.me/+972123456789"
          target="_blank"
          style={{ textDecoration: "none", color: "white" }}
        >
          <WhatsApp style={{ margin: "0 10px" }} />
        </a>
        <a
          href="https://wa.me/+972123456789"
          target="_blank"
          style={{ textDecoration: "none", color: "white" }}
        >
          <Email style={{ margin: "0 10px" }} />
        </a>
        <a
          href="https://maps.app.goo.gl/daCGrifsq1S6VqkY9"
          target="_blank"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          <LocationOn style={{ margin: "0 10px" }} />
        </a>
      </div>
      <Typography variant="body2">
        123 Business Road, City, Country
        <br />
      </Typography>
    </footer>
  );
};

export default Footer;
