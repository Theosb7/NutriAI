O CSS (Cascading Style Sheets) é a linguagem usada para estilizar páginas da web. Enquanto o HTML serve para estruturar o conteúdo da página (títulos, parágrafos, imagens, etc.), o CSS é responsável pela aparência, como cores, tamanhos, espaçamentos e organização dos elementos.

Usar um arquivo externo chamado style.css é o mais recomendado porque:

Organização: separa o HTML do visual CSS.

Reutilização: o mesmo arquivo CSS pode ser usado em várias páginas do site.

Manutenção mais fácil: se quiser mudar uma cor ou fonte, basta alterar em um único arquivo.

Propriedades mais utilizadas:

color
Define a cor do texto de um elemento.

background-color
Define a cor de fundo de um elemento.

margin
Controla o espaço externo de um elemento, ou seja, a distância entre ele e outros elementos.

padding
Controla o espaço interno, ou seja, a distância entre o conteúdo do elemento e sua borda.

font-size
Define o tamanho da fonte do texto.

text-align
Define o alinhamento do texto (esquerda, direita, centro, etc.).

display: flex
Ativa o Flexbox, um sistema que ajuda a organizar elementos de forma mais fácil.

Classes em CSS

No CSS, classes são usadas para aplicar estilos a elementos específicos do HTML.
Ex:

No CSS:

.titulo {
    color: blue
}

No HTML:

<h1 class="titulo">Titulo da pagina</h1>
