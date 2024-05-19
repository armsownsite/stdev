import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageComponent from '../components/PageComponent'
import MoviesLayout from '../components/MoviesLayout'
import axiosClient from "../axios";

export default function Moviedetailed() {
    const [movieList, setMovieList] = useState([]);
    const { seans_id,movie_id } = useParams();
    const getMovies = (url) => {
        url = url || `/seans/store/${seans_id}/${movie_id}`;
        axiosClient.post(url).then(({ data }) => {
            setMovieList(data.data);
        });
    };
    
    useEffect(() => {
        getMovies();
    }, []);

    return (
        <PageComponent title="Movies">
            <div className='cinema-seats-rows'>
                <MoviesLayout movies={movieList} />
            </div>
        </PageComponent>
    )
}