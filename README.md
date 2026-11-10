# BioAR — Biologia em Realidade Aumentada

Projeto educacional para explorar conteúdos de Biologia por meio de realidade aumentada no navegador.

## Primeira versão
- Interface responsiva em português.
- Experiência inicial de anatomia humana com marcador Hiro.
- Modelo 3D demonstrativo do coração construído com primitivas 3D.
- Painel com informações sobre coração, pulmões e cérebro.
- Estrutura inicial de PWA e cache do shell da aplicação.
- Publicação automatizada pelo GitHub Actions.

## Como testar
1. Ative o GitHub Pages em Settings → Pages e selecione GitHub Actions como fonte, caso ainda não esteja configurado.
2. Aguarde a execução do workflow Deploy BioAR to GitHub Pages.
3. Abra https://brenner279.github.io/BioRA/ em um navegador com suporte a WebGL.
4. Autorize o uso da câmera.
5. Aponte a câmera para um marcador Hiro impresso.

O marcador Hiro é um marcador fiducial padrão do AR.js. Ele foi escolhido nesta primeira prova de conceito para validar a câmera e o posicionamento de objetos 3D sem depender ainda de um arquivo de alvo personalizado.

## Próximas etapas
1. Substituir o marcador padrão por alvos visuais próprios do BioAR usando MindAR.
2. Integrar modelos anatômicos 3D reais em formato GLB.
3. Criar seleção de órgãos com destaque visual e informações contextuais.
4. Desenvolver os ciclos de metamorfose da borboleta e do sapo.
5. Otimizar os recursos para uso em sala de aula e ampliar o funcionamento offline.

## Tecnologias
- A-Frame
- AR.js
- JavaScript, HTML e CSS
- GitHub Pages

> Observação: nesta etapa, o coração é uma representação 3D simplificada para validar a experiência de RA; não substitui um modelo anatômico científico detalhado. Os scripts de AR.js e A-Frame são carregados de CDNs, portanto o reconhecimento por câmera ainda requer conexão com a internet. O cache offline atual cobre apenas a estrutura básica da aplicação.