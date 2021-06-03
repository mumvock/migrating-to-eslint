import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    public title = 'migrating-to-eslint';

    /***/
    constructor() {}

    /**
     * Método de teste.
     *
     * @param texto Texto a ser acrescentado na array.
     */
    public testando(texto: string): void {
        const eae = ['eae12313123213123123123123123123123123123123123111112312'];

        eae.forEach((eae2) => {
            console.warn(eae2);
        });

        eae.push(texto);
    }
}
