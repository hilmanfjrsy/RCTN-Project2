import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify';
import { addData } from '../redux/slice/dataSlice';

const DataUpdate = ({ item }) => {
  const dispatch = useDispatch()
  const [currentStock, setCurrentStock] = useState(item.totalStock > 0 ? item.totalStock : null)

  return (
    <tr>
      <td>
        <img className="img" src={item.image}></img>
      </td>
      <td>
        <div className="email mb-5">
          <span>{item.title}</span>
          <span>{item.description}</span>
        </div>
        <span className="category">{item.category}</span>
      </td>
      <td>
        <input
          type="number"
          placeholder="0"
          className="quantity form-control"
          min={0}
          value={currentStock}
          onChange={(v) => setCurrentStock(v.target.value)}
        />
      </td>
      <td>
        <button type="button" class="btn btn-success" onClick={() => updateStock(item, currentStock)}>
          Update
        </button>
      </td>
    </tr>
  )
  function updateStock(item, stock) {
    const data = {
      id: item.id,
      countCart: item.countCart,
      totalStock: stock,
      totalSales: item.totalSales
    }
    dispatch(addData(data))
    toast.success('Stock has been updated')
  }
}

export default DataUpdate
