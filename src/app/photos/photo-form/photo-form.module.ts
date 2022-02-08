import { RouterModule } from '@angular/router';
import { VMessageModule } from './../../shared/components/vmessage/vmessage.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PhotoFormComponent } from './photo-form.component';
import { CommonModule } from '@angular/common';
import { PhotoModule } from '../photo/photo.module';
import { InmmediateClickModule } from 'src/app/shared/directives/immediate-click/immediate-click.module';

@NgModule({
    declarations: [PhotoFormComponent],
    imports: [
      CommonModule,
      ReactiveFormsModule,
      VMessageModule,
      FormsModule,
      RouterModule,
      PhotoModule,
      InmmediateClickModule,
    ]
})
export class PhotoFormModule { }
