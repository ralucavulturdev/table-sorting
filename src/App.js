import React, { useEffect, useState } from 'react';
import Table from './components/Table/Table';
import RangeSliderFilter from './components/RangeSliderFilter/RangeSliderFilter';
import response from './data.json';

const App = () => {
  const [data, setData] = useState([]);
  const [filteredCharities, setFilteredCharities] = useState([]);

  //How would i use async await:

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       'http://data.orghunter.com/v1/charityfinancial'
  //     );
  //     const data = await response.json();
  //     setData(data);
  //   } catch (error) {
  //     console.error('Error fetching API data:', error);
  //   }
  // };

  //How would I use fetch then chaining:

  // const fetchData = () => {
  //   fetch('http://data.orghunter.com/v1/charityfinancial')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching API data:', error);
  //     });
  // };

  useEffect(() => {
    // fetchData();
    setData(response);
  }, []);

  useEffect(() => {
    setFilteredCharities(data);
  }, [data]);

  const handleFilterChange = (minRevenue, maxRevenue) => {
    const filtered = data.filter(
      (company) =>
        company.revenue >= minRevenue && company.revenue <= maxRevenue
    );
    setFilteredCharities(filtered);
  };

  return (
    <div>
      <h1>Company Information</h1>
      <h3>Filter by Revenue:</h3>
      <RangeSliderFilter onChange={handleFilterChange} />
      <Table data={filteredCharities} />
    </div>
  );
};

export default App;
