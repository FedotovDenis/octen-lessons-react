import type {IDataInterfaceSimpsons} from "../../models/IDataInterfaceSimpsons.ts";
import type {ReactNode} from "react";
import './character-component.css'


type CharacterComponentTypeProps = {
    item: IDataInterfaceSimpsons;
    children: ReactNode;
}
const CharacterComponent = ({item, children}: CharacterComponentTypeProps) => {
    return (
        <div>
            <h3>{item.name} {item.surname}</h3>
            <img src={item.photo} alt={item.name}/>
            <p>{children}</p>
        </div>
    );
};

export default CharacterComponent;