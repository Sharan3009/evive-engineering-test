import { Meal } from "./Meal";

class Lunch extends Meal {

    initItems(): void {
        this.items = this.mealData.Lunch;
    }

}

export { Lunch };