import React from "react";
import "./Order.css";
import NumberFormat from "react-number-format";
import CheckoutProduct from "../CheckProduct/CheckoutProduct";
import PaymentProducts from "../PaymentProduct/PaymentProducts";

function Order({ order }) {
  console.log(order);
  return (
    <div className="order">
      <h2>Order</h2>
      <p className="order__id">
        <small>Order Id : {order.id}</small>
      </p>
      {order.data.cart?.map((item) => (
        <PaymentProducts
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
      <NumberFormat
        renderText={(value) => (
          <h3 className="order__total">Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        className="price"
        thousandSeparator={true}
        thousandsGroupStyle="lakh"
        displayType={"text"}
        prefix={"₹"}
      />
    </div>
  );
}

export default Order;
