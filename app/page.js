import styles from './page.module.css'
import CategoryDialog from './components/CategoryDialog';
import { getStripeItems } from './actions';
import Items from './components/Items';

export default async function Home() {
    const fetchItems = () => {
        const items = getStripeItems();
        return items;
    }
    const items = await fetchItems();

    return (
        <main className={styles.main}>
            <Items items={items} />
            <CategoryDialog />
        </main>
        
    )
}
