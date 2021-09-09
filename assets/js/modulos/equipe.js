//função para criar card da equipe
export default function equipe(){
    //objeto integrantes
    const integrantes = [
        {
            nome: "Jennifer Mayumi",
            github: "https://github.com/jennimay",
            linkedin: "https://www.linkedin.com/in/mundodajeje/",
            profilePic: "https://media-exp1.licdn.com/dms/image/C4E03AQHTum2xaFKkcA/profile-displayphoto-shrink_800_800/0/1597252896562?e=1636588800&v=beta&t=4T6Z3KDVj4SOh_tHZ30H3ciCw-UtYg4mWjUdiEAoDbY"
        },
        {
            nome: "Mariana Pacheco",
            github: "https://github.com/marianabpacheco",
            linkedin: "https://www.linkedin.com/in/marianabpacheco/",
            profilePic: "https://media-exp1.licdn.com/dms/image/C4E03AQE4rRvCn_UXYw/profile-displayphoto-shrink_800_800/0/1615259364354?e=1636588800&v=beta&t=CUxPjHboAFrrjxI9nPvekdd00jIclcZMdrqQR61x_ws"
        },
        {
            nome: "Felipe Soares Araújo",
            github: "https://github.com/Felipe-SoaresAraujo",
            linkedin: "https://www.linkedin.com/in/felipemotion/",
            profilePic: "https://media-exp1.licdn.com/dms/image/C4E03AQGE73pMZ-AF1Q/profile-displayphoto-shrink_800_800/0/1594842253184?e=1636588800&v=beta&t=2f3ay4FVYaZWvVj9fe0sXHBsCZLbHhgvR66u9WikYZM"
        },
        {
            nome: "Guilherme Santos",
            github: "https://github.com/guilherme-sik",
            linkedin: "https://www.linkedin.com/in/guilherme-santos-38b562206/",
            profilePic: "./assets/img/boy.png"
        },
    ];
    let linkedinIcon = "https://cdn-icons-png.flaticon.com/512/174/174857.png";
    let githubIcon = "https://cdn-icons-png.flaticon.com/512/25/25231.png";
   
    //chamando o botão equipe
    let btnEquipe = document.getElementById("equipe");
    //função criar card equipe - ao clicar em "equipe", no footer
    btnEquipe.addEventListener("click", ()=>{
        //condição para verificar se já tem uma section equipe
        if (!document.getElementById("sectionEquipe")) {
            
            //criando a tag section
            let sectionEquipe = document.createElement("section");
            document.querySelector("main").appendChild(sectionEquipe);
            sectionEquipe.setAttribute("class", "sectionEquipe");
            sectionEquipe.setAttribute("id", "sectionEquipe");
            

            for (let index = 0; index < integrantes.length; index++) {

                //criando a tag div com todos os elementos de cada card (img, nome, redes sociais)
                sectionEquipe.innerHTML += `<div class="divIntegrante" id="divIntegrante">
                                                <div class="imgIntegrante">
                                                    <img class="profilePic" src="${integrantes[index].profilePic}" alt="Profile pic ${integrantes[index].nome}">
                                                </div>
                                                <div class="informacoesIntegrantes">
                                                    <h3 class="nomeIntegrante" id="nomeIntegrante">${integrantes[index].nome}</h3>
                                                    <div class="socialContainer">
                                                        <a href="${integrantes[index].linkedin}"><img class="socialIcon" id="linkedinIcon" src="${linkedinIcon}" alt="icone Linkedin"></a>
                                                        <a href="${integrantes[index].github}"><img class="socialIcon" id="githubIcon" src="${githubIcon}" alt="icone GitHub"></a>
                                                    </div>
                                                </div>
                                            </div>`;
            }
        }else{
            document.getElementById("sectionEquipe").remove();
        }
    });
}

//criar if para não criar mais de uma vez
equipe();