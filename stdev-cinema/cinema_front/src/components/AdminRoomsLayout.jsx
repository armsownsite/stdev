import React from "react";
import { NavLink } from 'react-router-dom'
import axiosClient from "../axios";

export default function AdminRoomsLayout({ rooms }){
    const deleteRoom = (number) => {
        let url = `/room/destroy/${number}`;
        axiosClient.post(url).then(({ data }) => {
            window.location.reload();
        });
    };
    

    return (
        <>
            <div>
                <NavLink  to={`/admin/room/new`}>
                    New
                </NavLink>
                <table className="room_table">
                    <thead>
                        <tr>
                            <th>
                                Picture
                            </th>
                            <th>
                                Title
                            </th>
                            <th>
                                Update
                            </th>
                            <th>
                                Delete
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {rooms.map((room)=>(
                            <tr key={room.id}>
                    
                                <td>
                                    <img src={room.image} alt="" width="50px" height="50px"/>
                                </td>
                                <td>
                                    {room.title}
                                </td>
                                <td>
                                    <NavLink  to={`/admin/room/update/${room.id}`}>
                                        UPDATE
                                    </NavLink>
                                </td>
                                <td onClick={() => deleteRoom(room.id)} >
                                    DELETE
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

