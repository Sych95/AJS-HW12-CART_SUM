import Buyable from './Buyable';

export default class Cart {
    private items: Buyable[] = [];
    add(item: Buyable): void {
        this.items.push(item);
    }
    getAll(): Buyable[] {
        return [...this.items];
    }
    
    getSum():number {
        let sumPrice:number = 0;
        this.items.forEach((item) =>{sumPrice += item.price});

        return sumPrice
    }

    getDiscountSum(disount:number):number {
        let discountedSum:number = 0;
        discountedSum = this.getSum() * (1-disount);
        return discountedSum;
    }

    removeItem(id:number):void{
        const itemToRemoveIndex:number = this.items.findIndex((item)=> {if(item.id === id){ return item}})
        this.items.splice(itemToRemoveIndex,1)
    }
}