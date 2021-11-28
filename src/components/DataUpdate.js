import React from 'react'

const DataUpdate = ({item}) => {
    return (
        <tr>
        <td className="d-flex justify-content-center">
          <img src={item.image} style={{ width: "100%" }}></img>
        </td>
        <td><p className="h4">{item.title}</p>
            <p>{item.description}</p>
            <p className="mt-5">{item.category}</p></td>
        <td>
          <input type="number" placeholder="Stock"></input>
        </td>
        <td>
          <button type="button" class="btn btn-primary">
            Update
          </button>
        </td>
      </tr>
    )
}

export default DataUpdate
