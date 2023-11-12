import { client } from "../db.js";

// adding students data

export const addstudentsData = (data) => {
  return client.db("studentsMentor").collection("studentData").insertOne(data);
};

export const showStudentsData = (data) => {
  return client
    .db("studentsMentor")
    .collection("studentData")
    .find(data)
    .toArray();
};
