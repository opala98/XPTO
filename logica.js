//COLOCAR FAVORITOS
//NUMERAR TÍTULOS E DESCRIÇÕES, UM HTML SÓ

/*------------------------------- FAVORITAR PRODUTOS ----------------------------*/
function fav(id) {

    let fav = check_src(id);
    let hide = document.getElementById("hide").name;

    let test1 = document.getElementById(id).name;
    let test = "";
    let test2 = [];

    if(test1 == "img-f") {
        test = document.getElementById(id).id;
        hide = test
        test2.push(test);
    }


    // alert(test2.at(-1));

    // alert(test);
    // alert(hide);

        if(fav == "img/star_S.png"){

            document.getElementById(id).src = "img/star_C.png";

            document.getElementById("fav-i").src = "img/star_C.png";

            if(document.getElementById("fav-i").src = "img/star_C.png"){
                document.getElementById(hide).src = "img/star_C.png";
            }

            // if(test == ""){
            //     document.getElementById("fav-i").src = "img/star_S.png";
            // }

        } else {

            document.getElementById(id).src = "img/star_S.png";
            document.getElementById("fav-i").src = "img/star_S.png";



            if(document.getElementById("fav-i").src = "img/star_S.png"){
                document.getElementById(hide).src = "img/star_S.png";
                
            }
        }

    return false;

}

/*------------------------------- CHECAR NOME DA IMAGEM ----------------------------*/
/*-- Bom, no meu pc funcionou com file.length - 14, pode ser diferente dependendo do nome do diretório --*/

function check_src (id){

    var file = document.getElementById(id).src;
    return file.substring(file.length - 14, file.length);
}

/*------------------------------- BUSCA POR NOME DO PRODUTO ----------------------------*/
function search_product() {

    let busca = document.getElementById("inp-p").value;
    let produto = document.getElementsByClassName("produto");
    let element = document.getElementsByClassName("name_product");

    busca = busca.toLowerCase();
    busca = acento(busca);

    for(let i = 0; i < element.length; i++) {

        if(!element[i].innerHTML.toLocaleLowerCase().includes(busca)) {

            produto[i].style.display = "none";
            
        } else {
            produto[i].style.display = "block";
            
        }
    }
}

/*------------------------------- IGNORAR POSSÍVEIS ACENTUAÇÕES ----------------------------*/
function acento(str){

    str = str.replace(new RegExp('[áãâàä]','gi'), 'a');
    str = str.replace(new RegExp('[éêèë]','gi'), 'e');
    str = str.replace(new RegExp('[íìîï]','gi'), 'i');
    str = str.replace(new RegExp('[óòõôö]','gi'), 'o');
    str = str.replace(new RegExp('[úùûü]','gi'), 'u');
    str = str.replace(new RegExp('[ç]','gi'), 'c');
    str = str.replace(new RegExp('[ñ]','gi'), 'n');
    return str;                 
}

/*------------------------------- FILTROS ----------------------------*/
function filtrar_n() {

    var filtro = document.querySelector('input[name="tipo"]:checked').value;
    let produto = document.getElementsByClassName("produto");

    for(let i = 0; i < produto.length; i++) {

        if(filtro == "nenhum") {

            produto[i].style.display = "block";
            
        }
 
    } 
}

function filtrar_e() {

    var filtro = document.querySelector('input[name="tipo"]:checked').value;
    let produto = document.getElementsByClassName("produto");
    var promocao = document.getElementsByClassName("promocao");    

    for(let i = 0; i < produto.length; i++) {

        if(filtro == "exclusivo") {

            promocao[i].style.display = "none";
            
        } else{

            produto[i].style.display = "block";
        }

    }
}

function filtrar_p() {

    var filtro = document.querySelector('input[name="tipo"]:checked').value;
    let produto = document.getElementsByClassName("produto");
    var exclusivo = document.getElementsByClassName("exclusivo");    

    for(let i = 0; i < produto.length; i++) {

        if(filtro == "promocao") {

            exclusivo[i].style.display = "none";
            
        } else{

            produto[i].style.display = "block";
        }

    }
}

