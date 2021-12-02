const API = "https://api.bitso.com/v3/order_book/?book=btc_usd"
const asks = document.getElementById("asks");
const bids = document.getElementById("bids");
const consumingAPI = async (apiUrl) => {
    try {
        const data = await fetch(apiUrl);
        const answJson = await data.json(data);
        for (let i = 0; i < answJson.payload.asks.length; i++) {
            asks.appendChild(document.createTextNode(answJson.payload.asks[i].price.toString() + " "));
            
        }
        for (let i = 0; i < answJson.payload.asks.length; i++) {
            bids.appendChild(document.createTextNode(answJson.payload.bids[i].price.toString() + " "))
            
        }
        
    } catch (error) {
        console.error(error);
    }
}

consumingAPI(API);
