const nav = document.querySelector(".nav"),
        navList = nav.querySelectorAll("li"),
        totalNavlist = navList.length,
        allSection = document.querySelectorAll(".show"),
        totalSection = allSection.length;
        home = document.querySelectorAll(".container")
        for(let i=0; i<totalNavlist; i++){
            const a = navList[i].querySelector("a")
            a.addEventListener("click", function() {
                for(let j=0; j<totalNavlist; j++){
                    navList[j].querySelector("a").classList.remove("active")
                }
                this.classList.add("active")
                showSection(this);
                myFunction(this)
            })
        }
        
        function showSection(element){
            for(let i=0; i<totalSection; i++){
                allSection[i].classList.add("show")
            }
           const target = element.getAttribute("href").split("#")[1];
           document.querySelector("#" + target).classList.remove("show");
        }

        function myFunction() {
            var x = document.querySelector(".container");
            if (nav.style.display === "none") {
              x.style.display = "block";
            } else {
              x.style.display = "none";
            }
          };



// ------ content ------- //

const data = "asset/project/project.json";
const content = document.querySelector("#conten");

const getContent = () => {
    fetch(data)
    .then(response => {
        return response.json();
    }).then(responseJson => {
        project.innerHTML = "";
        let ctn = responseJson.project;
        ctn.forEach(item => {
            project.innerHTML += `
            <div class="card">
                <img src="${item.img}" alt="">
                <h3>${item.name}</h3>
                <p>${item.desct}</p>
                <a href="${item.link}">Link </a>
            </div>
          `
        });
    })
}
document.addEventListener('DOMContentLoaded', getContent);