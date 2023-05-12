import { Injectable } from "@angular/core";
import { delay } from "rxjs";
import { Api2Service } from "../api";

@Injectable()
export class GuestHomeDataService {
    constructor(private api: Api2Service) { }

    data$ = this.api.get('/todos/1').pipe(delay(1500));
}