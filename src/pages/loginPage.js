import React, { useState } from "react";
import Login from "../components/organisms/Login";
import { staffLogin } from "../services/authService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [inputError, setInputError] = useState({
    password: "",
    userName: "",
  });
  const navigate = useNavigate();

  const data = {
    userName,
    password,
  };

  const submit = (e) => {
    e.preventDefault();

    if (password === "") {
      setInputError((prev) => ({
        ...prev,
        password: "Password Cannot br Null",
      }));
    } else {
      setInputError((prev) => ({ ...prev, password: "" }));
    }

    if (userName === "") {
      setInputError((prev) => ({
        ...prev,
        userName: "User Name Cannot Be Null",
      }));
    } else {
      setInputError((prev) => ({ ...prev, userName: "" }));
    }

    if (userName !== "" && password !== "") {
      staffLogin(data)
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
      <Login
        setPassword={setPassword}
        setUserName={setUserName}
        submit={submit}
        inputError={inputError}
        password={password}
        userName={userName}
      />
    </>
  );
};

export default LoginPage;
