import './globals.css'
import { Karla } from 'next/font/google'
import 'material-symbols/outlined.css';

import styles from './layout.module.css'
import ShoppingCart from './components/ShoppingCart';

const karla = Karla({ subsets: ['latin'] });

export const metadata = {
    title: 'MiauMiau',
    description: 'Shop für kleine, niedliche Tiere',
}

export default function RootLayout({ children }) {

    return (
        <html lang="de">
            <body className={karla.className}>
                <ShoppingCart></ShoppingCart>
                {children}
                <footer className={styles.footer}>
                    <a href="http://notanumber.ch" target="_blank" rel="noopener noreferrer">notanumber.ch</a>
                </footer>
            </body>
        </html>
    )
}
