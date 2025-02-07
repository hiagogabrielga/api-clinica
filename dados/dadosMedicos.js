const dadosMedicos = [
    {
      id: 32,
      nome: "Alice Alves Nogueira",
      telefone: "(69) 99932-9014",
      email: "alice.nogueira@clinicamedica.com.br",
      especialidade: "Anestesiologia"
    },
    {
      id: 30,
      nome: "Amanda Batista Lima",
      telefone: "(69) 99930-1236",
      email: "amanda.lima@clinicamedica.com.br",
      especialidade: "Infectologia"
    },
    {
      id: 4,
      nome: "Ana Clara Ferreira",
      telefone: "(69) 99904-3456",
      email: "ana.ferreira@clinicamedica.com.br",
      especialidade: "Cardiologia"
    },
    {
      id: 42,
      nome: "André Nogueira Carvalho",
      telefone: "(69) 99942-9013",
      email: "andre.carvalho@clinicamedica.com.br",
      especialidade: "Otorrinolaringologia"
    },
    {
      id: 11,
      nome: "Arthur Costa Lima",
      telefone: "(69) 99911-1236",
      email: "arthur.lima@clinicamedica.com.br",
      especialidade: "Ginecologia"
    },
    {
      id: 6,
      nome: "Beatriz Lima Martins",
      telefone: "(69) 99906-1235",
      email: "beatriz.martins@clinicamedica.com.br",
      especialidade: "Neurologia"
    },
    {
      id: 45,
      nome: "Bianca Costa Farias",
      telefone: "(69) 99945-1236",
      email: "bianca.farias@clinicamedica.com.br",
      especialidade: "Pediatria"
    },
    {
      id: 35,
      nome: "Bruno Souza Martins",
      telefone: "(69) 99935-1237",
      email: "bruno.martins@clinicamedica.com.br",
      especialidade: "Urologia"
    },
    {
      id: 34,
      nome: "Camila Vieira Andrade",
      telefone: "(69) 99934-7892",
      email: "camila.andrade@clinicamedica.com.br",
      especialidade: "Cirurgia Plástica"
    },
    {
      id: 20,
      nome: "Carolina Souza Tavares",
      telefone: "(69) 99920-1234",
      email: "carolina.tavares@clinicamedica.com.br",
      especialidade: "Geriatria"
    },
    {
      id: 17,
      nome: "Daniel Batista Rezende",
      telefone: "(69) 99917-5671",
      email: "daniel.rezende@clinicamedica.com.br",
      especialidade: "Pediatria"
    },
    {
      id: 21,
      nome: "Diego Fernandes Alves",
      telefone: "(69) 99921-5678",
      email: "diego.alves@clinicamedica.com.br",
      especialidade: "Nefrologia"
    },
    {
      id: 48,
      nome: "Eduarda Rocha Nogueira",
      telefone: "(69) 99948-1234",
      email: "eduarda.nogueira@clinicamedica.com.br",
      especialidade: "Psiquiatria"
    },
    {
      id: 27,
      nome: "Eduardo Santos Cardoso",
      telefone: "(69) 99927-9013",
      email: "eduardo.cardoso@clinicamedica.com.br",
      especialidade: "Hematologia"
    },
    {
      id: 7,
      nome: "Felipe Gomes Pereira",
      telefone: "(69) 99907-5679",
      email: "felipe.pereira@clinicamedica.com.br",
      especialidade: "Alergologia"
    },
    {
      id: 28,
      nome: "Fernanda Melo Rocha",
      telefone: "(69) 99928-3457",
      email: "fernanda.rocha@clinicamedica.com.br",
      especialidade: "Angiologia"
    },
    {
      id: 49,
      nome: "Fernando Alves Cruz",
      telefone: "(69) 99949-5678",
      email: "fernando.cruz@clinicamedica.com.br",
      especialidade: "Radiologia"
    },
    {
      id: 15,
      nome: "Gabriel Nogueira Araujo",
      telefone: "(69) 99915-7892",
      email: "gabriel.araujo@clinicamedica.com.br",
      especialidade: "Infectologia"
    },
    {
      id: 10,
      nome: "Gabriela Ribeiro Duarte",
      telefone: "(69) 99910-7891",
      email: "gabriela.duarte@clinicamedica.com.br",
      especialidade: "Anestesiologia"
    },
    {
      id: 19,
      nome: "Henrique Barros Cruz",
      telefone: "(69) 99919-3459",
      email: "henrique.cruz@clinicamedica.com.br",
      especialidade: "Otorrinolaringologia"
    },
    {
      id: 37,
      nome: "Hugo Carvalho Santos",
      telefone: "(69) 99937-9015",
      email: "hugo.santos@clinicamedica.com.br",
      especialidade: "Obstetrícia"
    },
    {
      id: 40,
      nome: "Igor Batista Cardoso",
      telefone: "(69) 99940-1235",
      email: "igor.cardoso@clinicamedica.com.br",
      especialidade: "Gastroenterologia"
    },
    {
      id: 12,
      nome: "Isabela Santos Moraes",
      telefone: "(69) 99912-5670",
      email: "isabela.moraes@clinicamedica.com.br",
      especialidade: "Oncologia"
    },
    {
      id: 36,
      nome: "Isadora Lima Alves",
      telefone: "(69) 99936-5671",
      email: "isadora.alves@clinicamedica.com.br",
      especialidade: "Oncologia"
    },
    {
      id: 5,
      nome: "João Miguel Rocha",
      telefone: "(69) 99905-7890",
      email: "joao.rocha@clinicamedica.com.br",
      especialidade: "Endocrinologia"
    },
    {
      id: 18,
      nome: "Julia Farias Teixeira",
      telefone: "(69) 99918-9015",
      email: "julia.teixeira@clinicamedica.com.br",
      especialidade: "Obstetrícia"
    },
    {
      id: 16,
      nome: "Lara Vieira Monteiro",
      telefone: "(69) 99916-1237",
      email: "lara.monteiro@clinicamedica.com.br",
      especialidade: "Cardiologia"
    },
    {
      id: 22,
      nome: "Larissa Costa Ribeiro",
      telefone: "(69) 99922-9012",
      email: "larissa.ribeiro@clinicamedica.com.br",
      especialidade: "Urologia"
    },
    {
      id: 47,
      nome: "Larissa Martins Gonçalves",
      telefone: "(69) 99947-7891",
      email: "larissa.goncalves@clinicamedica.com.br",
      especialidade: "Reumatologia"
    },
    {
      id: 14,
      nome: "Laura Mendes Cardoso",
      telefone: "(69) 99914-3458",
      email: "laura.cardoso@clinicamedica.com.br",
      especialidade: "Oftalmologia"
    },
    {
      id: 44,
      nome: "Leandro Silva Martins",
      telefone: "(69) 99944-7890",
      email: "leandro.martins@clinicamedica.com.br",
      especialidade: "Nefrologia"
    },
    {
      id: 1,
      nome: "Lucas Almeida Costa",
      telefone: "(69) 99901-1234",
      email: "lucas.costa@clinicamedica.com.br",
      especialidade: "Cirurgia Geral"
    },
    {
      id: 24,
      nome: "Luiza Lima Barros",
      telefone: "(69) 99924-7890",
      email: "luiza.barros@clinicamedica.com.br",
      especialidade: "Ortopedia"
    },
    {
      id: 2,
      nome: "Mariana Silva Oliveira",
      telefone: "(69) 99902-5678",
      email: "mariana.oliveira@clinicamedica.com.br",
      especialidade: "Hematologia"
    },
    {
      id: 9,
      nome: "Matheus Melo Barbosa",
      telefone: "(69) 99909-3457",
      email: "matheus.barbosa@clinicamedica.com.br",
      especialidade: "Cirurgia Plástica"
    },
    {
      id: 43,
      nome: "Natália Andrade Souza",
      telefone: "(69) 99943-3457",
      email: "natalia.souza@clinicamedica.com.br",
      especialidade: "Ortopedia"
    },
    {
      id: 38,
      nome: "Patrícia Ribeiro Monteiro",
      telefone: "(69) 99938-3459",
      email: "patricia.monteiro@clinicamedica.com.br",
      especialidade: "Endocrinologia"
    },
    {
      id: 26,
      nome: "Paula Mendes Silva",
      telefone: "(69) 99926-5679",
      email: "paula.silva@clinicamedica.com.br",
      especialidade: "Cirurgia Geral"
    },
    {
      id: 3,
      nome: "Pedro Henrique Santos",
      telefone: "(69) 99903-9012",
      email: "pedro.santos@clinicamedica.com.br",
      especialidade: "Angiologia"
    },
    {
      id: 13,
      nome: "Rafael Alves Sousa",
      telefone: "(69) 99913-9014",
      email: "rafael.sousa@clinicamedica.com.br",
      especialidade: "Dermatologia"
    },
    {
      id: 46,
      nome: "Rafael Correia Batista",
      telefone: "(69) 99946-3457",
      email: "rafael.batista@clinicamedica.com.br",
      especialidade: "Reumatologia"
    },
    {
      id: 39,
      nome: "Renata Rocha Duarte",
      telefone: "(69) 99939-7891",
      email: "renata.duarte@clinicamedica.com.br",
      especialidade: "Oftalmologia"
    },
    {
      id: 23,
      nome: "Renato Oliveira Souza",
      telefone: "(69) 99923-3456",
      email: "renato.souza@clinicamedica.com.br",
      especialidade: "Radiologia"
    },
    {
      id: 31,
      nome: "Rodrigo Farias Teixeira",
      telefone: "(69) 99931-5670",
      email: "rodrigo.teixeira@clinicamedica.com.br",
      especialidade: "Ginecologia"
    },
    {
      id: 8,
      nome: "Sofia Carvalho Andrade",
      telefone: "(69) 99908-9013",
      email: "sofia.andrade@clinicamedica.com.br",
      especialidade: "Gastroenterologia"
    },
    {
      id: 33,
      nome: "Thiago Mendes Costa",
      telefone: "(69) 99933-3458",
      email: "thiago.costa@clinicamedica.com.br",
      especialidade: "Alergologia"
    },
    {
      id: 41,
      nome: "Vanessa Farias Lima",
      telefone: "(69) 99941-5679",
      email: "vanessa.lima@clinicamedica.com.br",
      especialidade: "Dermatologia"
    },
    {
      id: 25,
      nome: "Victor Carvalho Duarte",
      telefone: "(69) 99925-1235",
      email: "victor.duarte@clinicamedica.com.br",
      especialidade: "Psiquiatria"
    },
    {
      id: 29,
      nome: "Vinicius Nogueira Vieira",
      telefone: "(69) 99929-7891",
      email: "vinicius.vieira@clinicamedica.com.br",
      especialidade: "Cardiologia"
    },
    {
      id: 50,
      nome: "Viviane Souza Pereira",
      telefone: "(69) 99950-9012",
      email: "viviane.pereira@clinicamedica.com.br",
      especialidade: "Geriatria"
    }
  ]

export default dadosMedicos