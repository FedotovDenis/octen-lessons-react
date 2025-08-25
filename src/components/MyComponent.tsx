import type {FC, ReactNode} from "react";
import './MyComponent.css'

type MyComponentPropType = {
    title: string;
    children?: ReactNode;
}

const MyComponent: FC<MyComponentPropType> = ({title, children}) => {
    return (
        <div className = {'target'}>
            <h2>{title}</h2>
            <p>{children}</p>
        </div>
    );
};

export default MyComponent;