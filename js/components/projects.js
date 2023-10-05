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

        this.ul = document.createElement("ul");
        this.ul.classList.add("projects__list");
        this.render();


        this.projectItem = new ProjectItem(this.renderer,this.data, this.i);
    }
    render(){
        this.renderer.render("main", this.projects)
        this.renderer.render(".projects", this.title)
    }
}

class ProjectItem{
    constructor(renderer ,data, i){
        this.renderer = renderer
        this.data = data
        this.i = i

        
    }
}