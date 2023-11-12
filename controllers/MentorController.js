import { client } from "../db.js";

// adding new mentor data

export const addMentorsData = (data) => {
  return client.db("studentsMentor").collection("MentorData").insertOne(data);
};

export const showmentorsData = (data) => {
  return client
    .db("studentsMentor")
    .collection("MentorData")
    .find(data)
    .toArray();
};
