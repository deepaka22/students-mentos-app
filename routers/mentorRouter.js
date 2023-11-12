import express from "express";
import {
  addMentorsData,
  showmentorsData,
} from "../controllers/MentorController.js";

const router = express.Router();

// Mentor router starts

// 1. API for newmentor adding
router.post("/newMentor", async (req, resp) => {
  try {
    const MentorreqbodyData = req.body;

    if (!MentorreqbodyData) {
      resp.json({ message: "no data was recieved or updated" });
    }

    const MentorData = await addMentorsData(MentorreqbodyData);

    resp.json({ zenMentors: MentorData });
  } catch (error) {
    return resp.status(500).json({ message: "internal server error", error });
  }
});

//2. API to get all the mentors data
router.get("/getmentors", async (req, resp) => {
  try {
    const retreieveData = {};

    if (!retreieveData) {
      resp.json({ message: "internal server error" });
    }

    const allStudentsData = await showmentorsData(retreieveData);
    resp.json({ allStudentsData: allStudentsData });
  } catch (error) {
    return resp.status(500).json({ message: "internal server error", error });
  }
});

export const Mentorrouter = router;
