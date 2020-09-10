export const initialState = {
    basket :[],
}

export const getBasketTotal = (basket) => (
    basket?.reduce((acc, cur) =>  parseFloat(cur.price) + parseFloat(acc) , 0)
)

const reducer = (state , action) => {
    console.log(state + ' ' + action)
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket : [...state.basket, action.item]
            }   
        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(
                (item) => item.id === action.id
            )
            let newBasket = [...state.basket]
            if(index >= 0 ){
                newBasket.splice(index, 1)
            }else {
                console.warn(`cant remove product (id: ${action.id}) as its not in basket !`)
            }
            return {
                ...state,
                basket: newBasket
            }
        default:
            return state
    } 
}

export default reducer