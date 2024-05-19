import React, { useEffect, useState } from 'react';
import PageComponent from '../components/PageComponent';
import AdminRoomsLayout from '../components/AdminRoomsLayout';
import axiosClient from "../axios";

export default function AdminRooms() {
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
                <AdminRoomsLayout rooms={roomList} />
            </div>
        </PageComponent>
    );
}