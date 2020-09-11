import React ,{ forwardRef }  from 'react'
import 'css/Subtotal.css'
import { Star, StarBorder, Delete } from '@material-ui/icons'
import { useStateValue } from 'Redux/StateProvider'
import { IconButton } from '@material-ui/core'

const Subtotal = forwardRef(({id, description , image, price, rating},ref) => {
    const [{},dispatch] = useStateValue()
 
    const removeFromBasket = () => {
        dispatch({
            type : 'REMOVE_FROM_BASKET',
            id : id
        })
    }

        return (
        <div className="subtotal_basket" ref={ref}>
            <div className="basket_row" >
                <img 
                    alt={description}
                    src={image}
                />
                <div className="subtotal_basket_info">
                    <small>{description}</small>
                    <strong>{price} $</strong>
                    <div className="subtotal_product_rating">
                        {Array(rating).fill().map(()=>(
                            <Star fontSize="small" />
                        ))}
                        {Array(5 - rating).fill().map(()=>(
                            <StarBorder fontSize="small" />
                        ))}
                    </div>
                </div>
                <IconButton onClick={removeFromBasket} style={{color : "#ff9a02 "}}>
                    <Delete />
                </IconButton>
            </div>
        </div>   
   )
})

export default Subtotal
