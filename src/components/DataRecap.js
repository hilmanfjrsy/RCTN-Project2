import React from "react";

const DataRecap = ({item}) => {
  return (
    <tr>
      <td>
        <p className="h5">{item.title}</p>
        <p className="mt-2">{item.category}</p>
      </td>
      <td>{item.price}</td>
      <td>10</td>
      <td>terjual * price</td>
    </tr>
  );
};

export default DataRecap;
