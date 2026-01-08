import { FC } from "react";
import type { IJPUser } from "../../../../model/jsonplaceholder/IJPUser";
import { Link } from "react-router-dom";
import "../../Items.css"; // Импортируем наши стили

type UserJSONPlaceholderComponentProps = {
    item: IJPUser
}

export const UserJSONPlaceholderComponent: FC<UserJSONPlaceholderComponentProps> = ({ item }) => {
    return (
        <div className="item-card">
            <Link to={item.id.toString()} state={item} className="title">
                {item.id}. {item.name} (@{item.username})
            </Link>
            <div className="info-row"><span className="info-label">Email:</span> {item.email}</div>
            <div className="info-row"><span className="info-label">Phone:</span> {item.phone}</div>
            <div className="info-row"><span className="info-label">Website:</span> {item.website}</div>

            <div className="info-row"><span className="info-label">Address:</span></div>
            <div className="nested-info">
                <div>{item.address.city}, {item.address.street}, {item.address.suite}</div>
                <div>Zip: {item.address.zipcode}</div>
            </div>

            <div className="info-row"><span className="info-label">Company:</span> {item.company.name}</div>
        </div>
    );
};