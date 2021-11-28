import React, { useEffect, useState } from "react";

export default function Cart() {
    
    const [itemQuantity, setItemQuantity] = useState(1);

    return (
        <div className="bg-cartpage">
            <div className="container">
                <div style={{ marginBottom:30, marginTop:30}}>
                    <h1>My Cart</h1>
               </div>
                <div>
                    <table border="1" cellpadding="20" >
                        <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                        </tr>

                        </thead>
                    </table>
               </div>
            </div>
        </div>
    )
}

