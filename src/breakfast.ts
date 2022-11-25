import { Meal } from "./meal";

class Breakfast extends Meal {

    initItems(): void {
        this.items.set(1,"Eggs");
        this.items.set(2,"Toast");
        this.items.set(3,"Coffee");
    }

    initMultipleItems():void {
        this.multipleItems.add(3);
    }

    print():void{
        console.log(this.itemCounts);
    }
    

}

export { Breakfast };