function filtrar_f() {

    var filtro = document.querySelector('input[name="tipo"]:checked').value;
    let produto = document.getElementsByClassName("produto");
    let fav = document.getElementsByClassName("star");

    for(let i = 0; i < produto.length; i++) {

        if(filtro == "favorito") {

            if(fav[i].src.includes("star_S.png")){
                produto[i].style.display = "none";
            }
            
        } else{

            produto[i].style.display = "block";
        }

    }
}

/*------------------------------- VOLTAR A PÁGINA INICIAL ----------------------------*/
function voltar() {

    document.getElementById("main").style.display = "block";
    document.getElementById("ampliar").style.display = "none";
}

/*------------------------------- LISTA DE TODOS OS PRODUTOS ----------------------------*/
/*-- Queria fazer por meio de uma matriz, mas por não conseguir inicializar uma bidimensional, optei por fazer manualmente --*/
function product1() {

    document.getElementById("main").style.display = "none";
    document.getElementById("ampliar").style.display = "block";

    document.getElementById("hide").name = "fav1";

    document.getElementById("img_p").src = "https://i.imgur.com/ZwIhQDO.jpg";
    document.getElementById("titulo").innerText = "Fone bluetooth";
    document.getElementById("valor").innerText = "R$ 198,00";
    document.getElementById("desc_c").innerText = "Aparelho intra auricular de som em alta definição sem fio para os viciados de plantão";
    document.getElementById("desc_l").innerText = "Os novos fones de ouvido bluetooth XPTO proporcionam o melhor cancelamento de ruído da classe e a capacidade de misturar o som do ambiente para uma maior consciência dos arredores quando o desejar, fazendo dele o fone de ouvido esportivo mais versátil do mercado. Projetado para o esporte com um design reflexivo exclusivo, os fones de ouvido bluetooth XPTO apresentam o lendário som XPTO e um design de ajuste ergonômico que mantém os fones no lugar, independentemente da intensidade da rotina de exercícios. À prova de suor e disponível em azul, preto, vermelho e azul-esverdeado, os fones de ouvido bluetooth XPTO não precisam de bateria, pois extraem energia e áudio digital diretamente do conector lightning em dispositivos Apple.";
    document.getElementById("t1").innerText = "Lightning connector";
    document.getElementById("d1").innerText = "Sim";
    document.getElementById("t2").innerText = "Dynamic Drivers (mm)";
    document.getElementById("d2").innerText = "14.8";
    document.getElementById("t3").innerText = "Frequency Response";
    document.getElementById("d3").innerText = "10 Hz-22 kHz";
    document.getElementById("t4").innerText = "Dimensões do produto";
    document.getElementById("d4").innerText = "1,2 x 2,6 x 2,2 cm ; 104 g";
    document.getElementById("t5").innerText = "Tipo de fones";
    document.getElementById("d5").innerText = "Intra-auricular";
    document.getElementById("t6").innerText = "Tecnologia de conexão";
    document.getElementById("d6").innerText = "Bluetooth";

}

function product2() {

    document.getElementById("main").style.display = "none";
    document.getElementById("ampliar").style.display = "block";

    document.getElementById("hide").name = "fav2";

    document.getElementById("img_p").src = "https://i.imgur.com/JqtRzV2.jpg";
    document.getElementById("titulo").innerText = "Ratoeira Eletrônica XPTO";
    document.getElementById("valor").innerText = "R$ 65,70";
    document.getElementById("desc_c").innerText = "Sistema exclusivo de rearme que possibilita a captura de mais de um rato cada vez que é armada.";
    document.getElementById("desc_l").innerText = "A Ratoeira XPTO é equipada com uma grande área de captura e pode abater camundongos, ratos de tamanho médio e ratazanas. A armadilha é muito fácil de usar e oferece uma maneira rápida, humanitária e segura de eliminação. Quando o animal entra no aparelho, três placas de aço inox descarregam um forte choque mortal, garantindo altas taxas de eficiência.  Um dos destaques das armadilhas Ratzapper® é o recurso de descarte sem sujeira. Quando você tem uma captura, simplesmente incline a Ratoeira XPTO e deixe o roedor morto deslizar para fora.";
    document.getElementById("t1").innerText = "Peso";
    document.getElementById("d1").innerText = "900g";
    document.getElementById("t2").innerText = "Dimensões do aparelho";
    document.getElementById("d2").innerText = "23 x 9,5 x 11cm";
    document.getElementById("t3").innerText = "Garantia";
    document.getElementById("d3").innerText = "2 anos de fábrica";
    document.getElementById("t4").innerText = "Fonte de Alimentação";
    document.getElementById("d4").innerText = "Bivolt";
    document.getElementById("t5").innerText = "Modelo";
    document.getElementById("d5").innerText = "Classic +";
    document.getElementById("t6").innerText = "País de origem";
    document.getElementById("d6").innerText = "Brasil";

}


