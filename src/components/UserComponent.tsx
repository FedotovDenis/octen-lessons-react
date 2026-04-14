import { memo } from "react";
import { FC } from "react";




export const UserComponent:FC<{foo: () => void, arr: number[], item: { name: string }}> = memo(({ arr, item }) => {

    console.log("UserComponent rendered");
    console.log(arr);
    console.log(item);

    return (
        <div>
           <>{item.name}</>
        </div>
    );
}
)