import { ClassifierUploadComponent } from './classifier-upload/classifier-upload.component';
import { ClassifierCameraComponent } from './classifier-camera/classifier-camera.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: 'upload', component: ClassifierUploadComponent },
    { path: 'cam', component: ClassifierCameraComponent }
  ];
  
@NgModule({
imports: [RouterModule.forRoot(routes, {})],
exports: [RouterModule]
})

export class AppRoutingModule { }