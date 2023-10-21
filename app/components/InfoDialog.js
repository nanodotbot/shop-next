'use client'

import { useEffect, useState } from 'react';
import styles from './InfoDialog.module.css';
import 'material-symbols/outlined.css';


const InfoDialog = ({getOpen}) => {
    const [open, setOpen] = useState(false);

    const close = () => {
        setOpen(false);
    }

    useEffect(() => {
        if(getOpen){
            setOpen(true);
        }
    }, [getOpen])

    return (
        <dialog open={open} className={styles.dialog}>
            <div className={styles.main}>
                <span className="material-symbols-outlined" onClick={close}>close</span>
                <h1>Ein paar Infos</h1>
                <p>Beim Erstellen der Seite sind keinerlei Tiere zu Schaden gekommen.</p>
                <p>Das Ziel des Projekts war lediglich die Einbindung der Stripe-Zahlungsseite, unterdessen hat der Shop allerdings etwas an Funktionalität dazugewonnen.</p>
                <p>Für Testzahlungen können die folgende Kreditkartennummer und anonyme, erfundene Angaben verwendet werden:<br />4242 4242 4242 4242</p>
            </div>
        </dialog>
    )
}

export default InfoDialog