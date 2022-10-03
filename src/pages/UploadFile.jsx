import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import apiCalls from "../backend/apiCalls";

const initialValues = {
  file: null,
};

const validationSchema = Yup.object({
  file: Yup.mixed()
    .nullable()
    .required("Required Field")
    .test(
      "size",
      "File size is too big",
      (value) => value && value.size <= 1024 * 1024 // 5MB
    )
    .test(
      "type",
      "Invalid file format selection",
      (value) =>
        // console.log(value);
        !value ||
        (value &&
          [
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            "text/csv",
          ].includes(value?.type))
    ),
});

const UploadFile = () => {
  return (
    <div
      style={{
        width: 400,
        height: "100%",
        margin: "auto",
        border: "1px solid black",
        padding: "20px 10px",
        marginTop: "10%",
      }}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          const formData = new FormData();
          formData.append("file", values.file[0]);

          const res = await apiCalls.fileUploadApi().then((res) => res.json());
          alert(JSON.stringify(`${res.message}, status: ${res.status}`));
        }}
      >
        {(formikProps) => (
          <form onSubmit={formikProps.handleSubmit}>
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
              htmlFor="file_input"
            >
              Upload file
            </label>
            <input
              className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-900 focus:outline-none dark:bg-sky-400 dark:border-sky-900 dark:placeholder-gray-400"
              aria-describedby="file_input_help"
              id="file"
              type="file"
              onChange={(event) => {
                formikProps.setTouched({ ...formikProps.touched, file: true });
                formikProps.setFieldValue("file", event.target.files[0]);
              }}
            />
            {formikProps.touched.file && formikProps.errors.file ? (
              <small className="text-danger">{formikProps.errors.file}</small>
            ) : null}

            <p
              className="mt-1 text-sm text-gray-500 dark:text-gray-900"
              id="file_input_help"
            >
              CSV Only (MAX. 3MB).
            </p>
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
              Upload File
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default UploadFile;
