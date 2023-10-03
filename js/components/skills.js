class Skills {
    renderer;
    data;
    section;
    cleaner
    header;
    skillsItems
    itemWrapper
    wrapper
    blur
    constructor(renderer, data, cleaner) {
        this.renderer = renderer;
        this.data = data;
        this.cleaner = cleaner

        this.section = document.createElement("section");
        this.section.classList.add("skills")

        this.header = document.createElement("h2");
        this.header.classList.add("skills__title");
        this.header.innerText = "skills"

        this.itemWrapper = document.createElement("section");
        this.itemWrapper.classList.add("skills__itemsWrapper");

        this.wrapper = document.createElement("div")
        this.wrapper.classList.add("modal__delete")

        this.render()


        for (let i = 0; i < Object.keys(this.data.reference[0]).length; i++) {
            this.skillsItems = new SkillsItems(this.data, this.renderer, i, this.cleaner, this.wrapper);

        }


    }

    render() {
        this.renderer.render("main", this.section)
        this.renderer.render(".skills", this.header)
        this.renderer.render(".skills", this.itemWrapper)
        this.renderer.render(".skills", this.wrapper)
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
    skillsModals
    wrapper
    constructor(data, renderer, i, cleaner, wrapper) {
        this.data = data
        this.renderer = renderer
        this.i = i
        this.cleaner = cleaner
        this.wrapper = wrapper

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
        
        this.skillsModals = new SkillsModal(this.data, this.renderer, this.cleaner, this.wrapper)
        this.button.addEventListener('click', () => this.skillsModals.create())
    }
    render() {
        
        this.renderer.render(".skills__itemsWrapper", this.section)
        this.renderer.renderChild(".skills__itemsWrapper", this.button, this.i);
        this.renderer.render(`.skills__button--${this.i}`, this.figure)
        this.renderer.renderChild(`.skills__button--${this.i}`, this.img, 0)
    }
    hello(){
        console.log("gello")
    }
}


class SkillsModal{
    modal;
    img
    h2
    p
    exit
    data
    renderer
    wrapper
    constructor(data,renderer, cleaner, wrapper){
        this.data = data
        this.renderer = renderer
        this.cleaner = cleaner
        this.wrapper = wrapper
    }
    leave(){
        this.cleaner.clean(".modal__delete")
        this.wrapper.style.display = "none"
    }

    create(){
        this.wrapper.style.display = "block"
        this.modal = document.createElement("section");
        this.modal.classList.add("modal");

        this.figure = document.createElement("figure");
        this.figure.classList.add("modal__figure");

        this.img = document.createElement("img");
        this.img.classList.add("modal__img");

        this.article = document.createElement("article")
        this.article.classList.add("modal__article")

        this.h2 = document.createElement("h2");
        this.h2.classList.add("modal__h2");

        this.p = document.createElement("p");
        this.p.classList.add("modal__p");

        this.exit = document.createElement("button");
        this.exit.classList.add("modal__exit");
        this.exit.innerText = "X"
        this.exit.addEventListener("click", () => this.leave())
        this.render()

    }
    render(){
        
        
        this.renderer.render(".modal__delete", this.modal)
        this.renderer.render(".modal", this.article)
        this.renderer.render(".modal__article", this.h2)
        this.renderer.render(".modal__article", this.p)
        this.renderer.render(".modal", this.figure)
        this.renderer.render(".modal__figure", this.img)
        this.renderer.render(".modal", this.exit)
    }
}