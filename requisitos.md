⚙️ Requisitos Não Funcionais
1. Performance e Tempo de Resposta (Alta Prioridade) O processamento da "Câmera Inteligente" (IA) deve ser concluído em, no máximo, 10 segundos. Caso o processamento exceda esse tempo, o sistema deve obrigatoriamente exibir uma mensagem de erro ou lentidão e oferecer ao usuário a opção de cancelar a operação para evitar o travamento da interface.

2. Disponibilidade e Conectividade (Média Prioridade) Embora o sistema dependa de conexão com a internet para a maioria das funções (como IA e busca no banco de dados), ele deve permitir a visualização offline das estatísticas básicas do usuário, como peso, metas atuais e histórico já carregado, utilizando estratégias de cache.

3. Segurança e Autenticação (Alta Prioridade) O acesso ao sistema deve ser garantido através de protocolos de autenticação social (OAuth 2.0), especificamente o Login com Google e Apple, visando a segurança dos dados e a facilidade de acesso para o usuário.

4. Privacidade e Conformidade Legal (Alta Prioridade) O software deve estar em total conformidade com a LGPD (Lei Geral de Proteção de Dados). Isso inclui a transparência no uso dos dados e a obrigatoriedade de uma função que permita ao usuário excluir permanentemente sua conta e todos os dados associados (fotos, histórico e registros) dos servidores.

5. Portabilidade e Arquitetura (Alta Prioridade) A aplicação deve ser desenvolvida como um PWA (Progressive Web App). Isso garante que o software seja acessível via navegadores, mas que também possa ser instalado no smartphone como um aplicativo, acessando a câmera de forma nativa e mantendo a responsividade em diferentes tamanhos de tela.

6. Interface e Usabilidade (Média Prioridade) Utilizando Tailwind CSS, a interface deve seguir padrões modernos de design, garantindo que o sistema seja intuitivo tanto para usuários leigos quanto para atletas, com foco em componentes de carregamento rápido e transições suaves.

7. Escalabilidade de Dados (Média Prioridade) A estrutura do sistema deve ser capaz de suportar um crescimento constante no banco de dados de alimentos e receitas sem que a velocidade de busca manual ou o registro de refeições seja afetado negativamente.


📋 Lista de Requisitos Funcionais - NutriAI
Esta lista reflete as funcionalidades principais do sistema, organizadas por prioridade para o desenvolvimento.

1. Gestão de Perfil e Metas (Alta Prioridade) 👤
RF01 - Cálculo Automático de Metas: O sistema deve calcular as necessidades calóricas e de macronutrientes com base nos dados do usuário (peso, altura, idade, nível de atividade).

RF02 - Personalização de Metas: O usuário deve poder ajustar manualmente suas metas de calorias e macros (proteínas, carboidratos, gorduras) nas configurações.

RF03 - Definição de Ciclo de Refeições: O sistema deve permitir que o usuário configure seus horários e tipos de refeições fixas para cada dia da semana.

2. Registro e Captura de Alimentos (Alta Prioridade) 🍎
RF04 - Banco de Dados de Alimentos: O sistema deve fornecer uma busca em base de dados pronta para registro de alimentos.

RF05 - Registro Manual: O usuário deve poder cadastrar novos alimentos ou ingredientes caso não existam no banco de dados.

RF06 - Câmera Inteligente (IA): O sistema deve utilizar visão computacional para detectar alimentos em um prato via foto, permitindo ajustes rápidos de peso/quantidade pelo usuário.

RF07 - Gestão de Receitas: O usuário deve poder criar e salvar receitas personalizadas (combos de alimentos) para registro rápido em refeições futuras.

3. Monitoramento e Dashboard (Média Prioridade) 📊
RF08 - Dashboard Diário: Painel central exibindo: peso atual, metas de calorias/macros (barra de progresso), consumo de água e resumo das refeições do dia.

RF09 - Planejamento de Refeições: Exibição das próximas refeições agendadas para o dia no dashboard para incentivar a organização.

RF10 - Monitoramento de Água: Gráfico ou contador interativo para registro e visualização do consumo de água 💧.

4. Relatórios e Segurança (Média/Baixa Prioridade) 📈
RF11 - Alertas de Metas: O sistema deve emitir notificações/avisos visuais quando o usuário estiver muito acima ou muito abaixo das metas diárias estipuladas.

RF12 - Relatórios Periódicos: Geração de comparativos de progresso (peso e consumo nutricional) em intervalos semanais, mensais e anuais.

RF13 - Termo de Responsabilidade (Disclaimer): Exibição obrigatória de aviso legal informando que o app é uma ferramenta de auxílio e não substitui acompanhamento médico profissional ⚠️.
