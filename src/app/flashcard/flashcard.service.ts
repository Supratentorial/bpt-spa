import {Flashcard} from './flashcard';
import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from '../../../node_modules/rxjs/Observable';
@Injectable()
export class FlashcardService {

  flashcardEndPoint = 'http://localhost:5000/api/flashcards';
  currentFlashcard: Flashcard;

  constructor(private http: Http) {

  }

  getFlashcards() {
    return this.http.get(this.flashcardEndPoint)
      .map(this.mapResponse)
      .catch(this.handleError);
  }

  getFlashcardById(id: string) {
    return this.http.get(this.flashcardEndPoint + '/' + id)
      .map(this.mapResponse)
      .catch(this.handleError);
  }

  saveFlashcard(flashcard: Flashcard) {
    console.log('save flashcard called');
    const bodyString = JSON.stringify(flashcard);
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    return this.http.post(this.flashcardEndPoint, bodyString, options)
      .map(this.mapResponse)
      .catch(this.handleError);
  }

  mapResponse(response: Response | any) {
    const body = response.json();
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
