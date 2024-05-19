import React from "react";
import { NavLink } from 'react-router-dom'
import axiosClient from "../axios";

export default function AdminMoviesLayout({ movies }){
    const deleteMovie = (number) => {
        let url = `/movie/destroy/${number}`;
        axiosClient.post(url).then(({ data }) => {
            window.location.reload();
        });
    };
    

    return (
        <>
            <div>
                <NavLink  to={`/admin/movie/new`}>
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
                        {movies.map((movie)=>(
                            <tr key={movie.id}>
                    
                                <td>
                                    <img src={movie.image} alt="" width="50px" height="50px"/>
                                </td>
                                <td>
                                    {movie.title}
                                </td>
                                <td>
                                    <NavLink  to={`/admin/movie/update/${movie.id}`}>
                                        UPDATE
                                    </NavLink>
                                </td>
                                <td onClick={() => deleteMovie(movie.id)} >
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

