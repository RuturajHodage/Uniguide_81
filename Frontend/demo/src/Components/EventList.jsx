import React, { useState, useEffect } from 'react';
import axios from "axios";
import {URL} from "../config"

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [sortBy, setSortBy] = useState(null);
    const [locationFilter, setLocationFilter] = useState('');
    const fetchEvents = async () => { 
        try {
        const response = await axios.get(`${URL}/event/`);
            //console.log(response.data);
            let arr = response.data;
            setEvents(arr);
            //console.log(events);
           // console.log(arr[0].evtDescription)

      } catch (error) {
        console.error('Error fetching data:', error);
      }
        
    }

  useEffect(() => {

      fetchEvents();

    // setEvents(fetchedEvents);
  }, []);


  



  return (
    <div style={{marginBottom:"30px"}}> 
      <center><h1>Event List</h1></center>
      <div>
        <label>Location Filter: </label>
        <input
          type="text"
          value={locationFilter}
       
              />
              <center><h2>List Of Event</h2></center>
          </div>
           
          <table class="table table-striped table-striped-columns "  border="2px"style={{ marginTop:"50px",border:"2px",margin:"auto"}}>
        <thead>
          <tr>
            <th>Sr. No</th>
            <th> Name</th>
            <th> Description</th>
            <th> Location</th>
            <th>Organizer</th>
            <th>Scheduled On</th>
            {/* Add other headers here */}
          </tr>
        </thead>
        <tbody>
          {events.map((event,index) => (
              <tr key={event.evtId}>
                   <td>{index+1}</td>
              <td>{event.evtName}</td>
                  <td>{event.evtDescription}</td>
                  <td>{event.evtLocation}</td>
                  <td>{event.evtOrganizer}</td>
                   <td>{event.evtScheduleOn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventList;