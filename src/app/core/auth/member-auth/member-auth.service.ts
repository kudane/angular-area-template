import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, take } from "rxjs";
import { IBaseAuthenticationService, IBaseIdentity } from "../base/base-auth.interface";

@Injectable()
export class MemberAuthService implements IBaseAuthenticationService {
    private identity$ = new BehaviorSubject<IBaseIdentity>({} as IBaseIdentity);
    private isAuthenticated$ = new BehaviorSubject<boolean>(false);

    isAuthenticated(): Observable<boolean> {
        return this.isAuthenticated$.asObservable();
    }

    identity(): Observable<IBaseIdentity> {
        return this.identity$.asObservable();
    }

    setAuth(identity: any): Observable<any> {
        // validate identity, if your need
        // ....
        this.identity$.next(identity);
        this.isAuthenticated$.next(true);
        return this.identity$.pipe(take(1));
    }

    removeAuth(): Observable<any> {
        this.identity$.next({} as IBaseIdentity);
        this.isAuthenticated$.next(false);
        return this.identity$.pipe(take(1));
    }
}