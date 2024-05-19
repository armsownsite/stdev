import React, { useEffect, useState } from 'react';
import PageComponent from '../components/PageComponent';
import RoomsLayout from '../components/RoomsLayout';
import axiosClient from "../axios";

export default function Rooms() {
    const [roomList, setRoomList] = useState([]);

    const getRooms = (url) => {
        url = url || "/room";
        axiosClient.get(url).then(({ data }) => {
          setRoomList(data.data);
        });
    };
    
    useEffect(() => {
        getRooms();
    }, []);

    return (
        <PageComponent title="Cinema">
            <div className='cinema-seats-rows'>
                <RoomsLayout rooms={roomList} />
            </div>
        </PageComponent>
    );
}