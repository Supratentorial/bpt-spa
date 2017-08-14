import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Bullet} from './models/Bullet';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class BulletService {

  private bulletApiEndpoint = "http://localhost:5000/api/bulletpages";

  constructor(private http: Http) {
  }

  saveBullet(bullet: Bullet, bulletPageId: number) {
    if(bullet.id != 0){

    }
    return this.http.post(this.bulletApiEndpoint + "/" + bulletPageId.toString() + "/bullets", bullet);
  }

  getBulletById(bulletId : number) {
    return this.http.get(this.bulletApiEndpoint + "/bullets/" + bulletId.toString()).map(this.mapResponse).catch(this.handleError);
  }

  getBulletsForPage(bulletPageId: number){
    return this.http.get(this.bulletApiEndpoint + "/" + bulletPageId.toString() + "/bullets").map(this.mapResponse).catch(this.handleError);
  }

  mapResponse(response: Response | any) {
    let body = response.json();
    return body || [];
  }

  handleError(response: Response) {
    let errorMessage: string;
    if (response instanceof Response) {
      const body = response.json() || '';
      //const error = body.error || JSON.stringify(body);
      //errorMessage = `${error.status} - ${error.statusText || ''} ${error}`;
    }
    console.log(errorMessage);
    return Observable.throw(errorMessage);
  }
}
