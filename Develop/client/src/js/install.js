const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {

  event.preventDefault();

  deferredPrompt = event;

  showInstallButton();
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  deferredPrompt.prompt();

  const choiceResult = await deferredPrompt.userChoice;

  if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the install prompt');
  } else {
      console.log('User dismissed the install prompt');
  }
});
// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // Triggered after the app has been installed
    console.log('App installed successfully');
});
