import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'dialog-upload-model',
  templateUrl: './dialog-upload-model.component.html',
  // styleUrls: ['./navbar.component.css'],
})
export class DialogUploadModelComponent implements OnInit {
  public assetForm = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<DialogUploadModelComponent>,
    @Inject(MAT_DIALOG_DATA) data: any,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.assetForm = this.fb.group({
      file: [null, Validators.required],
    });
  }

  public sendAssetForm(): void {
    this.dialogRef.close({ action: 'SAVE', object: this.assetForm.value });
  }

  public closeDialog(): void {
    this.dialogRef.close({ action: 'CLOSE' });
  }
}
