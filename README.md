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

O modelo do coração é uma representação geométrica demonstrativa, não um modelo anatômico científico detalhado. Os botões de órgãos atualizam as informações textuais; a seleção de malhas anatômicas 3D será implementada em uma etapa posterior.

## Como testar

1. Em **Settings → Pages**, escolha **GitHub Actions** como fonte de publicação, caso ainda não esteja selecionada.
2. Acompanhe a execução do workflow **BioAR — Deploy to GitHub Pages**.
3. Depois da publicação, acesse https://brenner279.github.io/BioRA/ usando Chrome ou outro navegador compatível com WebGL.
4. Toque em **Ativar câmera**, autorize o acesso e enquadre o marcador Hiro impresso.

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

Nesta etapa, o aplicativo e seus arquivos básicos podem ser armazenados em cache, mas as bibliotecas A-Frame e AR.js ainda são carregadas de uma CDN. Portanto, a experiência de câmera/RA requer conexão com a internet. O suporte offline completo será tratado depois de incluir essas bibliotecas e os modelos 3D localmente.