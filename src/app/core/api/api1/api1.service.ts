import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BaseApiService } from "../base/base-api.service";
import { environment } from "src/environments/environment";

@Injectable()
export class Api1Service extends BaseApiService {
    constructor(http: HttpClient) {
        super(environment.apiUrl1, http);
    }
}