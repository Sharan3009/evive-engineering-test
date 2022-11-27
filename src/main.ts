import { Breakfast } from "./breakfast";
import { Dinner } from "./dinner";
import { Lunch } from "./lunch";
import { Meal } from "./meal";

export function main(str:string):string {

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
            return "Wrong Meal Type";
    }
    return obj.getFormattedOrders();
}