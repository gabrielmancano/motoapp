import { ImageSourcePropType } from "react-native";

export interface DataProps {
    id: number;
    nome: string;
    marca: string;
    cilindrada: string;
    cc: number;
    categoria: string;
    image: string;
    descricao: string;
}

export const data: DataProps[] = [
    {
        id: 1,
        nome: 'G 310 GS',
        marca: 'BMW',
        cilindrada: 'baixa',
        cc: 310,
        categoria: 'City / Trail',
        image: require('../assets/bmw/g310gs.png'),
        descricao: ' A G 310 GS oferece toda a potência e aceleração que você precisa para enfrentar qualquer tipo de desafio ou terreno. Mas não são apenas as linhas exteriores que fazem desta moto uma verdadeira GS. Projetada para ser ágil no trânsito urbano e numa estrada de terra em fins de semana.'
    },
    {
        id: 2,
        nome: 'G 650 GS',
        cilindrada: 'alta',
        marca: 'BMW',
        cc: 650,
        categoria: 'Trail',
        image: require('../assets/bmw/g650gs.png'),
        descricao: 'A G 650 GS conta com instrumentos analógicos (velocímetro) e digitais (conta-giros, hodômetros e relógio), shift light que acende aos 7.500 giros, além de seis luzes de espia (indicadores de farol alto, ABS, pressão de óleo e direção, superaquecimento do sistema de arrefecimento, neutro e reserva do tanque de combustível). '
    },
    {
        id: 3,
        nome: 'S1000RR',
        cilindrada: 'alta',
        marca: 'BMW',
        cc: 1000,
        categoria: 'Esportiva',
        image: require('../assets/bmw/s1000rr.jpeg'),
        descricao: 'A S 1000 RR provocou uma revolução na categoria das superesportivas no seu lançamento em 2009. Desde então, a moto continua em evolução, lapidando ainda mais seu projeto testado e aprovado por pilotos do mundo todo. Com 207 cv e torque de 113 Nm à 11.000rpm, a S 1000 RR continua arrasadora e traz o que há de mais moderno em termos de tecnologia embarcada.'
    },
    {
        id: 4,
        nome: 'CBR600RR',
        cilindrada: 'alta',
        marca: 'Honda',
        cc: 600,
        categoria: 'Esportiva',
        image: require('../assets/honda/cbr.png'),
        descricao: 'A Honda CBR600RR é uma moto de 599 cc fabricada pela Honda desde 2003, parte da série CBR. A CBR600RR foi comercializada como a moto esportiva de peso médio topo de linha da Honda, moto esportiva mais orientada para as ruas.'
    },
    {
        id: 5,
        nome: 'HORNET',
        marca: 'Honda',
        cilindrada: 'alta',
        cc: 600,
        categoria: 'Naked',
        image: require('../assets/honda/hornet.jpg'),
        descricao: 'A Hornet traz um motor de quatro cilindros em linha com 599 cm³ de capacidade. Tem linhas discretas e boa maneabilidade, além de ser fácil de conduzir. O propulsor possui duplo comando no cabeçote (DOHC) e refrigeração líquida. Produz 96,5 cv de potência máxima a 12.000 rpm e torque de 6,43 kgf.m a 9.500 rpm.'
    },
    {
        id: 6,
        nome: 'XRE',
        marca: 'Honda',
        cilindrada: 'baixa',
        cc: 300,
        categoria: 'City/Trail',
        image: require('../assets/honda/xre.jpg'),
        descricao: 'A XRE 300 possui DNA off-road somado a um estilo aventureiro. Ideal para o uso nas cidades e em estradas, incluindo vias não pavimentadas. Além disso, é uma moto muito confortável para o dia a dia.'
    },
    {
        id: 7,
        nome: 'GSX',
        marca: 'Suzuki',
        cilindrada: 'alta',
        cc: 750,
        categoria: 'Naked',
        image: require('../assets/suzuki/gsx.png'),
        descricao: 'Uma naked de tirar o fôlego, com motor superesportivo potente e equipada com alta tecnologia: essa é a GSX-750 ABS. Possui design agressivo, que transmite uma força bruta que ultrapassa todos os limites. Herdeira da GSX-R, sua potência é perfeita para ruas e estradas sinuosas.'
    },
    {
        id: 8,
        nome: 'SRAD',
        marca: 'Suzuki',
        cilindrada: 'alta',
        cc: 1000,
        categoria: 'Esportiva',
        image: require('../assets/suzuki/srad.png'),
        descricao: 'Seu motor de 999 cm³, quatro cilindros, garante uma melhor resposta à aceleração em toda a faixa de rpm e proporciona melhor entrega de potência e torque. Seus bicos injetores de combustível com 12 orifícios oferecem uma melhor atomização do combustível e combustão mais eficiente.'
    },
    {
        id: 9,
        nome: 'V-STROM',
        marca: 'Suzuki',
        cilindrada: 'alta',
        cc: 750,
        categoria: 'Trail',
        image: require('../assets/suzuki/vstrom.png'),
        descricao: 'A V-STROM 1000 ABS é construída em um estreito e leve chassi de alumínio de dupla longarina com estrutura em liga de alumínio. A balança possui braços em alumínio perfilado. O quadro e a balança traseira complementam o otimizado tamanho do motor.'
    },
    {
        id: 10,
        nome: 'MT-09',
        marca: 'Yamaha',
        cilindrada: 'alta',
        cc: 900,
        categoria: 'Naked',
        image: require('../assets/yamaha/mt09.jpg'),
        descricao: 'Essa naked de respeito faz parte da família "Master of Torque" da Yamaha e traz o primeiro motor com 3 cilindros da Yamaha. Muito leve, ágil e esbanjando força em qualquer regime de rotação, é uma das mais cobiçadas motos do segmento das "Street Fighter" brasileiras.'
    },
    {
        id: 11,
        nome: 'R3',
        marca: 'Yamaha',
        cilindrada: 'baixa',
        cc: 300,
        categoria: 'Esportiva',
        image: require('../assets/yamaha/r3.jpg'),
        descricao: 'A Yamaha YZF-R3 está sendo lançada no Brasil em agosto de 2015 pela marca japonesa de motos. A esportiva YZF-R3 chega ao mercado com bons preços, e freios ABS. O modelo da Yamaha vem ao mercado para rivalizar com a sua concorrente Kawasaki Ninja 300.'
    },
    {
        id: 12,
        nome: 'XT 660',
        marca: 'Yamaha',
        cilindrada: 'alta',
        cc: 660,
        categoria: 'City/Trail',
        image: require('../assets/yamaha/xt.png'),
        descricao: 'Também conhecida como meiota, a XT 660R apresenta um leve e compacto motor monocilíndrico. Equipado com sistema de injeção eletrônica e arrefecimento líquido, o propulsor é capaz de gerar 48 cv de potência máxima e 5,95 kgf. m de torque. O cabeçote da motocicleta traz quatro válvulas e o cilindro tem revestimento cerâmico.'
    }
]