import { useUser } from "@clerk/clerk-react";
import { FinancialRecordForm } from "./financial-record-form";
import { FinancialRecordList } from "./financial-record-list";

export const Dashboard = () => {

    const { user } = useUser();
    return (
        <div>
        <h1 className="dashboard-container">
           Welcome {user?.firstName}! Here Are Your Finances</h1>
           <FinancialRecordForm />
           <FinancialRecordList />
        </div>
    );
};
