class GetData {
    url;
    data = null;
    constructor(newUrl) {
        this.url = newUrl
    }
    async getJson() {
        await fetch(this.url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.data = data
            });
        return this.data;
    }
}

class App{
    api
    constructor(){
        this.api = new GetData("../data/data.json")
        this.api.getJson().then((data) => {});
    }
}

const app = new App();