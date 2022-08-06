import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.css']
})
export class NotifyComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  createSuccess(text) {
    this.toastr.success('ok', `${text}`);
  }
  
  createEdit(text) {
    this.toastr.success('ok',`${text}`);
  }

  errorSuccess(text) {
    this.toastr.success('error', `${text}`);
  }

  errorEdit(text) {
    this.toastr.success('error', `${text}`);
  }


}
