function addJs () {
    var script = document.createElement('script');
    script.src = browser.runtime.getURL('app.e070967e3f978c7f0296.js');
    document.getElementsByTagName('body')[0].appendChild(script);

    localStorage.setItem('kek', browser.runtime.getURL("775.6f6128e1437b5d15972e.js"));
    [...document.getElementsByTagName('img')].filter((img) => img.src.includes('logo.svg')).forEach((img) => {
        img.src = browser.runtime.getURL('logo.svg');
    });
}

addJs();
console.log('addinMagic.js loaded');