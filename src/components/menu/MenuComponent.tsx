import { Link } from "react-router-dom";

export const MenuComponent = () => {
    return (
        <ul>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/cars"}>Cars</Link>
            </li>
            <li>
                <Link to={"/create"}>Create Car</Link>
            </li>
        </ul>
    );
};
