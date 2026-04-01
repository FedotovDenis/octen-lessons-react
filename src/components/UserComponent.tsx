import { memo } from "react";




export const UserComponent = memo(() => {

    console.log("UserComponent rendered");
    return (
        <div>
            UserComponent
        </div>
    );
}
)