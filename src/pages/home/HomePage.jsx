import React from "react";
import "./Home.css";
import Table from "../../components/table/Table";
import DoctorsList from "../../components/doctorsList/DoctorsList";
import PatientsList from "../../components/patientList/PatientList";
import CardContainer from "../../components/card/Card";

const HomePage = ({ collapsed }) => {
  // Dynamically set margin-left or width for the content based on sidebar state
 

  return (
    <div className="home">
      <div className="homeContainer">
        <div className="widgets">
          <CardContainer />
        </div>

        <div className="listsContainer">
          <div className="doctorsListContainer">
            <DoctorsList />
          </div>
          <div className="patientsListContainer">
            <PatientsList />
          </div>
        </div>

        <div className="listContainer">
          <div className="listTitle">
          
          </div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
