import { Link } from "react-router-dom";

export const Menu = () => {
    return (
        <div>
            <nav>
                <ul className="menu">
                    <li><Link className="menu-link" to={"/users"}>Users</Link></li>
                    <li><Link className="menu-link" to={"/posts"}>Posts</Link></li>
                    <li><Link className="menu-link" to={"/comments"}>Comments</Link></li>
                    <li><Link className="menu-link" to={"/complex"}>Complex</Link></li>
                </ul>
            </nav>
        </div>
    )
}