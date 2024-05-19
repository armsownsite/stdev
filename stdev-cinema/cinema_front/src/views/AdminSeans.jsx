import React, { useEffect, useState } from 'react';
import PageComponent from '../components/PageComponent';
import AdminSeansLayout from '../components/AdminSeansLayout';
import axiosClient from "../axios";

export default function AdminSeans() {
    const [seansList, setSeansList] = useState([]);

    const getSeans = (url) => {
        url = url || "/seans/all";
        axiosClient.get(url).then(({ data }) => {
            setSeansList(data);
        });
    };
    
    useEffect(() => {
        getSeans();
    }, []);

    return (
        <PageComponent title="Cinema">
            <div className='cinema-seats-rows'>
                <AdminSeansLayout seanses={seansList} />
            </div>
        </PageComponent>
    );
}