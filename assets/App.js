import Bio from './modules/bio';
import Nav from './modules/navbar';
import Gallery from './modules/gallery';

const App = () => {
    return `
        ${Nav()}
        ${Bio()}
        ${Gallery()}

    `
}
document.getElementById('root').innerHTML = App();