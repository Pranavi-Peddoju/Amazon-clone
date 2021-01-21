import React from "react";
//import CurrencyFormat from "react-currency-format"
import NumberFormat from "react-number-format";
import { useStateValue } from "../../StateProvider";
import { getCartTotal } from "../../reducer";
import "./Subtotal.css";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const [{ cart }, dispatch] = useStateValue();
  console.log(getCartTotal(cart));
  const history = useHistory();

  return (
    <div className="subtotal">
      {/* <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal (2 items) : <strong>{value}</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" />
                        This order contains a gift
                    </small>
                    </>
                )}

                decimalScale={2}
                value={99999}
                displayType={"text"}
                thousandSeperator={true}
                thousandsSpacing="2s"
                prefix={"₹"}
            /> */}
      <div className="checkout_freeedelivery">
        <div>
          <CheckCircleRoundedIcon className="freedeliveryIcon" />
        </div>
        <div className="freedeliveryText">
          Your order is eligible for FREE Delivery.
        </div>
      </div>

      <div className="subtotal_text">
        Subtotal ({cart?.length} items) :{" "}
        <strong>
          <NumberFormat
            thousandSeparator={true}
            thousandsGroupStyle="lakh"
            displayType={"text"}
            prefix={"₹"}
            decimalScale={2}
            value={getCartTotal(cart)}
          />
        </strong>
      </div>
      <small className="subtotal_gift">
        <input type="checkbox" />
        This order contains a gift
      </small>
      <button
        className="checkout_button"
        onClick={(e) => history.push("/payment")}
      >
        Proceed to Buy
      </button>
    </div>
  );
}

export default Subtotal;
