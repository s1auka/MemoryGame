import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentComponent } from './components/content/content.component';
import { RulesComponent } from './components/rules/rules.component';
import { SettingsComponent } from './components/settings/settings.component';


const routes: Routes = [
    { path: '', component: ContentComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'rules', component: RulesComponent },
    { path: '**', redirectTo: '/' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
