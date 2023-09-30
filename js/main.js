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
    main
    skills
    constructor(renderer, data) {
        this.renderer = renderer;
        this.data = data;

        this.main = document.createElement("main")

        this.render()

        this.frontPage = new FrontPage(this.renderer, this.data);

        this.skills = new Skills(this.renderer, this.data[0].skills[0])

    }
    render(){
        this.renderer.render("body", this.main)
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

        this.aside = new Aside(this.frontpageSection, this.renderer, this.data[0].headers[0]);

        this.frontPageMain = new FrontPageMain(this.renderer, this.data[0].title[0]);
    }
    render() {
        this.renderer.render("main", this.frontpageSection)
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
        this.text.classList.add("frontPage__navText");
        this.text.innerText = this.data
    }

    render() {
        this.renderer.render(".frontPage__nav", this.item)
        this.renderer.renderChild(".frontPage__nav", this.button, this.i);
        this.renderer.renderChildChild(".frontPage__nav", this.sphere, this.i);
        this.renderer.renderChildChild(".frontPage__nav", this.text, this.i);
    }
}

class FrontPageMain {
    main;
    figure;
    renderer;
    frontPageImage;
    frontPageTitle;
    constructor(renderer, data) {
        this.renderer = renderer;
        this.data = data;
        
        this.main = document.createElement("section");
        this.main.classList.add("frontPage__main");
        
        this.render()
        this.frontPageImage = new FrontPageImage("left",this.renderer);
        this.frontPageImage = new FrontPageImage("right",this.renderer);
        for(let i = 0; i < 2; i++){
            this.frontPageTitle = new FrontPageTitle(i, this.renderer, this.data[i])
        }

    }
    render(){
        this.renderer.render(".frontPage", this.main)
    }
}

class FrontPageImage{
    figure;
    img;
    renderer;
    constructor(direction, renderer){
        this.renderer = renderer;
        this.direction = direction

        this.figure = document.createElement("figure");
        this.figure.classList.add("halfSquare")
        this.figure.classList.add(`halfSquare--${this.direction}`)

        this.img = document.createElement("img");
        this.img.setAttribute("src", `./img/sqaureShape(${direction}).png`);

        this.render()
    }
    render(){
        this.renderer.render(".frontPage__main", this.figure);
        this.renderer.render(`.halfSquare--${this.direction}`, this.img)
    }
}

class FrontPageTitle{
    div;
    h1_1;
    h1_2;
    i;
    renderer;
    constructor(i, renderer, data){
        this.i = i;
        this.renderer = renderer
        this.data = data

        this.div = document.createElement("div")
        this.div.classList.add("frontPage__centerTitle")
        this.div.classList.add(`frontPage__centerTitle--${this.i}`)

        this.h1_1 = document.createElement("h1")
        this.h1_1.classList.add("frontPage__title")
        this.h1_1.innerText = this.data[0][0]

        this.h1_2 = document.createElement("h1")
        this.h1_2.classList.add("frontPage__title")
        this.h1_2.innerText = this.data[0][1]

        this.render();
    }
    render(){
        this.renderer.render(".frontPage__main", this.div)

        this.renderer.render(`.frontPage__centerTitle--${this.i}`, this.h1_1)
        this.renderer.render(`.frontPage__centerTitle--${this.i}`, this.h1_2)
    }
}


class Skills{
    renderer;
    data;
    section;
    header;
    skillsItems
    itemWrapper
    constructor(renderer,data){
        this.renderer = renderer;
        this.data = data;

        this.section = document.createElement("section");
        this.section.classList.add("skills")

        this.header = document.createElement("h2");
        this.header.classList.add("skills__title");
        this.header.innerText = "skills"

        this.itemWrapper = document.createElement("section");
        this.itemWrapper.classList.add("skills__itemsWrapper");

        this.render()
        

        for(let i = 0; i < Object.keys(this.data.reference[0]).length; i++){
            this.skillsItems = new SkillsItems(this.data, this.renderer, i);

        }


    }

    render(){
        this.renderer.render("main", this.section)
        this.renderer.render(".skills", this.header)
        this.renderer.render(".skills", this.itemWrapper)
    }
}

class SkillsItems{
    section;
    button;
    figure;
    data;
    renderer;
    i;
    img;
    constructor(data, renderer, i){
        this.data = data
        this.renderer = renderer
        this.i = i

        this.section = document.createElement("section")
        this.section.classList.add("skills__itemWrapper")
        this.section.classList.add(`skills__itemWrapper--${this.i}`);

        this.button = document.createElement("button");
        this.button.classList.add("skills__button");
        this.button.classList.add(`skills__button--${this.i}`);

        this.figure = document.createElement("figure");
        this.figure.classList.add("skills__figure");

        this.img = document.createElement("img");
        this.img.classList.add("skills__img");
        this.img.setAttribute("src", this.data.image[0][i])

        this.render()
    }
    render(){
        this.renderer.render(".skills__itemsWrapper", this.section)
        this.renderer.renderChild(".skills__itemsWrapper", this.button, this.i);
        this.renderer.render(`.skills__button--${this.i}`, this.figure)
        this.renderer.renderChild(`.skills__button--${this.i}`, this.img, 0)
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
            this.main = new Main(this.renderer, data.english)
        });
    }
}

const app = new App();