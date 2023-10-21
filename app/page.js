import styles from './page.module.css'
import CategoryDialog from './components/CategoryDialog';
import { getStripeItems } from './actions';
import Items from './components/Items';
import Header from './components/Header';

export default async function Home() {
    const fetchItems = () => {
        const items = getStripeItems();
        return items;
    }
    const items = await fetchItems();

    return (
        <div>
            <Header />
            <main className={styles.main}>
                <Items items={items} />
                <CategoryDialog />
            </main>
        </div>
        
    )
}
