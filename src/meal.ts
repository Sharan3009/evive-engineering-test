abstract class Meal {

    protected items:Map<number,string> = new Map();
    protected itemTypes:Map<number,string> = new Map();
    protected mandatoryItems:Set<number> = new Set<number>();
    protected substituteItems:Map<number,string> = new Map<number,string>();
    protected multipleItems:Set<number> = new Set<number>();
    protected complementaryItems:Map<number,string> = new Map();
    protected itemCounts: number[] = new Array(5).fill(0);

    constructor(csid:string){
        this.initItems();
        this.initItemTypes();
        this.initMandatoryItemSet();
        this.initSubstituteItems();
        this.initMultipleItems();
        this.processOrders(csid);
    }

    abstract initItems():void;

    private initItemTypes():void{
        this.itemTypes.set(1,"Main");
        this.itemTypes.set(2,"Side");
        this.itemTypes.set(3,"Drink");
        this.itemTypes.set(4,"Dessert");
    }
    private initMandatoryItemSet():void{
        this.mandatoryItems.add(1).add(2);
    }

    abstract initSubstituteItems():void;

    private processOrders(csid:string):void {
        let ids: string[] = (csid || "").split(",");
        ids.forEach((id)=>{
            this.itemCounts[parseInt(id)]++;
        })
    }

    abstract initMultipleItems():void;

    public getFormattedOrders():string{
        let orders:string[] = [];
        let errors:string[] = [];
        this.itemCounts.forEach((count,index)=>{
            if(this.mandatoryItems.has(index) && count===0){
                errors.push(this.missingValueErr(index));
            } else if(!this.multipleItems.has(index) && count>1){
                errors.push(this.multipleValueErr(index));
            } else if(count==0 && this.substituteItems.has(index)){
                orders.push(<string>this.substituteItems.get(index));
            } else if(count>0 && this.items.get(index)) {
                orders.push(this.itemOrderStr(index,count));
            }
            if(this.complementaryItems.has(index)){
                orders.push(<string>this.complementaryItems.get(index));
            }
        })
        return (errors.length?this.finalErrorStr(errors): this.finalOutputStr(orders));
    }

    private finalErrorStr(errors:string[]):string{
        let str:string = "Unable to process: ";
        return str + errors.join(", ");
    }

    private finalOutputStr(orders:string[]):string{
        return orders.join(", ");
    }

    private itemOrderStr(id:number,count:number):string{
        return <string>this.items.get(id)+(count>1?`(${count})`:"");
    }

    private missingValueErr(id:number):string{
        return this.itemTypes.get(id) + " is missing";
    }

    private multipleValueErr(id:number):string{
        return this.items.get(id) + " cannot be ordered more than once";
    }
}

export {Meal};