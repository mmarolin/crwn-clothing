import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KaJNZFZETfqmmJCbpew3Q1OejjZZ4DpvoZPGCZkhUzuzIwlR7P0mpUcVoRQI4hpL55x3wolRDc2ZPBG7fRNXrIZ00wfVcdhjx";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      currency="EUR"
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is ${price}€`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
