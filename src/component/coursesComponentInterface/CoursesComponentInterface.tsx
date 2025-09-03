import {coursesAndDurationArray} from "../../arrays.ts";
import type {coursesModelsInterfaceArray} from "../../models/coursesModelsInterfaceArray.tsx";
import {CoursesComponents} from "../coursesComponents/CoursesComponents.tsx";
import "./CoursesComponentInterface.css"


export const CoursesComponentInterface = ()=>{

    return (

        <li>
            {
                coursesAndDurationArray.map((course: coursesModelsInterfaceArray, index) => {
                    return <CoursesComponents course={course} key={index}/>
                })
            }
        </li>
    );
};