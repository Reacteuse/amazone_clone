import React from 'react'
import { useStateValue } from '../route/StateProvider'
import { Star, StarBorder } from '@material-ui/icons'
import 'css/Basket.css'

function Basket() {
    const [{basket}] = useStateValue()
 
    return (
        <div className="basket_root">
            {basket.map((elmt)=>(
                <div className="basket" key={elmt.id}>
                    <img 
                        alt={elmt.description}
                        src={elmt.image}
                    />
                    <div className="basket_info">
                        <small>{elmt.description}</small>
                        <strong>{elmt.price} $</strong>
                        <div className="product_rating">
                            {Array(elmt.rating).fill().map(()=>(
                                <Star />
                            ))}
                            {Array(5 - elmt.rating).fill().map(()=>(
                                <StarBorder/>
                            ))}
                        </div>
                        <button  >
                            remove from the basket
                        </button>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default Basket
