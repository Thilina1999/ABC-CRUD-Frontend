import React from "react";
import From from "../molecules/Form";

const StudentUpdateFrom = ({
  student,
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
        title="Student Update from"
        student={student}
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

export default StudentUpdateFrom;
