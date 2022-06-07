import { Component, Optional, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MessagesSnackBar } from "src/app/_constants/messagesSnackBar";
import { MatSnackBar } from '@angular/material/snack-bar';
import { EventEmitterService } from "src/app/services/event.service";
import { PatientService } from "src/app/services/patient.service";


@Component({
	selector: 'modal-delete-patient',
	templateUrl: 'modal-delete-patient.html',

})
export class ModalDeletarPatient {

	constructor(
		private patientService: PatientService,
		private snackbar: MatSnackBar,
		private dialogRef: MatDialogRef<ModalDeletarPatient>,
		@Optional() @Inject(MAT_DIALOG_DATA) public id: any) { }

	delete() {
		this.patientService.deletePatient(this.id).subscribe(response => {
			EventEmitterService.get('searchId').emit();
			this.snackbar.open(MessagesSnackBar.DELETAR_PATIENT_SUCESSO, 'Fechar', { duration: 4000 })
		}, (error) => {
			console.log(error);
			this.snackbar.open(MessagesSnackBar.DELETAR_PATIENT_ERRO, 'Fechar', { duration: 4000 })
		})
	}
}
