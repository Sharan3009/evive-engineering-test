import { Meal } from "./Meal";

class Breakfast extends Meal {

    initItems(): void {
        this.items = this.mealData.Breakfast;
    }

}

export { Breakfast };