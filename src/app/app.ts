import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: "app-root",
    imports: [RouterOutlet],
    templateUrl: "./app.html",
    styleUrl: "./app.css",
})
export class AppComponent {
    protected title = "Draftero";
    content = "Esto es un contenido de este draftero";
    list = [
        {
            title: "Explore the Documentos",
            link: "https://angular.dev",
        },
        {
            title: "Learn with Tutorials",
            link: "https://angular.dev/tutorials",
        },
        {
            title: "Prompt and best practices for AI",
            link: "https://angular.dev/ai/develop-with-ai",
        },
        {
            title: "CLI Docs",
            link: "https://angular.dev/tools/cli",
        },
        {
            title: "Angular Language Service",
            link: "https://angular.dev/tools/language-service",
        },
        {
            title: "Angular DevTools",
            link: "https://angular.dev/tools/devtools",
        },
    ];
}
