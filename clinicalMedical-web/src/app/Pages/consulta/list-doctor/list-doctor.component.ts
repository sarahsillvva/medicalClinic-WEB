import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DoctorService } from 'src/app/services/doctor.service';
import { Doctor } from 'src/app/_models/doctor';
import { MatDialog } from '@angular/material/dialog';
import { ModalDeletarDoctor } from '../../modais/doctor-modal/delete-doctor-modal/modal-delete-doctor';
import { ModalRegisterEditDoctor } from '../../modais/doctor-modal/edit-doctor-modal/modal-register-edit';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';

@Component({
  selector: 'app-list-doctor',
  templateUrl: './list-doctor.component.html',
  styleUrls: ['./list-doctor.component.scss'],
  animations: [
		stagger60ms,
		fadeInUp400ms
	]
})
export class ListDoctorComponent implements OnInit {
  
  //TABLE
  dataSource = new MatTableDataSource<Doctor>()
  displayedColumns: string[]  = ['name','crm','especialition','address','acoes'];
	@ViewChild(MatSort)
  matSort: MatSort = new MatSort;

  //array list for DOCTOR
  doctor = new Doctor;
  doctors: Doctor[]=[];
  constructor(
    private doctorService: DoctorService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.lister();
  }

  
    lister(){
      console.log(this.doctor);
      this.doctorService.listerdoctor().subscribe(
          response =>{
            this.doctors = response.body
            this.dataSource = new MatTableDataSource<Doctor>(this.doctors)
          },(error)=>{
            console.log(error);
          })
    
  }

  AbrirModalDeletar(id: Doctor) {
		const dialogRef = this.dialog.open(ModalDeletarDoctor, {
			data: id
		});
		dialogRef.afterClosed().subscribe(result => {
		});
	}

	abrirModalCadastrar(isCadastrar: boolean, idDoctor?: number) {
		let dialogRef;
		let doctor = this.doctors.find(s => s.id == idDoctor)

		if (isCadastrar) {
			dialogRef = this.dialog.open(ModalRegisterEditDoctor)
		} else {
			dialogRef = this.dialog.open(ModalRegisterEditDoctor, {
				data: this.doctor
			});
		}
		dialogRef.afterClosed().subscribe(result => { });
	}

}
