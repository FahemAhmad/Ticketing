import { Formik } from "formik";
import React from "react";
import Logo from "../assets/images/logo.png";
import * as Yup from "yup";
import apiCalls from "../backend/apiCalls";

//the schema is used for the input fields validations
const LoginSchema = Yup.object().shape({
  username: Yup.string("Invalid username").required("username is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password is too short - should be 6 chars minimum"),
});

//inital values of the input fields     e.g username & password
const initialValues = {
  username: "",
  password: "",
};

const LoggedUserIn = async (values) => {
  await apiCalls
    .loginApi(values)
    .then((data) => {
      console.log("testing");
      localStorage.setItem("token", data?.data.access_token);
      localStorage.setItem("role", data?.data.role);
      window.location = "http://localhost:3000/dashboard";
    })
    .catch((err) => {
      console.log(err);
    });
};

const Login = () => {
  return (
    <div className="m-auto mt-20 w-fit flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 border border-gray-500">
      <div className="w-full max-w-md space-y-8">
        <div>
          <img className="mx-auto h-20 w-auto" src={Logo} alt="Your Company" />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Login to your account
          </h2>
        </div>

        {/* Formik is a library for building and validating forms */}
        <Formik
          initialValues={initialValues}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            LoggedUserIn(values);
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
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="-space-y-px rounded-md shadow-sm">
                <div>
                  <label htmlFor="username" className="sr-only">
                    username
                  </label>
                  <input
                    id="username"
                    name="username"
                    autoComplete="username"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
                    placeholder="username"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
              </div>
              {errors.username && touched.username && (
                <span style={{ color: "red" }}>{errors.username}</span>
              )}
              <br />
              {errors.password && touched.password && (
                <span style={{ color: "red" }}>{errors.password}</span>
              )}
              <div>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-cyan-600 py-2 px-4 text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
                  Login
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
