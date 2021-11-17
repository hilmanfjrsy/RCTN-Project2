import React , {useEffect}from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import {userSelector } from '../redux/slice/userSlice'

const AdminDashboard = () => {
    const history = useHistory()
    const token = useSelector(userSelector)
    useEffect(() => {
        if(token !== 'admin'){
            history.push('*')
        }
    }, [])
    return (
        <div>
            <h1>Admin Dashboard</h1>
        </div>
    )
}

export default AdminDashboard
