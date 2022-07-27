import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrepareCampComponent } from './common/pages/prepare-camp/prepare-camp.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
