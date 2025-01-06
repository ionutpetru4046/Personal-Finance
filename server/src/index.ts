// username: ionion4046 MongoDB
// password: GWYhi6KzKAlHtCO2 mongoDB 
// mongodb+srv://ionion4046:GWYhi6KzKAlHtCO2@personalfinancetracker.kn0iq.mongodb.net/


import express, { Express } from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records";

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());

// MongoDB Connection
const mongoURI: string = "mongodb+srv://ionion4046:GWYhi6KzKAlHtCO2@personalfinancetracker.kn0iq.mongodb.net/";

mongoose.connect(mongoURI).then(() => console.log("CONNECTED TO MONGODB!")).catch((err) => console.error("Failed to Connect to MongoDB:", err));

app.use("/financial-records", financialRecordRouter);

app.listen(port, () => {
    console.log(`Server Running on Port ${port}`);
});
