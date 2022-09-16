import React from "react";
import Navbar from "../../../components/Navbar";

const CreateTicket = () => {
  return (
    <>
      <Navbar />
      <h1
        style={{
          width: "100%",
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "bold",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        Add Ticket
      </h1>
      <div style={{ maxWidth: 1200, margin: "auto", border: "1px solid gray" }}>
        <div className="mt-5 md:col-span-2 md:mt-0">
          <form>
            <div className="overflow-hidden shadow sm:rounded-md">
              <div className="bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-2">
                    <label
                      htmlFor="Data-2"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Data 1
                    </label>
                    <input
                      type="text"
                      name="data-1"
                      id="data-1"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-2">
                    <label
                      htmlFor="Data-2"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Data-2
                    </label>
                    <input
                      type="text"
                      name="data-2"
                      id="data-2"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-2">
                    <label
                      htmlFor="data-3"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Data 3
                    </label>
                    <input
                      type="text"
                      name="data-3"
                      id="data-3"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="remarks"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Remarks
                    </label>
                    <input
                      type="text"
                      name="remarks"
                      id="remarks"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="device_type"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Device Type
                    </label>
                    <input
                      type="text"
                      name="device_type"
                      id="device_type"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="fault_description"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Fault Description
                    </label>
                    <input
                      type="text"
                      name="fault_description"
                      id="fault_description"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="maintanence_agent"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Maintanence Agent
                    </label>
                    <input
                      type="text"
                      name="maintanence_agent"
                      id="maintanence_agent"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="phase"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phase
                    </label>
                    <input
                      type="text"
                      name="phase"
                      id="phase"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="status"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Status
                    </label>
                    <select
                      id="status"
                      name="status"
                      autoComplete="status-name"
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    >
                      <option>Open</option>
                      <option>Pending</option>
                      <option>Resolved</option>
                    </select>
                  </div>
                  <button
                    className="btn-ticket"
                    style={{ padding: "10px 15px" }}
                  >
                    Add Ticket
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateTicket;
