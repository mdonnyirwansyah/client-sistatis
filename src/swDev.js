export default function swDev() {
    let swUrl = `${window.location.origin}/sw.js`;
    navigator.serviceWorker.register(swUrl).then((response) => {
        console.warn('response', response);
    });
}
