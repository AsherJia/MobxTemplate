import { observable, computed, autorun } from "mobx";

export default class OrderLine {
    @observable price:number = 0;
    @observable amount:number = 1;

    constructor(price) {
        this.price = price;
    }

    @computed get total() {
        return this.price * this.amount;
    }

    changeCount = (count) => {
        this.amount = count
    }
}
