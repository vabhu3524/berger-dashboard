import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FrontInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req.url);
    if(localStorage.getItem('jwttoken')){

        if(req.url.includes("paymentgateway")){
          //paymentgateway
           const authReq = req.clone({setHeaders: {tenantIdHeader: localStorage.getItem("tenantIdHeader"),'Content-Type':'application/json'}});
          return next.handle(authReq);
        }

        const authHeader = localStorage.getItem('jwttoken');
        let authReq:any;

        if(req.method === "POST") {
          if (req.body.toString() === new FormData().toString()) {
             authReq = req.clone({setHeaders: {Authorization: "Bearer "+authHeader}});
          } else {
            authReq = req.clone({setHeaders: {Authorization: "Bearer "+authHeader,'Content-Type':'application/json'}});  
            
          }
        } else {
            authReq = req.clone({setHeaders: {Authorization: "Bearer "+authHeader,'Content-Type':'application/json'}});
        }
        return next.handle(authReq);
    }else if(!req.url.includes("tenant") && localStorage.getItem('tenantIdHeader')){
      const authReq = req.clone({setHeaders: { 'tenantIdHeader': localStorage.getItem('tenantIdHeader') }});
      return next.handle(authReq);
      
    }
    const authReq  = req.clone({setHeaders: { 'burger-context':"Bearer "+"eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyQ2l0eSI6Ik11bWJhaSIsInN1YiI6Imp3dFN1YmplY3QiLCJ1c2VyQ291bnRyeSI6IkluZGlhIiwidXNlclN0YXRlIjoiTWFoYXJhc3RyYSIsInVzZXJNb2JpbGUiOiIxMjEyMTIxMjEyIiwidXNlckVtYWlsIjoidTEiLCJ1c2VyTmFtZSI6InUxIiwiZXhwIjoxNTc3MTQxODA4LCJ1c2VySWQiOiIyMiIsImlhdCI6MTU3NzEyMzgwOH0.DGcyEciAAgzdf6OdI8o_0f4FdmTmPqzmL7aavnnSSgPoKQUIQBhIdUrFIkBP7fQiRNRaPa0DlnY_q_rGWamSNg",'Content-Type':'application/json'}});

    return next.handle(authReq);
  }
}