import Bio from './modules/bio.js';
import Nav from './modules/navbar.js';
import Gallery from './modules/gallery.js';

const App = () => {
    return `
        ${Nav()}
        ${Bio()}
        ${Gallery()}

    `
}
document.getElementById('root').innerHTML = App();