# AnatoRA 3D

Atlas educativo de anatomia humana em realidade aumentada, desenvolvido como PWA para testes em celulares Android.

## Protótipo atual

- Interface inicial responsiva.
- Visualizador 3D didático do coração (modelo simplificado construído com primitivas 3D).
- Painel de identificação e explicação de estruturas anatômicas.
- Estrutura inicial do leitor de cartões com MindAR Image Tracking.
- Cartão marcador do coração em `assets/markers/cartao-coracao.png`.
- PWA com cache dos arquivos essenciais.

## Publicação

1. Abra **Settings → Pages** no GitHub.
2. Em **Build and deployment**, escolha **Deploy from a branch**.
3. Selecione a branch `main` e a pasta `/(root)`.
4. Salve e aguarde a publicação.
5. Acesse: https://brenner279.github.io/BioRA/

## Ativar o rastreamento do cartão

O leitor utiliza MindAR 1.2.5 e precisa de um arquivo compilado `.mind` correspondente à imagem do cartão.

1. Baixe `assets/markers/cartao-coracao.png`.
2. Abra o [compilador oficial de imagens MindAR](https://hiukim.github.io/mind-ar-js-doc/tools/compile/).
3. Carregue a imagem, execute **Start** e baixe o arquivo de destino.
4. Renomeie o arquivo baixado para `coracao.mind`.
5. Envie-o para `assets/markers/coracao.mind` neste repositório.
6. Recarregue o aplicativo. O botão de realidade aumentada passará a iniciar o leitor.

## Observações técnicas

- O acesso à câmera exige HTTPS e permissão do navegador.
- O primeiro carregamento das bibliotecas A-Frame e MindAR exige internet. O cache offline do app está preparado para os arquivos próprios; para operação totalmente offline, as bibliotecas externas ainda precisam ser incorporadas localmente.
- O modelo atual é uma ilustração 3D didática simplificada, não um modelo anatômico clínico validado.
- O rastreamento depende da qualidade da impressão, iluminação, foco e compatibilidade do aparelho.

## Próximas entregas

1. Compilar e testar o marcador do coração.
2. Substituir o modelo provisório por um modelo anatômico 3D de maior fidelidade.
3. Adicionar pontos de identificação interativos diretamente no modelo.
4. Criar módulos de pulmões, cérebro e sistema digestório.
5. Empacotar como APK, se necessário.

## Créditos

- [MindAR](https://github.com/hiukim/mind-ar-js) — rastreamento de imagens, licença MIT.
- [A-Frame](https://aframe.io/) — visualização 3D no navegador.
