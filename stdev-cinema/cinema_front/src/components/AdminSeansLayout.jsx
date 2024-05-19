import React from "react";
import { NavLink } from 'react-router-dom'
import axiosClient from "../axios";

export default function AdminSeansLayout({ seanses }){
    const deleteSeans = (number) => {
        let url = `/seans/destroy/${number}`;
        axiosClient.post(url).then(({ data }) => {
            window.location.reload();
        });
    };
    

    return (
        <>
            <div>
                <NavLink  to={`/admin/seans/new`}>
                    New
                </NavLink>
                <table className="room_table">
                    <thead>
                        <tr>
                            <th>
                                Picture Room
                            </th>
                            <th>
                                Picture Movie
                            </th>
                            <th>
                                Date
                            </th>
                            <th>
                                Seans
                            </th>
                            <th>
                                UPDATE
                            </th>
                            <th>
                                DELETE
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {seanses.map((seans)=>(
                            <tr key={seans.id}>
                    
                                <td>
                                    <img src={seans.image} alt="" width="50px" height="50px"/>
                                </td>
                                <td>
                                    <img src={seans.mimage} alt="" width="50px" height="50px"/>
                                </td>
                                <td>
                                    {seans.start_time}
                                </td>
                                <td>
                                    {seans.seans_time}
                                </td>
                                <td>
                                    <NavLink  to={`/admin/seans/update/${seans.id}`}>
                                        UPDATE
                                    </NavLink>
                                </td>
                                <td onClick={() => deleteSeans(seans.id)} >
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

