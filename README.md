# BioAR — Biologia em Realidade Aumentada

Aplicação educacional de realidade aumentada, desenvolvida com foco no uso em celulares pelo navegador.

## Interface mobile-first

- Layout adaptado primeiro para celulares, em retrato e paisagem.
- Área de leitura quadrada para o marcador Hiro.
- A câmera permanece desligada ao abrir a página.
- A câmera é inicializada somente depois que a pessoa toca em **Ativar câmera**.
- Botão para desligar a câmera e interromper as trilhas de mídia.
- Painéis de conteúdo abaixo da visualização da câmera em telas menores.

## Protótipo atual

- Rastreamento de marcador Hiro com AR.js 3.4.7.
- Cena A-Frame criada somente após a interação do usuário.
- Representação geométrica demonstrativa do coração.
- Informações textuais sobre coração, pulmões e cérebro.

O coração é uma representação 3D simplificada para validar o rastreamento, não um modelo anatômico científico. Os botões de órgãos atualizam o painel de informação; a seleção de malhas 3D será desenvolvida posteriormente.

## Como testar

1. Abra https://brenner279.github.io/BioRA/ no Chrome do celular.
2. A página deve abrir sem pedir acesso à câmera.
3. Toque em **Ativar câmera** e conceda a permissão.
4. Posicione o marcador Hiro inteiro dentro do quadro quadrado.
5. Toque em **Desligar câmera** para encerrar a experiência.

## Tecnologias

- A-Frame 1.6.0
- AR.js 3.4.7 (marcador Hiro)
- HTML, CSS e JavaScript
- GitHub Pages

## Observação sobre conexão

As bibliotecas A-Frame e AR.js são carregadas de uma CDN. Portanto, a experiência com câmera/RA requer conexão com a internet. O cache cobre apenas os arquivos básicos da aplicação; o funcionamento offline completo será desenvolvido depois.
