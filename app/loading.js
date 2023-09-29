import Spinner from './components/Spinner';
import styles from './loading.module.css'

const Loading = () => {
    return (
        <div className={styles.wrapper}>
            <Spinner />
        </div>
    )
};

export default Loading;