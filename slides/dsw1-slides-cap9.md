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

## Capítulo 9 - Media Queries

---

## Motivação

- Desenvolvimento de um site responsivo, isto é, que se adapte aos diversos tipos de dispositivos e tamanhos de tela diferentes, como tablets e smartphones
- Adaptar aqui não é apenas mostrar corretamente o site, mas a possibilidade de mudar diversas características, como o layout, posicionamento dos elementos, cores, etc
- A solução: media queries

---

## Media Queries

- Permite aplicar regras CSS condicionalmente de acordo com as características do dispositivo ou janela em que um aplicativo está sendo visualizado
- Mais comumente, estão de acordo com a largura da janela de visualização, permitindo que se criem componentes e layouts que respondam ao tamanho da janela ou dispositivo em que estão sendo visualizados
- Mas também pode se estender se um usuário prefere claro ou escuro modo, ou até mesmo as preferências de acessibilidade de um usuário, além de muitas outras propriedades

---

## Sintaxe

- HTML
```html
<link rel="stylesheet" media="logic type and (feature: value)" href="estilo.css">
```
- CSS
```css
@media logic type and (feature: value) {
  /* Regras específicas para o dispositivo aqui */
}
```

---

## Exemplos de Sintaxe

- HTML
```html
<link rel="stylesheet" media="screen and (min-width: 480px)" href="estilo.css">
```

- CSS
```css
@media screen and (min-width: 480px) {
  /*
    Regras específicas para a tela de um dispositivo
    com tamanho maior ou igual a 480px
  */
}
```

---

## Exemplos de Sintaxe

```css
@media (max-width: 1200px) {
  /*
    Regras específicas para a tela de um dispositivo
    com tamanho menor ou igual a 1200px
  */
}
```

```css
@media (min-width: 480px) and (max-width: 800px) {
  /*
    Regras específicas para a tela de um dispositivo com tamanho
    maior ou igual a 480px e menor ou igual a 800px
  */
}
```

---

## Media Queries: Tipos de Dispositivos

- `all` a expressão de mídia será aplicada a todos os dispositivos. Se você não especificar nenhum tipo, este será aplicado por padrão
- `print` estilos dentro desta expressão de mídia são aplicados ao imprimir para impressoras ou exportar para PDF, inclusive no modo de visualização do documento
- `screen` para dispositivos com telas
- `handheld` para dispositivos de mão
- `speech` para sintetizadores de fala (ainda não suportado por nenhum navegador)

---

## Media Queries: Propriedades para a Página e Navegador

- `width` a largura da janela do navegador
- `min-width` largura mínima da janela do navegador
- `max-width` largura máxima da janela do navegador
- `height` a altura da janela do navegador
- `min-height` altura mínima da janela do navegador
- `max-height` altura máxima da janela do navegador
- `aspect-ratio` a relação entre a largura e a altura da janela

---

## Media Queries: Propriedades para a Página e Navegador

- `min-aspect-ratio` a proporção mínima entre a largura e a altura da janela
- `max-aspect-ratio` a relação máxima entre a largura e a altura da janela
- `orientation` orientação do dispositivo: `landscape` (paisagem, horizontal) ou `portrait` (retrato, vertical)

---

## Media Queries: Propriedades para a Página e Navegador

- `overflow-block` verifica como o dispositivo de saída lida com o conteúdo que se estende além da área de visualização ao longo do eixo do bloco
- `overflow-inline` verifica se o dispositivo de saída pode rolar o conteúdo que se estende além da viewport no eixo inline

---

## Media Queries: Propriedades do Display

- `environment-blending` um método para determinar o ambiente externo do dispositivo, como iluminação fraca ou muito forte
- `display-mode` verifique o modo do navegador usado no PWA: `fullscreen` (modo de tela cheia sem interface do navegador), `standalone` (como um aplicativo nativo), `minimal-ui` (interface mínima do navegador) e `browser` (janela normal do navegador)
- `grid` verifica se a tela é raster (todas as telas modernas) ou grade (como telefones antigos ou terminais de texto);
- `resolution` resolução do dispositivo em dpi ou dpcm

---

## Media Queries: Propriedades do Display

- `min-resolution` resolução mínima do dispositivo em dpi ou dpcm
- `max-resolution` resolução máxima do dispositivo em dpi ou dpcm
- `scan` o processo de digitalização do dispositivo de saída
- `update` velocidade de atualização da tela: `none` (não atualizado), `slow` ou `fast`

---

## Media Queries: Propriedades de Cor

- `color` o número de bits por cor no dispositivo de saída
- `min-color` o número mínimo de bits por cor no dispositivo de saída
- `max-color` o número máximo de bits por cor no dispositivo de saída
- `color-index` o número de cores que o dispositivo pode exibir
- `min-color-index` número mínimo de cores que o dispositivo pode exibir
- `max-color-index` o número máximo de cores que o dispositivo pode exibir

