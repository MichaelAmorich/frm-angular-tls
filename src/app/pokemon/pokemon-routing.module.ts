import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListPokemonComponent } from "./list-pokemon/list-pokemon.component";
import { DetailPokemonComponent } from "./detail-pokemon/detail-pokemon.component";
import { EditPokemonComponent } from "./edit-pokemon/edit-pokemon.component";
import { pokemonGuard } from "../auth-guard.service";

const routes: Routes = [
    {
        path: 'pokemon',
        canActivate: [pokemonGuard],
        children: [
            { path: 'all', component: ListPokemonComponent },
            { path: 'edit/:id', component: EditPokemonComponent },
            { path: ':id', component: DetailPokemonComponent }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class PokemonRoutingModule { }