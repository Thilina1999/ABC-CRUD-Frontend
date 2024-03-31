import React from "react";
import From from "../molecules/Form";

const StudentAddForm = ({
  setIndexNo,
  setName,
  setDateOfBirth,
  setTelephone,
  setAddress,
  inputError,
  submit
}) => {
  return (
    <>
      <From
        title="Student Add Form"
        setIndexNo={setIndexNo}
        setName={setName}
        setDateOfBirth={setDateOfBirth}
        setTelephone={setTelephone}
        setAddress={setAddress}
        inputError={inputError}
        submit={submit}
      />
    </>
  );
};

export default StudentAddForm;
