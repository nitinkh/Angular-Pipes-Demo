import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { UserModel } from './user-model';

@Injectable()
export class LoginSerive {
    //userID: string;
    //userEmailID: string;
    private userModel: UserModel;
    constructor(private apiService: ApiService) { }

    getUserDetails(username: string, password: string) {
        console.log("I am here in getUserDetails");
        this.apiService.post("login", { "username": username, "password": password })
            .subscribe((data) => {
                console.log(data);
                this.userModel = data;
                console.log("userMode department" + this.userModel.DepartmentID);
            }
            );
    }

}