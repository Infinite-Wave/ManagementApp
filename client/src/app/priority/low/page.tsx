import React from "react";
import ReusablePriorityPage from "../reusablePriorityPage";
import { Priority } from "@/store/api";

const Urgent = () => {
    return <ReusablePriorityPage priority={Priority.Low} />;
};

export default Urgent;