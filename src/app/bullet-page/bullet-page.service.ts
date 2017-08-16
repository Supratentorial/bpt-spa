import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import {BulletPage} from '../bullets/models/bullet-page';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class BulletPageService {

  bulletPagesEndPoint = 'http://localhost:5000/api/bulletpages';


  constructor(private http: Http) {

  }

  getBulletPages() {
    return this.http.get(this.bulletPagesEndPoint)
      .map(this.mapResponse)
      .catch(this.handleError);
  }

  getBulletPageById(id: number) {
    return this.http.get(this.bulletPagesEndPoint + '/' + id.toString())
      .map(this.mapResponse)
      .catch(this.handleError);
  }

  saveBulletPage(bulletPage: BulletPage) {
    console.log('saveBulletPage() called');
    const bodyString = JSON.stringify(bulletPage);
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    if (+bulletPage.id === 0) {
      return this.http.post(this.bulletPagesEndPoint, bodyString, options)
        .map(this.mapResponse)
        .catch(this.handleError);
    }
    return this.http.put(this.bulletPagesEndPoint + '/' + bulletPage.id, bodyString, options)
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
      // const error = body.error || JSON.stringify(body);
      // errorMessage = `${error.status} - ${error.statusText || ''} ${error}`;
    }
    console.log(errorMessage);
    return Observable.throw(errorMessage);
  }
}
