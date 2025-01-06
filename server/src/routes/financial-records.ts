import express, { Request, Response } from "express";
import FinancialRecordModel from "../schema/financial-record";

const router = express.Router();

router.get("/getAllByUserID/:userId", async (req: Request<{userId: string}>, res: Response) => {
    try {
        const userId = req.params.userId;
        const records = await FinancialRecordModel.find({ userId: userId });
        if (records.length === 0) {
            return res.status(404).json({ message: "No records found for the user." });
        }
        return res.status(200).json(records);
    } catch (err) {
        return res.status(500).json({ error: "Internal server error" });
    }
});

export default router;
