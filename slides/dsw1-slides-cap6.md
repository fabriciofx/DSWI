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

## Capítulo 6 - Propriedades CSS Personalizadas (Variáveis)

---

## Propriedades CSS Personalizadas

- Também conhecidas como variáveis CSS ou variáveis em cascata
- São entidades definidas por desenvolvedores que contém valores específicos a serem reutilizados em um documento
- Utilizadas quando se tem vários valores que se repetem ao longo do documento e que deseja que sejam alterados de uma única vez
- Vantagens
  - Código claro (`--cor-de-fundo` é mais semântico que `#b5c3d7`)
  - Favore a manutenção (só é necessário alterar em um único lugar)
  - Facilita a criação de temas

---

## Propriedades CSS Personalizadas

- Sintaxe da declaração:
  ```css
  --nome-da-propriedade: valor;
  ```
  1. Dois hífens (`--`)
  2. Nome da propriedade
  3. Dois pontos (`:`)
  4. Valor da propriedade
  5. Ponto e vírgula (`;`)

---

## Propriedades CSS Personalizadas

- Sintaxe da declaração:
  - Exemplo:
    ```css
    :root {
      --cor-principal: #ff0000;
    }
    ```

---

## Propriedades CSS Personalizadas

- Para poder acessar (ler) o conteúdo de uma propriedade personalizada, utiliza-se a função `var()`
- Sintaxe do acesso:
  ```css
  var(--nome-da-propriedade);
  ```
  - Exemplo:
    ```css
    color: var(--cor-principal);
    ```

---

## Escopo

- É um contexto delimitante aos quais valores e expressões estão associados
- É utilizado para definir o grau de ocultação da informação, isto é, a visibilidade e acessibilidade às propriedades em diferentes partes do documento
- Tipo
  - Global
  - Local

---

## Escopo Global

- Declara-se dentro da pseudo classe `:root`
- `:root` corresponde a raiz, é o mesmo que `<html>`, mas possui uma especifidade maior
- Exemplo:
  ```css
  :root {
    --cor-primaria: red;
  }

  h1 {
    color: var(--cor-primaria);
  }
  ```

---

## Escopo Local

- Declara-se dentro do seletor que vai utilizá-la
- Exemplo:
  ```css
  ul {
    --cor-do-texto: blue;
  }

  ul li {
    color: var(--cor-do-texto);
  }
  ```

---

## Referências Bibliográficas

- MDN, "Utilizando propriedades CSS personalizadas (variáveis)", https://developer.mozilla.org/pt-BR/docs/Web/CSS/Using_CSS_custom_properties, acessado em 08/05/2023
- Alura, "Construa um CSS mágico com variáveis nativas", https://www.alura.com.br/artigos/construa-css-magico-variaveis-nativas, acessado em 08/05/2023
- Wikipedia, "Escopo (computação)", https://pt.wikipedia.org/wiki/Escopo_(computa%C3%A7%C3%A3o), acessado em 08/05/2023