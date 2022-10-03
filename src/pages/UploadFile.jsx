import React from "react";

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
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
        for="file_input"
      >
        Upload file
      </label>
      <input
        class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-900 focus:outline-none dark:bg-sky-400 dark:border-sky-900 dark:placeholder-gray-400"
        aria-describedby="file_input_help"
        id="file_input"
        type="file"
      />
      <p
        class="mt-1 text-sm text-gray-500 dark:text-gray-900"
        id="file_input_help"
      >
        CSV Only (MAX. 3MB).
      </p>
    </div>
  );
};

export default UploadFile;
