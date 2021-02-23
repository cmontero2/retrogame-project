import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { URL_API } from "./app.constants";
import { Observable } from 'rxjs';
import { Mail } from "../models/Mail";

@Injectable({ providedIn: 'root'})
export class ContactService {

    public baseUrl = URL_API.SERVER_URL_API + "contact";

    constructor(private http: HttpClient) { }

    //Llama al action send y le pasa por método POST el mail
    sendMail(mail: Mail): Observable<any> {
        return this.http.post(this.baseUrl + "/send", mail);
    }
}