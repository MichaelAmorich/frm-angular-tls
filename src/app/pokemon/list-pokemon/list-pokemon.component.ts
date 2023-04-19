import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss']
})
export class ListPokemonComponent implements OnInit {
  constructor(private router: Router, private _pokemonService: PokemonService) {  }
 
  pokemons: Pokemon[];

  ngOnInit() {
    this._pokemonService.getPokemons().subscribe(x => {
      this.pokemons = x;
    });
  }

  selectPokemon(pokemon: Pokemon) {
    let link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }
}
