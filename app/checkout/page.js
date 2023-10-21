'use client'
import Image from "next/image";
import styles from './page.module.css'
import { useEffect, useState } from "react";
import { checkout } from "../actions";
import LinkButton from "../components/LinkButton";

import useCartStore from "../storeCart";

let sessionItems = [];
let priceIDs = [];
let counted = [];
let countedUnique = [];
let cartCounted = [];
let cartCountedUnique = [];

const handleCheckout = async items => {
    // console.log(items);
    const url = await checkout(items);
    window.location.assign(url);
}

const cart = () => {    
    const [items, setItems] = useState([]);
    const setCartItems = useCartStore(state => state.setCartItems);

    const updateItems = () => {
        sessionItems = JSON.parse(sessionStorage.getItem('items'));
        priceIDs = [];
        counted = [];
        countedUnique = [];
        cartCounted = [];
        cartCountedUnique = [];
        if (sessionItems && priceIDs.length === 0) {
            // console.log('updateItems sessionItems');
            // console.log(sessionItems);
            sessionItems.forEach(item => {
                priceIDs.push(item.id);
            })
            // console.log('priceIDs');
            // console.log(priceIDs);
            priceIDs.forEach((id, index) => {
                const count = priceIDs.filter(element => element === id).length;
                // console.log('count');
                // console.log(count);
                counted.push({ price: id, quantity: count });
                cartCounted.push({ item: sessionItems[index], quantity: count});
            });
            // console.log('cartCounted');
            // console.log(cartCounted);
            counted.forEach((item, index) => {
                const i = priceIDs.indexOf(item.price);
                if (i === index) {
                    countedUnique.push(item);
                }
            })
            cartCounted.forEach((item, index) => {
                // console.log(priceIDs);
                const i = priceIDs.indexOf(item.item.id);
                // console.log(item);
                // console.log(index);
                // console.log(i);
                if (i === index) {
                    cartCountedUnique.push(item);
                }
            })
            // console.log('counted');
            // console.log(counted);
            // console.log('cartCountedUnique');
            // console.log(cartCountedUnique);
            // console.log('countedUnique');
            // console.log(countedUnique);
        }
        // console.log('updateItems cartCountedUnique');
        // console.log(cartCountedUnique);
        setItems(cartCountedUnique);
        // console.log('updateItems items');
        // console.log(items);
    }

    const deleteItem = item => {
        // console.log(item.item.id);
        // console.log(sessionItems);
        const index = sessionItems.findIndex(sitem => sitem.id === item.item.id);
        // console.log(index);
        const sessionItemsCopy = sessionItems;
        // console.log('sessionItemsCopy');
        // console.log(sessionItemsCopy);
        sessionItemsCopy.splice(index, 1);
        // console.log('sessionItemsCopy');
        // console.log(sessionItemsCopy);
        sessionStorage.setItem('items', JSON.stringify(sessionItemsCopy));
        setCartItems([...sessionItemsCopy]);
        
        updateItems();
    }
    const addItem = item => {
        // console.log(item.item);

        const index = sessionItems.findIndex(element => element.id === item.item.id);
        const sessionItemsCopy = [...sessionItems];
        sessionItemsCopy.splice(index, 0, item.item);
        console.log(sessionItemsCopy);

        sessionStorage.setItem('items', JSON.stringify(sessionItemsCopy));
        setCartItems([...sessionItemsCopy]);
        // console.log('sessionStorage');

        updateItems();
        // console.log('addItem items');
        // console.log(items);
    }

    useEffect(() => {
        sessionItems = JSON.parse(sessionStorage.getItem('items'));
        updateItems();
        // console.log('useEffect[] items');
        // console.log(items);
    }, [])

    // useEffect(() => {
    //     console.log('useEffect[items] items');
    //     console.log(items);
    // }, [items])

    return (
        <main className={styles.main}>
            <LinkButton address='/' buttonText='Zurück zu den Knuddeln' />
            <h1>Warenkorb</h1>
            <div className={styles.items}>
                {items?.length === 0 ? <p className={styles.empty}>Ihr Warenkorb ist leer.</p> : (
                    items?.map((item, index) => {
                        return (
                            <div key={index} className={styles.wrapper}>
                                <hr className={styles.hr} />
                                <article className={styles.article}>
                                    <div className={styles.imgwrapper}>
                                        <Image
                                            src={item.item.product.images[0]}
                                            alt={item.item.product.name}
                                            fill
                                            sizes='(max-width: 400px) 120px, 200px'
                                        />
                                    </div>
                                    <div className={styles.productMeta}>
                                        <p className={styles.name}>{item.item.product.name}</p>
                                        <div className={styles.calculation}>
                                            <div className={styles.unit_amount_meta}>
                                                <button onClick={() => deleteItem(item)}>-</button>
                                                <p className={styles.unit_amount}>{item.quantity}</p>
                                                <button onClick={() => addItem(item)}>+</button>
                                            </div>
                                            <p className={styles.calculated}>{(item.quantity * (item.item.unit_amount/100)).toLocaleString('de-CH')}.–</p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        )
                    })
                )}
            </div>
            <hr className={styles.hr} />
            {items?.length !== 0 && <div className={styles.overall}>
                <p>Insgesamt</p>
                <p className={styles.total}>{items.reduce((total, item) => total + item.quantity  * (item.item.unit_amount/100), 0).toLocaleString('de-CH')}.–</p>
            </div>}
            <p className={styles.dataprotection}>Für Testzahlungen können die folgende Kreditkartennummer und anonyme, erfundene Angaben verwendet werden:<br/>
4242 4242 4242 4242<br/>
Jede Zahlung wird auf Seite des Zahlungsservices Stripe registriert und gespeichert. Die Datenschutzerklärung von Stripe ist über folgenden Link aufrufbar:<br/>
<a href="https://stripe.com/at/privacy" target="_blank" rel="noopener noreferrer">Stripe, Datenschutzerklärung</a>
</p>
            {items?.length !== 0 && <button onClick={() => handleCheckout(countedUnique)}>Zur Zahlungsseite</button>}
        </main>
    )
}

export default cart