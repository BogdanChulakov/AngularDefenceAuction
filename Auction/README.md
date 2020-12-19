# Auction

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

'Auction' is an application in which everyone can offer items that he has decided to sell. For each offered item you can bid on the auction page. The user can see all the offers sent to his items, and the highest price will be saved as price of the item. Also, each user can participate in auctions of products that he has not created, and can bid repeatedly! I have implemented registration, login and edit and each user can change his personal information.

To create an item, you need to enter Name, Price, Description, Photo and Date (until which the ad is valid). After this date, the item will no longer be displayed in Auction page. In the /item/myItems section, the user can see all his ads - active and expired (in the Expired Items column) or to remove them if he wants. In fact, they are not deleted from the database. The field isDeleted = true is set and on request those that are isDeleted = false are taken. Each element has Details where we can see all the data about it, Edit where we can change this data, and Offers where all offers for this item are displayed.

When making an offer for a specific item, it is necessary to fill in the Price and Address (for delivery, if the auction is won). The application will automatically add to the database this offer to which item was made and who made it.The application allows you to enter only a price that is higher than the last offered. In this way, the price you offer will remain the price of the item, if it is the last offer for it. For front-end I used Angular. I used Template-Driven Forms to create and edit objects. In the forms I used Structural and Attribute Directives to implement the logic of the application.

I have divided the application into 3 modules: app-module, item-module and offer-module. The app-module contains Home component and User components. The item-module contains all the components for Item and item-servise and the router for paths of items and models, which I use for the received requests from the database. In the same way I organized an offer-module. I use HttpClient for queries to the database. I access the database with rest-api, which uses express and mongoose with MongoDb. I store passwords in the database by encrypting them with bcrypt. I use jasonwebtoken for authorization. When login or register a cookie with the token is sent to the Angular application with responce. There it is saved through AuthGuardd which allows us not to lose it when refreshing a page.
