import { Injectable } from '@angular/core';
import { Toast, ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CustomToastrService {
  constructor(private toastr: ToastrService) { }
  message(message: string, title: string, toastrOptions: Partial<ToastrOptions>) {
    this.toastr[toastrOptions.messageType](message, title, {
      positionClass: toastrOptions.position
    });
  }
}

export class ToastrOptions {
  messageType: ToastrMessageType;
  position: ToastrPosition;
}

export enum ToastrMessageType {
  Success = "success",
  Info = "info",
  Warning = "warning",
  Error = "error"
}

export enum ToastrPosition {
  TopRight = "toast-top-right",
  TopCenter = "toast-top-center",
  TopLeft = "toast-top-left",
  TopFullWidth = "toast-top-full-width",
  BottomRight = "toast-bottom-right",
  BottomFullWidth = "toast-bottom-full-width",
  BottomCenter = "toast-bottom-center",
  BottomLeft = "toast-bottom-left",
}
