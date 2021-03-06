import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'

const materialCom = [
  MatFormFieldModule,
  MatInputModule,
  MatIconModule
];

@NgModule({
  imports: [materialCom],
  exports: [materialCom],
})
export class NgMatModule { }
