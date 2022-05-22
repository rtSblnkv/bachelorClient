import {Component, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NetPoint} from "../model/NetPoint";

@Component({
  selector: 'app-netpoints',
  templateUrl: './netpoints.component.html',
  styleUrls: ['./netpoints.component.css']
})
export class NetpointsComponent implements OnInit {

  @Output() listNetPoints: NetPoint[];

  netPointForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.listNetPoints = [];

    this.netPointForm = this.fb.group({
      code: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  public addNetPoint(): void {
    this.listNetPoints.push(this.netPointForm.value);
    this.resetNetPointInput( );
  }

  public resetNetPointInput() : void {
    this.netPointForm.reset();
  }

  public removeNetPoint(element: NetPoint) : void {
    this.listNetPoints.forEach((value,index) =>{
      if (value == element) this.listNetPoints.splice(index,1);
    })
  }

  ngOnInit(): void {
  }

  get address() { return this.netPointForm.get('address'); }

  get code() { return this.netPointForm.get('code'); }

}
