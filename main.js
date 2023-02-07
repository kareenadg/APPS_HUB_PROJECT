import './style.css';
import { printTemplate as HeaderTemplate } from './components/Header/Header';
import { printTemplate as FooterTemplate } from './components/Footer/Footer';
import { printTemplate as LoginTemplate } from "./pages/Login/Login";
import { printTemplate as HubTemplate } from './pages/Hub/Hub';
import { printTemplate as PokeApiTemplate } from './pages/PokeApi/PokeApi';
import { printTemplate as RolldiceTemplate } from './pages/RollTheDice/RollTheDice';
import { printTemplate as RockpaperTemplate } from './pages/RockPaperScissors/RockPaper';

HeaderTemplate();
FooterTemplate();

export const initContent = (route) => {
    switch (route){
        case undefined:
            localStorage.getItem("user") ? HubTemplate() : LoginTemplate();
            break;
        case "Login":
            LoginTemplate();
            break;
        case "Hub":
            HubTemplate();
            break;
        case "PokeApi":
            PokeApiTemplate();
            break;
        case "RollDice":
            RolldiceTemplate();
            break;
        case "RockPaper":
            RockpaperTemplate();

    }
}

initContent();
