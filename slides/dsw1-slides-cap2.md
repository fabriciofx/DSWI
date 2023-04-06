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

## Capítulo 2 - HTML

---

## HTML

- HyperText Markup Language (Linguagem de Marcação de Hipertexto)
- **Linguagem de marcação** utilizada na construção de páginas Web
- Uma **linguagem de marcação** é um conjunto de sinais (tags) aplicados nos textos ou em dados para definir sua configuração e aparência em uma página Web
  - Exemplo: `<title>`Minha Página`</title>`

---

## Tags HTML

- Estão inseridas entre os sinais `<` e `>`
- São divididas em tags de abertura e de fechamento. As de fechamento possuem uma `/` logo após o sinal de `<`
    - Exemplo: `<h1>` (tag de abertura) e `</h1>` (tag de fechamento)
- Nem todas as tags possuem tag de fechamento
    - Exemplos: `<br>`, `<hr>`, `<img>`, etc.
- As tags são *case insensitive*, mas dê preferência para escrever em minúsculo

---

## Principais Tags do HTML

- `<!DOCTYPE html>`
  - Ativa o *full standards mode* do HTML5 no documento
  - Se não utilizado, o navegador utiliza o *quirks mode*, layout que emula o comportamento não-padrão do Netscape Navigator 4 e do Internet Explorer 5 para Windows que é requerido para não quebrar o conteúdo existente na Web
  - Deve ser a primeira tag do documento HTML

---

## Principais Tags do HTML

- `<html>`...`</html>`
  - Representa a raiz de um documento HTML. Todos os outros elementos devem ser descendentes desse elemento
- `<head>`...`</head>`
  - Providencia *metadados* sobre o documento, incluindo seu título e links para scripts e folhas de estilos
  - Metadados são informações sobre o próprio documento
- `<body>`...`</body>`
  - Representa o conteúdo de um documento HTML

---

## Principais Tags do HTML

- `<meta>`
  - Define qualquer informação de metadados que não podem ser definidos por outros elementos HTML
  - Exemplo: `<meta charset="UTF-8">` define que a codificação do documento é UTF-8
- `<title>`...`</title>`
  - Define o título do documento, mostrado na barra de título de um navegador ou na aba da página HTML
  - Exemplo: `<title>`Minha Página`</title>`

---

## Principais Tags do HTML

- `<br>`
  - Produz uma quebra de linha em um texto (carriage-return)
  - Exemplo: Aqui tem `<br>` uma quebra

             Aqui tem
             uma quebra

---

## Principais Tags do HTML

- `<h1>`...`</h1>`, `<h2>`...`</h2>`, `<h3>`...`</h3>`, `<h4>`...`</h4>`, `<h5>`...`</h5>` e `<h6>`...`</h6>`
  - Representam seis níveis de título de seção. `<h1>` é o nível de seção maior e `<h6>` é o menor
  - Exemplos:
    `<h1>`Título 1`</h1>`
    ...
    `<h6>`Título 2`</h6>`
  ![bg right:40% w:50%](imagens/titulos.png)

---

## Principais Tags do HTML

- `<p>`...`</p>`
  - Representa um parágrafo. Em HTML, parágrafos são usados para agrupar conteúdos relacionados de qualquer tipo

---

## Principais Tags do HTML

- `<hr>`
  - Representa uma quebra temática entre elementos de nível de parágrafo (por exemplo , uma mudança da cena de uma história, ou uma mudança de tema com uma seção). Nas versões anteriores do HTML, representava uma linha horizontal. Pode continuar sendo exibida como uma linha horizontal nos navegadores, mas agora está definida em termos semânticos, em vez de termos de apresentação

---

## Template Básico de uma Página

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Título da Página</title>
</head>
<body>
    <header>...</header>
    <main>...</main>
    <footer>...</footer>
</body>
</html>
```

---


## Referências Bibliográficas

- MDN Web Docs, "Elementos HTML", https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element, acessado em 05/04/2023
- MDN Web Docs, "<hr>", https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/hr, acessado em 05/04/2023
- MDN Web Docs, "<img>", https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/img, acessado em 05/04/2023

---

## Referências Bibliográficas

- MDN Web Docs, "<h1>–<h6>: Os elementos HTML de cabeçalho da seção", https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Heading_Elements, acessado em 05/04/2023
- MDN Web Docs, "\<br>", https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/br, acessado em 05/04/2023
- MDN Web Docs, "<head>", https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/head, acessado em 05/04/2023

---

## Referências Bibliográficas

- MDN Web Docs, "<html>", https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/html, acessado em 05/04/2023
- MDN Web Docs, "<body>", https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/body, acessado em 05/04/2023
- MDN Web Docs, "<title>", https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/title, acessado em 05/04/2023

---

## Referências Bibliográficas

- MDN Web Docs, "Quirks Mode e Standards Mode", https://developer.mozilla.org/pt-BR/docs/Web/HTML/Quirks_Mode_and_Standards_Mode, acessado em 05/04/2023
- MDN Web Docs, "<meta>", https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/meta, acessado em 05/04/2023
- MDN Web Docs, "<p>", https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/p, acessado em 05/04/2023

