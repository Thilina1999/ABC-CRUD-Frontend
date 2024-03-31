import React, { useState, useEffect } from "react";
import StudentUpdateFrom from "../components/organisms/StudentUpdateFrom";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { updateStudent } from "../services/studentService";

const StudentUpdatePage = () => {
  const [indexNo, setIndexNo] = useState("");
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(0);
  const [telephone, setTelephone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();
  const [inputError, setInputError] = useState({
    index: "",
    name: "",
    dateOfBirth: "",
  });

  const data = {
    indexNo,
    name,
    dateOfBirth,
    telephone,
    address,
  };
  const location = useLocation();
  const { student } = location.state || {};

  useEffect(() => {
    if (student) {
      setIndexNo(student.indexNo);
      setName(student.name);
      setDateOfBirth(student.dateOfBirth);
      setTelephone(student.telephone);
      setAddress(student.address);
    }
  }, [student]);

  const updateStudentData = { indexNo, name, dateOfBirth, telephone, address };

  const update = () => {
    if (indexNo === "") {
      setInputError((prev) => ({
        ...prev,
        index: "Index Cannot br Null",
      }));
    } else {
      setInputError((prev) => ({ ...prev, index: "" }));
    }

    if (name === "") {
      setInputError((prev) => ({
        ...prev,
        name: "Name Cannot Be Null",
      }));
    } else {
      setInputError((prev) => ({ ...prev, name: "" }));
    }

    if (dateOfBirth === "") {
      setInputError((prev) => ({
        ...prev,
        dateOfBirth: "Date of Birth Cannot Be Null",
      }));
    } else {
      setInputError((prev) => ({ ...prev, dateOfBirth: "" }));
    }
    if (indexNo !== "" && name !== "" && dateOfBirth !== "") {
      updateStudent(data, student.id)
        .then((res) => {
          toast.success(res.data.message);
          navigate("/student/view");
        })
        .catch((res) => {
          toast.error(res.response.data.message);
        });
    }
  };
  return (
    <>
      <StudentUpdateFrom
        student={updateStudentData}
        setIndexNo={setIndexNo}
        setName={setName}
        setDateOfBirth={setDateOfBirth}
        setTelephone={setTelephone}
        setAddress={setAddress}
        submit={update}
        inputError={inputError}
      />
    </>
  );
};

export default StudentUpdatePage;
