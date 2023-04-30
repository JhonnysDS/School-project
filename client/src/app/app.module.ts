import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { LoginComponent } from './public/auth/login/login.component';
import { RegisterComponent } from './public/auth/register/register.component';
import { SidenavComponent } from './public/layout/sidenav/sidenav.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US, es_ES } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroModule } from './modules/ng-zorro/ng-zorro.module';

import { NZ_ICONS } from 'ng-zorro-antd/icon';
import * as AllIcons from '@ant-design/icons-angular/icons';
import es from '@angular/common/locales/es';
import { ListUserComponent } from './private/users/list-user/list-user.component';
import { CoursesComponent } from './public/courses/courses/courses.component';
import { SubjectComponent } from './public/courses/subject/subject.component';

export interface IconDefinition {
  name: string;
  theme?: ThemeType | undefined;
  icon: string;
}
export declare type ThemeType = 'fill' | 'outline' | 'twotone';
export interface Manifest {
  fill: string[];
  outline: string[];
  twotone: string[];
}
export interface CachedIconDefinition {
  name: string;
  theme: string;
  icon: SVGElement;
}
export interface TwoToneColorPaletteSetter {
  primaryColor: string;
  secondaryColor?: string;
}
export interface TwoToneColorPalette extends TwoToneColorPaletteSetter {
  secondaryColor: string;
}


const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

registerLocaleData(en);
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SidenavComponent,
    ListUserComponent,
    CoursesComponent,
    SubjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    NgZorroModule

  ],
  
  providers: [
    { provide: NZ_I18N, useValue: en_US }, { provide: NZ_ICONS, useValue: icons }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
