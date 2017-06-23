import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { TopicComponent } from "./topic/topic.component";
import { UserComponent } from "./user/user.component";
// import { {{Players}}Component } from './{{players}}/{{players}}.component';

const routes: Routes = [
  { path: '', pathMatch:'full', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'topic/:id', component: TopicComponent },
  { path: 'user/:id', component: UserComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
