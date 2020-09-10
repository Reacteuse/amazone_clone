import React from 'react'
import 'css/Subtotal.css'
import CurrencyFormat from "react-currency-format"
import { useStateValue } from '../route/StateProvider'
import { Star, StarBorder } from '@material-ui/icons'

function Subtotal() {
    const [{basket}] = useStateValue()
    const getSubtotal = basket.reduce((acc, cur) => parseFloat(acc) + parseFloat(cur.price) , 0)

    return (
        <div className="subtotal_root">
            <CurrencyFormat 
                decimalScale={2}
                value={getSubtotal}
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
                <button>
                    proceed to checkout
                </button>
            </div>

            <div className="subtotal_basket">
                {basket.map((elmt)=>(
                    <div className="basket_row" key={elmt.id}>
                        <img 
                            alt={elmt.description}
                            src={elmt.image}
                        />
                        <div className="subtotal_basket_info">
                            <small>{elmt.description}</small>
                            <strong>{elmt.price} $</strong>
                            <div className="subtotal_product_rating">
                                {Array(elmt.rating).fill().map(()=>(
                                    <Star fontSize="small" />
                                ))}
                                {Array(5 - elmt.rating).fill().map(()=>(
                                    <StarBorder fontSize="small" />
                                ))}
                            </div>
                        </div>

                    </div>
                ))}
            </div>   
        </div>
    )
}

export default Subtotal
