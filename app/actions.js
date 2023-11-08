'use server'
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET);

export const getStripeItems = async () => {
    const data = await stripe.prices.list({
        expand: ['data.product']
    });
    const prices = data.data;
    return prices;
}

export const checkout = async (arrayOfObjects) => {
    console.log(arrayOfObjects);
    const stripe = new Stripe(process.env.STRIPE_SECRET);
    try {
        const session = await stripe.checkout.sessions.create({
            line_items: arrayOfObjects,
            // line_items: [
            //     {
            //         price: id,
            //         quantity: 1,
            //     },
            // ],
            mode: 'payment',
            success_url: `https://main.d39sz03c4cgqx1.amplifyapp.com/payment_success`,
            cancel_url: `https://main.d39sz03c4cgqx1.amplifyapp.com/checkout`,
        })
        return session.url;        
    } catch (error) {
        console.log(error);
    }
}
