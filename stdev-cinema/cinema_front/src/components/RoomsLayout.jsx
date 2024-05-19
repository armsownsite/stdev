import React from "react";
import { NavLink } from 'react-router-dom'

export default function RoomsLayout({ rooms }){
    return (
        <>
            <div>
                {rooms.map((room)=>(
                    <NavLink key={room.title} to={`/movies/${room.id}`}>
                        <div className="rooms_item">
                            <div>
                                <img src={room.image} alt="" width="300px" height="300px"/>
                            </div>
                            <div className="room_title">
                                {room.title}
                            </div>
                        </div>
                    </NavLink>
                ))}
                
            </div>
        </>
    )
}