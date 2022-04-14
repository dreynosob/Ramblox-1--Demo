import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]
})
export class NavbarComponent implements OnInit {

    location: any;
    navbarClass: any;
    containerClass: any;

    constructor(
        private router: Router,
        location: Location
    ) {
        this.router.events
        .subscribe((event) => {
            if ( event instanceof NavigationEnd ) {
                this.location = this.router.url;
                if (this.location == '/home-two' || this.location == '/home-seven' || this.location == '/home-eight' || this.location == '/home-nine' || this.location == '/home-ten'){
                    this.navbarClass = 'navbar-area navbar-style-two';
                    this.containerClass = 'container-fluid';
                } else if(this.location == '/home-three' || this.location == '/home-five' || this.location == '/home-six'){
                    this.navbarClass = 'navbar-area navbar-style-two';
                    this.containerClass = 'container';
                } else if(this.location == '/home-four'){
                    this.navbarClass = 'navbar-area';
                    this.containerClass = 'container';
                } else if(this.location == '/'){
                    this.navbarClass = 'navbar-area';
                    this.containerClass = 'container-fluid';
                } else {
                    this.navbarClass = 'navbar-area navbar-style-two';
                    this.containerClass = 'container';
                }
            }
        });
    }

    ngOnInit(): void {}

    searchClassApplied = false;
    searchToggleClass() {
        this.searchClassApplied = !this.searchClassApplied;
    }

}