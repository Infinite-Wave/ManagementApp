import React from "react";
import ReusablePriorityPage from "../reusablePriorityPage";
import { Priority } from "@/store/api";

const Urgent = () => {
    return <ReusablePriorityPage priority={Priority.Backlog} />;
};

export default Urgent;