function product3() {

    document.getElementById("main").style.display = "none";
    document.getElementById("ampliar").style.display = "block";

    document.getElementById("hide").name = "fav3";

    document.getElementById("img_p").src = "https://i.imgur.com/550ZKEa.jpg";
    document.getElementById("titulo").innerText = "Notebook XPTO";
    document.getElementById("valor").innerText = "2564.90";
    document.getElementById("desc_c").innerText = "Onde a brincadeira termina e o jogo começa";
    document.getElementById("desc_l").innerText = "A nova série de PCs Gaming XPTO foi projetada para atender as necessidades dos Gamers, com gráficos poderoso, desempenho extremamente rápido e sistema térmico especial, eles farão todas suas experiências se tornarem mais intensas e reais; com o novo notebook XPTO Gaming você terá uma incrível experiência em um notebook com um design elegante e desempenho excepcional; este notebook conta com a 8ª geração de processadores Intel core até Core i7, que fornecem um desempenho poderoso, seja para você jogar todos seus games, streamming de vídeos ou trabalhar em projetos que exigem maior capacidade gráfica; possui placa de vídeo dedicada NVIDIA GeForce GTX de 4GB, que permitem você jogar em configurações intensas com detalhes absolutamente claros; a tela Full HD com painel IPS e antirreflexo proporciona imagens maravilhosas e detalhes surpreendentes, fornecendo visuais fantásticos para jogar seus games preferidos; armazenamento de até 1TB + 256GB SSD permite você armazenar seus conteúdos sem se preocupar com falta de espaço.";
    document.getElementById("t1").innerText = "Cor";
    document.getElementById("d1").innerText = "Preto";
    document.getElementById("t2").innerText = "Tipo de processador";
    document.getElementById("d2").innerText = "Intel Core i7";
    document.getElementById("t3").innerText = "Memória Ram";
    document.getElementById("d3").innerText = "16gb";
    document.getElementById("t4").innerText = "SSD";
    document.getElementById("d4").innerText = "256gb";
    document.getElementById("t5").innerText = "Modelo de placa de vídeo";
    document.getElementById("d5").innerText = "NVIDIA GeForce GTX 1050 Ti com 4GB GDDR5";
    document.getElementById("t6").innerText = "Resolução máxima da tela";
    document.getElementById("d6").innerText = "1920 x 1080";

}

function product4() {

    document.getElementById("main").style.display = "none";
    document.getElementById("ampliar").style.display = "block";

    document.getElementById("hide").name = "fav4";

    document.getElementById("img_p").src = "https://i.imgur.com/mtsY67r.jpg";
    document.getElementById("titulo").innerText = "Smartphone XPTO";
    document.getElementById("valor").innerText = "1666.00";
    document.getElementById("desc_c").innerText = "Um deleite cromático. Inspirando-se na magia do céu, o Smartphone XPTO reflete as fascinantes cores da luz";
    document.getElementById("desc_l").innerText = "Testemunhe a beleza da misteriosa Aurora e da escuridão da noite. Atreva-se a impressionar. O Leica Quad Camera System acomoda sua fotografia para ajudar a ver o mundo em sua totalidade. Este super sistema de câmera incomparável inclui uma Lente SuperZoom, uma Câmera Super Sensora de 40 MP e uma Lente Ultra Grande Angular de 20 MP, dando a você a liberdade de capturar seus momentos incríveis. A nova lente teleobjetiva periscópio permite que mais recursos de zoom óptico sejam colocados em um corpo compacto sem perder a qualidade da imagem. Juntamente com a saturação de cor fornecida pela câmera principal de 40 MP e a estabilidade do OIS, a Lente SuperZoom oferece 10x zoom híbrido para ver o nunca antes visto com grande resolução e riqueza de detalhes. Além disso, pode trazer a lua à sua frente com zoom de até 50x.";
    document.getElementById("t1").innerText = "Cor";
    document.getElementById("d1").innerText = "Preto";
    document.getElementById("t2").innerText = "Memória ROM";
    document.getElementById("d2").innerText = "256gb";
    document.getElementById("t3").innerText = "Memória Ram";
    document.getElementById("d3").innerText = "8gb";
    document.getElementById("t4").innerText = "Tecnologia de conexão";
    document.getElementById("d4").innerText = "4G";
    document.getElementById("t5").innerText = "Peso do envio";
    document.getElementById("d5").innerText = "599 g";
    document.getElementById("t6").innerText = "Dimensões da embalagem";
    document.getElementById("d6").innerText = "18 x 10 x 6 cm";

}

