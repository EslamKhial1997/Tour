import React, { useState } from "react";
import plane from "./image/flight/plane.png";
import bus from "./image/flight/bus.png";
import location from "./image/flight/location.png";
import star from "./image/flight/star.png";
import date from "./image/flight/calendar.png";
import min from "./image/flight/min.png";
import plusimg from "./image/flight/plus.png";
import add from "./image/flight/add.png";
import mins from "./image/flight/mins.png";
import { NavLink } from "react-router-dom";
import { MenuItem, Select, FormControl } from "@mui/material";
const Flight = () => {
  const [flight, setflight] = useState(true);
  const [age, setAge] = React.useState(10);
  const [plus, setPlus] = React.useState(0);

  const [Atlus, setAtlus] = React.useState(1);
  const [Child, setChild] = React.useState(1);
  const [Seniors, setSeniors] = React.useState(1);
  const [infints, setInfinits] = React.useState(1);
  const [Students, setStudnet] = React.useState(1);
  const Atlusplus = () => {
    setAtlus(Atlus + 1);
  };
  const Atlusmin = () => {
    setAtlus(Atlus - 1);
  };
  const Childplus = () => {
    setChild(Child + 1);
  };
  const Childsmin = () => {
    setChild(Child - 1);
  };
  const Seniorplus = () => {
    setSeniors(Seniors + 1);
  }
  const Seniorsmin = () => {
    setSeniors(Seniors - 1);
  };
  const Infinitsplus = () => {
    setInfinits(infints + 1);
  };
  const Infinitsmin = () => {
    setInfinits(Students - 1);
  };
  const Studentsplus = () => {
    setStudnet(Students + 1);
  };
  const Studentsmin = () => {
    setStudnet(infints - 1);
  };
  const plusFN = () => {
    setPlus(plus + 1);
  };
  const minFN = () => {
    setPlus(plus - 1);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="containerflight">
      <div className="flight" id="flight">
        <div className="container">
          <h3 className="special-heading text-light">Flight with us</h3>
          <div className="content">
            <div className="double">
              <div
                className={`transpornat rounded-top ${flight ? "active" : ""}`}
                onClick={() => {
                  setflight(true);
                }}
              >
                <img src={plane} className="flightransport " alt="plane" />
                Tour with Flight
              </div>
              <div
                className={`transpornat rounded-top ${flight ? "" : "active"}`}
                onClick={() => {
                  setflight(false);
                }}
              >
                <img src={bus} className="flightransport" alt="bus" />
                Tour with Bus
              </div>
            </div>
            {flight ? (
              <div className="container pb-5 bg-light rounded-end rounded-bottom">
                <div className="chexs">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="option1"
                    />
                    <label className="form-check-label" for="inlineRadio1">
                      Return Flight
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="option2"
                    />
                    <label className="form-check-label" for="inlineRadio2">
                      One-way Flight
                    </label>
                  </div>
                </div>
                <div className=" row justify-content-around align-items-center">
                  <div className="col-lg-3 col-md-3 col-sm-5 col-5 p-lg-3 p-md-2 p-sm-2  p-2 mor">
                    <img src={location} alt="location" />
                    <input type="text" placeholder="Coming From" />
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-5 col-5 p-lg-3 p-md-2 p-sm-2 p-2 mor">
                    <img src={location} alt="location" />
                    <input type="text" placeholder="Coming To" />
                  </div>

                  <div className="col-lg-3 col-md-3 col-sm-5 col-5 p-lg-3 p-md-2 p-sm-0 p-0 justify-content-between mor">
                    <img src={star} alt="location" />
                    
                    <select className="w-100" name="currency">
                      <option> Class</option>
                      <option className="col-12"> First Class</option>
                      <option> Permuim Economy</option>
                      <option> Bussniss</option>
                      <option> Economy</option>
                      <option> Bussniss</option>
                    </select>
                  </div>

                  <FormControl
                    className=" col-lg-3 col-md-4 col-sm-5 col-5 p-lg-0 p-md-2 p-sm-0 p-0 justify-content-between mor"
                    style={{ margin: "10px" }}
                  >
                    <Select
                      value={age}
                      onChange={handleChange}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                      className="w-100"
                    >
                      <MenuItem
                        value={10}
                        selected
                        className="text-center d-flex justify-content-between align-items-center m-auto w-100  mins"
                      >
                        {" "}
                        <div className="d-flex align-items-center justify-content-start">
                          <img src={star} alt="" style={{ width: "15px" }} />
                          <span className="fw-bold">No.Tickets</span>
                        </div>
                      </MenuItem>
                      <MenuItem
                        value={11}
                        className="text-start align-items-center p-0 m-0 my-2 w-75"
                      >
                        {" "}
                        <div className="d-flex w-100 align-items-center ms-2 justify-content-between">
                          <span style={{ fontSize: "12px" }}>Adult</span>
                        </div>
                      </MenuItem>
                      <div
                        style={{
                          position: "absolute",
                          top: "63px",
                          right: "0px",
                          width: "90px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-evenly",
                        }}
                      >
                        {" "}
                        <img
                          src={add}
                          alt=""
                          onClick={Atlusplus}
                          style={{ width: "15px" }}
                        />
                        <span>{Atlus}</span>{" "}
                        <img
                          src={mins}
                          onClick={Atlusmin}
                          alt=""
                          style={{ width: "15px" }}
                        />
                      </div>
                      <MenuItem
                        value={12}
                        selected
                        className="text-start align-items-center p-0 m-0 my-2 w-75"
                      >
                        {" "}
                        <div className="d-flex w-100 align-items-center ms-2 justify-content-between">
                          <span style={{ fontSize: "12px" }}>
                            Children (Ages 2-12)
                          </span>
                        </div>
                      </MenuItem>
                      <div
                        style={{
                          position: "absolute",
                          top: "93px",
                          right: "0px",
                          width: "90px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-evenly",
                        }}
                      >
                        {" "}
                        <img
                        src={add}
                        alt=""
                        onClick={Childplus}
                        style={{ width: "15px" }}
                      />
                      <span>{Child}</span>{" "}
                      <img
                        src={mins}
                        onClick={Childsmin}
                        alt=""
                        style={{ width: "15px" }}
                      />
                      </div>
                      <MenuItem
                        value={13}
                        className="text-start align-items-center p-0 m-0 my-2 w-75"
                      >
                        {" "}
                        <div className="d-flex w-100 align-items-center ms-2 justify-content-between">
                          <span className="mx-0" style={{ fontSize: "12px" }}>
                            Infants (Ages 0-2)
                          </span>
                        </div>
                      </MenuItem>
                      <div
                        style={{
                          position: "absolute",
                          top: "120px",
                          right: "0px",
                          width: "90px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-evenly",
                        }}
                      >
                        {" "}
                        <img
                        src={add}
                        alt=""
                        onClick={Infinitsplus}
                        style={{ width: "15px" }}
                      />
                      <span>{infints}</span>{" "}
                      <img
                        src={mins}
                        onClick={Infinitsmin}
                        alt=""
                        style={{ width: "15px" }}
                      />
                      </div>
                      <MenuItem
                        value={13}
                        selected
                        className="text-start align-items-center p-0 m-0 my-2 w-75"
                      >
                        {" "}
                        <div className="d-flex w-100 align-items-center ms-2 justify-content-between">
                          <span style={{ fontSize: "12px" }}>
                            Seniors (65+)
                          </span>
                        </div>
                      </MenuItem>
                      <div
                        style={{
                          position: "absolute",
                          top: "147px",
                          right: "0px",
                          width: "90px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-evenly",
                        }}
                      >
                        {" "}
                        <img
                        src={add}
                        alt=""
                        onClick={Seniorplus}
                        style={{ width: "15px" }}
                      />
                      <span>{Seniors}</span>{" "}
                      <img
                        src={mins}
                        onClick={Seniorsmin}
                        alt=""
                        style={{ width: "15px" }}
                      />
                      </div>
                      <MenuItem
                        value={14}
                        selected
                        className="text-start align-items-center p-0 m-0 my-2 w-75"
                      >
                        {" "}
                        <div className="d-flex  w-100 align-items-center ms-2 justify-content-between">
                          <span style={{ fontSize: "12px" }}>
                            Students (Ages 12-24)
                          </span>
                        </div>
                      </MenuItem>
                      <div
                        style={{
                          position: "absolute",
                          top: "173px",
                          right: "0px",
                          width: "90px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-evenly",
                        }}
                      >
                        {" "}
                        <img
                        src={add}
                        alt=""
                        onClick={Studentsplus}
                        style={{ width: "15px" }}
                      />
                      <span>{Students}</span>{" "}
                      <img
                        src={mins}
                        onClick={Studentsmin}
                        alt=""
                        style={{ width: "15px" }}
                      />
                      </div>
                    </Select>
                  </FormControl>

                  <div className="col-lg-3 col-md-4 col-sm-5 col-5 justify-content-between mor p-lg-3 p-md-2 p-sm-1 p-1">
                    <label htmlFor="upload">
                      <img src={date} alt="" />
                      Departing Date
                    </label>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-5 col-5 justify-content-between mor p-lg-3 p-md-2 p-sm-2 p-2">
                    <label htmlFor="upload">
                      <img src={date} alt="" />
                      Returning Date
                    </label>
                  </div>
                </div>
                <NavLink
                  to="/flightTour"
                  className="btn d-block mt-5 mx-auto bg  text-light"
                >
                  Search for Flight
                </NavLink>
              </div>
            ) : (
              <div className="container pb-5 bg-light rounded-end rounded-bottom">
                <div className="chexs">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="option1"
                    />
                    <label className="form-check-label" for="inlineRadio1">
                      Return Flight
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="option2"
                    />
                    <label className="form-check-label" for="inlineRadio2">
                      One-way Flight
                    </label>
                  </div>
                </div>
                <div className=" row justify-content-around align-items-center">
                  <div className="col-lg-3 col-md-3 col-sm-5 col-5 p-lg-3 p-md-2 p-sm-2 p-2 mor">
                    <div className="col-lg-3 col-md-3 col-sm-5 col-5 p-lg-3 p-md-2 p-sm-2 p-2 mor" style={{borderLeft:"none" ,borderRight:"none"}}>
                      <img src={location} alt="location" />
                      <input type="text" placeholder="Coming From" />
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-5 col-5 p-lg-3 p-md-2 p-sm-2 p-2 mor">
                    <div className="col-lg-3 col-md-3 col-sm-5 col-5 p-lg-3 p-md-2 p-sm-2  p-2 mor" style={{borderLeft:"none" ,borderRight:"none"}}>
                      <img src={location} alt="location" />
                      <input type="text" placeholder="Coming To" />
                    </div>
                  </div>
                  <div className=" col-lg-3 col-md-3 col-sm-5 col-5 p-lg-3 p-md-2 p-sm-0 p-0 justify-content-between mor">
                    <img
                      src={plusimg}
                      alt=""
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        plusFN();
                      }}
                    />
                    <span className="fw-bold">
                      {plus === 0 ? "Passengers" : plus}
                    </span>
                    <img
                      src={min}
                      alt=""
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        minFN();
                      }}
                    />
                  </div>

                  <div className="col-lg-3 col-md-4 col-sm-5 col-5 justify-content-between mor p-lg-3 p-md-2 p-sm-1 p-1">
                    <label htmlFor="upload">
                      <img src={date} alt="" />
                      Departing Date
                    </label>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-5 col-5 justify-content-between mor p-lg-3 p-md-2 p-sm-2 p-2">
                    <label htmlFor="upload">
                      <img src={date} alt="" />
                      Returning Date
                    </label>
                  </div>
                </div>
                <NavLink
                  to="/bustTour"
                  className="btn d-block mt-5 mx-auto bg  text-light"
                >
                  Search for Trip
                </NavLink>
              </div>
            )}
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Flight;
