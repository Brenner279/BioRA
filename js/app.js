(() => {
  const $ = (id) => document.getElementById(id);
  const home = $("homeView"), viewer = $("viewerView"), arView = $("arView"), modal = $("modal");
  const show = (el) => el.classList.remove("hidden");
  const hide = (el) => el.classList.add("hidden");

  $("open3D").addEventListener("click", () => { hide(home); show(viewer); window.scrollTo(0,0); });
  $("backFromViewer").addEventListener("click", () => { hide(viewer); show(home); window.scrollTo(0,0); });
  $("closeModal").addEventListener("click", () => hide(modal));
  modal.addEventListener("click", (e) => { if (e.target === modal) hide(modal); });

  const heart = $("viewerHeart");
  $("rotateLeft").addEventListener("click", () => { heart.removeAttribute("animation"); heart.object3D.rotation.y -= Math.PI/6; });
  $("rotateRight").addEventListener("click", () => { heart.removeAttribute("animation"); heart.object3D.rotation.y += Math.PI/6; });
  $("resetModel").addEventListener("click", () => { heart.removeAttribute("animation"); heart.object3D.rotation.set(0,0,0); });

  const descriptions = {
    aorta: "Artéria principal da circulação sistêmica. Conduz o sangue oxigenado do ventrículo esquerdo para os tecidos do corpo.",
    atria: "O átrio direito recebe sangue que retorna do corpo; o átrio esquerdo recebe sangue oxigenado vindo dos pulmões.",
    ventricles: "O ventrículo direito envia sangue aos pulmões. O ventrículo esquerdo bombeia sangue para a circulação sistêmica.",
    septum: "Parede muscular que separa os ventrículos, ajudando a manter separados os fluxos sanguíneos dos lados direito e esquerdo."
  };
  document.querySelectorAll(".structure").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".structure").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      const small = button.querySelector("small");
      small.textContent = descriptions[button.dataset.part];
    });
  });

  let arSystem = null;
  async function openAR() {
    const markerUrl = new URL("./assets/markers/coracao.mind", document.baseURI).href;
    try {
      const response = await fetch(markerUrl, { method: "HEAD", cache: "no-store" });
      if (!response.ok) { show(modal); return; }
    } catch (_) { show(modal); return; }
    hide(home); hide(viewer); show(arView);
    const scene = $("arScene");
    $("arStatus").textContent = "Iniciando câmera… permita o acesso quando solicitado.";
    try {
      await new Promise((resolve) => {
        if (scene.hasLoaded) resolve();
        else scene.addEventListener("loaded", resolve, { once: true });
      });
      arSystem = scene.systems["mindar-image-system"];
      await arSystem.start();
      $("arStatus").textContent = "Câmera ativa. Aponte para o cartão do coração.";
      const target = scene.querySelector("[mindar-image-target]");
      target.addEventListener("targetFound", () => $("arStatus").textContent = "Cartão reconhecido! Explore o coração 3D.");
      target.addEventListener("targetLost", () => $("arStatus").textContent = "Cartão não detectado. Centralize-o novamente.");
    } catch (error) {
      $("arStatus").textContent = "Não foi possível iniciar a câmera: " + (error.message || "verifique a permissão e a compatibilidade do navegador.");
    }
  }
  $("openAR").addEventListener("click", openAR);
  $("closeAR").addEventListener("click", async () => {
    try { if (arSystem) await arSystem.stop(); } catch (_) {}
    hide(arView); show(home); $("arStatus").textContent = "Preparando câmera…";
  });

  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
  }
})();