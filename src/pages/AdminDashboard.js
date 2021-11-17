import React , {useEffect}from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { loginUser, userSelector } from '../redux/slice/userSlice'

const AdminDashboard = () => {
    const history = useHistory()
    const value = useSelector(userSelector)
    useEffect(() => {
        if(value !== 'admin'){
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
