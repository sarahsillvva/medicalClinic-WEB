import { Component, OnInit, AfterViewInit, Optional, Inject } from "@angular/core";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MessagesSnackBar } from "src/app/_constants/messagesSnackBar";
import { Patient} from "src/app/_models/patient";
import { EventEmitterService } from "src/app/services/event.service";
import { stagger60ms } from "src/@vex/animations/stagger.animation";
import { fadeInUp400ms } from "src/@vex/animations/fade-in-up.animation";
import { PatientService } from "src/app/services/patient.service";

@Component({
	selector: 'modal-register-edit-patient',
	templateUrl: 'modal-register-edit-patient.html',
	animations: [
		stagger60ms,
		fadeInUp400ms
	]
})
export class ModalRegisterEditPatient implements OnInit {

	form! : FormGroup;
	legendaBotao = 'Cadastrar';
	patient = new Patient();
	constructor(
		private fb: FormBuilder,
		private snackbar: MatSnackBar,
		@Optional() @Inject(MAT_DIALOG_DATA) public updatePatient: any,
		private patientService: PatientService) {
		this.legendaBotao = updatePatient ? 'Alterar' : 'Cadastrar';
	}

	ngOnInit(): void {

		if (this.updatePatient) {
			this.patient = (this.updatePatient);
		}

		this.form = this.fb.group({
			name: ['', Validators.required],
			cpf: ['', Validators.required],
			dtCreation: ['', Validators.required],
			dtBirth: ['', Validators.required],
			address: ['', Validators.required],
			phone: ['', Validators.required],
		});
	}


	enviarpatient(patient: Patient) {
		patient.id? this.alterar(patient) : this.cadastrar(patient);
	}

	cadastrar(patient: Patient) {
		this.patientService.registerPatient(patient).subscribe(response => {
			EventEmitterService.get('searchId').emit();
			this.snackbar.open(MessagesSnackBar.CADASTRO_SUCESSO, 'Fechar', { duration: 4000 })
		}, (error) => {
			console.log(error);
			this.snackbar.open(MessagesSnackBar.CADASTRO_ERRO, 'Fechar', { duration: 4000 })
		})
	}

	alterar(patient: Patient) {
		this.patientService.updatePatient(patient).subscribe(response => {
			this.snackbar.open(MessagesSnackBar.ALTERACAO_SUCESSO, 'Fechar', { duration: 4000 })
		}, (error) => {
			console.log(error);
			this.snackbar.open(MessagesSnackBar.ALTERACAO_ERRO, 'Fechar', { duration: 4000 })
		})
	}

	ngAfterViewInit(): void {
	}

}
