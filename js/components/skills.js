class Skills {
    renderer;
    data;
    section;
    header;
    skillsItems
    itemWrapper
    constructor(renderer, data) {
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


        for (let i = 0; i < Object.keys(this.data.reference[0]).length; i++) {
            this.skillsItems = new SkillsItems(this.data, this.renderer, i);

        }


    }

    render() {
        this.renderer.render("main", this.section)
        this.renderer.render(".skills", this.header)
        this.renderer.render(".skills", this.itemWrapper)
    }
}

class SkillsItems {
    section;
    button;
    figure;
    data;
    renderer;
    i;
    img;
    constructor(data, renderer, i) {
        this.data = data
        this.renderer = renderer
        this.i = i

        this.section = document.createElement("section")
        this.section.classList.add("skills__itemWrapper")
        this.section.classList.add(`skills__itemWrapper--${this.i}`);

        this.button = document.createElement("button");
        this.button.classList.add("skills__button");
        this.button.classList.add(`skills__button--${this.i}`);
        this.button.addEventListener('click', this.onClick())

        this.figure = document.createElement("figure");
        this.figure.classList.add("skills__figure");

        this.img = document.createElement("img");
        this.img.classList.add("skills__img");
        this.img.setAttribute("src", this.data.image[0][i])

        this.render()
    }
    render() {
        this.renderer.render(".skills__itemsWrapper", this.section)
        this.renderer.renderChild(".skills__itemsWrapper", this.button, this.i);
        this.renderer.render(`.skills__button--${this.i}`, this.figure)
        this.renderer.renderChild(`.skills__button--${this.i}`, this.img, 0)
    }
    onClick(){
        console.log("hello")
    }
}


class SkillsModal{
    modal
    
    constructor(){

    }
}