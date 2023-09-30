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
                <p>Für Testzahlungen kann die folgende Kreditkartennummer verwendet werden:<br />4242 4242 4242 4242</p>
                <p>&laquo;Bug reports&raquo; und &laquo;Feature requests&raquo; nehme ich gerne entgegen.</p>
                <p>GitHub-Repos teile ich auf Anfrage.</p>
            </div>
        </dialog>
    )
}

export default InfoDialog