// import { iteratorSymbol } from "@reduxjs/toolkit/node_modules/immer/dist/internal";
import React, { useEffect, useState } from "react";

export default function Cart() {
    const [dummy] = useState ([{
        title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
        price: 599,
        quantity: 1,
        totalprice: 599,
    }])

    
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
                        <thead>
                        {dummy.map((item) => (
                            <tr>
                                <th>{item.title}</th>
                                <th>{item.price}</th>
                                <th>{item.quantity}</th>
                                <th>{item.totalprice}</th>
                            </tr>
                        ))}

                        </thead>
                    </table>
               </div>
            </div>
        </div>
    )
}

