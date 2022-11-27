import { Meal } from "./meal";

class Breakfast extends Meal {
    initSubstituteItems(): void {
        this.substituteItems.set(3,"Water");
    }

    initItems(): void {
        this.items.set(1,"Eggs");
        this.items.set(2,"Toast");
        this.items.set(3,"Coffee");
    }

    initMultipleItems():void {
        this.multipleItems.add(3);
    }

}

export { Breakfast };