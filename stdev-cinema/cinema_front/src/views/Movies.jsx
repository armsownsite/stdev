import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageComponent from '../components/PageComponent'
import MoviesLayout from '../components/MoviesLayout'
import axiosClient from "../axios";

export default function Movies() {
    const [movieList, setMovieList] = useState([]);
    const { id } = useParams();
    const getMovies = (url) => {
        url = url || `/movie/store/${id}`;
        axiosClient.post(url).then(({ data }) => {
            setMovieList(data);
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