import React  from 'react'
import "css/checkout.css"
import CurrencyFormat from "react-currency-format"
import Subtotal from "components/Subtotal"
import Basket from "components/Basket"
import { useStateValue } from 'Redux/StateProvider'
import {getBasketTotal} from "Redux/reducer"
import { useHistory } from 'react-router-dom'

import FlipMove from 'react-flip-move';

function Checkout () {
    const [{basket,user}] = useStateValue ()
    const history = useHistory()
    const checkout = (event) => {
        event.preventDefault()
        if(user){
            history.push('/Payment')
        }else{
            history.push('/login')
        }
    }
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
                    <h2  className="checkout_title">{user? 'Hello '+ user:null }</h2>
                    <h1 className="checkout_subTitle">{basket?.length===0?'your shopping basket is empty !':'your shopping basket'}</h1>
                    <div className="checkout_basket_content">
                    <FlipMove
                        easing="ease-in"
                        duration={500}
                    >
                        {basket.map((elmt)=>(
                            <Basket  key={elmt.id} id={elmt.id} description={elmt.description} image={elmt.image} price={elmt.price} rating={elmt.rating} qty={elmt.qty}  />
                        ))}
                    </FlipMove>
         
                    </div>
                </div>
             </div>
            {/* LEFT CARD */}
            <div className="checkout_right">
                <div className="subtotal_root">
                    <CurrencyFormat 
                        decimalScale={2}
                        value={getBasketTotal(basket)}
                        renderText= {(value)=>(
                            <>
                                <p>
                                    Subtotal({basket.length} items): <strong>{`${value}`}</strong>
                                </p>
                                <small className="subtotal_gift">
                                    <input type="checkbox" /> 
                                    this order contains a gift
                                </small>
                            </>
                        )}
                        displayType={"text"}
                        fixedDecimalScale={true}
                        thousandSeparator={true}
                        allowNegative={false}
                        suffix={" $"}
                    />
                    <div className="checkout_button">
                        <button onClick={checkout}>
                            proceed to checkout
                        </button>
                    </div>
                    <FlipMove
                        easing="ease-in"
                        duration={500}
                    >
                        {basket.map((elmt)=>(
                            <Subtotal  key={elmt.id} id={elmt.id} description={elmt.description}  image={elmt.image}  price={elmt.price} rating={elmt.rating} qty={elmt.qty} />
                        ))}
                    </FlipMove>
                </div>
            </div>
        </div>
    )
}

export default Checkout


