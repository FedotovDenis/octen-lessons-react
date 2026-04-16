import { useContext } from "react";
import { MyContext } from "../context/MyContext";





export const RightBranchA = () => {

    const {counterValue, increment} = useContext(MyContext);
    return (
        <div>

            RightBranchA

                <button 
                    onClick={() => increment(counterValue)}>
                        correct counter value right branch = {counterValue}
                </button>

        </div>
    );
};