function product5() {

    document.getElementById("main").style.display = "none";
    document.getElementById("ampliar").style.display = "block";

    document.getElementById("hide").name = "fav5";

    document.getElementById("img_p").src = "https://i.imgur.com/APDyP1f.jpg";
    document.getElementById("titulo").innerText = "Caneta XPTO";
    document.getElementById("valor").innerText = "R$ 12.398,00";
    document.getElementById("desc_c").innerText = "Instrumento de escrita XPTO Meisterstück Hommage à W.A. Mozart, com sistema de escrita esferográfica Mozart.";
    document.getElementById("desc_l").innerText = "Os instrumentos de escrita XPTO endossam a busca da marca suíça pela técnica artesanal e pela perfeição. Durante 100 anos elas permaneceram fieis ao seu caráter inconfundivelmente atemporal e sofisticado. Suas firmes exigências quanto a formato, estilo, materiais e execução estão refletidas em todos os seus produtos. Para criar a perfeita maestria artesanal, seus artesãos unem o design nobre às proporções harmoniosas, colocando paixão e alma em cada peça desenvolvida, criando peças que são verdadeiras obras de dedicação e arte.";
    document.getElementById("t1").innerText = "Material";
    document.getElementById("d1").innerText = "Resina";
    document.getElementById("t2").innerText = "Cor";
    document.getElementById("d2").innerText = "Prateado, Preto";
    document.getElementById("t3").innerText = "Cor da tinta";
    document.getElementById("d3").innerText = "Azul";
    document.getElementById("t4").innerText = "Tipo";
    document.getElementById("d4").innerText = "Rollerball";
    document.getElementById("t5").innerText = "Segmento";
    document.getElementById("d5").innerText = "Masculino";
    document.getElementById("t6").innerText = "Peso da embalagem";
    document.getElementById("d6").innerText = "298g";

}

function product6() {

    document.getElementById("main").style.display = "none";
    document.getElementById("ampliar").style.display = "block";

    document.getElementById("hide").name = "fav6";

    document.getElementById("img_p").src = "https://i.imgur.com/Er8mKvB.jpg";
    document.getElementById("titulo").innerText = "Monitor Gamer XPTO";
    document.getElementById("valor").innerText = "R$ 2.566,60";
    document.getElementById("desc_c").innerText = "Monitor Gamer XPTO possui alta qualidade e muitos recursos especiais para os jogadores";
    document.getElementById("desc_l").innerText = "A tecnologia AMD FreeSync, que foi incorporada ao monitor, sincroniza a taxa de atualização do seu monitor com o FPS da sua GPU AMD para evitar o rasgo da tela. Com visuais sem rasgos, você pode finalmente desfrutar das artes de jogo perfeitas que os gigantes da indústria projetam para você. O amplo ângulo de visão permite que você compartilhe suas emocionantes experiências de jogo com os amigos ao seu redor, criando memórias divertidas e vívidas.";
    document.getElementById("t1").innerText = "Tamanho painel";
    document.getElementById("d1").innerText = "23,6\" (60 cm)";
    document.getElementById("t2").innerText = "Resolução painel";
    document.getElementById("d2").innerText = "1920 x 1080";
    document.getElementById("t3").innerText = "Taxa de atualização";
    document.getElementById("d3").innerText = "75Hz";
    document.getElementById("t4").innerText = "Tempo de resposta";
    document.getElementById("d4").innerText = "1ms";
    document.getElementById("t5").innerText = "Brilho";
    document.getElementById("d5").innerText = "250 cd/m2";
    document.getElementById("t6").innerText = "Proporção da tela";
    document.getElementById("d6").innerText = "16:9";

}

