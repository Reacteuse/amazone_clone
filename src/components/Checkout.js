import React from 'react'
import "css/checkout.css"
import Subtotal from "components/Subtotal"
import Basket from "components/Basket"
import { useStateValue } from 'Redux/StateProvider'
function Checkout() {
    const [{basket}] = useStateValue ()
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
                    <div className="checkout_basket_content">
                        {basket.map((elmt)=>(
                            <Basket key={elmt.id} id={elmt.id} description={elmt.description} image={elmt.image} price={elmt.price} rating={elmt.rating}  />
                        ))}
                    </div>
                </div>
             </div>
            {/* LEFT CARD */}
            <div className="checkout_right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
