import { Observable } from "rxjs";

export interface IBaseIdentity {
    id: string;
    fullname: string;
    // token: string;
    // expired: Date;
}

export interface IBaseAuthenticationService {
    isAuthenticated(): Observable<boolean>;
    identity(): Observable<IBaseIdentity>;
    setAuth(identity: IBaseIdentity): Observable<void>;
    removeAuth(): Observable<void>;
}