# BioAR — Biologia em Realidade Aumentada

Projeto didático para explorar conteúdos de Biologia usando realidade aumentada no navegador.

## Estrutura atual

- `index.html`: interface do BioAR e protótipo de anatomia.
- `manifest.webmanifest`: metadados do aplicativo web.
- `sw.js`: cache inicial da estrutura da aplicação.
- `.github/workflows/bioar-deploy.yml`: publicação do BioAR no GitHub Pages.

## Protótipo atual

- Módulo inicial de anatomia humana.
- Marcador Hiro padrão do AR.js para validar o rastreamento.
- Representação 3D simplificada do coração.
- Painel educativo com informações sobre coração, pulmões e cérebro.
- Interface sem modo ou botão de VR.
- Feed de vídeo da câmera reposicionado dentro do quadro do laboratório, sobre o fundo e atrás da camada 3D.

## Como testar

1. Abra o site em **https://brenner279.github.io/BioRA/** no Chrome Android.
2. Quando o navegador solicitar, permita o acesso à câmera.
3. O feed da câmera deve aparecer dentro do quadro azul do laboratório. Toque em **Mostrar câmera** para retirar a tela de orientação.
4. Aponte para um marcador Hiro impresso, inteiro no enquadramento e bem iluminado.

A captura da câmera é iniciada pelo AR.js quando a cena AR estática é carregada. O botão do BioAR apenas oculta a tela de orientação; não é um controle de modo VR/XR.

## Tecnologias

- A-Frame 1.6.0
- AR.js 3.4.8 (build A-Frame para rastreamento de marcadores)
- HTML, CSS e JavaScript
- GitHub Pages

## Próximas etapas

1. Criar marcadores ilustrados personalizados para o BioAR, com rastreamento por imagem (MindAR).
2. Integrar modelos anatômicos 3D reais em formato GLB.
3. Adicionar seleção e destaque visual das estruturas anatômicas.
4. Desenvolver as etapas de metamorfose da borboleta e do sapo.
5. Otimizar os modelos e bibliotecas para uso em sala de aula e ampliar o funcionamento offline.

## Observação sobre conexão

As bibliotecas A-Frame e AR.js ainda são carregadas de uma CDN. Portanto, a experiência com câmera/RA requer conexão com a internet. O cache atual cobre apenas arquivos básicos da aplicação; o funcionamento offline completo será implementado depois de incluir bibliotecas e modelos 3D localmente.