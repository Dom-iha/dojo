import DUMMY_MEALS from "./dummy-meals";
import classes from "./AvailableMeals.module.css";
import Card from "../../components/ui/Card";
import MealItem from "./MealItem/MealItem";

function AvailableMeals(props) {
   const mealsList = DUMMY_MEALS.map((meal) => (
      <MealItem
         id={meal.id}
         key={meal.id}
         name={meal.name}
         price={meal.price}
         description={meal.description}
      />
   ));

   return (
      <section className={classes.meals}>
         <Card>
            <ul>{mealsList}</ul>
         </Card>
      </section>
   );
}

export default AvailableMeals;
