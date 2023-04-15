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

## Capítulo 5 - Cascading Style Sheet (CSS)

---

## Cascading Style Sheet (CSS)

CSS significa "Cascading Style Sheets", mas o que isso significa? Bem, imagine que você está desenhando uma imagem em um papel. Você escolhe as cores que você quer usar e onde você quer desenhar cada coisa, certo? CSS é como isso, mas para a internet.

Quando você visita um site na internet, você vê muitas coisas diferentes na tela, como textos, imagens, botões e outras coisas. CSS é o que faz com que essas coisas pareçam bonitas e organizadas. É como um conjunto de instruções que dizem ao computador como cada coisa deve ser exibida na tela.

---

## Cascading Style Sheet (CSS)

Por exemplo, se você quiser que o texto seja azul e o fundo seja rosa, você pode usar o CSS para dizer isso ao computador. Ou, se você quiser que um botão seja grande e vermelho, você pode usar o CSS para dizer isso também.

Então, resumindo, CSS é como uma ferramenta que ajuda as pessoas a fazerem sites bonitos e organizados.

---

## Seletores

- Dizem ao navegador quais elementos HTML devem ser estilizados com as regras de estilo que você criou
- Seletores de Elemento: selecionam elementos HTML com base em seus nomes de tag, por exemplo, `p` seleciona todos os parágrafos e `h1` seleciona todos os títulos de nível 1
- Seletores de Classe: selecionam elementos HTML com base em seus atributos de classe, que são definidos pelo programador, por exemplo, `.destaque` seleciona todos os elementos com a classe "destaque".

---

## Seletores

- Seletores de ID: selecionam elementos HTML com base em seus atributos de ID, que também são definidos pelo programador, por exemplo, `#cabecalho` seleciona o elemento com o ID "cabecalho".
- Seletores de Atributo: selecionam elementos HTML com base em seus atributos, como `href`, `src`, `title`, entre outros. Por exemplo, [href="https://www.google.com"] seleciona todos os links que apontam para o site "https://www.google.com".

---

## Seletores

- Seletores Combinados: eles combinam vários seletores em uma única regra, como `h1.destaque` que seleciona todos os títulos de nível 1 com a classe "destaque".

---

## Layouts

- Layout de Fluxo (Flow Layout): é o layout padrão do CSS. Os elementos HTML são dispostos um abaixo do outro ou um ao lado do outro, seguindo a ordem em que aparecem no código HTML. É a maneira mais básica de organizar elementos na página
- Layout de Posicionamento (Positioning Layout): envolve o uso das propriedades CSS `position`, `top`, `bottom`, `left` e `right` para posicionar elementos de maneira precisa na página. Isso permite que você coloque elementos em lugares específicos, mesmo que eles não estejam na ordem natural do fluxo

---

## Layouts

- Layout de Grade (Grid Layout): envolve o uso da propriedade CSS `display: grid` para criar um grid de células, onde os elementos HTML podem ser colocados em posições específicas. Isso permite criar designs complexos com elementos dispostos em linhas e colunas
- Layout Flexível (Flexbox Layout): envolve o uso da propriedade CSS `display: flex` para criar um recipiente flexível que pode ser dimensionado e posicionado de maneira flexível. Os elementos dentro do recipiente flexível podem ser organizados em uma única linha ou coluna, ou em várias linhas e colunas, dependendo da configuração

---

## Layouts

- Layout de Múltiplas Colunas (Multi-column Layout): o layout de múltiplas colunas envolve o uso da propriedade CSS `column-count` para dividir o conteúdo em várias colunas. Isso é especialmente útil para conteúdo de texto, como artigos de notícias ou blogs

---

## Referências Bibliográficas

- ChatGPT, https://chat.openai.com/, acessado em 15/04/2023