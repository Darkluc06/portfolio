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
}



class Main{
    renderer
    data
    frontPage
    constructor(renderer, data){
        this.renderer = renderer;
        this.data = data;
        this.frontPage = new FrontPage(this.renderer);

    }

}

class FrontPage{
    renderer;
    frontpageSection
    frontPageMain;
    aside;

    constructor(renderer){
        this.renderer = renderer;
        this.frontpageSection = document.createElement("section");
        this.frontpageSection.classList.add("frontPage");
        this.render();

        this.aside = new Aside(this.frontpageSection, this.renderer);
    }
    render(){
        this.renderer.render("body", this.frontpageSection)
    }
}


class Aside{
    ul;
    logo;
    AsideItem;
    frontpageSection;
    renderer
    constructor(frontpageSection, renderer){
        this.frontpageSection = frontpageSection;
        this.renderer = renderer;
        this.ul = document.createElement("ul");
        this.ul.classList.add("frontPage__nav");
    }
    render(){
        
    }
}

class AsideItem{
    constructor(){

    }
}

class FrontPageMain{
    constructor(){

    }
}


class App{
    api;
    main;
    renderer;
    constructor(){
        this.api = new GetData("./data/data.json");
        this.renderer = new Renderer();
        this.api.getJson().then((data) => {
            this.main = new Main(this.renderer, data)
        });
    }
}

const app = new App();