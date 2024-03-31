import React from "react";
import Button from "../atoms/Button";

const ButtonGroup = ({ handleDelete, data, handleUpdate }) => {
  return (
    <>
      <Button
        children="Update"
        type="btn"
        color="btn btn-primary"
        buttonSize="btn-sm"
        roundedType="mr-2"
        onClick={()=>{
            handleUpdate(data)
        }}
      />
      <Button
        children="Delete"
        type="btn"
        color="btn btn-danger"
        buttonSize="btn-sm"
        roundedType="mr-2"
        onClick={()=>{
            handleDelete(data.id)
        }}
      />
    </>
  );
};

export default ButtonGroup;
