import React from 'react';
import DonutChart from './DonutChart';

const StreamPredictionPage = ({ location }) => {
  const counts = location.state?.counts || [];

  return (
    <div className="prediction-container">
      <h2>Stream Prediction</h2>
      <DonutChart counts={counts} />
    </div>
  );
};

export default StreamPredictionPage;
