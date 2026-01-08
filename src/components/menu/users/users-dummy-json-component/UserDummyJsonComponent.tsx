import { FC } from "react";
import type { IDJUser } from "../../../../model/dummyjson/IDJUser";
import { Link } from "react-router-dom";
import "../../Items.css";

type UserDummyJsonComponentProps = {
    item: IDJUser
}

export const UserDummyJsonComponent: FC<UserDummyJsonComponentProps> = ({ item }) => {
    return (
        <div className="item-card">
            <Link to={item.id.toString()} state={item} className="title">
                {item.id}. {item.firstName} {item.lastName}
            </Link>
            <div className="info-row"><span className="info-label">Email:</span> {item.email}</div>
            <div className="info-row"><span className="info-label">Phone:</span> {item.phone}</div>
            <div className="info-row"><span className="info-label">Username:</span> {item.username}</div>
            <div className="info-row"><span className="info-label">Age/Gender:</span> {item.age} / {item.gender}</div>

            <div className="info-row"><span className="info-label">Address:</span></div>
            <div className="nested-info">
                <div>{item.address.city}, {item.address.address}</div>
            </div>

            <div className="info-row"><span className="info-label">Company:</span> {item.company.name} ({item.company.title})</div>
        </div>
    );
};
