import { useLayoutEffect } from 'react'; 
import { View, StyleSheet, FlatList } from 'react-native'

import { MEALS, CATEGORIES } from "../data/dummy-data";

import MealItem from '../components/MealsList/MealItem';
import MealsList from '../components/MealsList/MealsList';

function MealsOverviewScreen({ route, navigation }) {
    const catId = route.params.categoryId; // Can use useRoute Hook

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.includes(catId);
    });

    // This hook is loaded before the component has been rendered
    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(
            (category) => category.id === catId).title;

        navigation.setOptions({
            title: categoryTitle
        });
    }, [catId, navigation])

    return <MealsList items={displayedMeals} />

}

export default MealsOverviewScreen;

