import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageComponent from '../components/PageComponent'
import SeatsLayout from '../components/SeatsLayout'
import axiosClient from "../axios";

export default function Seats() {
    const [seatList, setSeatsList] = useState([]);
    const { id } = useParams();
    const getSeats = (url) => {
        url = url || `/order/${id}`;
        axiosClient.get(url).then(({ data }) => {
            data.data.seans_id = id
            setSeatsList(data.data);
        });
    };
    
    useEffect(() => {
        getSeats();
    }, []);

    return (
        <PageComponent title="Seats">
            <div className='cinema-seats-rows'>
                <SeatsLayout rows="10" seats="8" booked={seatList} />
            </div>
        </PageComponent>
    )
}