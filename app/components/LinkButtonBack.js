import styles from './LinkButtonBack.module.css'
import 'material-symbols/outlined.css';
import { useRouter } from "next/navigation";

const LinkButtonBack = () => {
    const router = useRouter()
    return (
        <button className={styles.button} onClick={() => router.back()}><span className="material-symbols-outlined">arrow_back</span> Zurück</button>
    )
}

export default LinkButtonBack