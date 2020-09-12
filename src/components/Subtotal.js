import React ,{ forwardRef }  from 'react'
import 'css/Subtotal.css'
import {  Delete } from '@material-ui/icons'
import { useStateValue } from 'Redux/StateProvider'
import { IconButton } from '@material-ui/core'
import { Rating } from '@material-ui/lab'

const Subtotal = forwardRef(({id, description , image, price, rating, qty},ref) => {
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
                    <strong>quantity : {qty}</strong>
                    <strong>{price} $</strong>
                    <div className="subtotal_product_rating">
                        <Rating
                            name="simple-controlled"
                            size="small"
                            value={rating}
                            precision={0.5}
                            readOnly
                        />
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
