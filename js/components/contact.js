class Contact{
    footer
    constructor(renderer){
        this.renderer = renderer

        this.footer = document.createElement("footer")
        this.footer.classList.add("contact")

        this.title = document.createElement("h4")
        this.title.classList.add("contact__title")
        this.title.innerText = "Luc Zuidema"

        this.list = document.createElement("ul")
        this.list.classList.add("contact__list");

        this.github = document.createElement("li");
        this.github.classList.add("contact__item")
        this.github.classList.add("contact__itemG")
        this.github.addEventListener("click", () =>{
            window.open("https://github.com/Darkluc05", "_blank")
        })

        this.icongit = document.createElement("i");
        this.icongit.classList.add("fa-brands");
        this.icongit.classList.add("fa-square-github")

        this.linked = document.createElement("li");
        this.linked.classList.add("contact__item")
        this.linked.classList.add("contact__itemL")
        this.linked.addEventListener("click", () =>{
            window.open("https://www.linkedin.com/in/luc-zuidema-b22959213/", "_blank")
        })

        this.iconlink = document.createElement("i");
        this.iconlink.classList.add("fa-brands");
        this.iconlink.classList.add("fa-linkedin")

        this.mail = document.createElement("li");
        this.mail.classList.add("contact__item")
        this.mail.classList.add("contact__itemM")
        this.mail.addEventListener("click", () =>{
            window.location.href = "mailto:luczuidema06@gmail.com";
        })

        this.iconmail = document.createElement("i");
        this.iconmail.classList.add("fa-solid");
        this.iconmail.classList.add("fa-envelope")

        this.render()
    }
    render(){
        this.renderer.render("main", this.footer)
        this.renderer.render(".contact", this.title)

        this.renderer.render(".contact", this.list)
        this.renderer.render(".contact__list", this.github)
        this.renderer.render(".contact__itemG", this.icongit)

        this.renderer.render(".contact__list", this.linked)
        this.renderer.render(".contact__itemL", this.iconlink)

        this.renderer.render(".contact__list", this.mail)
        this.renderer.render(".contact__itemM", this.iconmail)
    }
}