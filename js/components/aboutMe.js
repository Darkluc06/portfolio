class AboutMe{
    title
    renderer
    data
    constructor(renderer, data){
        this.renderer = renderer
        this.data = data

        this.article = document.createElement("article");
        this.article.classList.add("about")

        this.title = document.createElement("h2");
        this.title.classList.add("about__title");
        this.title.innerText = this.data.title
        
        this.section = document.createElement("section");
        this.section.classList.add("about__section");

        this.textWrapper = document.createElement("div");
        this.textWrapper.classList.add("about__textWrapper");

        this.p = document.createElement("p");
        this.p.classList.add("about__p");
        this.p.innerText = this.data.text

        this.cv = document.createElement("a");
        this.cv.classList.add("about__cv")
        this.cv.innerText = "mijn CV"
        this.cv.setAttribute("href", "./files/CV.pdf")

        this.figure = document.createElement("figure");
        this.figure.classList.add("about__figure");

        this.img = document.createElement("img")
        this.img.classList.add("about__img")
        this.img.setAttribute("src", "./img/pollyLuc.jpg")

        this.render()

    }

    render(){
        this.renderer.render("main", this.article);
        this.renderer.render(".about", this.title);
        this.renderer.render(".about", this.section);
        this.renderer.render(".about__section", this.textWrapper)
        this.renderer.render(".about__textWrapper", this.p)
        this.renderer.render(".about__textWrapper", this.cv)
        this.renderer.render(".about__section", this.figure)
        this.renderer.render(".about__figure", this.img)
    }
}