import { Link } from "react-router-dom";


export const Menu = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to={'/users/jsonplaceholder'}>Page Users JSONPlaceholder</Link>
                </li>
                <li>
                    <Link to={'/users/dummyjson'}>Page Users DummyJson</Link>
                </li>
                <li>
                    <Link to={'/posts/jsonplaceholder'}>Page Posts JSONPlaceholder</Link>
                </li>
                <li>
                    <Link to={'/posts/dummyjson'}>Page Posts DummyJson</Link>
                </li>
                <li>
                    <Link to={'/comments/jsonplaceholder'}>Page Comments JSONPlaceholder</Link>
                </li>
                <li>
                    <Link to={'/comments/dummyjson'}>Page Comments DummyJson</Link>
                </li>
            </ul>
        </div>
    );
};