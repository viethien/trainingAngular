import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ClientAppService} from '../../../service/client-app.service';
import {AppInfo} from '../../../model/app-info';

@Component({
  selector: 'app-delete-client-dialog',
  templateUrl: './delete-client-dialog.component.html',
  styleUrls: ['./delete-client-dialog.component.css']
})
export class DeleteClientDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteClientDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public clientAppService: ClientAppService) { }


  ngOnInit () {}

  onNoClick(): void {
    this.dialogRef.close();
  }


  public confirmDelete(): void {
    console.log('show data', JSON.stringify(this.data));
    this.clientAppService.deleteClientApp(this.data.id, this.data.isActive)
    .subscribe();
  }

}
