import { Item } from "../Interface/Item";
import { MealData } from "../Interface/MealData";
import { readJSON } from "../util";

abstract class Meal {

    protected mealData:MealData = readJSON("./db.json");
    protected items:any;
    protected itemCounts: number[] = new Array(5).fill(0);

    constructor(csid:string){
        this.initItems();
        this.processOrders(csid);
    }

    abstract initItems():void;

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
                if(itemObj.required && count==0){
                    errors.push(this.missingValueErr(itemObj.type));
                } else if(!itemObj.multiple && count>1){
                    errors.push(this.multipleValueErr(itemObj.name));
                } else if(count==0 && itemObj.default){
                    orders.push(this.itemOrderStr(itemObj.default,1));
                } else if(count>0){
                    orders.push(this.itemOrderStr(itemObj.name,count));
                }
                if(itemObj.complementary){
                    orders.push(this.itemOrderStr(itemObj.complementary,1));
                }
            }
        })
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