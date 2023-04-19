import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss']
})
export class DetailPokemonComponent implements OnInit {
  pokemon: Pokemon;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _pokemonService: PokemonService) {

  }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this._pokemonService.getPokemon(id).subscribe(x => {
      this.pokemon = x;
    });
  }

  goEdit() {
    this.router.navigate(['/pokemon/edit', this.pokemon.id]);
  }

  goBack() {
    this.router.navigate(['/pokemon/all']);
  }

  deletePokemon() {
    this._pokemonService.deletePokemon(this.pokemon.id).subscribe(() => this.goBack());
  }
}
