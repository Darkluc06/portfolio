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



class Main {
    renderer
    data
    frontPage
    constructor(renderer, data) {
        this.renderer = renderer;
        this.data = data;
        this.frontPage = new FrontPage(this.renderer, data);

    }

}

class FrontPage {
    renderer;
    frontpageSection
    frontPageMain;
    aside;
    data

    constructor(renderer, data) {
        this.renderer = renderer;
        this.data = data
        this.frontpageSection = document.createElement("section");
        this.frontpageSection.classList.add("frontPage");
        this.render();

        this.aside = new Aside(this.frontpageSection, this.renderer, data[0].navItem[0]);
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
    navData
    constructor(frontpageSection, renderer, navData) {
        this.frontpageSection = frontpageSection;
        this.renderer = renderer;
        this.navData = navData



        this.elementsCreate();
        this.logoCreate();
        this.render();


        for (let i = 0; i < Object.keys(this.navData).length; i++) {
            this.asideItem = new AsideItem(this.renderer, this.navData[i], i);
        }

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


class AsideItem {
    item;
    button;
    sphere;
    text;
    renderer;
    i;
    constructor(renderer, data, i) {
        this.renderer = renderer;
        this.data = data
        this.i = i
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
        this.text.innerText = this.data
    }

    render() {
        this.renderer.render(".frontPage__nav", this.item);
        this.renderer.renderChild(".frontPage__nav", this.button, this.i);
        this.renderer.renderChildChild(".frontPage__nav", this.sphere, this.i);
        this.renderer.renderChildChild(".frontPage__nav", this.text, this.i);
    }
}

class FrontPageMain {
    constructor() {

    }
}
/* <section class="frontPage__main">
    <figure class="svg svg--left-bottom">
        <img src="./img/sqaureShape(left).png" alt="">
    </figure>
    <figure class="svg svg--right-top">
        <img src="./img/sqaureShape(right).png" alt="">
    </figure>

    <div class="frontPage__centerTitle frontPage__centerTitle--1">
        <h1 class="frontPage__title">
            Fullstack
        </h1>
        <h1 class="frontPage__title">
            Developer
        </h1>
    </div>

    <div class="frontPage__centerTitle frontPage__centerTitle--2">
        <h1 class="frontPage__title">
            Luc
        </h1>
        <h1 class="frontPage__title">
            Zuidema
        </h1>
    </div>

</section> */


class App {
    api;
    main;
    renderer;
    constructor() {
        this.api = new GetData("./data/data.json");
        this.renderer = new Renderer();
        this.api.getJson().then((data) => {
            this.main = new Main(this.renderer, data.english)
        });
    }
}

const app = new App();