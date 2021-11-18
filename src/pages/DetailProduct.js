import React, { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";
import { getRequest } from "../config/GlobalFunc";
import { getRating } from "../config/GlobalFunc";

function Detail() {
  const [detailData, setDetailData] = useState([]);
  const history = useHistory();
  const { state } = useLocation();
  const params = useParams();

  useEffect(() => {
    /* This handle for Bug When
       Open Detail Product from New Tab
    */
    // Check current state on Location
    if (state === undefined) {
      // If state is undefined then getRequest again & setDetailData
      getRequest(`products/${params.itemID}`)
        .then((res) => {
          setDetailData(res.data);
        })
        .catch((err) => {
          console.error(err);
          history.push("/errorPage");
        });
    } else {
      // if state has value then set DetailData
      setDetailData(state.detail);
    }
  }, [params, setDetailData]);

  return (
    <div className="container-fluid">
      {detailData === [] ? (
        <h1>Loading Data...</h1>
      ) : (
        <div className="container-product" style={{ display: "flex" }}>
          <div className="container-img" style={{ flex: 1 }}>
            <img
              src={detailData.image}
              style={{ width: "50%" }}
              alt={detailData.title}
            />
          </div>
          <div style={{ flex: 1 }}>
            <h1>{detailData.title}</h1>
            <h3>{detailData.category}</h3>
            <p>{detailData.description}</p>
            {getRating(detailData.rating.count, detailData.rating.rate, 10)}

            <h3>{detailData.price}</h3>

            <button type="button" className="btn btn-dark w-100 mt-3">
              <i class="fas fa-cart-plus"></i> Add to cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
