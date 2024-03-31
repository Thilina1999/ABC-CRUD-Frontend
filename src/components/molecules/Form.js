import React from "react";
import InputField from "../atoms/InputField";
import Button from "../atoms/Button";
import { Link } from "react-router-dom";

const From = ({
  title,
  setIndexNo,
  setName,
  setDateOfBirth,
  setTelephone,
  setAddress,
  submit,
  inputError,
  student,
}) => {
  if (student === undefined) {
    student = [];
  }
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title mb-4">{title}</h2>
              <form>
                <InputField
                  label="Index Number"
                  placeholder="Enter Index"
                  inputType="text"
                  value={student.indexNo}
                  validationMsg={inputError.index}
                  onChange={(e) => {
                    setIndexNo(e.target.value);
                  }}
                />
                <InputField
                  label="Student Name"
                  placeholder="Enter name"
                  value={student.name}
                  inputType="text"
                  validationMsg={inputError.name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <InputField
                  label="Student Age"
                  inputType="date"
                  value={student.age}
                  placeholder="Enter Date Of Birth"
                  validationMsg={inputError.dateOfBirth}
                  onChange={(e) => {
                    setDateOfBirth(e.target.value);
                  }}
                />
                <InputField
                  label="Student Telephone"
                  inputType="tel"
                  value={student.telephone}
                  placeholder="Enter telephone number"
                  onChange={(e) => {
                    setTelephone(e.target.value);
                  }}
                />
                <InputField
                  label="Student Address"
                  inputType="text"
                  value={student.address}
                  placeholder="Enter address"
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
                <Button
                  children="Submit"
                  color="btn btn-primary"
                  roundedType="mb-4"
                  type="button"
                  onClick={submit}
                />
                <Link to="/student/view">
                  <Button
                    children="Cancel"
                    color="btn btn-primary"
                    roundedType="mb-4"
                    type="button"
                  />
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default From;
