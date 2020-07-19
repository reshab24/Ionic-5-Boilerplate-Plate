import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { LoadingController, ToastController } from '@ionic/angular';
import { Observable, from, throwError } from 'rxjs';
import { map, catchError, finalize, switchMap } from 'rxjs/operators';

import { Storage } from '@ionic/storage';
const TOKEN_KEY = 'token';

@Injectable({
  providedIn: 'root'
})

export class HttpConfigInterceptor implements HttpInterceptor {
  
  constructor(private storage: Storage, private loadingCrt:LoadingController,public toastController: ToastController) { 
    
  }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.loadingCrt.create({
        spinner:'dots',
        translucent:true,
       duration:2000
    }).then(loading=>loading.present())

    return from(this.storage.get(TOKEN_KEY))
    .pipe(
        switchMap(token => {
          console.log(token,"token");

            if (token) {
                request = request.clone({ headers: request.headers.set('Authorization',token) });
            }

            if (!request.headers.has('Content-Type')) {
                request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
            }


            return next.handle(request).pipe(
                map((event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse) {
                      this.presentToast(event.body.message,"success");
                        // do nothing for now
                    }
                    this.loadingCrt.dismiss();
                    return event;
                }),
                catchError((error: HttpErrorResponse) => {
                    const status =  error.status;
                    this.presentToast(error.error.message,"danger");
                    const reason = error && error.error.reason ? error.error.reason : '';
                    this.loadingCrt.dismiss();
                    return throwError(error);
                })
            );
        }),
    );
 }
  async presentToast(message:string,color:string) {
   const toast = await this.toastController.create({
            message:message,
            color:color,
            duration: 2000
        });
        toast.present();
    }

}

