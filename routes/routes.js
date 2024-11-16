import express from "express";
import {
  registerPasien,
  getAllPasien,
  deletePasien,
  getAllUser,
} from "../controllers/registerController.js";
import { login } from "../controllers/loginController.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to KneeCheck App");
});

router.get("/pasien", getAllPasien);
router.get("/user", getAllUser);
router.delete("/pasien/:id", deletePasien);
router.post("/register/pasien", registerPasien);
router.post("/login", login);

router.get("/about", (req, res) => {
  res.send("This is about pages");
});

export default router;
