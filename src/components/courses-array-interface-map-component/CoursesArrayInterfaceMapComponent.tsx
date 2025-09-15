import {coursesArray} from "../../data/coursesArray.ts";
import {CoursesArrayInterfaceComponent} from "../courses-array-interface-component/CoursesArrayInterfaceComponent.tsx";
import "./CoursesArrayInterfaceMapComponent.css"


export const CoursesArrayInterfaceMapComponent = () => {
    return(
        <div className="courses-array-interface-map-component">
            {
                coursesArray.map((value, index) => <CoursesArrayInterfaceComponent key={index} item={value}>

                    <ul>
                        {
                        value.modules.map((value, index) => <li key={index}>{value}</li>)
                        }

                    </ul>
                </CoursesArrayInterfaceComponent>)
            }
        </div>
    )
}