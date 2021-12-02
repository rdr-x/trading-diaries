export default class Trade {
    constructor(title, investment, description, price, target, risk){
        this.id = "0x" + ((title.charCodeAt() + investment + description.charCodeAt() + price + target + risk) % risk).toString();
        this.title = title;
        this.investment = investment;
        this.description = description;
        this.price = price;
        this.target = target;
        this.risk = risk;
        this.date = Date.call();
    }

    get Id(){
        return this.id;
    }

    get Name() {
        return this.title;
    }

    get Capital() {
        return this.investment;
    }

    set Capital(invesment) {
        this.investment = invesment;
        return this.investment;
    }

    get Description() {
        return this.description;
    }

    set Description(description) {
        this.description = description;
        return this.description;
    }

    get Date() {
        return this.date;
    }

    get Price(){
        return this.price;
    }

    set Price(price){
        this.price = price;
        return this.price;
    }

    get Target(){
        return this.target;
    }

    set Target(target){
        this.target = target;
        return this.target;
    }

    get Risk() {
        return this.risk;
    }

    set Risk(risk) {
        this.risk = risk;
        return this.risk;
    }
}

