import axios from './service';

export const getAllStudent = () => axios.get("get/allStudents");
export const addStudent = (data) => axios.post("/save/student", data);
export const updateStudent = (data, id) => axios.put(`/update/student/${id}`, data);
export const deleteStudent = (id) => axios.delete(`/delete/student/${id}`);