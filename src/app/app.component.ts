import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}

/*
1. create needed components
2. Go to firebase website
3. create project
4. copy config to environment
5. import angular firebase and environment config to module
6. import needed component each
7. create class
8. define headers
9. create service
10. at each components, import service
11. inject to parent component + component lain
12. provide service in each components 
13. Implements onInit and make contructors
14. make input form
	14.1. import form module+ngform to component
	14.1 Make form
15. import angularFireDatabase+list to service service
16. create object in constructor (private firebase: angularFireDatabase)
17. create list variable : angularFireList <any>
18. Make CRUD functions inside service
19. call function in component
*/