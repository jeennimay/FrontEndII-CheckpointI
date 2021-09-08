export default function ingredienteReceita(){
/* card - ingredite / receita */
    //h3
    let btnIngredientes = document.querySelectorAll("#ingrediente");
    let btnReceita = document.querySelectorAll("#modoDePreparo");
    
        //todos os cards
    let todosCards = document.querySelectorAll(".card");
    
        //todas as abas ingredientes e receita
    let abaIngrediente = document.querySelectorAll(".cardIngredientes");
    let abaRecebita = document.querySelectorAll(".cardReceita");
    
    for (let index = 0; index < todosCards.length; index++) {
        //esconder modo de preparo
        btnIngredientes[index].addEventListener("click", ()=>{
            abaIngrediente[index].style.display = "block";
            abaRecebita[index].style.display = "none";
        });
        //esconder ingredientes
        btnReceita[index].addEventListener("click", ()=>{
            abaRecebita[index].style.display = "block";
            abaIngrediente[index].style.display = "none";
        });
        
    }
}
ingredienteReceita();