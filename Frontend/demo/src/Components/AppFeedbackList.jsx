import React, { useState, useEffect } from 'react';
import axios from "axios";
import {URL} from "../config"

const AppFeedbackList = () => {
  const [feedback, setFeedback] = useState([]);
    
      const fetchFeedback = async () => { 
        try {
        const response = await axios.get(`${URL}/appfeedback/`);
            //console.log(response.data);
          let arr = response.data;
          console.log(arr);
            setFeedback(arr);
            console.log(feedback);
            //console.log(arr[0].evtDescription)

      } catch (error) {
        console.error('Error fetching data:', error);
      }
        
    }
  useEffect(() => {
      fetchFeedback();
  }, []);

 

 

  return (
    <div>
      <center><h1 style={{ fontSize: '24px', marginBottom: '20px',marginTop:"20px"}}>List of Application Feedback</h1></center>
      <table  class="table table-striped table-hover table table-bordered" style={{ width: '60%', borderCollapse: 'collapse',border:"2px",margin:"auto",marginBottom:"20px",marginTop:"20px" }}>
        <thead class="table-light">
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {feedback.map((feedback) => (
            <tr key={feedback.appfeedId}>
              <td style={styles.tableCell}>{feedback.appfeedDate}</td>
              <td style={styles.tableCell}>{feedback.appfeedDesc}</td>
              <td style={styles.tableCell}>{feedback.appfeedRating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  tableCell: {
    padding: '10px',
    border: '1px solid #ccc',
  },
};

export default AppFeedbackList; 