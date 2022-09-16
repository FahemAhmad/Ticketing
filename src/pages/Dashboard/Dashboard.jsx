import React from "react";
import { useEffect, useState } from "react";
import apiCalls from "../../backend/apiCalls";
import Navbar from "../../components/Navbar";
import Ticketstable from "./components/Ticketstable";

const Dashboard = () => {
  const [tickets, setTickets] = useState();

  const getTickets = async () => {
    await apiCalls
      .getTicketsApi()
      .then((data) => {
        console.log(data?.data);
        setTickets(data?.data);
      })
      .catch((err) => {
        alert("Error with Ticketing", err);
      });
  };

  useEffect(() => {
    getTickets();
  }, []);

  return (
    <>
      <Navbar />
      {tickets && <Ticketstable tickets={tickets} />}
    </>
  );
};

export default Dashboard;