---

## Media Queries: Propriedades de Cor

- `monochrome` número de bits por cor no dispositivo de saída monocromático
- `min-monochrome` número mínimo de bits por cor no dispositivo de saída monocromático
- `max-monochrome` número máximo de bits por cor no dispositivo de saída monocromático
- `color-gamut` gama aproximada de cores suportadas pelo navegador e pelo dispositivo de saída

---

## Media Queries: Propriedades de Cor

- `dynamic-range` a combinação de nível de brilho, profundidade de cor e taxa de contraste para o vídeo no navegador ou dispositivo de saída
- `inverted-colors` verifica se as cores são invertidas pelo navegador ou sistema operacional

---

## Media Queries: Propriedades para Interações

- `hover` verifica se o dispositivo principal permite que você passe o mouse sobre os itens
- `any-hover` verifica se algum dos dispositivos de entrada permite que você aponte para itens
- `pointer` verifica se o dispositivo de entrada principal é um ponteiro e quão preciso ele é
- `any-pointer` verifica se algum dos dispositivos de entrada é um ponteiro e quão preciso ele é

---

## Media Queries: Propriedades para Vídeos

- `video-width` largura do vídeo na exibição selecionada (em consideração)
- `video-height` altura do vídeo na exibição selecionada (em consideração)
- `video-color-gamut` a faixa aproximada de cores suportadas para vídeo no navegador e dispositivo de saída
- `video-dynamic-range` faixa dinâmica de vídeo – a combinação de nível de brilho, profundidade de cor e taxa de contraste para o vídeo no navegador ou dispositivo de saída

---

## Media Queries: Propriedades para Vídeos

- `video-resolution` a resolução do vídeo no monitor selecionado (em consideração).

---

## Media Queries: Propriedades para Preferências do Usuário

- `forced-colors` verifica se o navegador proíbe as cores disponíveis para uso
- `prefers-color-scheme` determina se o usuário prefere um tema claro ou escuro
- `prefers-contrast` determina se as configurações são definidas para aumentar ou diminuir o contraste entre as cores
- `prefers-reduced-data` determina se o usuário prefere carregar menos dados na página

---

## Media Queries: Propriedades para Preferências do Usuário

- `prefers-reduced-motion` determina se as animações estão desativadas nas configurações do sistema do usuário
- `prefers-reduced-transparency` determina se a transparência está desativada nas configurações do sistema do usuário

---

## Operadores Lógicos

- `,` (vírgula), `and`, `not` e `only`
- `only` está sendo descontinuado, portanto não será abordado

---

## Operadores Lógico `and`

- É usado para combinar múltiplas condições. Neste caso, a lógica será executada se cada condição for verdadeira
- Exemplo: aplicar a media query abaixo se todas as três condições forem atendidas: ser uma tela (`screen`), largura (`width`) >= 1280px e orientação paisagem (`landscape`)
  ```css
  @media screen and (min-width: 1280px) and (orientation: landscape) { 
  ...
  }
  ```

---

## Operador Lógico `,` (ou)

- Define o uso de estilos quando apenas uma das condições especificas for atendida
- Equivalente ao operador lógico ou
- Exemplo: os estilos serão aplicados à página em dois casos: quando a largura (`width`) >= 524px ou a orientação for retrato (`portrait`)
  ```css
  @media (min-width: 524px), (orientation: portrait) { 
  ...
  }
  ```

---

## Operador Lógico `not`

- Usado para a negação
- Quando usando `not` com `and` para negação, ela funciona para toda a media query. Neste caso, quando especificando `not` não é necessário especificar o tipo de dispositivo
- Exemplo: aplicar os estilos apenas quando não (tela (`screen`) e largura (`width`) >= 418px e altura (`height`) >= 724px)
  ```css
  @media not screen and (min-width: 418px) and (min-height: 724px) { 
  ...
  }
  ```

---

## Operador Lógico `not`

- Quando usando `not` em uma expressão com `,`, ela adiciona uma negação para aquela parte apenas
- Exemplo: aplicar os estilos quando a seguinte condição for verdadeira: não é uma tela (`screen`) ou a largura (`width`) não é >= 418px
  ```css
  @media not screen, not (min-width: 418px) { 
  ... 
  }
  ```

---

## Referências Bibliográficas

- Castro, E. Hyslop, B. "HTML5 e CSS3 - Guia Prático & Visual", AltaBooks, 2013
- Stackdiary. "A Pratical Guide to CSS Media Queries". https://stackdiary.com/css-media-queries/, acessado em 31/05/2023
- Nathan Hardy. "Media Queries, Responsive Design? Help me!". https://engineering.kablamo.com.au/posts/2023/media-queries-and-responsive-design/, acessado em 31/05/2023
