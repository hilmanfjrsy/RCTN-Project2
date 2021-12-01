import React from 'react'
import ContentLoader from "react-content-loader";

const AdminRecapLoader = () => {
    return (
        <ContentLoader
        speed={2}
        width={1250}
        height={60}
        style={{margin:5, maxWidth: '100%'}}
        viewBox="0 0 1250 60"
        backgroundColor="#dedede"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="6" rx="3" ry="3" width="500" height="20"/>
        <rect x="700" y="6" rx="3" ry="3" width="100" height="8"/>
        <rect x="850" y="6" rx="3" ry="3" width="100" height="8"/>
        <rect x="1050" y="6" rx="3" ry="3" width="100" height="8"/>
        <rect x="0" y="50" rx="3" ry="3" width="100" height="8"/>
      </ContentLoader>
    )
}

export default AdminRecapLoader
