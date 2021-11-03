import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../UI/Card';
import { fetchAllUsers, deleteUser } from '../../store/actions/userActions';

import style from './Users.module.css';
import DeleteIcon from '../UI/Icons/RecycleBinIcon';

const Users = () => {

    const dispatch = useDispatch();

    const users = useSelector(state => state.allUsers.users);
    const loadingUsers = useSelector(state => state.allUsers.loading);
    const errorUsers = useSelector(state => state.allUsers.error);

    const fetchUsersHandler = () => {
        dispatch(fetchAllUsers());
    }

    const deleteUserHandler = (id) => {
        dispatch(deleteUser(id));
    }

    return (
        <Card style={{ marginBottom: "1rem" }}>
            <div className={style.favoriteItem}>
                <h2>List of users</h2>
                <table>
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Email</th>
                            <th>Street address</th>
                            <th>Phone</th>
                            <th>Website</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => {
                            return <tr key={user.id}>
                                <td><b>{user.name}</b></td>
                                <td>{user.email}</td>
                                <td>{user.address.street}</td>
                                <td>{user.phone}</td>
                                <td>{user.website}</td>
                                <td><DeleteIcon deleteUserProp={() => deleteUserHandler(user.id)} /></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>

            <div className={style.btnContainer}>
                {/* just another write of bottom condition if/else */}
                {loadingUsers ? (
                    <p>Loading...</p>
                ) : !loadingUsers ? (
                    <button onClick={fetchUsersHandler}>Get users</button>
                ) : errorUsers && (
                    <p>errorUsers</p>
                ) }

                {/* {!loadingUsers ? <button onClick={fetchUsersHandler}>Get users</button> : <p>Loading...</p>}
                {errorUsers && <p>errorUsers</p>} */}
            </div>

        </Card>
    );

}

export default Users;