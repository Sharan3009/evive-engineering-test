import { Meal } from "./meal";

class Dinner extends Meal {
    initSubstituteItems(): void {
        // no substite of dinner. Water is complementary
    }
    constructor(csids:string){
        super(csids);
        this.appendMandatoryItems();
        this.initComplementaryItems();
    }
    
    initItems(): void {
        this.items.set(1,"Steak");
        this.items.set(2,"Potatoes");
        this.items.set(3,"Wine");
        this.items.set(4,"Cake");
    }

    initMultipleItems():void {
        // no multiple qty item
    }

    appendMandatoryItems():void {
        this.mandatoryItems.add(4);
    }

    initComplementaryItems():void {
        this.complementaryItems.set(3,"Water");
    }

}

export { Dinner };