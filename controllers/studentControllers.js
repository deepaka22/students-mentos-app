import { ObjectId } from "mongodb";
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

export const editStudentsData = (data) => {
  return client
    .db("studentsMentor")
    .collection("studentData")
    .findOneAndUpdate(
      { _id: new ObjectId(data._id) },
      {
        $set: {
          mentorName: data.mentorName,
          mentorAssigned: data.mentorAssigned,
        },
      }
    );
};
