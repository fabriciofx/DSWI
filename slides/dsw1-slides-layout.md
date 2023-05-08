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

## Capítulo 6 - Layout Com Estilos

---

## Considerações ao Começar um Layout

- Sempre separe o seu conteúdo (HTML) da apresentação (CSS)
  - Torna a página mais fácil de manter e dá mais flexibilidade para funcionar em diferentes plataformas ou aparelhos
  - Faça sua página HTML e vincule com um arquivo CSS externo
- Teste o seu site em algum navegador (de preferência o Chrome)
- Se for necessário escrever regras CSS específicas para o IE6 e IE7, use comentários condicionais
  - https://www.quirksmode.org/css/condcom.html

---

## Considerações ao Começar um Layout

- **Layout Fixo**: usa *pixels* para as larguras. A largura não muda quando vista de celulares, tablets ou quando uma janela do navegador for reduzida
- **Layout Fluido**: usa *porcentagens* para as larguras, permitindo que a página encolha ou se expanda dependendo das condições de visualização (web design responsivo)
- **Layout Elástico**: usa *ems* para largura ou qualquer outra propriedade relacionada a tamanho. Assim, a página se dimensiona de acordo com as configurações do tamanho da fonte

---

## Estruturando a Página

- Divida as seções lógicas do seu documento em elementos `article`, `aside`, `nav`, `section`, `header`, `footer`, `main` e `div`
- Coloque o conteúdo em uma ordem que seria mais útil se o CSS não fosse usado. Exemplo: `<header>`, seguido por `<main>`, seguido por um ou mais `<aside>`, seguido por `<footer>`
- Use os cabeçalhos `<h1>` e `<h2>` de maneira consistente para identificar e priorizar a informação dentro das seções da sua página
- Use comentários `<!--` e `-->` se achar necessário

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

- Castro, E. Hyslop, B. "HTML5 e CSS3 - Guia Prático & Visual", AltaBooks, 2013
