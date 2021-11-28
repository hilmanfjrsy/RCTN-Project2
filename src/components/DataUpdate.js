import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify';
import { addData } from '../redux/slice/dataSlice';

const DataUpdate = ({ item }) => {
  const dispatch = useDispatch()
  const [currentStock, setCurrentStock] = useState(item.totalStock > 0 ? item.totalStock : null)

  return (
    <tr>
      <td className="d-flex justify-content-center">
        <img src={item.image} style={{ width: "100%" }}></img>
      </td>
      <td><p className="h4">{item.title}</p>
        <p>{item.description}</p>
        <p className="mt-5">{item.category}</p></td>
      <td>
        <input
          type="number"
          placeholder="0"
          min={0}
          value={currentStock}
          onChange={(v) => setCurrentStock(v.target.value)}
        />
      </td>
      <td>
        <button type="button" class="btn btn-primary" onClick={() => updateStock(item, currentStock)}>
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
