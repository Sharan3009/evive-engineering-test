import { Meal } from "./Meal";

class Dinner extends Meal {

    initItems(): void {
        this.items = this.mealData.Dinner;
    }

}

export { Dinner };