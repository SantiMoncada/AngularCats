import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class catService {
    private apiKey = 'live_FVKTM5iqVUZhblUHXAiHKcgJV8DdMbqTxNKvq5QT4eobyAe52hLyTVE0hlUeZkcI'
    private url = 'https://api.thecatapi.com/v1'
    private headers: HttpHeaders

    constructor(private httpClient: HttpClient) {
        this.headers = new HttpHeaders({ 'x-api-key': this.apiKey })
    }

    getRandomCats() {
        const endpoint = `${this.url}/images/search`;
        const params = new HttpParams()
            .set('limit', 20)
            .set('has_breeds', 1);
        const options = { params, headers: this.headers }
        return this.httpClient.get(endpoint, options);
    }

    getAllBreeds() {
        const endpoint = `${this.url}/breeds`;
        return this.httpClient.get(endpoint);
    }
}