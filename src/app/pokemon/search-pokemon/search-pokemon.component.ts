import { Component, OnInit } from '@angular/core';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.scss']
})
export class SearchPokemonComponent implements OnInit {
  private searchTerms = new Subject<string>();
  pokemons$: Observable<Pokemon[]>;

  constructor(private _pokemonService: PokemonService, private router: Router) { }

  search(term: string) {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(x => this._pokemonService.searchPokemons(x))
    )
  }

  gotoDetail(pokemon: Pokemon) {
    this.router.navigate(['/pokemon', pokemon.id])
  }
}
