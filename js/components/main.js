class Main {
    renderer
    data
    frontPage
    main
    skills
    constructor(renderer, data, cleaner) {
        this.renderer = renderer;
        this.data = data;
        this.cleaner = cleaner

        this.main = document.createElement("main")

        this.render()

        this.frontPage = new FrontPage(this.renderer, this.data);

        this.skills = new Skills(this.renderer, this.data[0].skills[0], this.cleaner)

    }
    render() {
        this.renderer.render("body", this.main)
    }

}



class App {
    api;
    main;
    renderer;
    constructor() {
        this.api = new GetData("./data/data.json");
        this.renderer = new Renderer();
        this.cleaner = new Cleaner();
        this.api.getJson().then((data) => {
            this.main = new Main(this.renderer, data.english, this.cleaner)
        });
    }
}
