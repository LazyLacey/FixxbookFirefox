function addJs () {
    var script = document.createElement('script');
    script.src = browser.runtime.getURL('pieces/app.e070967e3f978c7f0296.js');
    document.getElementsByTagName('body')[0].appendChild(script);

    localStorage.setItem('fixxbook_folder', browser.runtime.getURL("pieces/"));
    [...document.getElementsByTagName('img')].filter((img) => img.src.includes('logo.svg')).forEach((img) => {
        img.src = browser.runtime.getURL('pieces/logo.svg');
    });
}

addJs();
console.log('addinMagic.js loaded');