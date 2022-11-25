import { Meal } from "./meal";

class Lunch extends Meal {

    constructor(csids:string){
        super(csids);
        this.initComplementaryItems();
    }

    initItems(): void {
        this.items.set(1,"Sandwich");
        this.items.set(2,"Chips");
        this.items.set(3,"Soda");
    }

    initMultipleItems():void {
        this.multipleItems.add(2);
    }

    initComplementaryItems():void {
        this.complementaryItems.set(3,"Water");
    }

}

export { Lunch };