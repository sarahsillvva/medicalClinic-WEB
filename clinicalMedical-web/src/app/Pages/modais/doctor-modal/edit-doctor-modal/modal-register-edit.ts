import { Component, OnInit, AfterViewInit, Optional, Inject } from "@angular/core";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MessagesSnackBar } from "src/app/_constants/messagesSnackBar";
import { DoctorService} from "src/app/services/doctor.service";
import { Doctor } from "src/app/_models/doctor";

@Component({
	selector: 'modal-register-edit-doctor',
	templateUrl: 'modal-register-edit-doctor.html',
})
export class ModalRegisterEditDoctor implements OnInit, AfterViewInit {

	form: FormGroup | undefined;
	legendaBotao = 'Cadastrar';
	doctor = new Doctor();
	constructor(
		private fb: FormBuilder,
		private snackbar: MatSnackBar,
		@Optional() @Inject(MAT_DIALOG_DATA) public updateDoctor: any,
		private doctorService: DoctorService) {
		this.legendaBotao = updateDoctor ? 'Alterar' : 'Cadastrar';
	}

	ngOnInit(): void {

		if (this.updateDoctor) {
			this.doctor = new Doctor(this.updateDoctor)
		}

		this.form = this.fb.group({
			name: ['', Validators.required],
			crm: ['', Validators.required],
			especialition: ['', Validators.required],
			address: ['', Validators.required],
			
		});
	}


	enviarDoctor(doctor: Doctor) {

		doctor.id ? this.alterar(doctor) : this.cadastrar(doctor);
	}

	cadastrar(doctor: Doctor) {
		this.doctorService.registerdoctor(doctor).subscribe(response => {
			this.snackbar.open(MessagesSnackBar.CADASTRO_DOCTOR_SUCESSO, 'Fechar', { duration: 4000 })
		}, (error) => {
			console.log(error);
			this.snackbar.open(MessagesSnackBar.CADASTRO_DOCTOR_ERRO, 'Fechar', { duration: 4000 })
		})
	}

	alterar(doctor: Doctor) {
		this.doctorService.updatedoctor(doctor).subscribe(response => {
			this.snackbar.open(MessagesSnackBar.ALTERACAO_DOCTOR_SUCESSO, 'Fechar', { duration: 4000 })
		}, (error) => {
			console.log(error);
			this.snackbar.open(MessagesSnackBar.ALTERACAO_DOCTOR_ERRO, 'Fechar', { duration: 4000 })
		})
	}

	ngAfterViewInit(): void {
	}

}
