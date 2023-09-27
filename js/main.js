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



class Main {
    renderer
    data
    frontPage
    constructor(renderer, data) {
        this.renderer = renderer;
        this.data = data;
        this.frontPage = new FrontPage(this.renderer);

    }

}

class FrontPage {
    renderer;
    frontpageSection
    frontPageMain;
    aside;

    constructor(renderer) {
        this.renderer = renderer;
        this.frontpageSection = document.createElement("section");
        this.frontpageSection.classList.add("frontPage");
        this.render();

        this.aside = new Aside(this.frontpageSection, this.renderer);
    }
    render() {
        this.renderer.render("body", this.frontpageSection)
    }
}


class Aside {
    aside;
    ul;
    logo;
    asideItem;
    frontpageSection;
    renderer;
    logoButton;
    logoLink;
    logoImg;
    constructor(frontpageSection, renderer) {
        this.frontpageSection = frontpageSection;
        this.renderer = renderer;


        this.elementsCreate();
        this.logoCreate();
        this.render();


        this.asideItem = new AsideItem(this.renderer);
    }

    elementsCreate() {
        this.aside = document.createElement("section");
        this.aside.classList.add("frontPage__aside");

        this.ul = document.createElement("ul");
        this.ul.classList.add("frontPage__nav");
    }

    logoCreate() {
        this.logoButton = document.createElement("button")
        this.logoButton.classList.add("frontPage__logo")
        this.logoLink = document.createElement("a")
        this.logoLink.classList.add("frontPage__logoLink")
        this.logoImg = document.createElement("img")
        this.logoImg.classList.add("frontPage__logoImg")
        this.logoImg.setAttribute("src", "./img/luc's logo.png");
        this.logoImg.setAttribute("alt", "logo for Luc's portfolio resembling the first letters of the name Luc Zuidema(LZ)");
    }



render() {
    this.renderer.render(".frontPage", this.aside)
    this.renderer.render(".frontPage__aside", this.logoButton)
    this.renderer.render(".frontPage__logo", this.logoLink)
    this.renderer.render(".frontPage__logoLink", this.logoImg)
    this.renderer.render(".frontPage__aside", this.ul);
}
}

    // <li class="frontPage__navItem">
    //     <button class="frontPage__navButton">
    //         <span class="frontPage__navCircle"></span>
    //         <img src="./img/Skills_white.png" alt="Hard skills" class="frontPage__navImg">
    //     </button>
    // </li>

class AsideItem {
    item;
    button;
    sphere;
    text;
    renderer
    constructor(renderer) {
        this.renderer = renderer;
        this.elementsCreate()
        this.render()
    }
    elementsCreate() {
        this.item = document.createElement("li");
        this.item.classList.add("frontPage__navItem");

        this.button = document.createElement("button");
        this.button.classList.add("frontPage__navButton");

        this.sphere = document.createElement("span");
        this.sphere.classList.add("frontPage__navSphere");

        this.text = document.createElement("h3");
        this.text.classList.add("frontPage__navImg");
        this.text.innerText = "Skills"
    }

    render(){
        this.renderer.render(".frontPage__nav", this.item);
        this.renderer.render(".frontPage__navItem", this.button);
        this.renderer.render(".frontPage__navButton", this.sphere);
        this.renderer.render(".frontPage__navButton", this.text);
    }
}

class FrontPageMain {
    constructor() {

    }
}


class App {
    api;
    main;
    renderer;
    constructor() {
        this.api = new GetData("./data/data.json");
        this.renderer = new Renderer();
        this.api.getJson().then((data) => {
            this.main = new Main(this.renderer, data)
        });
    }
}

const app = new App();