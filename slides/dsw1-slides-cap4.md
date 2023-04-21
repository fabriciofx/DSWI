---
marp: true
theme: gaia
backgroundColor: white
color: black
paginate: true
footer: Desenvolvimento de Sistemas para a Web I - Fabrício Barros Cabral <<fabricio.cabral@ead.ifpe.edu.br>>
---
<style>
img[alt~="center"] {
    display: block;
    margin: 0 auto;
}
</style>

<!-- _paginate: false -->
# **Desenvolvimento de Sistemas para a Web I**

## Capítulo 4 - Formulário HTML

---

## Formulário HTML

- `<form>`...`</form>`
  - É usado para coletar informações de entrada do usuário. Estas informações, por sua vez, geralmente são enviadas para um servidor para processamento
  - Tem como atributo `method`, que é a forma de envio dos dados. Assim, teremos `method="get"` para o método `GET` e `method="post"` para o método `POST`
  - Tem como atributo `action` a URL/script/programa que irá processar os dados do formulário. Exemplo: `action="/login"`

---
## Formulário HTML

- Exemplo:

```html
<form method="post" action="/login">
    <fieldset>
        <label for="usuario">Usuário:</label>
        <input id="usuario" name="usuario"><br>
        <label for="senha">Senha:</label>
        <input type="password" id="senha" name="senha"><br>
        <input type="submit" value="Login">
    </fieldset>
</form>
```

---

## Método GET ou POST?

- `GET` é usado quando o cliente deseja obter recursos do servidor; `POST` é usado quando o cliente deseja enviar dados para processamento no servidor
  - Passe algum dado via `GET` para ajudar a obter algum recurso, como o id de algum produto
- `GET` passa os dados codificados no cabeçalho da requisição (URL); `POST` passa no corpo da requisição
- `GET` possui limite do envio de caracteres que variam de acordo com o cliente/servidor (pode ser de 255 bytes até 2.000 caracteres); `POST` não há esse limite

---

## Label

- `<label>`...`</label>`
  - Define um rótulo para um elemento de formulário
  - É útil para usuários de leitores de tela, porque o leitor lerá o rótulo em voz alta quando o elemento de entrada for focalizado
  - Ajuda os usuários que têm dificuldade em clicar em regiões muito pequenas, porque quando o usuário clica no texto do rótulo, ele alterna para o `input` correspondente
  - O atributo `for` deve ser igual ao `id` do `input` para vinculá-los

---

## Fieldset

- `<fieldset>`...`</fieldset>`
  - Agrupa os elementos relacionados do formulário, tornando-o mais fácil de ser seguido
  - Quanto mais fácil de ser seguido, maiores as chances de preenchê-lo corretamente
  - Também pode-se incluir um `<legend>`...`</legend>` que adiciona uma legenda para cada `fieldset`, descrevendo a razão de cada agrupamento

---

## Tipos de Input

- `<input type="text">`
  - Define um campo de texto de uma única linha
  - Exemplo:
    ```html
    <form>
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome"><br>
    </form>
    ```
  - Atributos: `required="required"`, `placeholder="mensagem"`, `value="valor-padrão"`, `autofocus="autofocus"`, `size="n"`, `maxlength="n"`

---

## Tipos de Input

- `<input type="password">`
  - Define um campo do tipo password
  - Exemplo:
    ```html
    <form>
        <label for="senha">Senha:</label>
        <input type="password" id="senha" name="senha"><br>
    </form>
    ```

---

## Tipos de Input

- `<input type="submit">`
  - Define um botão para *submeter* os dados do formulário para um script/programa no lado do servidor
  - O script/programa é especificado por meio do atributo `action` do formulário
  - Exemplo:
    ```html
    <form method="post" action="/criar-conta">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome"><br>
        <input type="submit" value="Criar conta">
    </form>
    ```

---

## Tipos de Input

- `<input type="reset">`
  - Define um botão que redefinirá todos os valores do formulário para seus valores padrão
  - Exemplo:
    ```html
    <form method="post" action="/login">
        <label for="usuario">Usuário:</label>
        <input id="usuario" name="usuario" value="Seu login"><br>
        <label for="senha">Senha:</label>
        <input type="password" id="senha" name="senha" value="Sua senha"><br>
        <input type="submit" value="Login">
        <input type="reset" value="Apagar dados">
    </form>
    ```

---

## Tipos de Input

- `<input type="radio">`
  - Define um botão de rádio. O usuário só pode selecionar uma opcão entre um número limitado de escolhas
  - Exemplo:
    ```html
    <p>Escolha a sua linguagem de programação favorita:</p>
    <form>
        <input type="radio" id="java" name="linguagem" value="Java">
        <label for="java">Java</label><br>
        <input type="radio" id="python" name="linguagem" value="Python">
        <label for="python">Python</label><br>
        <input type="radio" id="javascript" name="linguagem" value="JavaScript">
        <label for="javascript">JavaScript</label>
    </form>
    ```

---

## Tipos de Input

