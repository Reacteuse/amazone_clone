import React from 'react'
import "css/checkout.css"
import Subtotal from "components/Subtotal"
import Basket from "components/Basket"
function Checkout() {
     return (
        <div className="checkout_root">
            {/* RIGHT CARD */}
            <div className="checkout_left">
                <img 
                    className="checkout_adds"
                    alt="ads"
                    src={process.env.PUBLIC_URL  + '/images/adon.jpg'}
                />
                <div>
                    <h1 className="checkout_title">your shopping basket</h1>
                    <Basket />
                </div>
             </div>
            {/* LEFT CARD */}
            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
