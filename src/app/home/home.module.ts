import { SignUpService } from './signup/signup.service';
import { HomeRoutingModule } from './home.routing.module';
import { NgModule } from '@angular/core';
import { SignInComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './signup/sign.component';
import { HomeComponent } from './home.component';

@NgModule({
    declarations: [ SignInComponent, SignUpComponent, HomeComponent ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        VMessageModule,
        RouterModule,
        FormsModule,
        HomeRoutingModule,
    ],
    providers: [SignUpService]
})
export class HomeModule { }
