import React from "react";
import Navbar from "../../../components/Navbar";
import * as Yup from "yup";
import { Formik } from "formik";
import apiCalls from "../../../backend/apiCalls";

const TicketSchema = Yup.object().shape({
  device_type: Yup.string("Invalid Device Type").required(
    "Device Type is required"
  ),
  last_octet: Yup.string("Invalid Last Octet").required(
    "Last Octet is required"
  ),
  source_incident_no: Yup.number("Invalid Source Incident No")
    .min(1)
    .required("Source Incident no is required"),
});

const initialValues = {
  device_type: "",
  last_octet: "",
  source_incident_no: 0,
};

const AddNewTicket = async (values, resetForm) => {
  await apiCalls
    .addTicketApi(values)
    .then((data) => {
      alert("Ticket Added");
      resetForm();
    })
    .catch((err) => alert("Error adding Ticket"));
};

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
          <Formik
            initialValues={initialValues}
            validationSchema={TicketSchema}
            onSubmit={(values, { resetForm }) => {
              AddNewTicket(values, resetForm);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
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
                          value={values.device_type}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        {errors.device_type && touched.device_type && (
                          <span style={{ color: "red" }}>
                            {errors.device_type}
                          </span>
                        )}
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
                          htmlFor="last_octet"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Last Octet
                        </label>
                        <input
                          type="text"
                          name="last_octet"
                          id="last_octet"
                          value={values.last_octet}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        {errors.last_octet && touched.last_octet && (
                          <span style={{ color: "red" }}>
                            {errors.last_octet}
                          </span>
                        )}
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="source_incident_no"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Source Incident No
                        </label>
                        <input
                          type="number"
                          name="source_incident_no"
                          id="source_incident_no"
                          value={values.source_incident_no}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        {errors.source_incident_no &&
                          touched.source_incident_no && (
                            <span style={{ color: "red" }}>
                              {errors.source_incident_no}
                            </span>
                          )}
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
                        type="submit"
                      >
                        Add Ticket
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default CreateTicket;
