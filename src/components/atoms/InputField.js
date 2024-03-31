import React from "react";

const InputField = ({
  label,
  placeholder,
  validationMsg,
  onChange,
  inputType,
  value
}) => {
  return (
    <div className="form-outline mb-4">
      <label className="form-label">{label}</label>
      <input
        type={`${inputType}`}
        className="form-control"
        onChange={onChange}
        value={value}
        placeholder={`${placeholder}`}
        {...(inputType === "number" ? { min: "1" } : {})}
      />
      <span className="invalid-feedback" style={{ display: "block" }}>
        {validationMsg}
      </span>
    </div>
  );
};

export default InputField;
