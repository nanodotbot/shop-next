import styles from './LinkButtonBack.module.css'
import 'material-symbols/outlined.css';
import { useRouter } from "next/navigation";

const LinkButton = ({address, buttonText}) => {
    const router = useRouter()
    return (
        <button className={styles.button} onClick={() => router.push(address)}><span className="material-symbols-outlined">arrow_back</span> {buttonText}</button>
    )
}

export default LinkButton