export default function contato(){
    let btnContato = document.getElementById("contato");
    //criar formulário de contato quando é clicado no botão "Entrar em contato"
    btnContato.addEventListener("click", ()=>{
        //condição para verificar se já existe o formulário
        if (!document.getElementById("sectionContato")) {
                
            document.querySelector("main").innerHTML += `<section class="sectionContato" id="sectionContato">
                                                            <form action="#" method="post" id="form">
                                                                <h3>Contato</h3>
                                                                <label for="nomeContato">Nome</label>
                                                                <input type="text" name="nomeContato" id="nomeContato" class="nomeContato" placeholder="Digite seu nome">
                                                                <label for="email">Email</label>
                                                                <input type="email" name="email" id="email" placeholder="Assunto">
                                                                <label for="assunto">Assunto</label>
                                                                <input type="text" name="assunto" id="assunto" placeholder="Assunto">
                                                                <label for="mensagem">Mensagem</label>
                                                                <textarea name="mensagem" id="mensagem" placeholder="Digite aqui sua mensagem"></textarea>
                                                                <button type="submit" id="btnEnviar">Enviar</button>
                                                                <button type="reset" class="btnReset" id="btnCancelar">Cancelar</button>
                                                                </form>
                                                            </section>`;
        }    


        /* botões de envio e reset do formulário de contato */
        let btnEnviar = document.getElementById("btnEnviar");
        let btnCancelar = document.getElementById("btnCancelar");
        let sectionContato = document.getElementById("sectionContato");
        /* Evento click para obotão enviar, com prevençao de evento padrão e fechando o formulário */
        btnEnviar.addEventListener("click", (event)=>{
            event.preventDefault();
            sectionContato.remove();
                                
        });
        /* função para ao clicar no botão cancelar, ele fechar o formulário */
        btnCancelar.addEventListener("click", ()=>{
            sectionContato.remove();
        });
                                                        
    });
}
contato();