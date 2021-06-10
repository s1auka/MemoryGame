import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContentComponent } from './components/content/content.component';
import { RulesComponent } from './components/rules/rules.component';
import { SettingsComponent } from './components/settings/settings.component';

const appRoutes: Routes = [
    { path: '', component: ContentComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'rules', component: RulesComponent },
    { path: '**', redirectTo: '/' }

];

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        ContentComponent,
        RulesComponent,
        SettingsComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
