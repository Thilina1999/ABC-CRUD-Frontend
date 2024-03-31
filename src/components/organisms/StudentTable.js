import React from "react";
import Button from "../atoms/Button";
import ButtonGroup from "../molecules/ButtonGroup";
import { Link } from "react-router-dom";

const StudentTable = ({ students, handleDelete, handleUpdate }) => {
  return (
    <div className="container mt-5">
      <Link to="/student/add">
        <Button children="Add" color="btn btn-primary" />
      </Link>

      <div className="container mt-5">
        <table className="table table-bordered">
          <thead className="thead-light">
            <tr>
              <th>Index Number</th>
              <th>Name</th>
              <th>Date of Birth</th>
              <th>Telephone</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.indexNo}</td>
                <td>{student.name}</td>
                <td>{student.dateOfBirth}</td>
                <td>{student.telephone}</td>
                <td>{student.address}</td>
                <td>
                  <ButtonGroup handleDelete={handleDelete} data={student} handleUpdate={handleUpdate}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentTable;
