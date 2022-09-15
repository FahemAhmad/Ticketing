import React from "react";
import "./ticketable.css";

const array = [];

const Ticketstable = () => {
  return (
    <>
      <div class="container">
        <div class="row">
          <input
            type="Search"
            class="ticketSearch"
            placeholder="Search for ticket"
          />
          <button class="btn-ticket">Add New Ticket</button>
        </div>

        <table>
          <tr>
            <th>Data 1</th>
            <th>Remarks</th>
            <th>Phase</th>
            <th>Status</th>
            <th>Maintainence Agent </th>
          </tr>
          <tr>
            <td>test Data 1</td>
            <td>test remarks</td>
            <td>test phase</td>
            <td>
              <p className="status open">open</p>
            </td>
            <td>test-agent</td>
          </tr>
          <tr>
            <td>test Data 1</td>
            <td>test remarks</td>
            <td>test phase</td>
            <td>
              <p className="status open">open</p>
            </td>
            <td>test-agent</td>
          </tr>
          <tr>
            <td>test Data 1</td>
            <td>test remarks</td>
            <td>test phase</td>
            <td>
              <p className="status open">open</p>
            </td>
            <td>test-agent</td>
          </tr>
          <tr>
            <td>test Data 1</td>
            <td>test remarks</td>
            <td>test phase</td>
            <td>
              <p className="status open">open</p>
            </td>
            <td>test-agent</td>
          </tr>
          <tr>
            <td>test Data 1</td>
            <td>test remarks</td>
            <td>test phase</td>
            <td>
              <p className="status resolved">resolved</p>
            </td>
            <td>test-agent</td>
          </tr>
          <tr>
            <td>test Data 1</td>
            <td>test remarks</td>
            <td>test phase</td>
            <td>
              <p className="status pending">Pending</p>
            </td>
            <td>test-agent</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Ticketstable;
