const questions = [
  {
    id: 1,
    level: 'Fácil',
    question: 'Qual dos pilares abaixo NÃO faz parte do Patient Blood Management (PBM)?',
    options: [
      'Otimização da massa eritrocitária',
      'Minimização da perda sanguínea',
      'Melhora da qualidade dos hemocomponentes transfundidos',
      'Otimização da tolerância à anemia',
      'Uso racional de transfusões'
    ],
    correct: 2,
    explanation: 'O PBM é centrado no uso do sangue do próprio paciente. Melhorar a qualidade dos hemocomponentes transfundidos não é um dos pilares.'
  },
  {
    id: 2,
    level: 'Moderada',
    question: 'Qual das situações abaixo mais justifica o uso de hemodiluição normovolêmica aguda em um paciente cirúrgico?',
    options: [
      'Cirurgia cardíaca com alto risco de transfusão',
      'Presença de coagulopatia',
      'Hipotensão arterial grave',
      'Anemia ferropênica',
      'Transfusão pré-operatória programada'
    ],
    correct: 0,
    explanation: 'A hemodiluição normovolêmica aguda é uma técnica para reduzir transfusões em cirurgias de alto risco, como as cardíacas.'
  },
  {
    id: 3,
    level: 'Fácil',
    question: 'A prática interprofissional no PBM é importante principalmente porque:',
    options: [
      'Reduz custos administrativos',
      'Diminui o tempo de internação',
      'Evita a necessidade de antibióticos',
      'Melhora a assistência por meio da colaboração entre áreas',
      'Permite que enfermeiros realizem prescrições'
    ],
    correct: 3,
    explanation: 'A colaboração entre áreas melhora os desfechos e a segurança do paciente.'
  },
  {
    id: 4,
    level: 'Moderada',
    question: 'A diretriz do Ministério da Saúde sobre transfusão de sangue enfatiza que:',
    options: [
      'Os exames laboratoriais são essenciais para decidir pela transfusão',
      'A transfusão deve ocorrer sempre que a hemoglobina for <10 g/dL',
      'O aspecto clínico do paciente é mais importante que o valor laboratorial',
      'O uso de sangue doado deve ser incentivado em todos os casos',
      'A transfusão é preferível ao uso de eritropoetina'
    ],
    correct: 2,
    explanation: 'A diretriz brasileira enfatiza a decisão clínica como prioridade para indicação transfusional.'
  },
  {
    id: 5,
    level: 'Moderada',
    question: 'Qual das alternativas representa uma complicação possível do uso indiscriminado de transfusões?',
    options: [
      'Hipocalcemia crônica',
      'Eritrocitose secundária',
      'Aloimunização',
      'Hemoconcentração',
      'Hiperviscosidade hemática'
    ],
    correct: 2,
    explanation: 'Aloimunização é uma reação imunológica ao sangue doado, podendo dificultar transfusões futuras.'
  },
  {
    id: 6,
    level: 'Fácil',
    question: 'Na abordagem do PBM, o tratamento da anemia pré-operatória deve ser realizado com antecedência mínima de:',
    options: [
      '1 semana',
      '4 a 6 semanas',
      '12 horas',
      '48 horas',
      'Não há tempo recomendado'
    ],
    correct: 1,
    explanation: 'Para permitir resposta ao tratamento, o ideal é iniciar 4 a 6 semanas antes da cirurgia.'
  },
  {
    id: 7,
    level: 'Moderada',
    question: 'A anemia é considerada presente em mulheres quando os níveis de hemoglobina estão abaixo de:',
    options: [
      '13,5 g/dL',
      '14 g/dL',
      '12 g/dL',
      '11,5 g/dL',
      '10,5 g/dL'
    ],
    correct: 2,
    explanation: 'Segundo definições clássicas, mulheres têm anemia quando Hb <12 g/dL.'
  },
  {
    id: 8,
    level: 'Moderada',
    question: 'O ácido tranexâmico atua principalmente:',
    options: [
      'Aumentando a produção de hemácias',
      'Estimulando a eritropoese medular',
      'Inibindo a fibrinólise',
      'Estimulando a produção de plaquetas',
      'Promovendo vasoconstrição local'
    ],
    correct: 2,
    explanation: 'O ácido tranexâmico é um antifibrinolítico que ajuda a controlar sangramentos.'
  },
  {
    id: 9,
    level: 'Fácil',
    question: 'Uma das vantagens da cirurgia laparoscópica no contexto do PBM é:',
    options: [
      'Redução de tempo cirúrgico',
      'Necessidade de anestesia geral',
      'Menor risco de sangramento',
      'Maior risco infeccioso',
      'Maior tempo de internação'
    ],
    correct: 2,
    explanation: 'Cirurgias minimamente invasivas, como laparoscopia, tendem a causar menos sangramento.'
  },
  {
    id: 10,
    level: 'Moderada',
    question: 'Entre os fatores que aumentam o risco de transfusão no perioperatório estão, EXCETO:',
    options: [
      'Hemoglobina baixa',
      'Cirurgias ortopédicas de grande porte',
      'Doença hepática',
      'Uso de ácido tranexâmico',
      'Uso de anticoagulantes'
    ],
    correct: 3,
    explanation: 'O uso de antifibrinolíticos reduz o risco de sangramento e, portanto, de transfusão.'
  },
  {
    id: 11,
    level: 'Fácil',
    question: 'O PBM é uma abordagem centrada em qual princípio?',
    options: [
      'Distribuição equitativa de hemocomponentes',
      'Uso intensivo de transfusões preventivas',
      'Gestão do sangue do próprio paciente',
      'Padronização de hemocomponentes',
      'Aplicação exclusiva em emergências'
    ],
    correct: 2,
    explanation: 'PBM (Patient Blood Management) foca na preservação e uso racional do sangue do próprio paciente.'
  },
  {
    id: 12,
    level: 'Moderada',
    question: 'Qual dos profissionais abaixo é peça-chave na implementação do PBM?',
    options: [
      'Nutricionista',
      'Fisioterapeuta',
      'Enfermeiro',
      'Farmacêutico',
      'Fonoaudiólogo'
    ],
    correct: 2,
    explanation: 'O enfermeiro participa ativamente da administração segura de hemocomponentes e vigilância do paciente.'
  },
  {
    id: 13,
    level: 'Moderada',
    question: 'A abordagem interprofissional se diferencia da multiprofissional porque:',
    options: [
      'Os profissionais atuam isoladamente',
      'Há interação superficial entre áreas',
      'Há cooperação real e planejamento conjunto',
      'Cada área decide separadamente as condutas',
      'Foca apenas em medicina e enfermagem'
    ],
    correct: 2,
    explanation: 'O trabalho interprofissional envolve planejamento conjunto e decisões compartilhadas entre as áreas.'
  },
  {
    id: 14,
    level: 'Fácil',
    question: 'A Resolução COFEN 790/2022 está relacionada principalmente com:',
    options: [
      'Boas práticas anestésicas',
      'Atuação da fisioterapia em UTI',
      'Gestão de hemocomponentes pela enfermagem',
      'Prescrição médica eletrônica',
      'Treinamento em cirurgia robótica'
    ],
    correct: 2,
    explanation: 'A Resolução COFEN 790/2022 trata do papel da enfermagem na administração segura de hemocomponentes.'
  },
  {
    id: 15,
    level: 'Moderada',
    question: 'Em relação ao uso de agentes hemostáticos, é correto afirmar que:',
    options: [
      'Devem ser usados em todos os procedimentos',
      'São exclusivos da anestesiologia',
      'Ajudam a controlar sangramentos significativos',
      'Substituem a transfusão em qualquer contexto',
      'Têm uso limitado à pediatria'
    ],
    correct: 2,
    explanation: 'Agentes hemostáticos auxiliam no controle de sangramentos, especialmente em cirurgias.'
  },
  {
    id: 16,
    level: 'Moderada',
    question: 'Uma das principais vantagens da cirurgia robótica é:',
    options: [
      'Redução da capacidade visual do cirurgião',
      'Aumento da perda sanguínea',
      'Movimentos mais precisos e delicados',
      'Maior tempo de recuperação',
      'Indicação apenas para procedimentos cardíacos'
    ],
    correct: 2,
    explanation: 'A cirurgia robótica permite movimentos mais precisos, reduzindo sangramentos e melhorando desfechos.'
  },
  {
    id: 17,
    level: 'Fácil',
    question: 'Qual alternativa abaixo é um dos 3 pilares do PBM?',
    options: [
      'Reposição volêmica agressiva',
      'Otimização da tolerância à anemia',
      'Administração profilática de antibióticos',
      'Triagem transfusional universal',
      'Hipertransfusão programada'
    ],
    correct: 1,
    explanation: 'Otimizar a tolerância à anemia é um dos pilares centrais do PBM.'
  },
  {
    id: 18,
    level: 'Moderada',
    question: 'Em pediatria, uma das principais recomendações do PBM é:',
    options: [
      'Evitar qualquer tipo de monitoramento invasivo',
      'Utilizar protocolos adultos adaptados diretamente',
      'Minimizar coletas de sangue e perdas iatrogênicas',
      'Manter hemoglobina acima de 14 g/dL em todos os casos',
      'Transfundir precocemente crianças com anemia leve'
    ],
    correct: 2,
    explanation: 'A minimização de coletas e perdas sanguíneas é essencial no PBM pediátrico.'
  },
  {
    id: 19,
    level: 'Moderada',
    question: 'Sobre o direito à autonomia do paciente, é correto afirmar que:',
    options: [
      'Pode ser ignorado em emergências',
      'Deve sempre ser respeitado, mesmo contra a opinião médica',
      'Aplica-se apenas em pacientes conscientes',
      'É irrelevante em contextos cirúrgicos',
      'Restringe-se à recusa de antibióticos'
    ],
    correct: 1,
    explanation: 'O respeito à autonomia do paciente é princípio ético e legal, mesmo que vá contra a conduta sugerida pelo médico.'
  },
  {
    id: 20,
    level: 'Fácil',
    question: 'O uso de diretrizes antecipadas visa:',
    options: [
      'Evitar judicialização de planos de saúde',
      'Transferir responsabilidade ao hospital',
      'Preservar a vontade do paciente mesmo se ele perder a consciência',
      'Reduzir custos hospitalares',
      'Permitir transfusões sem consentimento'
    ],
    correct: 2,
    explanation: 'Diretrizes antecipadas registram a vontade do paciente para casos em que ele não possa se manifestar.'
  }
];
