import { Formik } from "formik";
import * as Yup from "yup";
import apiCalls from "../backend/apiCalls";

const TicketSchema = Yup.object().shape({
  source_incident_no: Yup.string("Invalid Source Incident No").required(
    "Source Incident no is required"
  ),
  internal_incident_no: Yup.string("Invalid Internal Incident No").required(
    "Internal Incident no is required"
  ),
  device_type: Yup.string("Invalid Device Type").required(
    "Device Type is required"
  ),
  last_octet: Yup.string("Invalid Last Octet").required(
    "Last Octet is required"
  ),
  reporting_source: Yup.string(),
  phase: Yup.string(),
  site: Yup.string(),
  fault_description: Yup.string(),
  resolution: Yup.string(),
  maintanance_agent: Yup.string(),
  comments: Yup.string(),
});

const initialValues = {
  source_incident_no: "",
  reporting_source: "",
  internal_incident_no: "",
  phase: "",
  site: "",
  device_type: "",
  last_octet: "",
  fault_description: "",
  resolution: "",
  maintanance_agent: "",
  comments: "",
};

const fieldNames = [
  "source_incident_no",
  "reporting_source",
  "internal_incident_no",
  "phase",
  "site",
  "device_type",
  "last_octet",
  "fault_description",
  "resolution",
  "maintanance_agent",
  "comments",
];

const mapNames = [
  "Source Incident No#",
  "Reporting Source",
  "Internal Incident No#",
  "Phase",
  "Site",
  "Device Type",
  "Last Octet",
  "Fault Description",
  "Resolution",
  "Maintanance Agent",
  "Comments",
];

const AddNewTicket = async (values, resetForm) => {
  await apiCalls
    .addTicketApi(values)
    .then((data) => {
      console.log(data);
      resetForm();
    })
    .catch((err) => alert("Error adding Ticket"));
};

const CreateTicket = () => {
  return (
    <>
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
                      {fieldNames.map((singleField, index) => (
                        <div className="col-span-6 sm:col-span-3" key={index}>
                          <label
                            htmlFor={singleField}
                            // className="block text-sm font-medium text-gray-700 "
                            className="px-3 p-1 rounded-md font-medium bg-sky-500 text-white"
                          >
                            <u className="no-underline">{mapNames[index]} :</u>
                          </label>
                          <input
                            type="text"
                            name={singleField}
                            id={singleField}
                            value={values[singleField]}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                          {errors[singleField] && touched[singleField] && (
                            <span style={{ color: "red" }}>
                              {errors[singleField]}
                            </span>
                          )}
                        </div>
                      ))}
                      <div className="col-span-6 sm:col-span-3">
                        <button
                          className="btn-ticket"
                          style={{
                            padding: "0px 10px",
                            background: "black",
                            color: "white",
                            height: 33,
                            width: "100%",
                            margin: "auto 0",
                            marginTop: 30,
                          }}
                          type="submit"
                        >
                          Add Ticket
                        </button>
                      </div>
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
