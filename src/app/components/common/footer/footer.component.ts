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
            text: '2022 Desarrollada por',
            linkText: 'Ramblox, Software & Digital Marketing',
            link: 'https://envytheme.com/'
        }
    ]

}
class Text {
    text : string;
    linkText : string;
    link : string;
}