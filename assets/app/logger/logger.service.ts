import { Component } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'nf-toastr',
    template: '<button class="btn btn-default" (click)="showSuccess()">Toastr Tester</button>',
    providers: [ToastsManager]
})

export class LoggerService {
        name: string;
        showToastr: boolean;

        constructor(public _toastsManager:ToastsManager,name: string, showToastr?: boolean) {
            this.name = name;
            if (showToastr === undefined) {
                this.showToastr = true;
            } else {
                this.showToastr = showToastr;
            }

            console.log("Use Logger for " + name);
        }

        error(message: string, title?: string) {
            console.log(message);
            if (this.showToastr) {
                this._toastsManager.error(message, title);
            }
        }

        info(message: string, title?: string) {
            console.log(message);
            if (this.showToastr) {
               this. _toastsManager.info(message, title);
            }
        }

        warning(message: string, title?: string) {
            console.log(message);
            if (this.showToastr) {
                this._toastsManager.warning(message, title);
            }
        }
}

/* This code is grabbed from Digiman and slightly modified by A.R. Winters from NForce-IT,
   click on the link below for the GIT Repository of Digiman.
   https://gist.github.com/Digiman/06dd88fae7dc6f5646db
 */

/* For a complete demo of the possiblility there are with Toastr, check the demo page below,
   http://codeseven.github.io/toastr/demo.html
 */

/*
 Copyright 2016 NForce IT - A.R.Winters . All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://nforce-it.nl/license
 */