import React, { useEffect, useState } from "react";
import axios from "axios";
export default function User() {
    /*
    const users = [
        { id: 1, name: "john", emai: "john@john" },
        { id: 2, name: "kevin", email: "kevin@kevin" },
        { id: 3, name: "nick", email: "nick@nick" }
    ];
    */

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const response = await axios.get("/api/user");
        setUsers(response.data.users);
    };
    return (
        <div>
            <div>user page</div>
            <ul>
                {users.map(user => {
                    return <li>{user.name}</li>;
                })}
            </ul>
        </div>
    );
}
