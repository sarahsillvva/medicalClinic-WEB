import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './_utils/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ConsultaComponent } from './Pages/consulta/consulta.component';
import { ListDoctorComponent } from './Pages/consulta/list-doctor/list-doctor.component';
import { ListPatientComponent } from './Pages/consulta/list-patient/list-patient.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import { ModalDeletarDoctor } from './Pages/modais/doctor-modal/delete-doctor-modal/modal-delete-doctor';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalRegisterEditDoctor } from './Pages/modais/doctor-modal/edit-doctor-modal/modal-register-edit';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ModalDeletarPatient } from './Pages/modais/patient-modal/delete-patient-modal/modal-delete-patient';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConsultaComponent,
    ListDoctorComponent,
    ListPatientComponent,
    ModalDeletarDoctor,
    ModalRegisterEditDoctor,
    ModalDeletarPatient,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatTableModule,
    MatSortModule,
    HttpClientModule,
    MatMenuModule,
    MatListModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
