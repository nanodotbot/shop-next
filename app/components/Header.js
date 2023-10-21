import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>

            <div>
                <h1 id="function">MiauMiau</h1>
                <p>– dein Shop für kleine, niedliche Gefährten</p>
            </div>

        </header>
    )
}

export default Header