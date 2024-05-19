import React, { useEffect, useState } from 'react';
import PageComponent from '../components/PageComponent';
import axiosClient from "../axios";
import { useParams } from 'react-router-dom';


export default function AdminMoviesUpdate() {
    const [movieList, setMovieList] = useState({
        image: '',
        title: '',
        slug: '',
        description: ''
    });
    const { id } = useParams();

    const imageChange = (event) => {
        setMovieList(prevMovieList => ({
            ...prevMovieList,
            image: event.target.value
        }));
    };

    const titleChange = (event) => {
        setMovieList(prevMovieList => ({
            ...prevMovieList,
            title: event.target.value
        }));
    };

    const slugChange = (event) => {
        setMovieList(prevMovieList => ({
            ...prevMovieList,
            slug: event.target.value
        }));
    };

    const descriptionChange = (event) => {
        setMovieList(prevMovieList => ({
            ...prevMovieList,
            description: event.target.value
        }));
    };

    const updateData = () => {
        let datas = {
            "image":movieList.image,
            "slug":movieList.slug,
            "title":movieList.title,
            "description":movieList.description
        }
        if(id){
            let url = `/movie/update/${id}`;
            axiosClient.post(url,datas).then(({ data }) => {
            });
        }else{
            let url = `/movie/store`;
            axiosClient.post(url,datas).then(({ data }) => {
            });    
        }
    };

    const getMovies = (url) => {
        if(id){
            url = url || `/movie/find/${id}`;
            axiosClient.post(url).then(({ data }) => {
                setMovieList(data.data);
            });
        }
    };
    
    useEffect(() => {
        getMovies();
    }, []);

    return (
        <PageComponent title="Cinema">
            <div className='update_room'>
                <div>
                    <label htmlFor="">
                        Image URL
                        <input className="block_element" type="text" value={movieList.image?? ''} onChange={imageChange} />
                    </label>
                    <label htmlFor="">
                        Title
                        <input  className="block_element"  type="text" value={movieList.title?? ''} onChange={titleChange}  />
                    </label>
                    <label htmlFor="">
                        Slug
                        <input  className="block_element"  type="text" value={movieList.slug?? ''} onChange={slugChange}/>
                    </label>
                    <label htmlFor="">
                        Description
                        <input  className="block_element"  type="text" value={movieList.description?? ''} onChange={descriptionChange} />
                    </label>
                    <button onClick={updateData}  >UPDATE</button>
                </div>
            </div>
        </PageComponent>
    );
}