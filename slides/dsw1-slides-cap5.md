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

- HTML define o significado do conteúdo e dá estrutura básica das páginas web; CSS define a aparência
- CSS significa "Cascading Style Sheets" ou "Folhas de Estilo de Cascata"
- É um conjunto de instruções que dizem ao computador como cada coisa deve ser exibida na tela
- Exemplo:
  - Texto azul e o fundo rosa
  - Um botão grande e vermelho

---

## Vinculando CSS ao HTML

- Adicionar a tag `<link>` com `rel` `stylesheet` e o `href` apontando para o arquivo de estilos
- Sintaxe:
  ```css
  <link rel="stylesheet" href="arquivo.css">
  ```
- Exemplo:
  ```css
  <link rel="stylesheet" href="assets/css/estilo.css">
  ```

---

## Regra de Estilo

- Possui duas partes principais: o *seletor* e o *bloco de declaração*
- Sintaxe:
  ```css
  seletor {
    propriedade1: valor1;
    propriedade2: valor2;
    ...
    propriedadeN: valorN;
  }
  ```
- As propriedades e valores são o bloco de declaração
- Comentários são feitos usando `/*` e `*/`

---

## Seletores

- Dizem ao navegador quais elementos HTML devem ser estilizados com as regras de estilo criadas
- Tipos mais comuns:
  - Seletor de Elemento
  - Seletor de ID
  - Seletor de Classe
  - Seletores Combinados
  - Seletor Universal

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
  seletor {
    background-color: <nome-da-cor> ou #RRGGBB;
  }
  ```

- Exemplo:
  ```css
  body {
    background-color: #d7d7d7;
  }
  ```

---

## Formatando Cores com Estilo

- Adobe Color
  - https://color.adobe.com

- Coolors
  - https://coolors.co

- Color Hunt
  - https://colorhunt.co

---

## Formatando Texto com Estilo

- Google Fonts
  - https://fonts.google.com

- Importar para o arquivo CSS
  ```css
  @import url('https://fonts.googleapis.com/css2?
  family=Roboto:wght@300&display=swap');
  ```

---

## Formatando Texto com Estilo

- Utilizar o `font-family` e especificar o `font-weight`
  ```css
  seletor {
    font-family: "Nome da fonte1", "Nome da fonte2", ...;
    font-weight: valor;
  }
  ```

- Exemplo:
  ```css
  h1 {
    font-family: Roboto, sans-serif;
    font-weight: 300;
  }
  ```

---

## Formatando Texto com Estilo

- Fonte em itálico
  ```css
  seletor {
    font-style: italic;
  }
  ```

- Exemplo:
  ```css
  h1 {
    font-style: italic;
  }
  ```

---

## Formatando Texto com Estilo

- Para remover o itálico: `font-style: normal`

---

## Formatando Texto com Estilo

- Fonte em negrito
  ```css
  seletor {
    font-weight: valor;
  }
  ```

- O `valor` pode ser um número múltiplo de `100`, entre `100` e `900`, em que `400` é normal e `900` é negrito, ou as palavras-chave `bold`, `bolder` ou `lighter`

---

## Formatando Texto com Estilo

- Exemplo:
  ```css
  p {
    font-weight: 900;
  }
  ```

- Para remover uma formatação em negrito: `font-weight: normal;`

---

## Formatando Texto com Estilo

- Configurando o tamanho da fonte
  ```css
  seletor {
    font-size: tamanho (px, em, %, etc.);
  }
  ```

- Exemplo:
  ```css
  h1 {
    font-size: 64px;
  }
  ```

---

## Formatando Texto com Estilo

- Também pode utilizar as palavras-chave `xx-small`, `x-small`, `small`, `medium`, `large`, `x-large` e `xx-large` para espefificar o tamanho

---

## Formatando Texto com Estilo

- Para definir a altura da linha, use a propriedade `line-height`
  - A altura da linha refere-se à quantidade de espaço entre cada linha em um parágrafo
- Sintaxe:
  ```css
  seletor {
    line-height: valor;
  }
  ```
  - Em que *valor* (sem unidade) é um número que será multiplicado pelo tamanho da fonte do elemento

---

## Formatando Texto com Estilo

- Exemplo:
  ```css
  p {
    line-height: 1.6;
  }
  ```

---

## Formatando Texto com Estilo

- Para controlar o espaçamento entre palavras (tracking) usa-se a propriedade `word-spacing` e para controlar o espaçamento entre as letras (kerning) usa-se `letter-spacing`
- Sintaxe:
  ```css
  seletor {
    word-spacing: valor;
    letter-spacing: valor;
  }
  ```
  - Em que *valor* é um número com unidades, como `0.4em` ou `5px`

---

## Formatando Texto com Estilo

- Exemplo:
  ```css
  p {
    word-spacing: 1px;
    letter-spacing: -0.5px;
  }
  ```
- Observação: *valor* pode assumir valores negativos

---

## Formatando Texto com Estilo

- Utilize a propriedade `text-indent` para determinar o espaçamento que deve anteceder a primeira linha de um parágrafo
- Sintaxe:
  ```css
  seletor {
    text-indent: valor;
  }
  ```
  - Em que *valor* é um número com unidades, como `1.5em` ou `18px`

---

## Formatando Texto com Estilo

- Exemplo:
  ```css
  p {
    text-indent: 1.5em;
  }
  ```

---

## Formatando Texto com Estilo

- Para alinhar o texto, use a propriedade `text-align`
- Sintaxe:
  ```css
  seletor {
    text-align: valor;
  }
  ```
  - Em que *valor* pode ser `left` (à esquerda), `right` (à direita), `center` (centralizado) e `justify` (justificado)

---

## Formatando Texto com Estilo

- Exemplo:
  ```css
  p {
    text-align: justify;
  }
  ```

---

## Formatando Texto com Estilo

- Para definir a caixa do texto, use a propriedade `text-transform`
- Sintaxe:
  ```css
  seletor {
    text-transform: valor;
  }
  ```
  - Em que *valor* pode ser `capitalize` para colocar a primeira letra de cada palavra em maiúscula; `uppercase` para deixar todas as letras em maiúsculas; `lowercase` para deixar todas as letras em minúsculas

---

## Formatando Texto com Estilo

- Exemplo:
  ```css
  h1 {
    text-transform: uppercase;
  }
  ```

---

## Formatando Texto com Estilo

- Para decorar o texto com sublinhado, uma linha sobre o texto ou riscá-lo, use a propriedade `text-decoration`
- Sintaxe:
  ```css
  seletor {
    text-decoration: valor;
  }
  ```
  - Em que *valor* pode ser `underline` (sublinhado), `overline` (linha sobre o texto), `line-through` (riscado) ou `none` para não ter nenhuma decoração

---

## Formatando Texto com Estilo

- Exemplo:
  ```css
  h1 {
    text-decoration: underline;
  }
  ```

---

## Referências Bibliográficas

- W3Schools, "CSS Selectors", https://www.w3schools.com/css/css_selectors.asp, acessado em 21/04/2023
- W3Schools, "CSS Selector Reference", https://www.w3schools.com/cssref/css_selectors.php, acessado em 21/04/2023
- Castro, E. Hyslop, B. "HTML5 e CSS3 - Guia Prático & Visual", AltaBooks, 2013
