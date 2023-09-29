'use client'

import { useEffect } from 'react';
import ProductCard from './ProductCard';
import useCategoryStore from '../storeCategory';
import useInputStore from '../storeInput';

const Items = ({items}) => {
    const [stripeItems, setStripeItems] = [items];
    const categoryStore = useCategoryStore(state =>  state.category);
    let category = !categoryStore ? 'Alle Artikel' : categoryStore === 'rabbit' ? 'Häschen' : categoryStore === 'kitten' ? 'Kätzchen' : categoryStore === 'rubberduck' ? 'Quietscheentchen' : '';

    // console.log(stripeItems[0].product.metadata);

    let categoryItems = stripeItems;
    
    categoryStore ? categoryItems = categoryItems.filter(item => item.product.metadata.category === categoryStore) : categoryItems = stripeItems;

    const input = useInputStore(state => state.input);
    // console.log(input);

    if(input) {
        categoryItems = stripeItems;
        categoryItems = categoryItems.filter(item => item.product.name.toLowerCase().includes(input.toLowerCase()));
        category = input;
    }

    // useEffect(() => {
    //     console.log(categoryStore);
    //     items.forEach(item => {
    //         console.log(item);
    //     });
    // }, [])

    return (
        <div>
            <h1>{category}</h1>
            {categoryItems?.map(item => {
                return (
                    <ProductCard key={item.product.id} item={item} />
                )
            })}
        </div>
    )
}

export default Items