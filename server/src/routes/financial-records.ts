import express, { Request, Response } from "express";
import FinancialRecordModel from "../schema/financial-record";

const router = express.Router();

router.get("/getAllByUserID/:userId", async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId;
        const records = await FinancialRecordModel.find({ userId: userId });
        if (records.length === 0) {
            return res.status(404).send({ message: "No records found for the user." });
        }
        return res.status(200).send(records);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.post("/", async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId;
        const records = await FinancialRecordModel.find({ userId: userId });
        if (records.length === 0) {
            return res.status(404).send({ message: "No records found for the user." });
        }
        return res.status(200).send(records);
    } catch (err) {
        res.status(500).send(err);
    }
});

export default router;
