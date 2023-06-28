import { Component } from '@angular/core';
import { User } from './model/user'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
  <div *ngIf="nameRef.errors">
  <div *ngIf="nameRef.errors['required']">Il campo nome è obbligatorio</div>
  <div *ngIf="nameRef.errors['minlength']">Nome troppo corto</div>
  </div>

  <div *ngIf="ageRef.errors">
  <div *ngIf="ageRef.errors['required']">Il campo è obbligatorio</div>
  </div>
  
  <pre>{{nameRef.errors | json}}</pre>
<form #f="ngForm" (submit)="add(f)">
  <input #nameRef="ngModel" [ngClass]="{'error' : !f.valid && f.touched}" required minlength="3" type="text" placholder="insert username" [ngModel]="label" name="label">
  <input #ageRef="ngModel" [ngClass]="{'error' : !f.valid && f.touched}" required type="number" placholder="insert age" [ngModel]="age" name="age">
  <input type="text" placholder="insert city" [ngModel]="city" name="city">
  <input type="text" placeholder="insert the color" [ngModel]="color" name="color">
  <button type="submit" [disabled]="!f.valid">ADD</button>
</form>
<li *ngFor="let user of users" [style.background]="user.color">
  {{user.label}} - {{user.age}} - {{user.city}} - {{user.color}}
  </li>
  <pre>{{f.dirty}}</pre>
  <pre>{{f.valid}}</pre>
  <pre>{{f.touched}}</pre>

<hr>

<form #f1="ngForm" (submit)="add1(f1)" >
  <input #nameRef1="ngModel" [ngClass]="{'error' : !f1.valid && f1.touched}" required minlength="3" type="text" placholder="insert username" [ngModel]="user?.label" name="label">
  <input #ageRef1="ngModel" [ngClass]="{'error' : !f1.valid && f1.touched}" required type="number" placholder="insert age" [ngModel]="user?.age" name="age">
  <input type="text" placholder="insert city" [ngModel]="user?.city" name="city">
  <input type="text" placeholder="insert the color" [ngModel]="user?.color" name="color">
  <button type="submit" [disabled]="!f1.valid">ADD</button>
</form>
<li *ngFor="let user of users" [style.background]="user.color">
  {{user.label}} - {{user.age}} - {{user.city}} - {{user.color}}
  </li>
  <pre>{{f1.dirty}}</pre>
  <pre>{{f1.valid}}</pre>
  <pre>{{f1.touched}}</pre>

  <hr>
  
<form #f2="ngForm" (submit)="add2(f2)">
  <input #nameRef2="ngModel" [ngClass]="{'error' : !f2.valid && f2.touched}" required minlength="3" type="text" placholder="insert username" [ngModel] name="label">
  <input #ageRef2="ngModel" [ngClass]="{'error' : !f2.valid && f2.touched}" required type="number" placholder="insert age" [ngModel] name="age">
  <input type="text" placholder="insert city" [ngModel] name="city">
  <input type="text" placeholder="insert the color" [ngModel] name="color">
  <button type="submit" [disabled]="!f2.valid">{{user ? 'EDIT' : 'ADD'}}</button>
</form>
<li *ngFor="let user of users" [style.background]="user.color" (click)="setActive(user)">
  {{user.label}} - {{user.age}} - {{user.city}} - {{user.color}}
  </li>
  <pre>{{f2.dirty}}</pre>
  <pre>{{f2.valid}}</pre>
  <pre>{{f2.touched}}</pre>
  `,
  styles: [`
  .error { background-color: red }
  `]
})
export class AppComponent {
user: User | undefined;

  label: string = '';
  age: number = 0;
  city: string = '';
  color: string = '';

  users: User[] = [
  ];
//tre metodi add solo a scopo informativo per dimostrare le differenze nelle diverse procedure di svolgimento
  add(form: NgForm) {
    this.users.push(form.value);
    console.log(form.value.label);
    console.log(form.value.age);
    console.log(form.value.city);
    console.log(form.value.color);
    console.log(this.users);
    form.reset();
  }

  add1(form: NgForm) {
    this.users.push(form.value);
    console.log(form.value.label);
    console.log(form.value.age);
    console.log(form.value.city);
    console.log(form.value.color);
    console.log(this.users);
    form.reset();
  }

  add2(form: NgForm) {
    this.users.push(form.value);
    console.log(form.value.label);
    console.log(form.value.age);
    console.log(form.value.city);
    console.log(form.value.color);
    console.log(this.users);
    form.reset();
  }

  setActive(user: User) {
    this.user = user;
  }

  
}
