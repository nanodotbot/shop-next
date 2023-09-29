'use client'
import Link from 'next/link';
import Image from 'next/image';
import styles from './ProductCard.module.css'

import useCartStore from "../storeCart";
import { useEffect } from 'react';

let sessionItems = [];

const ProductCard = ({ item }) => {
    // console.log('ProductCard item');
    // console.log(item);
    const setCartItems = useCartStore(state => state.setCartItems);
    const cartItems = useCartStore(state => state.cartItems);
    
    const addToCart = (e, item) => {
        e.preventDefault();
        sessionItems = JSON.parse(sessionStorage.getItem('items')) || [];
        // console.log('sessionstorage items:');
        // console.log(sessionItems);

        const index = sessionItems.findIndex(element => element.id === item.id);

        const sessionItemsCopy = [...sessionItems];

        index !== -1 ? sessionItemsCopy.splice(index, 0, item) : sessionItemsCopy.push(item);

        console.log(sessionItemsCopy);

        sessionStorage.setItem('items', JSON.stringify([...sessionItemsCopy]));

        const updatedSessionStorage = JSON.parse(sessionStorage.getItem('items'));
        // console.log('updated sessionstorage');
        // console.log(updatedSessionStorage);

        setCartItems([...updatedSessionStorage]);
    }

    // useEffect(() => {
    //     console.log('cartitems');
    //     console.log(cartItems);
    // }, [cartItems])

    return (
        <article key={item.product.id}>
            <hr className={styles.hr} />
            <Link className={styles.article} href='/'>
                <div className={styles.imgwrapper}>
                    <Image
                        src={item.product.images[0]}
                        alt={item.product.name}
                        fill
                        sizes='(max-width: 400px) 120px, 200px'
                    />
                </div>
                <div className={styles.productMeta}>
                    <div className={styles.itemContents}>
                        <p className={styles.name}>{item.product.name}</p>
                        <p className={styles.unit_amount}>{(item.unit_amount/100).toLocaleString('de-CH')}.–</p>
                        <p className={styles.description}>{item.product.description}</p>
                    </div>
                    <div className={styles.cart}>
                        <span className="material-symbols-outlined" onClick={e => addToCart(e, item)}>shopping_cart</span>
                    </div>
                </div>
            </Link>
        </article>
    )
}

export default ProductCard