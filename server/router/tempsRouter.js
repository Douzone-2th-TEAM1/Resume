import express from "express";
import {} from "express-async-errors";
import * as tempsController from "../controller/tempsController.js";
import { isAuth } from "../middleware/auth.js";

const router = express.Router();

// 임시 저장
router.post("/save", isAuth, tempsController.saveTemp);

// 임시 저장 불러오기
router.post("/load", isAuth, tempsController.loadTemp);

export default router;
