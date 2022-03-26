import { PlatformDetectorService } from './../../core/plataform-detector/platform-detector.service';
import { Router } from '@angular/router';
import { SignUpService } from './signup.service';
import { NewUser } from './new-user';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';

@Component({
  templateUrl: './signup.component.html',
  providers: [ UserNotTakenValidatorService ]
})
export class SignUpComponent implements OnInit{

  signupForm: FormGroup;
  @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private userNotTakenValidatorService: UserNotTakenValidatorService,
    private signService: SignUpService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: ['',
        [
        Validators.required,
        Validators.email
        ]
    ],
      fullName: ['',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(40)
      ]
    ],
      userName: ['',
      [
        Validators.required,
        lowerCaseValidator,
        Validators.minLength(2),
        Validators.maxLength(30)
      ],
        this.userNotTakenValidatorService.checkUserNameTaken()
    ],
      password: ['',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(14),
      ]
    ]
    });
    this.platformDetectorService.isPlatformBrowser() &&
    this.emailInput.nativeElement.focus();
  }
  signup() {
    if(this.signupForm.valid || !this.signupForm.pending) {
      const newUser = this.signupForm.getRawValue() as NewUser;
      this.signService.signup(newUser)
        .subscribe(() => this.router.navigate([''])),
        error => console.log(error);
    }
  }
}
