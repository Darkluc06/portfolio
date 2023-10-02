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

class Renderer {
    render(whereToRender, whatToRender) {
        document.querySelector(whereToRender).appendChild(whatToRender);
    }
    renderChild(whereToRender, whatToRender, i) {
        parent = document.querySelector(whereToRender);
        parent.children[i].appendChild(whatToRender);
    }
    renderChildChild(whereToRender, whatToRender, i) {
        parent = document.querySelector(whereToRender);
        parent.children[i].children[0].appendChild(whatToRender);
    }
}

class Cleaner{
    clean(whereToClean){
        document.querySelector(whereToClean).innerHTML = ""
    }
}