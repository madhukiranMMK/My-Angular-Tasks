import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CharsComponent } from './chars/chars.component';
import { VowelsComponent } from './vowels/vowels.component';
import { ReverseStringComponent } from './reverse-string/reverse-string.component';
import { from } from 'rxjs';

const routes: Routes = [
  { path: '', redirectTo: '/vowelsCount', pathMatch: 'full' },
  { path: 'vowelsCount', component: VowelsComponent },
  { path: 'mostOccuredCharacter', component: CharsComponent },
  { path: 'reverseString', component: ReverseStringComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
