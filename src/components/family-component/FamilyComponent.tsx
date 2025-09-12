import {simpsons} from "../../data/dataSimpsons.ts";
import CharacterComponent from "../character-component/CharacterComponent.tsx";
import './family-component.css'


export const FamilyComponent = () => {
    return (
        <div>
            {
                simpsons.map((value, index) => <CharacterComponent key={index} item={value} >
                    {value.info} {value.age}
                </CharacterComponent>)
            }
        </div>
    );
};