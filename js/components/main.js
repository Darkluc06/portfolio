class Main {
    renderer
    data
    frontPage
    main
    skills
    aboutMe
    constructor(renderer, data, cleaner, app) {
        this.renderer = renderer;
        this.data = data;
        this.cleaner = cleaner
        this.app = app

        this.main = document.createElement("main")

        this.render()

        this.frontPage = new FrontPage(this.renderer, this.data, this.app, this.cleaner);

        this.skills = new Skills(this.renderer, this.data[0].skills[0], this.cleaner)

        this.projects = new Projects(this.renderer ,this.data[0].projects[0])
        this.aboutMe = new AboutMe(this.renderer ,this.data[0].about[0])
        
    }
    render() {
        this.renderer.render("body", this.main)
    }

}



class App {
    api;
    main;
    renderer;
    constructor(language = "nederlands") {
        this.language = language
        this.api = new GetData("./data/data.json");
        this.renderer = new Renderer();
        this.cleaner = new Cleaner();
        this.api.getJson().then((data) => {
            this.main = new Main(this.renderer, data[language], this.cleaner, this)
        });
    }
}
