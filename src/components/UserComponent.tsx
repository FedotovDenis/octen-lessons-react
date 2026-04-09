import { memo } from "react";
import { FC } from "react";




export const UserComponent:FC<{foo: () => void, arr: number[]}> = memo(({ arr }) => {

    console.log("UserComponent rendered");
    console.log(arr);
    
    return (
        <div>
            UserComponent
        </div>
    );
}
)