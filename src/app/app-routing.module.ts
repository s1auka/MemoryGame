import { UserComponent } from './components/users/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentComponent } from './components/content/content.component';
import { RulesComponent } from './components/rules/rules.component';
import { SettingsComponent } from './components/settings/settings.component';


const routes: Routes = [
    { path: '', component: ContentComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'rules', component: RulesComponent },
    { path: 'users', component: UsersComponent },
    { path: 'user/:id', component: UserComponent },
    { path: '**', redirectTo: '/' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
