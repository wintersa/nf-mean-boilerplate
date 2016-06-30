import { EventEmitter } from "@angular/core";
import { Toastr } from "./toastr";

export class ToastrService {
    newToast = new EventEmitter<Toastr>();

    Error(error: any) {
        const toastrMsg = new Toastr(error.title, error.error.message);
        this.newToast.emit(toastrMsg);
    }
}

/*
 Copyright 2016 NForce IT - A.R.Winters . All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://nforce-it.nl/license
 */
