import styles from './LinkButtonBack.module.css'

const CategoryButton = ({className, handleClick, buttonText}) => {
    return (
        <button className={styles.button + ' ' + className} onClick={handleClick}>{buttonText}</button>
    )
}

export default CategoryButton