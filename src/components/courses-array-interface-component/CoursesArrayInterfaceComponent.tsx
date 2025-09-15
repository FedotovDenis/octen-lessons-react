import type {ICoursesArrayDataInterface} from "../../model/ICoursesArrayDataInterface.ts";
import type {ReactNode} from "react";
import "./CoursesArrayInterfaceComponent.css"


type CoursesArrayComponentTypeProps = {
    item: ICoursesArrayDataInterface;
    children: ReactNode;
}

export const CoursesArrayInterfaceComponent = ({item, children}: CoursesArrayComponentTypeProps) => {
    return(
        <div className="courses-array-interface-component">
            <h1>{item.title}</h1>
            <h3>{item.monthDuration} month </h3>
            <h3>{item.hourDuration} hour </h3>
            <div>{children}</div>
        </div>
    )
}