import { Injectable } from "@angular/core";
import { UserSettings } from "../interface/userSettings.model";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";



@Injectable({
    providedIn:'root'
})

export class DataService{
    constructor( private http : HttpClient)
    {

    }


    postUserForm(userSettings:UserSettings): Observable<any>
    {
        return this.http.post('https://putsreq.com/kZQez4airkxcqyRURquK',userSettings)
    }


    getSubscriptionTypes() : Observable<string[]>
    {
        return of(['monthly' ,'weekly', 'annualy']);
    }
}