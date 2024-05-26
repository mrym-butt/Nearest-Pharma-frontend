import React, { useState } from "react";
import { Grid, Paper, Avatar, Typography } from "@mui/material";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import { useNavigate } from "react-router-dom";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Registration = () => {
  const paperStyle = {
    padding: 20,
    height: "fit-content",
    width: 400,
    margin: "50px auto",
  };
  const avatarStyle = { backgroundColor: "#4CAF50" };
  const [inputData, setInputData] = useState({
    username: "",
    address: "",
    password: "",
    location: {
      coordinates: ["", ""],
    },
    mapUrl: "",
  });
  const navigate = useNavigate();
  const [center, setCenter] = useState({ lat: 0, lng: 0 });

  const handleData = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setCenter({ lat: latitude, lng: longitude });
        setInputData({
          ...inputData,
          location: {
            ...inputData.location,
            coordinates: [longitude, latitude],
          },
          mapUrl: `https://www.google.com/maps?q=${latitude},${longitude}`,
        });
      });
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Your form submission logic here
    console.log("Form data:", inputData);
    navigate("/signin");
  };

  return (
    <Grid container justifyContent="center">
      <Paper elevation={3} style={paperStyle}>
        <Grid container direction="column" alignItems="center" spacing={2}>
          <Grid item>
            <Avatar style={avatarStyle}>
              <AppRegistrationIcon />
            </Avatar>
          </Grid>
          <Grid item>
            <Typography variant="h5" align="center">
              Pharmacy Registration Form
            </Typography>
          </Grid>
          <Grid item>
            <form onSubmit={handleSubmit} style={{ width: "100%" }}>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={inputData.username}
                onChange={handleData}
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "10px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={inputData.address}
                onChange={handleData}
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "10px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={inputData.password}
                onChange={handleData}
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "10px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
              <button
                type="button"
                onClick={handleGetLocation}
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "10px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  background: "#4CAF50",
                  color: "white",
                }}
              >
                Get Location
              </button>
              <input
                type="text"
                name="mapUrl"
                placeholder="Map URL"
                value={inputData.mapUrl}
                onChange={handleData}
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "10px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  background: "#4CAF50",
                  color: "white",
                }}
              >
                Register
              </button>
            </form>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Registration;
