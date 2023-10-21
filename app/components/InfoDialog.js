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
                <h2>Verwendete Bilder:</h2>
                <div className={styles.pictures}>
                    <p><a href="https://unsplash.com/de/fotos/gelbe-gummiente-auf-weissem-grund-LhqLdDPcSV8" target="_blank" rel="noopener noreferrer">Gummiente | Timothy Dykes</a></p>
                    <p><a href="https://www.pexels.com/de-de/foto/nahaufnahmefoto-von-kuken-2695703/" target="_blank" rel="noopener noreferrer">Küken | Adil</a></p>
                    <p><a href="https://www.pexels.com/de-de/foto/graues-pelzkatzchen-127028/" target="_blank" rel="noopener noreferrer">Pelzkätzchen | Vadim B</a></p>
                    <p><a href="https://unsplash.com/de/fotos/%ED%9D%B0%EC%83%89-%EC%84%AC%EC%9C%A0%EC%97%90-%ED%9D%B0%EC%83%89%EA%B3%BC-%ED%9A%8C%EC%83%89-%EA%B3%A0%EC%96%91%EC%9D%B4-so5nsYDOdxw" target="_blank" rel="noopener noreferrer">Kätzchen | Kote Puerto</a></p>
                    <p><a href="https://unsplash.com/de/fotos/braune-und-schwarze-katze-auf-weissem-hintergrund-Y0WXj3xqJz0" target="_blank" rel="noopener noreferrer">Katze | Sergey Semin</a></p>
                    <p><a href="https://www.pexels.com/de-de/foto/hande-haustier-niedlich-festhalten-6957670/" target="_blank" rel="noopener noreferrer">Hase | Mikhail Nilov</a></p>
                    <p><a href="https://www.pexels.com/photo/a-white-rabbit-near-a-person-6846047/" target="_blank" rel="noopener noreferrer">Rabbit | Tima Miroshnichenko</a></p>
                    <p><a href="https://unsplash.com/de/fotos/%EB%B2%BD-%EB%92%A4%EC%97%90-%EA%B3%A0%EC%96%91%EC%9D%B4-b9K_LTz079c" target="_blank" rel="noopener noreferrer">Katze | Clément Falize</a></p>
                </div>
            </div>
        </dialog>
    )
}

export default InfoDialog