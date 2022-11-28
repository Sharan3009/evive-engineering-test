import { Item } from "../Interface/Item";
import { MealData } from "../Interface/MealData";
import { readJSON } from "../util";

abstract class Meal {

    protected mealData:MealData = readJSON("./db.json");
    protected items:any;
    protected itemCounts: number[] = new Array(5).fill(0); // for item 1,2,3,4. 0 is ignored

    constructor(csid:string){
        this.initItems();
        this.processOrders(csid);
    }

    // function to be implemented by children to initiate items
    abstract initItems():void;

    // process order counts. Here index is the item id
    private processOrders(csid:string):void {
        let ids: string[] = (csid || "").split(",");
        ids.forEach((id)=>{
            this.itemCounts[parseInt(id)]++;
        })
    }

    public getFormattedOrders():string{
        let orders:string[] = [];
        let errors:string[] = [];
        this.itemCounts.forEach((count,itemId)=>{
            if(itemId in this.items){
                let itemObj:Item = this.items[itemId];
                if(itemObj.required && count==0){ // if items is required but count is 0
                    errors.push(this.missingValueErr(itemObj.type));
                } else if(!itemObj.multiple && count>1){ // if multiple is not allowed but count is more than 1
                    errors.push(this.multipleValueErr(itemObj.name));
                } else if(count==0 && itemObj.default){ // if item has default but count is 0. use default (Water)
                    orders.push(this.itemOrderStr(itemObj.default,1));
                } else if(count>0){ // positive scenario where everything is fine
                    orders.push(this.itemOrderStr(itemObj.name,count));
                }
                // if there is complementary item present and has to be served
                if(itemObj.complementary){
                    orders.push(this.itemOrderStr(itemObj.complementary,1));
                }
            }
        })
        // if we have errors, then return errors only. Otherwise the orders
        return (errors.length ? 
            this.finalErrorStr(errors) :
            this.finalOutputStr(orders));
    }

    private finalErrorStr(errors:string[]):string{
        let str:string = "Unable to process: ";
        return str + errors.join(", ");
    }

    private finalOutputStr(orders:string[]):string{
        return orders.join(", ");
    }

    private itemOrderStr(item:string,count:number):string{
        return `${item}${ count>1 ? `(${count})` :""}`;
    }

    private missingValueErr(itemType:string):string{
        return itemType + " is missing";
    }

    private multipleValueErr(item:string):string{
        return item + " cannot be ordered more than once";
    }
}

export {Meal};