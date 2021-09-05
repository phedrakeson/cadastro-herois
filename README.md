# cadastro-herois
Aplicação WEB feita com HTML, CSS e JS + PHP &amp; XAMP para a faculdade

## API WEB
- Restaurar dados na API quando deletados os registros
  - **[GET]** https://cadastro-herois-api.herokuapp.com/restaurar

- Obter lista de herois cadastrados
  - **[GET]** https://cadastro-herois-api.herokuapp.com/herois
  ```json
    // API RESPONSE (JSON)
    [
      {
        "id": "1",
        "nome": "Nome 1",
        "poderes": "Poderes 1",
        "fraquezas": "Fraquezas 1",
        "raca": "Raca 1",
        "filiacao": "Filiacao 1",
        "origem": "Origem 1",
        "personalidade": "Personalidade 1",
        "ocupacao": "Ocupacao 1",
        "historia": "Historia 1",
      },
      ...
    ]
  ```

- Obter profile do heroi
  - **[GET]** https://cadastro-herois-api.herokuapp.com/heroi/{id}
  ```json
    // API RESPONSE (JSON)
    {
      "id": "1",
      "nome": "Nome 1",
      "poderes": "Poderes 1",
      "fraquezas": "Fraquezas 1",
      "raca": "Raca 1",
      "filiacao": "Filiacao 1",
      "origem": "Origem 1",
      "personalidade": "Personalidade 1",
      "ocupacao": "Ocupacao 1",
      "historia": "Historia 1",
    }
  ```

- Atualizar profile do heroi
  - **[POST]** https://cadastro-herois-api.herokuapp.com/heroi/{id}
  ```json
    // API BODY REQUEST (JSON)
    {
      "id": "1",
      "nome": "Nome Atualizado",
      "poderes": "Poderes 1",
      "fraquezas": "Fraquezas 1",
      "raca": "Raca 1",
      "filiacao": "Filiacao 1",
      "origem": "Origem 1",
      "personalidade": "Personalidade 1",
      "ocupacao": "Ocupacao 1",
      "historia": "Historia 1",
    }

    // API RESPONSE (JSON)
    { "ok": true } // Quando sucesso retorna (true) quando tem erro (false)
  ```

- Remover profile do heroi
  - **[DELETE]** https://cadastro-herois-api.herokuapp.com/heroi/{id}
  ```json
    // API RESPONSE (JSON)
    { "ok": true } // Quando sucesso retorna (true) quando tem erro (false)
  ```

- Criar novo heroi
  - **[POST]** https://cadastro-herois-api.herokuapp.com/novo
  ```json
    // API BODY REQUEST (JSON)
    {
      "nome": "Novo nome",
      "poderes": "Poderes 1",
      "fraquezas": "Fraquezas 1",
      "raca": "Raca 1",
      "filiacao": "Filiacao 1",
      "origem": "Origem 1",
      "personalidade": "Personalidade 1",
      "ocupacao": "Ocupacao 1",
      "historia": "Historia 1",
    }

    // API RESPONSE (JSON)
    { "ok": true } // Quando sucesso retorna (true) quando tem erro (false)
  ```