function product7() {

    document.getElementById("main").style.display = "none";
    document.getElementById("ampliar").style.display = "block";

    document.getElementById("hide").name = "fav7";

    document.getElementById("img_p").src = "https://i.imgur.com/GhVWPQj.jpg";
    document.getElementById("titulo").innerText = "Patinete Elétrico XPTO";
    document.getElementById("valor").innerText = "R$ 5.698,00";
    document.getElementById("desc_c").innerText = "É uma verdadeira ferramenta para a revolução do transporte pessoal!";
    document.getElementById("desc_l").innerText = "Existem diversas maneiras de andar pela cidade. Os nossos preferidos são os práticos, baratos, ecológicos e divertidos. Pensando nisso oferecemos a tecnologia para atender a pessoas das mais variadas idades. O Patinete é ideal para mobilidade nos grandes centros urbanos. Sua bateria de Lítio é leve e tem um carregamento rápido que proporciona ao veículo uma autonomia de até 30 km. O Patinete atinge velocidade de 25Km/h para que você chegue rápido em seus compromissos. Seu chassi construído em alumínio é leve e resistente, e a haste do guidão é dobrável para possibilitar um melhor transporte. O Patinete vem equipado com campainha, farol, lanterna e luz de alerta de freio em led para que passeios noturnos fiquem mais seguros.";
    document.getElementById("t1").innerText = "Velocidade máxima";
    document.getElementById("d1").innerText = "25 km/h";
    document.getElementById("t2").innerText = "Carga máxima";
    document.getElementById("d2").innerText = "120kg";
    document.getElementById("t3").innerText = "Bateria";
    document.getElementById("d3").innerText = "Li-ion de 18650 mAh";
    document.getElementById("t4").innerText = "Altura";
    document.getElementById("d4").innerText = "48 cm";
    document.getElementById("t5").innerText = "Largura";
    document.getElementById("d5").innerText = "42 cm";
    document.getElementById("t6").innerText = "Comprimento";
    document.getElementById("d6").innerText = "106 cm";

}

function product8() {

    document.getElementById("main").style.display = "none";
    document.getElementById("ampliar").style.display = "block";

    document.getElementById("hide").name = "fav8";

    document.getElementById("img_p").src = "https://i.imgur.com/jl3mWPw.jpg";
    document.getElementById("titulo").innerText = "Guarda-Chuva XPTO";
    document.getElementById("valor").innerText = "R$ 19,90";
    document.getElementById("desc_c").innerText = "Abertura e fechamentos automáticos da copa, estrutura em fibra";
    document.getElementById("desc_l").innerText = "Guarda chuva original XPTO modelo c-108 abre e fecha automático! Compacto, 37cm quando fechado e 122cm quando aberto. Um dos melhores guarda chuvas do brasil, qualidade garantida! Empresa no Brasil ha mais de 10 anos, sinônimo de qualidade e credibilidade. 90 dias de garantia de fábrica. Cabo em polímero de alto brilho. Design americano, simples, fino e elegante. Haste central com 3 estágios em aço cromado. Tecido 100% em poliéster totalmente impermeável, de alta qualidade e secagem ultra rápida. Sistema central e ponteiras em fibra de vidro, mesmo material de varas de pesca profissionais. Ponteiras flexíveis de altíssima resistência. Sistema interno de molas nas varetas em alumínio no sistema anti-vento. Sistema anti-vento (se virar com ventos fortes não quebra) reforçado com ligas em poliuretano, firmes e flexíveis.";
    document.getElementById("t1").innerText = "Cor";
    document.getElementById("d1").innerText = "Azul Marinho";
    document.getElementById("t2").innerText = "Comprimento fechado";
    document.getElementById("d2").innerText = "37cm";
    document.getElementById("t3").innerText = "Comprimento aberto";
    document.getElementById("d3").innerText = "122 cmz";
    document.getElementById("t4").innerText = "Garantia";
    document.getElementById("d4").innerText = "90 dias de fábrica";
    document.getElementById("t5").innerText = "Modelo";
    document.getElementById("d5").innerText = "c-108";
    document.getElementById("t6").innerText = "Material vareta";
    document.getElementById("d6").innerText = "Aço cromado e fibra de vidro";

}