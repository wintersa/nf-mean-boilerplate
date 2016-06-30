import { Component } from "@angular/core";
import { Toastr } from "./toastr";
import { ToastrService } from "./toastr.service";

@Component({
    selector: 'nf-toastr',
    template: '<button class="btn btn-default" (click)="showError()">Toastr Tester</button>',
})

export class ToastrComponent {

    constructor(public _toastrService:ToastrService) {}


    showError(){
        var successMessage = new Toastr("Error", "Het goat mis ja");
        this._toastrService.Error(successMessage);
    }
}

/*
 Copyright 2016 NForce IT - A.R.Winters . All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://nforce-it.nl/license
 */