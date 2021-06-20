import { ContentComponent } from './components/content/content.component';
import { LevelControlService, ItemControlService } from './services/settings.service';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SettingsComponent } from './components/settings/settings.component';


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        SettingsComponent,
        ContentComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [LevelControlService, ItemControlService],
    bootstrap: [AppComponent]
})
export class AppModule { }
