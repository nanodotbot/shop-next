import Link from "next/link"

const paymentError = () => {
    return (
        <div>
            <Link href="/">zurück zur Hauptseite</Link>
            <p>payment error</p>
        </div>
    )
}

export default paymentError