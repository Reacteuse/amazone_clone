import React from 'react'
import 'css/Subtotal.css'
import CurrencyFormat from "react-currency-format"
import { useStateValue } from '../route/StateProvider'

function Subtotal() {
    const [{basket}] = useStateValue()
    const getSubtotal = basket.reduce((acc, cur) => acc + parseFloat(cur.price) , 0)

    return (
        <div className="subtotal_root">
            <CurrencyFormat 
                decimaleScale={2}
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
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>
                proceed to checkout
            </button>
        </div>
    )
}

export default Subtotal
