//負責將實際的餐點列表顯示到螢幕上
import classes from './AvailableFoods.module.css';
import Card from '../UI/Card';
import FoodItem from './FoodItem/FoodItem';
import { useEffect, useState } from 'react';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

  const AvailableFoods = () => {

      const [meals, setMeals] = useState([]);

      useEffect(() => {
          const fetchMeals = async () => {
              try {
                  const response = await fetch('http://localhost:5258/Products');
                  if (!response.ok) {
                      throw new Error('Could not fetch meals data!');
                  }
                  const data = await response.json();
                  setMeals(data);
              } catch (error) {
                  console.error(error);
              }
          };

          fetchMeals();
      }, []);

    const foodsList = meals.map((meal) => <FoodItem id={meal.id} key={meal.id} name={meal.name} description={meal.description} price={meal.price}/>);

    return <section className={classes.meals}>
      <Card>
        <ul>
        {foodsList}
        </ul>
      </Card>
    </section>
  };

export default AvailableFoods;