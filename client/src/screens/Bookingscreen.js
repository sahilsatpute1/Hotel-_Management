import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'

function Bookingscreen({match}) {
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState();
    const [room, setroom] = useState();

    useEffect(async() => {
       try {
        setloading(true);
        const data = (await axios.post('/api/rooms/getroombyid', {roomid : match.params.roomid})).data

        setroom(data);
        setloading(false);
       } catch (error) {
        setloading(false);
        seterror(true);
       }
    }, [])
    return (
        <div>
          {loading ? (<h1>Loading....</h1>) : error ? (<h1>Error</h1>) : (<div>

              <div className="row">

                <div className="col-md-5">
                     <h1>{room.name}</h1>
                     <img src={room.imageurls[0]} className='bigimg' />
                </div>
                <div className="col-md-5">
                 <div>
                    <h1>Booking Details</h1>
                    <hr />

                   <b>
                   <p>Name : </p>
                    <p>From date : </p>
                    <p>To Date : </p>
                    <p>Max Count : {room.maxcount}</p>
                   </b>
                 </div>

                <div>
                  <b>
                  <h1>Amount</h1>
                  <hr />
                  <p>Total days : </p>
                  <p>Rent per day : {room.rentperday}</p>
                  <p>Total Amount</p>
                  </b>
                </div>

                <div>
                    <button className="btn btn-primary">Pay Now</button>
                </div>
               </div>
              </div>
          </div>)}
        </div>
    )
}

export default Bookingscreen
