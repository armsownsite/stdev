import React, { useEffect, useState } from 'react';
import PageComponent from '../components/PageComponent';
import RoomsLayout from '../components/RoomsLayout';
import axiosClient from "../axios";
import { useParams } from 'react-router-dom';


export default function AdminRoomUpdate() {
    const [roomList, setRoomList] = useState({
        image: '',
        title: '',
        slug: '',
        description: ''
    });
    const { id } = useParams();

    const imageChange = (event) => {
        setRoomList(prevRoomList => ({
            ...prevRoomList,
            image: event.target.value
        }));
    };

    const titleChange = (event) => {
        setRoomList(prevRoomList => ({
            ...prevRoomList,
            title: event.target.value
        }));
    };

    const slugChange = (event) => {
        setRoomList(prevRoomList => ({
            ...prevRoomList,
            slug: event.target.value
        }));
    };

    const descriptionChange = (event) => {
        setRoomList(prevRoomList => ({
            ...prevRoomList,
            description: event.target.value
        }));
    };

    const updateData = () => {
        let datas = {
            "image":roomList.image,
            "slug":roomList.slug,
            "title":roomList.title,
            "status":1,
            "description":roomList.description
        }
        if(id){
            let url = `/room/update/${id}`;
            axiosClient.post(url,datas).then(({ data }) => {
            });
        }else{
            let url = `/room/store`;
            console.log(datas)
            axiosClient.post(url,datas).then(({ data }) => {
            });    
        }
    };

    const getRooms = (url) => {
        if(id){
            url = url || `/room/find/${id}`;
            axiosClient.post(url).then(({ data }) => {
                setRoomList(data.data);
            });
        }
    };
    
    useEffect(() => {
        getRooms();
    }, []);

    return (
        <PageComponent title="Cinema">
            <div className='update_room'>
                <div>
                    <label htmlFor="">
                        Image URL
                        <input className="block_element" type="text" value={roomList.image?? ''} onChange={imageChange} />
                    </label>
                    <label htmlFor="">
                        Title
                        <input  className="block_element"  type="text" value={roomList.title?? ''} onChange={titleChange}  />
                    </label>
                    <label htmlFor="">
                        Slug
                        <input  className="block_element"  type="text" value={roomList.slug?? ''} onChange={slugChange}/>
                    </label>
                    <label htmlFor="">
                        Description
                        <input  className="block_element"  type="text" value={roomList.description?? ''} onChange={descriptionChange} />
                    </label>
                    <button onClick={updateData}  >UPDATE</button>
                </div>
            </div>
        </PageComponent>
    );
}