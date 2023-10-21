'use client'
import Link from "next/link"
import styles from './page.module.css'
import LinkButton from "../components/LinkButton"
import { useEffect } from "react"
import useCartStore from '../storeCart';

export const metadata = {
    title: 'MiauMiau',
    description: 'Shop für kleine, niedliche Tiere',
}

const paymentSuccess = () => {
    const setCartItems = useCartStore(state => state.setCartItems);
    useEffect(() => {
        sessionStorage.removeItem('items');
        setCartItems([]);
    }, [])

    return (
        <main className={styles.main}>
            <LinkButton address='/' buttonText='Zurück zu den knuddeligen Gesellen' />
            <h1>Zahlung erfolgreich</h1>
            <p>Vielen Dank für Ihren Einkauf! Wir hoffen, Sie haben sehr viel Spass an Ihrem/Ihren neu erworbenen Spielgefährten.</p>
        </main>
    )
}

export default paymentSuccess