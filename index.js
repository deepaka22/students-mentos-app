import express from "express";
import { studentrouter } from "./routers/studentRouter.js";
import { Mentorrouter } from "./routers/mentorRouter.js";
const app = express();

app.use(express.json());

app.use("/students", studentrouter);
app.use("/mentors", Mentorrouter);

app.listen("8000", () => {
  console.log("server started successfully");
});
