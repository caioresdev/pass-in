# Sistema de Check-in para Eventos

## Idéia:
Fazer a **Gestão dos participantes em eventos presenciais**.

## Funções:
- Cadastrar eventos;
- Inscrição no Evento;
- Credencial de check-in;
- Verificação da credencial.

## Requisitos Funcionais:

### Organizador:
- Cadastrar eventos;
- Visualizar dados dos eventos;
- Participantes dos eventos.
### Partipante:
- Inscrição nos eventos;
- Visualizar cracha de incrição;
- Realizar Check-in no evento.

## Regras de Negócio:
- Inscrição somente uma vez;
- Inscrição somente se houver vagas;
- Check-in somente um vez.

## Requisitos não-funcionais:
- Check-in apenas via QRCode.

## Tecnologias utilizadas:
- Backend: NodeJS e TypeScript
    - Frameworks e Bibliotecas:
        - Fastify
        - Prima
- Frontend: ReactJS
- Banco de Dados:
