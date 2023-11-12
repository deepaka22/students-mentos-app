import express from "express";
import {
  addstudentsData,
  showStudentsData,
} from "../controllers/studentControllers.js";

const router = express.Router();

// 1. API for newstudent adding

router.post("/newstudents", async (req, resp) => {
  try {
    const StureqbodyData = req.body;
    if (!StureqbodyData) {
      resp.json({ message: "no data was recieved or updated" });
    }
    // if no data available in stureqbodyData this occurs
    const studentsData = await addstudentsData(StureqbodyData);
    // response recieved
    resp.json(studentsData);
  } catch (error) {
    return resp.status(500).json({ message: "internal server error", error });
  }
});

//2. API to get all the students data
router.get("/getstudents", async (req, resp) => {
  try {
    const retreieveData = {};

    if (!retreieveData) {
      resp.json({ message: "internal server error" });
    }

    const allStudentsData = await showStudentsData(retreieveData);
    resp.json(allStudentsData);
  } catch (error) {
    return resp.status(500).json({ message: "internal server error", error });
  }
});

export const studentrouter = router;
