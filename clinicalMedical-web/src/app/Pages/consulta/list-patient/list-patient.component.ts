import { Component, OnInit, ViewChild } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { PatientService } from 'src/app/services/patient.service';
import { Patient } from 'src/app/_models/patient';
import { ModalDeletarPatient } from '../../modais/patient-modal/delete-patient-modal/modal-delete-patient';
import { ModalRegisterEditPatient } from '../../modais/patient-modal/edit-patient-modal/modal-register-edit-patient';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.scss'],
  animations: [
		stagger60ms,
		fadeInUp400ms
	]

})
export class ListPatientComponent implements OnInit {
  //for table
  dataSource = new MatTableDataSource<Patient>()
  displayedColumns: string[]  = ['name','cpf','dt_creation','dt_birth', 'phone','address','acoes'];
  displayedButtontable: string[] = ['adicionar'];
	@ViewChild(MatSort)
  matSort: MatSort = new MatSort;
  //array list for Patient
  patient = new Patient;
  patients: Patient[]=[];

  constructor(
    private patientService: PatientService  ,
    public dialog: MatDialog,
    private dateAdapter: DateAdapter<any>,
  ) {
    this.dateAdapter.setLocale('pt');
   }

  ngOnInit(): void {
    this.lister();
  }

  lister(){
    
    
    this.patientService.listerPatient().subscribe(
        response =>{
          this.patients = response.body
          this.dataSource = new MatTableDataSource<Patient>(this.patients)
        },(error)=>{
          console.log(error);
        })
  }
  abrirModalCadastrar(isCadastrar: boolean, id?: number){
    let dialogRef;
		let patient = this.patients.find(s => s.id == id)

		if (isCadastrar) {
			dialogRef = this.dialog.open(ModalRegisterEditPatient)
		} else {
			dialogRef = this.dialog.open(ModalRegisterEditPatient, {
				data: patient
			});
		}
		dialogRef.afterClosed().subscribe(result => { });
	}
  
  AbrirModalDeletar(id: Patient){
    const dialogRef = this.dialog.open(ModalDeletarPatient, {
			data: id
		});
		dialogRef.afterClosed().subscribe(result => {
		});
  }




}
