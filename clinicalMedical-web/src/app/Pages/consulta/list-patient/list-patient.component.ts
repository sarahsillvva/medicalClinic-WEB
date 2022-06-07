import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PatientService } from 'src/app/services/patient.service';
import { Patient } from 'src/app/_models/patient';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.scss']
})
export class ListPatientComponent implements OnInit {
  //for table
  dataSource = new MatTableDataSource<Patient>()
  displayedColumns: string[]  = ['name','cpf','dt_creation','dt_birth', 'phone','address'];
	@ViewChild(MatSort)
  matSort: MatSort = new MatSort;
  //array list for Patient
  patient = new Patient;
  patients: Patient[]=[];

  constructor(
    private patientService: PatientService  
  ) {
   }

  ngOnInit(): void {
    this.lister();
  }

  lister(){
    console.log(this.patient);
    this.patientService.listerPatient().subscribe(
        response =>{
          this.patients = response.body
          this.dataSource = new MatTableDataSource<Patient>(this.patients)
        },(error)=>{
          console.log(error);
        })
  }


}
