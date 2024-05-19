import React from "react";
import axiosClient from "../axios";

export default function SeatsLayout({ rows, seats,booked }){
    const bookSeat = (number,seans_id) => {
        let url = `/order/store`;
        let datas = {
            "seans_id":seans_id,
            "seat":number  
        }
        axiosClient.post(url,datas).then(({ data }) => {
            window.location.reload();
        });
    };
    
    const renderSeats = () => {
        let bookedSeats = []
        let seans_id = 0
        booked.map((seat)=>(
            bookedSeats.push(seat.seat),
            seans_id = seat.seans_id
        ))
        const renderedSeats = [];
        let rowSeats = [];
        let seatNumber = 1 
        for (let i = 0; i < rows; i++) {
          const row = rows[i];
          for (let j = 0; j < seats; j++) {
            const seat = seats[j];
            let seat_id = seatNumber
            if(bookedSeats.includes(seatNumber))
                rowSeats.push(<div className="cinema-seats booked" key={`${seatNumber}`}>{seatNumber}</div>);
            else
                rowSeats.push(<div className="cinema-seats" key={`${seatNumber}`} onClick={() => bookSeat(seat_id,seans_id)}  >{seatNumber}</div>);
            seatNumber++
          }
          renderedSeats.push(<div key={`${i}`} className="cinema-rows">{rowSeats}</div>);
          rowSeats = [];
        }
        return renderedSeats;
    };

    return (
        <>
            <div>
                {renderSeats()}
            </div>
        </>
    )
}