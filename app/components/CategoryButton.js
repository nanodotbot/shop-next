import styles from './CategoryButton.module.css'

const CategoryButton = ({className, handleClick, buttonText}) => {
    return (
        <button className={styles.button + ' ' + className} onClick={handleClick}>{buttonText}</button>
    )
}

export default CategoryButton