import {Injectable} from "@angular/core";
import {MultipleChoiceQuestion} from "./models/multiple-choice-question";
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from "../../../node_modules/rxjs/Observable";

@Injectable()
export class McqService {

  mcqEndPoint: string = 'http://localhost:5000/api/mcqs';
  currentMcq : MultipleChoiceQuestion;

  constructor(private http: Http) {

  }

  getMcqs() {
    return this.http.get(this.mcqEndPoint)
      .map(this.mapResponse)
      .catch(this.handleError);
  }

  getMcqById(id: string) {
    return this.http.get(this.mcqEndPoint + '/' + id)
      .map(this.mapResponse)
      .catch(this.handleError);
  }

  saveMcq(mcq: MultipleChoiceQuestion) {
    console.log('save mcq called');
    let bodyString = JSON.stringify(mcq);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.mcqEndPoint, bodyString, options)
      .map(this.mapResponse)
      .catch(this.handleError);
  }

  mapResponse(response: Response | any) {
    let body = response.json();
    return body || [];
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