- `<input type="checkbox">`
  - Define um checkbox. O usuário pode selecionar zero ou mais opções de um número limitado de escolhas
  - Exemplo:
    ```html
    <p>Marque as linguagens de programação que você domina:</p>
    <form>
        <input type="checkbox" id="linguagem1" name="linguagem1" value="Java">
        <label for="java">Java</label><br>
        <input type="checkbox" id="linguagem2" name="linguagem2" value="Python">
        <label for="python">Python</label><br>
        <input type="checkbox" id="linguagem3" name="linguagem3" value="JavaScript">
        <label for="javascript">JavaScript</label>
    </form>
    ```

---

## Tipos de Input

- `<button>`...`</button>`
  - Define um botão que permite mais estilos visuais, como adicionar uma imagem ou texto
  - O padrão é ser um botão do `type` `submit`, mas pode ser `button` ou `reset`
  - Exemplo:
    ```html
    <form>
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome"><br>
        <button>Criar conta</button>
    </form>

---

## Tipos de Input

- `<input type="color">`
  - Define um campo de entrada que deve conter uma cor
  - Dependendo do suporte do navegador, pode mostrar um seletor de cor

---

## Tipos de Input

- `<input type="date">`
  - Define um campo de entrada que deve conter uma data
  - Dependendo do suporte do navegador, pode mostrar um seletor de datas

---

## Tipos de Input

- `<input type="datetime-local">`
  - Define um campo de entrada para data e hora, sem timezone
  - Dependendo do suporte do navegador, pode mostrar um seletor de data e hora

---

## Tipos de Input

- `<input type="email">`
  - Define um campo de entrada que pode conter um e-mail
  - Dependendo do suporte no navegador, o endereço de e-mail pode ser automaticamente validado quando submetido
  - Alguns celulares reconhecem o tipo e-mail e adicionam um `.com` no teclado para facilitar a digitação

---

## Tipos de Input

- `<input type="image">`
  - Define uma imagem como um botão de submit
  - O caminho da imagem é definido pelo atributo `src="arquivo"`

---

## Tipos de Input

- `<input type="file">`
  - Define um campo para selecionar arquivo e um botão "browser" para o upload de arquivos

---

## Tipos de Input

- `<input type="hidden">`
  - Define um campo invisível para o usuário
  - Permite que desenvolvedores coloquem dados que não serão vistos ou modificados pelos usuários
  - Frequentemente armazena no banco de dados campos que precisam ser atualizados quando um formulário é submetido

---

## Tipos de Input

- `<input type="month">`
  - Permite ao usuário selecionar um mês de um ano
  - Dependendo do suporte do navegador, um seletor de data é mostrado

---

## Tipos de Input

- `<input type="number">`
  - Define um campo de entrada numérico
  - Também define um conjunto de restrições sobre os números que podem ser aceitos

---

## Tipos de Input

- `<input type="range">`
  - Define um controle cujo exato valor do número não é importante
  - Mostra um slider control
  - O intervalo padrão varia de 0 a 100, mas um conjunto de restrições é aceito

---

## Tipos de Input

- `<input type="search">`
  - Define um campo utilizado para buscas
  - Se comporta igual a um campo para texto

---

## Tipos de Input

- `<input type="tel">`
  - Define um campo que pode conter um número de telefone
  - O atributo `pattern="regex"` define o padrão do número, em que `regex` é a expressão regular que define o formato do número

---

## Tipos de Input

- `<input type="time">`
  - Permite ao usuário escolher uma hora (sem timezone)
  - Dependendo do suporte do navegador, um seletor de hora é mostrado

---

## Tipos de Input

- `<input type="url">`
  - Define um campo de entrada que deve conter um endereço `URL`
  - Dependendo do suporte do navegador, o campo `URL` pode ser validado automaticamente quando submetido
  - Alguns celulares reconhecem o tipo `url` e adicionam um `.com` no teclado para facilitar a digitação

---

## Tipos de Input

- `<input type="week">`
  - Permite o usuário selecionar uma semana de um ano
  - Dependendo do suporte no navegador, pode mostrar um seletor de data

---

## Referências Bibliográficas

- W3Schools, "HTML Forms", https://www.w3schools.com/html/html_forms.asp, acessado em 19/04/2023
- TREINAWEB, "O que é HTTP, Request, GET, POST, Response, 200, 404?", https://www.treinaweb.com.br/blog/o-que-e-http-request-get-post-response-200-404, acessado em 19/04/2023
- Alura, "HTTP: GET e POST - Conheça as diferenças entre os métodos", https://www.alura.com.br/artigos/diferencas-entre-get-e-post, acessado em 19/04/2023

---

## Referências Bibliográficas

- StackOverflow, "What is the maximum length of a URL in different browsers?", https://stackoverflow.com/questions/417142/what-is-the-maximum-length-of-a-url-in-different-browsers, acessado em 19/04/2023
- W3Schools, "HTML Input Types", https://www.w3schools.com/html/html_form_input_types.asp, acessado em 19/04/2023
- Castro, E. Hyslop, B. "HTML5 e CSS3 - Guia Prático & Visual", AltaBooks, 2013
