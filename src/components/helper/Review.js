import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography,List,ListItem,ListItemText,Grid, ListItemAvatar, Avatar} from '@material-ui/core';
import CurrencyFormat from "react-currency-format"
import {useStateValue} from 'Redux/StateProvider'
import {getBasketTotal} from "Redux/reducer"

  const payments = [
    { name: 'Card type', detail: 'Visa' },
    { name: 'Card holder', detail: 'Mr John Smith' },
    { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
    { name: 'Expiry date', detail: '04/2024' },
  ];


  const useStyles = makeStyles((theme) => ({
    listItem: {
      padding: theme.spacing(1, 0),
    },
    total: {
      fontWeight: 700,
    },
    title: {
      marginTop: theme.spacing(2),
    },
  }));

function Review() {
    const classes = useStyles();
    const [{basket,user},dispatch] = useStateValue()
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Order summary ({basket?.length}items)
            </Typography>
            <List disablePadding>
                {basket.map((item) => (
                    <ListItem className={classes.listItem} key={item.id}>
                        <ListItemText primary={item.description} secondary={'X '+item.qty} />
                        <Typography variant="body2">{item.price}</Typography>
                    </ListItem>
                ))}
                <CurrencyFormat 
                        decimalScale={2}
                        value={getBasketTotal(basket)}
                        renderText= {(value)=>(
                            <ListItem className={classes.listItem}>
                                <ListItemText secondary="Total" />
                                <Typography variant="subtitle1" className={classes.total}>
                                    {`${value}`}
                                </Typography>
                            </ListItem>
                        )}
                        displayType={"text"}
                        fixedDecimalScale={true}
                        thousandSeparator={true}
                        allowNegative={false}
                        suffix={" $"}
                />
            </List>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom className={classes.title}>
                        Shipping
                    </Typography>
                    <Typography gutterBottom>John Smith</Typography>
                    <Typography gutterBottom>{user}</Typography>
                </Grid>
                <Grid item container direction="column" xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom className={classes.title}>
                        Payment details
                    </Typography>
                    <Grid container>
                        {payments.map((payment) => (
                            <React.Fragment key={payment.name}>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>{payment.name}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>{payment.detail}</Typography>
                                </Grid>
                            </React.Fragment>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default Review
