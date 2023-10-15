class Projects{
    projects;
    title;
    ul;
    renderer;

    constructor(renderer,data){
        this.renderer = renderer
        this.data = data
        this.projects = document.createElement("article");
        this.projects.classList.add("projects");

        this.title = document.createElement("h2");
        this.title.classList.add("projects__title");
        this.title.innerText = this.data.title

        this.section = document.createElement("section");
        this.section.classList.add("projects__section")

        this.ul = document.createElement("ul");
        this.ul.classList.add("projects__list");
        this.render();

        this.frontPageImage = new FrontPageImage("left", this.renderer,".projects__section", 1, "projects");
        this.frontPageImage = new FrontPageImage("right", this.renderer,".projects__section", 2, "projects");

        for(let i = 0; i < Object.keys(this.data.reference[0]).length; i++){
            this.projectItem = new ProjectItem(this.renderer, this.data, i)
        }
    }
    render(){
        this.renderer.render("main", this.projects)
        this.renderer.render(".projects", this.title)
        this.renderer.render(".projects", this.section)
        this.renderer.render(".projects__section", this.ul)
    }
}

class ProjectItem{
    constructor(renderer ,data, i){
        this.renderer = renderer
        this.data = data
        this.i = i
        this.projectItem = document.createElement("li")
        this.projectItem.classList.add("projects__item")

        this.title = document.createElement("h4");
        this.title.classList.add("projects__itemTitle")
        this.title.innerText = this.data.reference[0][this.i]

        this.text = document.createElement("p");
        this.text.classList.add("projects__itemText");
        this.text.innerText = this.data.text[0][this.i]

        if(this.data.image[0][this.i] === ""){
            this.renderNoImage()
        }
        else{
            this.figure = document.createElement("figure");
            this.figure.classList.add("projects__itemFigure")
            
            this.img = document.createElement("img");
            this.img.classList.add("projects__itemImg");
            this.img.setAttribute("src", this.data.image[0][this.i])
            
            this.render()
        }

        
    }
    renderNoImage(){
        this.renderer.render(".projects__list", this.projectItem);
        this.renderer.renderChild(".projects__list", this.title, this.i)
        this.renderer.renderChild(".projects__list", this.text, this.i)
    }
    render(){
        this.renderer.render(".projects__list", this.projectItem);
        this.renderer.renderChild(".projects__list", this.title, this.i)
        this.renderer.renderChild(".projects__list", this.figure, this.i)
        this.renderer.renderChildChild(".projects__list", this.img, this.i, 1)
        this.renderer.renderChild(".projects__list", this.text, this.i)
    }
}