# Aplicação Ponto Ilumeo com NestJS

### Clone o repositório:

```bash
git clone https://github.com/demosalexas/ponto-ilumeo-react-web.git
cd ponto-ilumeo-react-web
```

Instale as dependências usando pnpm:
```bash
pnpm install
```
Execução
Para executar a aplicação em modo de desenvolvimento:

```bash
pnpm run start:dev
A aplicação estará disponível em http://localhost:3000.
```

## Rotas
### Criar Registro
Rota: POST /attendances  
Descrição: Cria um novo registro.  
Corpo da Requisição: CreateAttendanceDto  
Exemplo de corpo da requisição:  

```json
{
  "userCode": "12345",
  "startDate": "2024-05-21T08:00:00.000Z"
}
```
### Buscar Todos os registros de um Usuário
Rota: GET /attendances/:userCode  
Descrição: Retorna todos os registros de um usuário específico.  
Parâmetros de Rota: userCode - O código do usuário.  

### Atualizar Registro
Rota: PATCH /attendances/:id  
Descrição: Atualiza um registro existente.  
Parâmetros de Rota: id - O ID do registro.  
Corpo da Requisição: UpdateAttendanceDto  
Exemplo de corpo da requisição:  

```json
{
  "endDate": "2024-05-21T12:00:00.000Z",
  "hoursWorked": "4h 0m"
}
```
