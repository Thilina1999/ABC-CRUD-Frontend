import React from "react";
import Button from "../atoms/Button";
import InputField from "../atoms/InputField";

const Login = ({
  setPassword,
  setUserName,
  submit,
  inputError,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="card" style={{ width: "30rem", padding: "20px" }}>
        <form>
          <InputField
            label="User Name"
            inputType="text"
            placeholder="Enter the User Name"
            validationMsg={inputError.userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <InputField
            label="Password"
            inputType="password"
            placeholder="Enter the Password"
            validationMsg={inputError.password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button
            children="Sign in"
            type="button"
            color="btn btn-primary"
            className="btn-block"
            roundedType="mb-4"
            disabled={false}
            onClick={(e) => {
              submit(e);
            }}
          ></Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
