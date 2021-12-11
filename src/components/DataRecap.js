import React from "react";

const DataRecap = ({item}) => {
  return (
    <tr>
      <td>
        <div className="email mb-3">
          <span>{item.title}</span>
          <span>{item.description}</span>
        </div>
        <p className="category">{item.category}</p>
      </td>
      <td>${item.price}</td>
      <td>{item.totalSales}</td>
      <td>${item.totalPriceSales}</td>
    </tr>
  );
};

export default DataRecap;
