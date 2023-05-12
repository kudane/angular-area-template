import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";
import { IBaseApiService } from "./base-api.interface";

export const defualtHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
});

export const defualtFormatErrors = (error: any) => {
    return throwError(() => new Error(error));
}

export class BaseApiService implements IBaseApiService {
    constructor(private readonly url: string, private readonly http: HttpClient) { }

    get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
        return this.http
            .get(`${this.url}${path}`, { headers: defualtHeaders, params })
            .pipe(catchError(defualtFormatErrors));
    }

    put(path: string, body: Object = {}): Observable<any> {
        return this.http
            .put(`${this.url}${path}`, JSON.stringify(body), { headers: defualtHeaders })
            .pipe(catchError(defualtFormatErrors));
    }

    post(path: string, body: Object = {}): Observable<any> {
        return this.http
            .post(`${this.url}${path}`, JSON.stringify(body), { headers: defualtHeaders })
            .pipe(catchError(defualtFormatErrors));
    }

    delete(path: string): Observable<any> {
        return this.http
            .delete(`${this.url}${path}`, { headers: defualtHeaders })
            .pipe(catchError(defualtFormatErrors));
    }
}