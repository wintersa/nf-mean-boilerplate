import { Injectable, bind } from "@angular/core";
import 'rxjs/Rx';
import {Subject, BehaviorSubject} from 'rxjs';

import { User } from "./user";


@Injectable()
export class UserService {
    // `currentUser` contains the current user
    currentUser: Subject<User> = new BehaviorSubject<User>(null);

    public setCurrentUser(newUser: User): void {
        this.currentUser.next(newUser);
    }
}

export var userServiceInjectables: Array<any> = [
    bind(UserService).toClass(UserService)
];

/*
 Copyright 2016 NForce IT - A.R.Winters . All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://nforce-it.nl/license
 */