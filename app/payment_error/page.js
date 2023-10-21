import Link from "next/link"

export const metadata = {
    title: 'MiauMiau',
    description: 'Shop für kleine, niedliche Tiere',
}

const paymentError = () => {
    return (
        <div>
            <Link href="/">zurück zur Hauptseite</Link>
            <p>payment error</p>
        </div>
    )
}

export default paymentError