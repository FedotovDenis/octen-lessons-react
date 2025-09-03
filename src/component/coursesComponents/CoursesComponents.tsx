import type {FC} from "react";
import type {coursesModelsInterfaceArray} from "../../models/coursesModelsInterfaceArray.tsx";
import "./CoursesComponents.css"


export type PropTypeCourses = {
    course: coursesModelsInterfaceArray;
}

export const CoursesComponents:FC<PropTypeCourses> = ({course}) => {
    return(
    <ul>
        {course.title} {course.monthDuration}
    </ul>
    )
}