import React, { useEffect, useState} from "react";
import UserDetails from "./UserDetails";

const Profile = ({users}) => {
    const [localUsers, setLocalUsers] = useState ([]);

    useEffect (() => {
        setTimeout(() => {
            setLocalUsers(users);
        }, 3000)
    }, []);

    return (
        <div className="Container">
            {localUsers.map((user) => (
                <UserDetails key = {user.Name} user={user} />
            ))}
        </div>
    );
};

export default Profile;