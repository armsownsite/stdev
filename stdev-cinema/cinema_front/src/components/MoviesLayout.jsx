import React from "react";
import { NavLink } from 'react-router-dom'

export default function MoviesLayout({ movies }){
    return (
        <>
            <div>
                {movies.map((movie)=>(
                    <NavLink key={movie.id} to={`/seats/${movie.id}`}>
                        <div className="rooms_item">
                            <div>
                                <img src={movie.image} alt="" width="300px" height="300px"/>
                            </div>
                            <div className="movie_name">
                                {movie.title}
                            </div>
                            <div>
                                {movie.start_time}
                            </div>
                         
                        </div>
                    </NavLink>
                ))}
                
            </div>
        </>
    )
}   