import { Breakfast } from "./Class/Breakfast";
import { Dinner } from "./Class/Dinner";
import { Lunch } from "./Class/Lunch";
import { Meal } from "./Class/Meal";

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