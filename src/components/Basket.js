import React , { forwardRef }  from 'react'
import 'css/Basket.css'
import { useStateValue } from 'Redux/StateProvider'
import { Rating } from '@material-ui/lab'
import { IconButton } from '@material-ui/core'
import { DeleteForever } from '@material-ui/icons'



const Basket = forwardRef(({id, description , image, price, rating , qty}, ref) => {
    const [{},dispatch] = useStateValue()
 
    const removeFromBasket = () => {
        dispatch({
            type : 'REMOVE_FROM_BASKET',
            id : id
        })
    }

    const removeQty = () => {
        dispatch({
            type : 'REMOVE_QTY',
            id : id
        })
    }

    return (
        <div className="basket" ref={ref} >
            <img 
                alt={description}
                src={image}
            />
            <div className="basket_info">
                <small>{description}</small>
                <strong>quantity : {qty}</strong>
                <strong>{price} $</strong>
                <div className="product_rating">
                    <Rating
                        name="simple-controlled"
                        size="large"
                        value={rating}
                        precision={0.5}
                        readOnly
                    />
                </div>
                <div className="basket_button">
                    <button onClick={removeQty} className="button_qty"  >
                        remove quantity
                    </button>
                    <IconButton onClick={removeFromBasket} style={{color : "#ff9a02 ", margin: "10px"}} >
                        <DeleteForever />
                    </IconButton>
                </div>
            </div>
        </div>
    )
})

export default Basket
 
