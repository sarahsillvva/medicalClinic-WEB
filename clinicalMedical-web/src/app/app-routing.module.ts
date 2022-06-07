import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaComponent } from './Pages/consulta/consulta.component';
import { ListDoctorComponent } from './Pages/consulta/list-doctor/list-doctor.component';
import { ListPatientComponent } from './Pages/consulta/list-patient/list-patient.component';
import { HeaderComponent } from './_utils/header/header.component';

const routes: Routes = [
  {path:'header', component: HeaderComponent},
  {path:'consulta', component: ConsultaComponent},
  {path:'doctor', component: ListDoctorComponent},
  {path:'patient', component: ListPatientComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}

