export default function swDev() {
    let swUrl = `${process.env.REACT_APP_PUBLIC_URL}sw.js`;
    navigator.serviceWorker.register(swUrl).then((response) => {
        console.warn('response', response);
    });
}
