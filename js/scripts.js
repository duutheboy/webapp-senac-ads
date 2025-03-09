if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('ServiceWorker registrado com sucesso: ', registration.scope);
      })
      .catch(err => {
        console.log('Falha ao registrar o ServiceWorker: ', err);
      });
  });
}