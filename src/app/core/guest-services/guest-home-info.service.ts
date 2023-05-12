import { Injectable } from "@angular/core";
import { delay, map, Subject, switchMap } from "rxjs";
import { Api1Service } from "../api";

@Injectable()
export class GuestHomeInfoService {
    private infoId$ = new Subject();

    constructor(private api: Api1Service) { }

    public showInfo$ = this.infoId$.pipe(
        switchMap((id) => this.api.get(`/todos/${id}`)),
        map(a => a.title),
    );

    public query(infoId: number) {
        this.infoId$.next(infoId);
    }
}