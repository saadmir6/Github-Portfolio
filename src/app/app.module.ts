import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonelInfoComponent } from './personel-info/personel-info.component';
import { PanelComponent } from './panel/panel.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { OrganizationsComponent } from './organizations/organizations.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonelInfoComponent,
    PanelComponent,
    RepositoriesComponent,
    OrganizationsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
