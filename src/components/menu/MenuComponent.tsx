import { Link } from "react-router-dom";



export const MenuComponent = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/users">Users</Link>
                </li>
                <li>
                    <Link to="/posts">Posts</Link>
                </li>
            </ul>
        </div>
    )
}