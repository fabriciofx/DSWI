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

td {
  white-space: nowrap;
}
</style>

<!-- _paginate: false -->
# **Desenvolvimento de Sistemas para a Web I**

## Capítulo 5 - Cascading Style Sheet (CSS)

---

## Cascading Style Sheet (CSS)

- CSS significa "Cascading Style Sheets"
- É um conjunto de instruções que dizem ao computador como cada coisa deve ser exibida na tela
- Exemplo:
  - Texto azul e o fundo rosa
  - Um botão grande e vermelho

---

## Seletores

- Dizem ao navegador quais elementos HTML devem ser estilizados com as regras de estilo criadas
- Sintaxe:
  ```css
  seletor {
    regra1: valor1;
    regra2: valor2;
    ...
    regraN: valorN;
  }
  ```

---

## Seletor de Elemento
- Seleciona elementos HTML com base em seus nomes de tag
- Para selecionar, escreva o nome da tag (pode ter mais de uma)
- Exemplo:
  ```html
  <h1>Produtos em oferta</h1>
  ```
  ```css
  h1 {
      color: #ff0000;
  }
  ```

---

## Seletor de ID

- Seleciona **um único** elemento HTML com base em seus atributo `id`
- Para selecionar, escreva um `#` seguido do `id` do elemento
- Exemplo:
  ```html
  <p id="paragrafo">Um parágrafo qualquer</p>
  ```
  ```css
  #paragrafo {
    text-align: center;
    color: #ff0000;
  }
  ```

---

## Seletor de Classe

- Selecionam elementos HTML com base no valor do seu atributo de classe
- Para selecionar, escreva um `.` seguido do nome da classe
- Exemplo:
  ```html
  <p>Nesta frase, queremos colocar <strong class="destaque">esta</strong>
  palavra em destaque.</p>
  ```
  ```css
  .destaque {
    background-color: #00ff00;
  }
  ```

---

## Seletores Combinados

- Combinam vários seletores em uma única regra
- Exemplo:
  - Seleciona apenas os títulos de nível 1 com a classe "destaque"
    ```css
    h1.destaque {
      color: #0000ff;
    }
    ```
  - Seleciona apenas o título de nível 2 com o id "promocao"
    ```css
    h2#promocao {
      color: #ff0000;
    }
    ```

---

## Seletor Universal

- Seleciona todos os elementos HTML da página
- Para selecionar, escreva um `*` seguido das regras
- Exemplo:
  ```css
  * {
    margin: 0;
    padding: 0;
  }
  ```

---

## Seletores

| Seletor         | Exemplo       | Descrição                                                                                        |
|-----------------|---------------|--------------------------------------------------------------------------------------------------|
| .class          | .intro        | Seleciona todos os elementos em que<br>`class="intro"`                                           |
| .class1.class2  | .nome1.nome2  | Seleciona todos os elementos com<br> `nome1` e `nome2` definidos em<br> seu atributo de classe   |
| .class1 .class2 | .nome1 .nome2 | Seleciona todos os elementos com<br> `nome2` que são descendentes <br>de um elemento com `nome1` |

---

## Seletores

| Seletor              | Exemplo      | Descrição                                                |
|----------------------|--------------|----------------------------------------------------------|
| #id                  | #nome        | Seleciona o elemento com o `id="nome"`                   |
| *                    | *            | Seleciona todos os elementos                             |
| elemento             | p            | Seleciona todos os `<p>` elementos                       |
| elemento.class       | p.intro      | Seleciona todos `<p>` elementos com<br> `class="intro"`  |
| elemento1, elemento2 | div,p        | Seleciona todos os `<div>` e `<p>`<br> elementos         |


---

## Seletores

| Seletor             | Exemplo      | Descrição                                                |
|---------------------|--------------|----------------------------------------------------------|
| elemento1 elemento2 | div p        | Seleciona todos os `<p>` elementos<br> dentro de `<div>` |


- Mais seletores: https://www.w3schools.com/cssref/css_selectors.php

---

## Formatando Cores com Estilo

- Cor
  ```css
  color: <nome-da-cor> ou #RRGGBB;
  ```
  - Exemplo:
  ```css
  body {
    color: #0000ff;
  }
  ```

---

## Formatando Cores com Estilo

- Cor de fundo
  ```css
  background-color: <nome-da-cor> ou #RRGGBB;
  ```

---

## Formatando Texto com Estilo

- Escolher fonte
  ```css
  font-family: "Nome da fonte1", "Nome da fonte2", ...;
  ```


---

## Layouts

---

## Layout de Fluxo (Flow Layout)

- É o padrão do CSS
- Os elementos HTML são dispostos um abaixo do outro ou um ao lado do outro, seguindo a ordem em que aparecem no código HTML

---

## Layout Flexível (Flexbox Layout)

- Envolve o uso da propriedade CSS `display: flex` para criar um contêiner que pode ser dimensionado e posicionado de maneira flexível
- Os elementos dentro do contêiner podem ser organizados em uma única linha ou coluna, ou em várias linhas e colunas, dependendo da configuração

---

## Layout de Posicionamento (Positioning Layout)

- Envolve o uso das propriedades CSS `position`, `top`, `bottom`, `left` e `right` para posicionar elementos de maneira precisa na página
- Permite que você coloque elementos em lugares específicos, mesmo que eles não estejam na ordem natural do fluxo

---

## Layout de Grade (Grid Layout)

- Envolve o uso da propriedade CSS `display: grid` para criar um grid de células, onde os elementos HTML podem ser colocados em posições específicas
- Permite criar designs complexos com elementos dispostos em linhas e colunas

---

## Layout de Múltiplas Colunas (Multi-column Layout)

- Envolve o uso da propriedade CSS `column-count` para dividir o conteúdo em várias colunas
- É especialmente útil para conteúdo de texto, como artigos de notícias ou blogs

---

## Referências Bibliográficas

- W3Schools, "CSS Selectors", https://www.w3schools.com/css/css_selectors.asp, acessado em 21/04/2023
- W3Schools, "CSS Selector Reference", https://www.w3schools.com/cssref/css_selectors.php, acessado em 21/04/2023