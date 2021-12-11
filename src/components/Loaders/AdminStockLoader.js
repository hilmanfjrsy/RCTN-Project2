import React from 'react'
import ContentLoader from "react-content-loader";

const AdminStockLoader = () => {
    return (
        <ContentLoader
        speed={2}
        width={1250}
        height={200}
        style={{margin:5, maxWidth: '100%'}}
        viewBox="0 0 1250 200"
        backgroundColor="#dedede"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="4" rx="3" ry="3" width="150" height="200" />
        <rect x="180" y="6" rx="3" ry="3" width="500" height="20"/>
        <rect x="850" y="6" rx="3" ry="3" width="100" height="20"/>
        <rect x="1050" y="6" rx="3" ry="3" width="100" height="20"/>
        <rect x="180" y="40" rx="3" ry="3" width="600" height="8"/>
        <rect x="180" y="60" rx="3" ry="3" width="600" height="8"/>
        <rect x="180" y="80" rx="3" ry="3" width="300" height="8"/>
        <rect x="180" y="170" rx="3" ry="3" width="100" height="8"/>
      </ContentLoader>
    )
}

export default AdminStockLoader
