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
        console.log(this.data )

        this.title = document.createElement("h2");
        this.title.classList.add("projects__title");
        this.title.innerText = "Projects"

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
        console.log("hello")
        this.projectItem = document.createElement("li")
        this.projectItem.classList.add("projects__item")
        
        this.render()
    }
    render(){
        this.renderer.render(".projects__list", this.projectItem);
    }
}