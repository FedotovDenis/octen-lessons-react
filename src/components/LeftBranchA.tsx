import { useContext } from "react";
import { MyContext } from "../context/MyContext";

export const LeftBranchA = () => {
    const {counterValue} = useContext(MyContext);
    return (
        <div>
            correct counter value left branch = {counterValue}
        </div>
    );
};
