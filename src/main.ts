import { Breakfast } from "./breakfast";
import { Dinner } from "./dinner";
import { Lunch } from "./lunch";
import { Meal } from "./meal";

export class Main {

    constructor(str:string){
        let [type, ids] = str.split(" ");
        let obj:Meal;
        switch(type){
            case "Breakfast":
                obj = new Breakfast(ids);
                break;
            case "Lunch":
                obj = new Lunch(ids);
                break;
            case "Dinner":
                obj = new Dinner(ids);
                break;
            default:
                console.log("error");
                return;
        } 
        console.log(obj.getFormattedOrders());
    }
}
new Main("Dinner 1,2,3");