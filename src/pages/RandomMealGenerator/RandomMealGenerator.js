import React, { useState } from 'react';

import Header from '@Components/Header/Header';
import Action from './components/Action';
import Ingredients from './components/Ingredients';
import Instructions from './components/Instructions';

/*
Meal object
strMeal: name of meal
strMealThumb: image link
strInstructions: instructions
strArea: type of food
strCategory: category (vegetarian, dessert, starter)
strYoutube: youtube url to embed
strIngredient(1-20): string ingredients, empty if none
strMeasure(1-20): amount to measure for ingredients, empty string if none
strTags: tags, if any
*/

const RandomMealGenerator = () => {
    const [meal, setMeal] = useState();
    const [tab, setTab] = useState('ingredients');

    const generateMeal = () => {
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
            .then(response => response.json())
            .then(meal => setMeal(meal.meals[0]));
    }

    const displayIngredients = () => {
        let mealIngredients = [];
        let mealMeasures = [];

        if (meal !== undefined) {
            mealIngredients = [
                meal.strIngredient1,
                meal.strIngredient2,
                meal.strIngredient3,
                meal.strIngredient4,
                meal.strIngredient5,
                meal.strIngredient6,
                meal.strIngredient7,
                meal.strIngredient8,
                meal.strIngredient9,
                meal.strIngredient10,
                meal.strIngredient11,
                meal.strIngredient12,
                meal.strIngredient13,
                meal.strIngredient14,
                meal.strIngredient15,
                meal.strIngredient16,
                meal.strIngredient17,
                meal.strIngredient18,
                meal.strIngredient19,
                meal.strIngredient20
            ].filter((ingredient) => ingredient != '' && ingredient != null)

            mealMeasures = [
                meal.strMeasure1,
                meal.strMeasure2,
                meal.strMeasure3,
                meal.strMeasure4,
                meal.strMeasure5,
                meal.strMeasure6,
                meal.strMeasure7,
                meal.strMeasure8,
                meal.strMeasure9,
                meal.strMeasure10,
                meal.strMeasure11,
                meal.strMeasure12,
                meal.strMeasure13,
                meal.strMeasure14,
                meal.strMeasure15,
                meal.strMeasure16,
                meal.strMeasure17,
                meal.strMeasure18,
                meal.strMeasure19,
                meal.strMeasure20
            ].filter((measure) => measure != '' && measure != null)

        }

        return (
            <div>
                {mealIngredients.map((ingredient, index) => {
                    return <p className='text' key={index}>{ingredient}: {mealMeasures[index]}</p>
                })}
            </div>
        );
    }

    return (
        <div className='page'>

            {meal !== undefined &&
                <div>
                    <div className='container widget random-meal-generator__large-container'>

                        <Header title={meal.strMeal} />
                        <button className='btn' onClick={generateMeal}>Still Feeling Hungry?</button>

                        <img src={meal.strMealThumb} className='random-meal-generator__meal-image'></img>
                        <p className='text'>Category: {meal.strCategory}</p>
                        <p className='text'>Region Specialty: {meal.strArea}</p>
                        {meal.strTags != null && <p className='text'>Tags: {meal.strTags}</p>}

                        <div className='random-meal-generator__tab-container'>
                            <button className='random-meal-generator__tab' onClick={() => setTab('ingredients')} autoFocus>Ingredients</button>
                            <button className='random-meal-generator__tab' onClick={() => setTab('instructions')}>Instructions</button>
                        </div>

                        {tab == 'ingredients' && <Ingredients title='Ingredients' displayIngredients={displayIngredients()} />}
                        {tab == 'instructions' && <Instructions title='Instructions' instructions={meal.strInstructions} />}
                    </div>
                </div>
            }

            {meal === undefined && <Action generateMeal={generateMeal} title='Feeling Hungry?' subtitle='Generate a random meal by clicking below' />}


        </div >
    )
};


export default RandomMealGenerator;