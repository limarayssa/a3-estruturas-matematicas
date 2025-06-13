import { Routes } from '@angular/router';
import { ChooseShipsComponent } from './pages/choose-ships/choose-ships/choose-ships.component';
import { GameplayComponent } from './pages/gameplay/gameplay.component';
import { InitialPageComponent } from './pages/initial-page/initial-page.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'pages/choose-ships',
        pathMatch: 'full'
    },
    {
        path:'pages/choose-ships',
        component: ChooseShipsComponent
    },
    {
        path:'pages/gameplay',
        component: GameplayComponent
    },
    {
        path:'pages/home',
        component: InitialPageComponent 
    }
];
