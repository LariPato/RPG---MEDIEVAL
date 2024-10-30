//variável que irá guardar o personagem sorteado
let personagemPrincipal = ""
//variável que irá guardar o número sorteado no dado
let sorteioDado = 0

//************************************* Funções que serão repetidas ao longo do jogo *************************************

  // Função para rolar um dado (1 a 20)
  function rolarDado() {
    return Math.floor(Math.random() * 20) + 1;
  }

  // Onde Cleiton e Margarida vão morar?
 /* function casa(){
    const numeroDaCasa = prompt("Margarida quer saber onde vocês vão morar. Escolha um número de 1 a 5 e diga para ela.")
    
    switch(numeroDaCasa){
          case "1": 
            alert("Você diz para Margarida que vão morar  na França, na beira de um lago de águas cristalinas. Ela fica muito feliz com a ideia.")
            alert("Vocês vivem muito felizes no lago francês.")
          break
 
          case "2":
            alert("Você conta para Margarida que irão morar ali mesmo, naquele campo florido. Ela não fica muito feliz com isso, mas se acostuma com a ideia.")
            alert("Vocês vivem bem e felizes no campo.")
           break
          
          case"3":
            alert("Você informa para Margarida que seu plano é viajar pelo mundo e conhecer todos os países, ela fica maravilhada com a ideia!")
            alert("Vocês vivem muito felizes, trocando de país a cada ano.")
          break
          case "4":
            alert("Você pega uma margarida no campo, oferece para ela e diz que ainda não sabe onde irão viver, mas que serão o lar um do outro. Os olhos dela brilham com isso.")
            alert("Vocês vão viver em uma casinha branca em uma colina linda e vivem muito felizes.")
          break
          
          default: 
            alert(`Isso não é opção seu engraçadinho. Tá querendo ir morar debaixo da ponte?`)
            const morarNaPonte = prompt(`1 - Sim / 2 - Não`)
          
            switch(morarNaPonte){
                case "1":
                    alert("Você disse para Margarida que iriam morar debaixo da ponte, ela disse que merecia coisa melhor e te abandonou. Você foi morar  sozinho embaixo da ponte.")
                    break
                    case "2":
                        casa()
                        break
                        default: 
                        alert("Fica clicando nos negócio errado, também não vai mais jogar!")
            }
           
            


    }
         

  }*/



    // lutando contra um peixe
    function casa(){
        
        let vidaDoPato = 10
        let vidaPeixe = 10

        alert(`Você se recusa a dar a entregar sua laranja e um confronto épico se nicia. Sua vida é ${vidaDoPato} e a vida do oponente é ${vidaPeixe}`)

        while (vidaDoPato >=0 && vidaPeixe >=0){
            alert(`Sua vida é ${vidaDoPato} e a vida dele é ${vidaPeixe}. Role os dados!`)
            let numeroSorteadoPato = rolarDado()
            alert(`Você tirou ${numeroSorteadoPato}! Agora é a vez do ladrão de laranjas!`)
            let numeroSorteadoPeixe = rolarDado()
            if(numeroSorteadoPato> numeroSorteadoPeixe){
                vidaPeixe -= 2
                alert(`O laranjeiro tirou ${numeroSorteadoPeixe}. Você deu uma laranjada na cabeça dele. Agora é vida dele é ${vidaPeixe}`)
            }
            else if(numeroSorteadoPato < numeroSorteadoPeixe){
                vidaDoPato -= 2
                alert(`O oponente tirou ${numeroSorteadoPeixe} e te deu uma raseira épica mas ainda assim você não largpu a laranja! Agora sua vida é ${vidaDoPato}`)
            }
            else{
                alert("Você tentou bater nele com a laranja e ele desviou, emapte!")
            }
        }
        if(vidaDoPato<= 0){
            alert("O oponete roubou sua laranja e você teve que fugir dele. ")
        }
        else{
            alert("Você venceu ele depois de bater na cabeça dele com a laranja varias vezes, parabéns!!!!!!1 Desfrute de sua laranja suja de terra e de cabelos com caspa do oponente em paz.")
            
        }
}

//************************************* Função que roda ao iniciar o jogo *************************************

