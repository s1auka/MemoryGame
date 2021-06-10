import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContentComponent } from './components/content/content.component';
import { RulesComponent } from './components/rules/rules.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        ContentComponent,
        RulesComponent,
        NotFoundPageComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
