import React from 'react';
import './Table.scss';
const Table = ({ data }) => (
  <table className='table'>
    <thead>
      <tr>
        <th>Rank</th>
        <th>Name</th>
        <th>Industry</th>
        <th>Revenue</th>
        <th>Revenue Growth</th>
        <th>Employees</th>
        <th>Headquarters</th>
      </tr>
    </thead>
    <tbody>
      {data.map((company) => (
        <tr key={company.rank}>
          <td>{company.rank}</td>
          <td>{company.name}</td>
          <td>{company.industry}</td>
          <td>{company.revenue}</td>
          <td>{company.revenue_growth}</td>
          <td>{company.employees}</td>
          <td>{company.headquarters}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
