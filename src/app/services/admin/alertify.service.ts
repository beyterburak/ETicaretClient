import { Injectable } from '@angular/core';
declare var alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  //js'in bir özelliğidir. if else veya switch case yapılanması kullanmak yerine aşağıdaki gibi kolayca tanımladık.
  //Aşağıda üstteki yorum satırında olan satırda parametrelerle ilerlemek karmaşık durumlara yol açabileceği için parametre olarak aldığımız değerleri bir class içerisinde object'e dönüştürdükten sonra Partial türü ile bu objeyi belirterek js'in {} özelliğini kullanarak daha kolay kullanım sağlayabiliyoruz.
  // message(message: string, messageType: MessageType, position: Position, delay: number = 3, dismissOthers: boolean = false) {
  message(message: string, options: Partial<AlertifyOptions>) {
    alertify.set('notifier','delay', options.delay);
    alertify.set('notifier','position', options.position);
    const msj = alertify[options.messageType](message);
    if (options.dismissOthers == true) {
      msj.dismissOthers();
    }
  }

  dismiss() {
    alertify.dismiss();
  }

  dismissAll(){
    alertify.dismissAll();
  }
}

export class AlertifyOptions {
  messageType: MessageType = MessageType.Message;
  position: Position = Position.BottomLeft;
  delay: number = 3;
  dismissOthers: boolean = false;
}

export enum MessageType {
  Error = "error",
  Message = "message",
  Notify = "notify",
  Success = "success",
  Warning = "warning",
}

export enum Position {
  TopRight = "top-right",
  TopCenter = "top-center",
  TopLeft = "top-left",
  BottomRight = "bottom-right",
  BottomCenter = "bottom-center",
  BottomLeft = "bottom-left",
}
