import { Component, Optional, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DoctorService } from "src/app/services/doctor.service";
import { MessagesSnackBar } from "src/app/_constants/messagesSnackBar";
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
	selector: 'modal-delete-doctor',
	templateUrl: 'modal-delete-doctor.html',
})
export class ModalDeletarDoctor {

	constructor(
		private doctorService: DoctorService,
		private snackbar: MatSnackBar,
		private dialogRef: MatDialogRef<ModalDeletarDoctor>,
		@Optional() @Inject(MAT_DIALOG_DATA) public doctorID: any) { }

	delete() {
		this.doctorService.deletedoctor(this.doctorID).subscribe(response => {
			this.snackbar.open(MessagesSnackBar.DELETAR_DOCTOR_SUCESSO, 'Fechar', { duration: 4000 })
		}, (error) => {
			console.log(error);
			this.snackbar.open(MessagesSnackBar.DELETAR_DOCTOR_ERRO, 'Fechar', { duration: 4000 })
		})
	}
}
