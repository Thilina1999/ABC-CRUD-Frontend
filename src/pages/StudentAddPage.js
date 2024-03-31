import React, { useState } from "react";
import StudentAddForm from "../components/organisms/StudentAddForm";
import { addStudent } from "../services/studentService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const StudentAddPage = () => {
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

  const submit = () => {
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
      addStudent(data)
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
      <StudentAddForm
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

export default StudentAddPage;
