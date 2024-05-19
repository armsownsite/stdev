import React, { useEffect, useState } from 'react';
import PageComponent from '../components/PageComponent';
import axiosClient from "../axios";
import { useParams } from 'react-router-dom';


export default function AdminSeansUpdate() {
    const [seansList, setSeansList] = useState({
        rooms_id: '',
        movies_id: '',
        start_time: '',
        seans_time: ''
    });
    const [roomList, setRoomList] = useState([]);
    const [movieList, setMovieList] = useState([]);


    const { id } = useParams();

    const roomChange = (event) => {
        setSeansList(prevSeansList => ({
            ...prevSeansList,
            rooms_id: event.target.value
        }));
    };

    const movieChange = (event) => {
        setSeansList(setSeansList => ({
            ...setSeansList,
            movies_id: event.target.value
        }));
    };

    const dateChange = (event) => {
        setSeansList(prevSeansList => ({
            ...prevSeansList,
            start_time: event.target.value
        }));
    };

    const timeChange = (event) => {
        setSeansList(prevSeansList => ({
            ...prevSeansList,
            seans_time: event.target.value
        }));
    };

    const updateData = () => {
        let datas = {
            "rooms_id":parseInt(seansList.rooms_id),
            "movies_id":parseInt(seansList.movies_id),
            "start_time":seansList.start_time + ' ' + seansList.seans_time,
            "seans_time":1
        }
        if(id){
            let url = `/seans/update/${id}`;
            axiosClient.post(url,datas).then(({ data }) => {
            });
        }else{
            let url = `/seans/store`;
            axiosClient.post(url,datas).then(({ data }) => {
            });    
        }
    };

    const getSeans = (url) => {
        if(id){
            url = url || `/seans/find/${id}`;
            axiosClient.post(url).then(({ data }) => {
                setSeansList(data);
            });
        } 
    };
    
    const getRooms = (url) => {
        url = url || `/room`;
        axiosClient.get(url).then(({ data }) => {
            setRoomList(data.data);
        });
    };
    
    const getMovies = (url) => {
        url = url || `/movie`;
        axiosClient.get(url).then(({ data }) => {
            setMovieList(data.data);
        });
    };
    

    useEffect(() => {
        getSeans();
        getMovies();
        getRooms();
    }, []);

    return (
        <PageComponent title="Cinema">
            <div className='update_room'>
                <div>
                    <label className="block_element" htmlFor="">
                        Select Room 
                        <select onChange={roomChange}>
                            <option  key="0">SELECT ROOM</option>
                            {roomList.map((room)=>(
                                <option  key={room.id?? ''} value={room.id?? ''}>{room.title?? ''}</option>
                            ))}
                        </select>
                    </label>
                    <label className="block_element"  htmlFor="">
                        Select Movie 
                        <select onChange={movieChange}>
                            <option  key="0">SELECT MOVIE</option>
                            {movieList.map((movie)=>(
                                <option key={movie.id?? ''} value={movie.id?? ''}>{movie.title?? ''}</option>
                            ))}
                        </select>
                    </label>
                    <label className="block_element"  htmlFor="">
                        Date 
                        <input type="date" onChange={dateChange} />
                    </label>   
                    <label className="block_element"  htmlFor="">
                        Time 
                        <select  name="" id="" onChange={timeChange}>
                            <option value="12:00:00">SET TIME</option>
                            <option value="12:00:00">12:00 am</option>
                            <option value="14:00:00">02:00 pm</option>
                            <option value="16:30:00">04:30 pm</option>
                            <option value="19:00:00">07:00 pm</option>
                        </select>
                    </label>         
                    <button onClick={updateData}  >UPDATE</button>
                </div>
            </div>
        </PageComponent>
    );
}