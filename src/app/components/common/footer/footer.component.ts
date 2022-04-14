import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    copyrightText: Text[] = [
        {
            text: '2022 Plor is Proudly Powered by',
            linkText: 'EnvyTheme',
            link: 'https://envytheme.com/'
        }
    ]

}
class Text {
    text : string;
    linkText : string;
    link : string;
}