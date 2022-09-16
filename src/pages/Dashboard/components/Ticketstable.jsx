import React from "react";
import { useNavigate } from "react-router-dom";
import "./ticketable.css";

const Ticketstable = ({ tickets }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <div className="row">
          <input
            type="Search"
            className="ticketSearch"
            placeholder="Search for ticket"
          />
          <button className="btn-ticket" onClick={() => navigate("/addTicket")}>
            Add New Ticket
          </button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Data 1</th>
              <th>Remarks</th>
              <th>Phase</th>
              <th>Status</th>
              <th>Maintainence Agent </th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((singleTicket, index) => (
              <tr key={index}>
                <td>{singleTicket.DATA1}</td>
                <td>{singleTicket.Remarks}</td>
                <td>{singleTicket.phase}</td>
                <td>
                  <p className={`status ${singleTicket.status}`}>
                    {singleTicket.status}
                  </p>
                </td>
                <td>{singleTicket?.maintanance_agent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Ticketstable;
