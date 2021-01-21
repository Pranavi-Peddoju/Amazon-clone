import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "../../axios";
import React, { useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { Link, useHistory } from "react-router-dom";
import { getCartTotal } from "../../reducer";
import { useStateValue } from "../../StateProvider";
import PaymentProducts from "../PaymentProduct/PaymentProducts";
import "./Payment.css";
import { db } from "../../Firebase";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

function Payment() {
  const [{ cart, user }, dispatch] = useStateValue();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const stripe = useStripe();
  const history = useHistory();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getCartTotal(cart) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [cart]);

  console.log("secret >>>>", clientSecret);

  const handlePayment = async (event) => {
    event.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            cart: cart,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        dispatch({
          type: "EMPTY_CART",
        });

        history.replace("/orders");
      });
  };

  console.log("payemnt sucess status: ", succeeded);

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <h2>
        Checkout (<Link to="/checkout">{cart?.length} items</Link>) to Pay
      </h2>
      <div className="paymentContainer">
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <div>{user?.email}</div>
            <div>Sri Nagar Colony</div>
            <div>Hyderabad - 500045</div>
          </div>
        </div>
        <div className="payment_products">
          <div className="payment_title">
            <h3>Review Your Cart</h3>
          </div>
          <div>
            {cart.map((item) => (
              <PaymentProducts
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            ))}
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">
            <form onSubmit={handlePayment}>
              <CardElement className="card_element" onChange={handleChange} />
              <div className="payment_priceDetails">
                <h3>Order Total </h3>
                <NumberFormat
                  thousandSeparator={true}
                  thousandsGroupStyle="lakh"
                  displayType={"text"}
                  prefix={"₹"}
                  value={getCartTotal(cart)}
                />
                <div>
                  <button
                    className="payment_button"
                    disabled={processing || disabled || succeeded}
                  >
                    <span>{processing ? <p>Processing</p> : "BUY NOW"}</span>
                  </button>
                </div>
              </div>
            </form>
            <div>
              <button className="samplebutton" onClick={handleClickOpen}>
                Get Sample Card Details
              </button>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Want sample cards to check out this functionality?"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    4242424242424242 - Visa - Any 3 digits - Any future date
                    4000056655665556 - Visa (debit) - Any 3 digits - Any future
                    date 5555555555554444 - Mastercard - Any 3 digits - Any
                    future date
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={handleClose} color="primary" autoFocus>
                    Ok
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </div>
        </div>
        {/* <div className="payment_subtotal">
          Subtotal ({cart?.length} items) :{" "}
          <strong>
            <NumberFormat
              thousandSeparator={true}
              thousandsGroupStyle="lakh"
              displayType={"text"}
              prefix={"₹"}
              value={getCartTotal(cart)}
            />
          </strong>
        </div> */}
      </div>
    </div>
  );
}

export default Payment;
