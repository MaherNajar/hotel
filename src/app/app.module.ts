import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { PopoverModule } from "ngx-bootstrap/popover";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { defineLocale } from "ngx-bootstrap/chronos";
import { frLocale } from "ngx-bootstrap/locale";
import { registerLocaleData } from "@angular/common";
import localeFr from "@angular/common/locales/fr";
import { LOCALE_ID } from "@angular/core";

// the second parameter 'fr' is optional
registerLocaleData(localeFr, "fr");

import { AppComponent } from "./app.component";
import { AcceuilComponent } from "./acceuil/acceuil.component";
import { RestaurationComponent } from "./restauration/restauration.component";
import { SpaBienEtreComponent } from "./spa-bien-etre/spa-bien-etre.component";
import { ChambresSuitesComponent } from "./chambres-suites/chambres-suites.component";
import { HeaderComponent } from "./header/header.component";
import { RechercheComponent } from "./recherche/recherche.component";
import { ContactComponent } from "./contact/contact.component";
import { FooterComponent } from "./footer/footer.component";
import { LoginComponent } from "./login/login.component";
import { PaginationComponent } from "./common/paginator/pagination.component";

const appRoutes: Routes = [
  { path: "", component: AcceuilComponent },
  { path: "recherche", component: ChambresSuitesComponent },
  { path: "restauration", component: RestaurationComponent },
  { path: "spaBienEtre", component: SpaBienEtreComponent },
  { path: "contact", component: ContactComponent },
  { path: "login", component: LoginComponent }
];

defineLocale("fr", frLocale);

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    RestaurationComponent,
    SpaBienEtreComponent,
    ChambresSuitesComponent,
    HeaderComponent,
    ContactComponent,
    RechercheComponent,
    FooterComponent,
    LoginComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    NgbModule,
    BsDatepickerModule.forRoot(),
    PopoverModule.forRoot()
  ],
  providers: [{ provide: LOCALE_ID, useValue: "fr" }],
  bootstrap: [AppComponent]
})
export class AppModule {}
