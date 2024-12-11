import { Routes } from '@angular/router';
import { ContattiComponent } from './components/contatti/contatti.component';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';

export const routes: Routes = [

    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
    { path: 'home', component: HomeComponent},
    { path: 'contatti', component: ContattiComponent},
    { path: 'info', component: InfoComponent}



];
