abstract class Meal {

    protected items:Map<number,string> = new Map();
    protected mandatoryItems:Set<number> = new Set<number>();
    protected multipleItems:Set<number> = new Set<number>();
    protected complementaryItems:Map<number,string> = new Map();
    protected itemCounts: number[] = new Array(5).fill(0);

    constructor(csid:string){
        this.initItems();
        this.initMandatoryItemSet();
        this.initMultipleItems();
        this.processOrders(csid);
    }

    abstract initItems():void;

    private initMandatoryItemSet():void{
        this.mandatoryItems.add(1).add(2);
    }

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
        return this.items.get(id) + " is missing";
    }

    private multipleValueErr(id:number):string{
        return this.items.get(id) + " cannot be ordered more than once";
    }
}

export {Meal};