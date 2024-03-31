import React, { useState, useEffect } from "react";
import StudentTable from "../components/organisms/StudentTable";
import { getAllStudent, deleteStudent } from "../services/studentService";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

const StudentViewPage = () => {
  const [students, setStudents] = useState([]);
  let navigate = useNavigate();

  const fetchStudents = async () => {
    try {
      const response = await getAllStudent();
      setStudents(response.data);
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleDelete = (id) => {
    deleteStudent(id)
      .then((res) => {
        fetchStudents();
        toast.success(res.data.message);
      })
      .catch((res) => {
        console.log(res)
        toast.error(res.response.data.message);
      });
  };

 
  
  const handleUpdate = (student) => {
    navigate('/student/update', { state: { student } });
  };

  return (
    <>
      <StudentTable students={students} handleDelete={handleDelete} handleUpdate={handleUpdate} />
    </>
  );
};

export default StudentViewPage;
