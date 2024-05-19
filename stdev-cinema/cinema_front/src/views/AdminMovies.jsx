import React, { useEffect, useState } from 'react';
import PageComponent from '../components/PageComponent';
import AdminMoviesLayout from '../components/AdminMoviesLayout';
import axiosClient from "../axios";

export default function AdminMovies() {
    const [moviesList, setMoviesList] = useState([]);

    const getMovies = (url) => {
        url = url || "/movie";
        axiosClient.get(url).then(({ data }) => {
            setMoviesList(data.data);
        });
    };
    
    useEffect(() => {
        getMovies();
    }, []);

    return (
        <PageComponent title="Cinema">
            <div className='cinema-seats-rows'>
                <AdminMoviesLayout movies={moviesList} />
            </div>
        </PageComponent>
    );
}