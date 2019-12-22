import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_TDxVj65IXQ2UERldVHMWJu4p003kkbkPYD';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name= 'CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='data:image/png;base64,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'
            description= {`Your total is $${price}`}
            amount= {priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey= {publishableKey}
        />
    );
};

export default StripeCheckoutButton;
