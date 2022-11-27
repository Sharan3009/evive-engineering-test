import { Meal } from "./meal";

class Lunch extends Meal {
    initSubstituteItems(): void {
        this.substituteItems.set(3,"Water");
    }

    initItems(): void {
        this.items.set(1,"Sandwich");
        this.items.set(2,"Chips");
        this.items.set(3,"Soda");
    }

    initMultipleItems():void {
        this.multipleItems.add(2);
    }

}

export { Lunch };