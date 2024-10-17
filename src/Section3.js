import React from "react";
import { TextField, Button } from "@mui/material";

const Section3 = () => {
  return (
    <section
      id="Section3"
      style={{ padding: "50px", backgroundColor: "#333", color: "#fff" }}
    >
      <h2 style={{ textAlign: "center" }}>Contact Us</h2>
      <form style={{ maxWidth: "600px", margin: "0 auto" }}>
        <TextField        
          label="Name"
          fullWidth
          variant="filled"
          margin="normal"
          style={{ backgroundColor: "#fff" }}
        />
        <TextField
          label="Phone"
          type="number"
          fullWidth
          variant="filled"
          margin="normal"
          style={{ backgroundColor: "#fff" }}
        />
        <TextField
          label="Email"
          type="email"
          fullWidth
          variant="filled"
          margin="normal"
          style={{ backgroundColor: "#fff" }}
        />
        <TextField
          label="Message"
          fullWidth
          multiline
          variant="filled"
          rows={4}
          margin="normal"
          style={{ backgroundColor: "#fff" }}
        />
        <Button variant="contained" color="primary" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </section>
  );
};

export default Section3;
