import { UserService } from './../../core/user/user.service';
import { AlertService } from './../../shared/components/alert/alert.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'ap-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {

  file: File;
  photoForm: FormGroup;
  preview: string;

  constructor(
    private photoService:PhotoService,
    private fb:FormBuilder,
    private router:Router,
    private alertService: AlertService,
    private userService: UserService
    ) { }

  ngOnInit() {

    this.photoForm = this.fb.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true]
    });
  }

  upload() {
    const description = this.photoForm.get('description').value;
    const allowComments = this.photoForm.get('allowComments').value;

    this.photoService.upload(description, allowComments, this.file)
    .subscribe(() => {
      this.alertService.success("Upload complete", true);
      this.router.navigate(['/user', this.userService.getUserName()])
    });
  }

  handleFile(file: File) {
    this.file = file;
    const reader = new FileReader();
    reader.onload = (event:any) => this.preview = event.target.result;
    reader.readAsDataURL(file);
  }
}
