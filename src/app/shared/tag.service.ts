import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class TagService{

  tagEndPoint: string = 'http://localhost:5000/api/tags';

  constructor(private http: Http){

  }

  getTags(){
    return this.http.get(this.tagEndPoint).map(this.mapResponse).catch(this.handleError);
  }

  mapResponse(response: Response){
    return response.json() || {};
  }

  handleError(response: Response) {
    let errorMessage: string;
    if (response instanceof Response) {
      const body = response.json() || '';
      const error = body.error || JSON.stringify(body);
      errorMessage = `${error.status} - ${error.statusText || ''} ${error}`;
    }
    console.log(errorMessage);
    return Observable.throw(errorMessage);
  }
}
