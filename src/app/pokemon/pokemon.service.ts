import { Injectable } from "@angular/core";
import { Pokemon } from "./pokemon";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class PokemonService {
    private pokemonUrl = 'api/pokemons';
    constructor(private http: HttpClient) { }

    getPokemons(): Observable<Pokemon[]> {
        return this.http.get<Pokemon[]>(this.pokemonUrl);
    }

    getPokemon(id: number): Observable<Pokemon> {
        const url = `${this.pokemonUrl}/${id}`;
        return this.http.get<Pokemon>(url);
    }

    updatePokemon(pokemon: Pokemon): Observable<Pokemon> {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json ' })
        }

        return this.http.put<Pokemon>(this.pokemonUrl, pokemon, httpOptions);
    }

    deletePokemon(id: number): Observable<Pokemon> {
        const url = `${this.pokemonUrl}/${id}`;
        return this.http.delete<Pokemon>(url);
    }

    searchPokemons(term: string): Observable<Pokemon[]> {
        return this.http.get<Pokemon[]>('api/pokemons/?name=' + term);
    }

    getPokemonTypes(): Array<string> {
        return [
            'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
            'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
        ];
    }
}