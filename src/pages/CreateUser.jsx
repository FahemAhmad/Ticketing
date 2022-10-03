import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import apiCalls from "../backend/apiCalls";

const UserSchema = Yup.object().shape({
  username: Yup.string().required("Username is required!"),
  password: Yup.string().required("Password is required!"),
});

const initialValues = {
  username: "",
  password: "",
  role: "admin",
};
const CreateUser = () => {
  const AddNewUser = async (values, resetForm) => {
    await apiCalls
      .getAddUserApi(values)
      .then((data) => {
        resetForm();
      })
      .catch((err) => {
        console.log("Error Adding User");
      });
  };

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
        Create User
      </h1>
      <div
        style={{
          maxWidth: "fit-content",
          margin: "auto",
          minWidth: 600,
          border: "1px solid gray",
        }}
      >
        <div className="mt-5 md:col-span-2 md:mt-0">
          <Formik
            initialValues={initialValues}
            validationSchema={UserSchema}
            onSubmit={(values, { resetForm }) => {
              console.log(values);
              AddNewUser(values, resetForm);
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
                    <div className="grid grid-cols-5 gap-5">
                      <div className="col-span-1"></div>
                      <div className="col-span-3 sm:col-span-3">
                        <label
                          htmlFor={"username"}
                          className="px-3 p-1 rounded-md font-medium bg-sky-500 text-white"
                        >
                          <u className="no-underline">Username :</u>
                        </label>
                        <input
                          type="text"
                          name={"username"}
                          id={"username"}
                          value={values["username"]}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        {errors["username"] && touched["username"] && (
                          <span style={{ color: "red" }}>
                            {errors["username"]}
                          </span>
                        )}
                      </div>
                      <div className="col-span-1"></div>
                      <div className="col-span-1"></div>
                      <div className="col-span-3 sm:col-span-3">
                        <label
                          htmlFor={"password"}
                          // className="block text-sm font-medium text-gray-700 "
                          className="px-3 p-1 rounded-md font-medium bg-sky-500 text-white"
                        >
                          <u className="no-underline">Password :</u>
                        </label>
                        <input
                          type="password"
                          name={"password"}
                          id={"password"}
                          value={values["password"]}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        {errors["password"] && touched["password"] && (
                          <span style={{ color: "red" }}>
                            {errors["password"]}
                          </span>
                        )}
                      </div>
                      <div className="col-span-1"></div>
                      <div className="col-span-1"></div>
                      <div className="col-span-3 sm:col-span-3">
                        <label
                          htmlFor={"password"}
                          // className="block text-sm font-medium text-gray-700 "
                          className="px-3 p-1 rounded-md font-medium bg-sky-500 text-white"
                        >
                          <u className="no-underline">Role :</u>
                        </label>

                        <select
                          name="role"
                          id="role"
                          value={values.role}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="mt-1 block w-full rounded-md border-gray-300 shadpow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        >
                          <option name="role" id="role" value="admin">
                            Admin
                          </option>
                          <option name="role" id="role" value="user">
                            User
                          </option>
                          <option name="role" id="role" value="client">
                            Client
                          </option>
                        </select>
                      </div>
                      <div className="col-span-1"></div>
                      <div className="col-span-1"></div>
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
                          Create User
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

export default CreateUser;
