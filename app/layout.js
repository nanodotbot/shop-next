'use client'

import './globals.css'
import Image from 'next/image';
import Link from 'next/link';
import { Karla } from 'next/font/google'
import 'material-symbols/outlined.css';

import styles from './layout.module.css'
import { useEffect, useState } from 'react';
import useCartStore from './storeCart';
import useOpenStore from './storeOpen';
import useInputStore from './storeInput';
import InfoDialog from './components/InfoDialog';

const karla = Karla({ subsets: ['latin'] });

export const metadata = {
    title: 'Buy rabbits',
    description: 'Buy rabbits and other stuff',
}
let sessionItems = [];

export default function RootLayout({ children }) {
    const cartItems = useCartStore(state => state.cartItems);
    const setCartItems = useCartStore(state => state.setCartItems);
    
    const setOpen = useOpenStore(state => state.setOpen);
    const [openInfo, setOpenInfo] = useState(false);

    const handleInfo = () => {
        setOpenInfo(Math.random());
    }

    const [input, setInput] = useState('');
    const inputStore = useInputStore(state => state.input);
    const setInputStore = useInputStore(state => state.setInput);

    const open = () => {
        setOpen('open');
    }

    const focus = () => {
        setInputStore(input);
    }
    
    useEffect(() => {
        sessionItems = JSON.parse(sessionStorage.getItem('items')) || [];
        setCartItems([...sessionItems]);
    }, []);

    useEffect(() => {
        // console.log(input);
        setInputStore(input);
    }, [input])

    // useEffect(() => {
    //     console.log(inputStore);
    // }, [inputStore])

    return (
        <html lang="de">
            <body className={karla.className}>
                <header className={styles.header}>
                    <div className={styles.logoLinkWrapper}>
                        <Link href='/' className={styles.logoLink}>
                            <Image
                                className={styles.logo}
                                src='/logo.png'
                                height={40}
                                width={40}
                                alt='logo'
                                priority='true'
                                />
                        </Link>
                    </div>
                    <nav className={styles.filter}>
                        <div>
                            <label htmlFor="search-items">Artikelsuche</label>
                            <input id='search-items' type="text" value={input} onChange={e => setInput(e.target.value)} />
                        </div>
                        <span className="material-symbols-outlined" onClick={focus}>search</span>
                        <span className="material-symbols-outlined" onClick={open}>filter_alt</span>
                    </nav>
                    <nav className={styles.menu}>
                        <Link href='./checkout' className={styles.cartLink}>
                            <span className="material-symbols-outlined">shopping_cart</span>
                            <p>{cartItems?.length}</p>
                        </Link>
                        <span className="material-symbols-outlined" onClick={handleInfo}>info</span>
                    </nav>
                </header>
                {children}
                <footer className={styles.footer}>
                    <a href="http://notanumber.ch" target="_blank" rel="noopener noreferrer">notanumber.ch</a>
                </footer>
                <InfoDialog getOpen={openInfo} />
            </body>
        </html>
    )
}
