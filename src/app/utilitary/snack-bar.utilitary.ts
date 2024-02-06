import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class SnackBarUtilitary {
    constructor(private snackBar: MatSnackBar, private router: Router){}

    openSnackBar(
            messageOne: string, messageTwo: string, 
            horizontalPos: any, verticalPos: any, redirect: string,
            durationNum: number) {

        this.snackBar.open(messageOne, messageTwo, {
            horizontalPosition: horizontalPos,
            verticalPosition: verticalPos,
            duration: durationNum
        }).onAction().subscribe(() => {
            this.router.navigate([redirect])
        });
    }

    openSnackBarWithoutRedirect(
        messageOne: string, messageTwo: string, 
        horizontalPos: any, verticalPos: any,
        durationNum: number) {

        this.snackBar.open(messageOne, messageTwo, {
            horizontalPosition: horizontalPos,
            verticalPosition: verticalPos,
            duration: durationNum
        })
    }
}