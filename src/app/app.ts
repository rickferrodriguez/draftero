import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { PickComponent } from "./shared/pick-component/pick-component";

@Component({
    selector: "app-root",
    imports: [RouterOutlet, PickComponent],
    templateUrl: "./app.html",
    styleUrl: "./app.css",
})
export class AppComponent {}
