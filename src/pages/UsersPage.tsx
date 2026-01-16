
import { UsersComponent } from '../components/users-component/UsersComponent';
import { Outlet } from 'react-router-dom';


export const UsersPage = () => {
    return (
        <div>
            <UsersComponent />
            <hr />
            <h2>This block is in CartsPage</h2>
            <Outlet />
        </div>
    );
};