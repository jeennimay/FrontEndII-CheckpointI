/* IMPORTS */
import contato from "./modulos/contato.js"
import equipe from "./modulos/equipe.js"
import ingredienteReceita from "./modulos/ingrediente_receita.js"

/* botão cadastrar - form */
let btnCadastrar = document.getElementById("btnCadastrar");

//função para obter os valores inseridos pelo usuário e criar o card com essas informações, através do click no botão cadastrar dentro do formulário
btnCadastrar.addEventListener("click", function(event){
    //previnindo evento padrão do botão tipo submit (reload da página)
    event.preventDefault();
    
    //pegando os valores adicionados nos inputs pelo usuário
    let titulo = document.getElementById("titulo").value;
    let urlImg = document.getElementById("urlImg").value;
    let receita = document.getElementById("receita").value;
    let ingredientes = document.getElementById("ingredientes").value;

    //validação dos dados
    if (urlImg == "" || receita == "" || ingredientes == "") {
        urlImg = "./assets/img/cooking.png";
        receita = "Hamburger tempor beef pancetta quis. Duis irure deserunt, adipisicing in cow laborum veniam tongue laboris bacon shank filet mignon sed picanha. Ipsum ball tip pancetta sint in fatback. Magna frankfurter culpa enim cupim boudin strip steak bacon consequat fugiat jowl sint. Burgdoggen shoulder beef ribs, occaecat landjaeger bacon bresaola laborum ut beef est. Ground round dolore sint, consectetur landjaeger pork belly laborum tongue bacon porchetta turkey buffalo kevin biltong proident.";
        ingredientes = "I love cheese, especially stinking bishop cottage cheese. Squirty cheese stinking bishop pecorino melted cheese cut the cheese red leicester ricotta red leicester. Manchego macaroni cheese cheesecake bavarian bergkase macaroni cheese fondue danish fontina caerphilly. Camembert de normandie camembert de normandie port-salut cut the cheese cheeseburger the big cheese chalk and cheese lancashire. Airedale paneer mozzarella roquefort cream cheese airedale queso the big cheese. Cheddar ricotta hard cheese cow fromage cheddar feta mozzarella. Fondue chalk and cheese.";
    }else{
        urlImg = document.getElementById("urlImg").value;
        receita = document.getElementById("receita").value;
        ingredientes = document.getElementById("ingredientes").value;
    }

    //imprimindo na página - criando o card com os valores que o usuário adicionou no formulário
        //Selecionando o local do html que vai ser criado o card
    let card = document.querySelector(".containerCard");
    card.innerHTML += `<article class="card"">
                            <div class="divImg">
                                <img src="${urlImg}" alt="Imagem ${titulo}">
                            </div>
                            <div class="informacoes">
                                <h2 class="tituloCard">${titulo}</h2>
                                <section class="receita">
                                    <h3 id="ingrediente">Ingredientes</h3>
                                    <h3 id="modoDePreparo">Modo de preparo</h3>
                                </section>
                                <article class="cardIngredientes" id="cardIngredientes">
                                    <p class="cardIngredites__paragrafo">${ingredientes}</p>
                                </article>
                                <article class="cardReceita" id="cardReceita">
                                    <p class="cardReceita__paragrafo">${receita}</p>
                                </article>
                            </div>
                        </article>`;

    /* display none no form */
    document.querySelector(".sectionForm").style.display = "none";

    /* limpando os campos */
    document.getElementById("titulo").value = "";
    document.getElementById("urlImg").value = "";
    document.getElementById("receita").value = "";
    document.getElementById("ingredientes").value = "";

    
    //fução para ver os ingredientes e as receitas
    ingredienteReceita();
});

//fução para ver os ingredientes e as receitas
ingredienteReceita();   

/* botão para cadastrar mais cards */
let cadastrarReceita = document.getElementById("cadastrarReceita");
//função abrir formulário através do botão "cadastrar receita" na nav
cadastrarReceita.addEventListener("click", () => {
    document.getElementById("formCadastro").style.display = "block";
});
/* botão cancelar */
let btnReset = document.getElementById("btnReset");
    /* função fechar formulário através do botão "cancelar" dentro do formulário*/
btnReset.addEventListener("click", () => {
        document.getElementById("formCadastro").style.display = "none";
});
