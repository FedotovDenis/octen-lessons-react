import { use, useMemo } from "react";
import { LeftBranchA } from "./LeftBranchA";

export const LeftBranch = () => {

    const memo = useMemo(() => {
        for(let i = 0; i < 1000; i++) {
            console.log(i);
        }
        console.log('LeftBranch rendered');
        return 'LeftBranch';
    }, []);

    return (
        <div>

            LeftBranch

            <LeftBranchA />
            
        </div>
    );
};