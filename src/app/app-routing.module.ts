import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { TaskComponent } from "./task/task.component";

const routes: Routes = [
    { path: '', redirectTo: 'pokemon/all', pathMatch: 'full' },
    { path: 'tasks', component: TaskComponent },
    {  path: '**', component: PageNotFoundComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }