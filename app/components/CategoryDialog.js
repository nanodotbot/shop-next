'use client'

import CategoryButton from "./CategoryButton";
import styles from './CategoryDialog.module.css'
import 'material-symbols/outlined.css';

import { useEffect, useState } from "react";

import useOpenStore from "../storeOpen";
import useCategoryStore from "../storeCategory";
import useInputStore from "../storeInput";

const CategoryDialog = () => {
    const openStore = useOpenStore(state => state.open);
    const setOpenStore = useOpenStore(state => state.setOpen);
    const [open, setOpen] = useState(openStore);

    const categoryStore = useCategoryStore(state => state.category);
    const setCategoryStore = useCategoryStore(state => state.setCategory);

    const setInputStore = useInputStore(state => state.setInput);

    // console.log(categoryStore);
    // console.log(openStore);
    // console.log(open);

    // useEffect(() => {
    //     console.log(openStore);
    //     console.log(open);
    // }, [])

    useEffect(() => {
        setOpen(openStore);
    }, [openStore])

    const close = () => {
        setOpen(!open);
        setOpenStore('');
    }

    const handleCategory = category => {
        setOpen(!open);
        setOpenStore('');
        setCategoryStore(category);
        setInputStore('');
    }

    return (
        <dialog open={open} className={styles.dialog}>
            <div className={styles.wrapper}>
                <span className="material-symbols-outlined" onClick={close}>close</span>
                <h1>Kategorien</h1>
                <hr className={styles.hr} />
                <CategoryButton className={styles.h2 + ' ' + styles.nav} buttonText='Alle Artikel' handleClick={() => handleCategory('')} />
                <hr className={styles.hr} />
                {/* <CategoryButton className={styles.h3 + ' ' + styles.nav} buttonText='Flauschige' handleClick={() => handleCategory('fluffy')} />
                <hr className={styles.hr} /> */}
                <CategoryButton className={styles.h4 + ' ' + styles.nav} buttonText='Kätzchen' handleClick={() => handleCategory('kitten')} />
                <CategoryButton className={styles.h4 + ' ' + styles.nav} buttonText='Häschen' handleClick={() => handleCategory('rabbit')} />
                <CategoryButton className={styles.h4 + ' ' + styles.nav} buttonText='Quietscheentchen' handleClick={() => handleCategory('rubberduck')} />
            </div>
        </dialog>
    )
}

export default CategoryDialog