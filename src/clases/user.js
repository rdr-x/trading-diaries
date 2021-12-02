import Trade from "./trade.js";

export default class User {
    constructor(name, email, password) {
        this.id = ((name.charCodeAt() + email.charCodeAt() + password.charCodeAt()) ** password.charCodeAt()).toString() + "".toString(16)
        this.name = name;
        this.email = email;
        this.password = password;
        this.trades = []
    }

    get Id(){
        return this.id;
    }

    get Name() {
        return this.name;
    }

    set Name(name) {
        this.name = name;
    }

    get Email() {
        return this.email;
    }

    set Email(email) {
        this.email = email;
    }

    set Password(password) {
        this.password = password;
    }

    get Trades(){
        return this.trades;
    }

    addTrade(Trade){ 
        this.trades.push(Trade)
        return Trade;
    }

    findTrade(id){
        const trade = this.trades.find(item => item.id === id);
        if (!trade) {
            throw new Error('trade id not found');
        }
        return trade;
    }

    deleteTrade(id){
        const index = this.trades.findIndex(item => item.id === id);
        if (index === -1) {
            throw new Error('trade not found');
        }
        this.trades.splice(index, 1);
        return { message: "deleted", id };
    }

}
