import { GetUsersService } from './services/get-users.service';
import { ContentComponent } from './components/content/content.component';
import { LevelControlService, ItemControlService } from './services/settings.service';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SettingsComponent } from './components/settings/settings.component';
import { UsersComponent } from './components/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './components/users/user/user.component';
import { UserTestInfoComponent } from './components/users/user-test-info/user-test-info.component';
import { PreloaderComponent } from './components/common/preloader/preloader.component';


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        SettingsComponent,
        ContentComponent,
        UsersComponent,
        UserComponent,
        UserTestInfoComponent,
        PreloaderComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