function iniciar(){
    const personagem = prompt(`Seja bem-vindo a "Odisséias Laranjudas"!!!! Escolha uma das opções: 
        1 - Sortear Personagem
        2 - Sair do Jogo`)

    switch(personagem){
        case "1":
            personagemPrincipal = sortearPersonagem()
            alert(`O personagem sorteado foi ${personagemPrincipal}`)
            romanceDoPato()
        break
            case "2":
        alert(`Fiquei 3 horas fazendo esse código e você não quer jogar.....
Os  de vdd eu sei quem são 👍`)
        break
        default:
            alert(`Então não vai ter nome`)
            romanceDoPato()
    }
}


//************************************* Função para sortear personagem ***********************************, **
function sortearPersonagem() {
const personagens = ["Guerreiro", "Mercador", "Alfaiate", "Plebeu", "Mendigo"];

const sorteado = Math.floor(Math.random() * personagens.length);
return personagens[sorteado];
}




// Função que inicia a história do Pato 
function romanceDoPato(){
    alert(`    Você é um ${personagemPrincipal}. Está caminhando por um vale em que nunca havia ido antes. Está escurecendo e a atmosfera é melancólica e sinistra. Mas você não liga apra isso. Esta usufruindo de uma laranja, fruta muito cara, que conseguiu com um mercador misterioso (será que foi o casal Arnolfini que te deu as laranjas????????? MISTÉRIOOOOO)🍊🍊🍊🍊🍊🍊. `)
    const opcao1 = prompt(`Sua laranja caiu e rolou até chegar nas raízes de uma árvore distante. O que fazer?"
        1 - Vou lá buscar minha laranja
        2 - Abandonar minha linda laranja`)
    if(opcao1 == "1"){
        const rolarDados = confirm("Os dados determinarão o sucesso ou fracasso da recuperação da laranja")
        if(rolarDados === true){
            sorteioDado = rolarDado()
            alert(`O número sorteado foi ${sorteioDado}!`)
            if(sorteioDado >= 0 && sorteioDado <= 7) { 
                alert ( `Suas costas começaram a doer devido as suas más condições de trabalho e voce não conseguiu pegar a laranja e voltou muito triste para casa.`)
                return
            }
                    else if (sorteioDado >=8 && sorteioDado <=14 ){
                       alert ( `Você conseguiu recuperar sua laranja sem problemas.🍊`)
                       alert("Enquanto você tira a terra e as folhas da sua linda laranja você vê um guerreiro sentado nas raízes de uma árvore. ")
                       const pedido = prompt(`O que você dirá para ele?
            
                       1 - Quem é você?
                       2 - Vou sair é correndo, vai que ele rouba minha laranja`)
                    if(pedido == "1"){
                       alert(`Eu sou Magnus, guerreiro do terceiro batalhão do exército. As batalhas estão dfíceis, precisamos de refor.... ISSO É UMA LARANJA?!
                        EU, O GRANDE GUERREIRO MAGNUS, QUERO ESSA LARANJA AGORA`) 
                       casa()
                    }
                  
                    }
                    else{
                       alert("Você  recuepra sua bela laranja. Ela nunca esteve mais reluzente e lida. Com lágrimas de felicidade e emoção você come ela, provavelmente a última laranja da sua vida (e primeira tbm) pq você é pobre e laranja é caro.")
                       return
                    }

            }
            else {
                const diamanteOuFuga = prompt(`Você dividiu a laranja com ele e ele ficou muito feliz e grato e te convidou ara se juntar ao exército do reino. 🍊
                    1- Aceitar
                    2 - Recusar`)
                    
                   switch(diamanteOuFuga){
                    case "1":
                       alert("Agora você é o chefe do pelotão das laranjas e vocês comem laranjas duas vezes por ano.🍊 No futuro você virou imperador do reino e mudou o nome dele para Reino Laranjudo.")
                        break
                    case "2":
                        alert("Você voltou para casa com metade da laranja suja.🍊")
                        break
                        default: 
                        alert("Você voltou para casa com metade da laranja suja.🍊")


                   }
             }

         }
       
    }
    
    

