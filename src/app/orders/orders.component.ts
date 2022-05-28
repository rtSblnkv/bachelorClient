import {Component, Input, OnInit, Output} from '@angular/core';
import {Order} from "../model/Order";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NetPoint} from "../model/NetPoint";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  @Output() orders:Order[];
  @Input() netPoints:NetPoint[] = [];

  orderForm:FormGroup;

  constructor(private fb: FormBuilder) {
    this.orders = [];

    this.orderForm = this.fb.group({
      netPoint: ['', Validators.required],
      address: ['', Validators.required],
      type: ['']
    });
  }

  changeNetPoint(e: any){
    this.netPointCode?.setValue(e.target.value,{
      onlySelf:true,
    })
  }

  public addOrder(): void {
    this.orders.push(this.orderForm.value);
    this.resetOrderInput( );
  }

  public resetOrderInput() : void {
    this.orderForm.reset();
  }

  public removeOrder(element: Order) : void {
    this.orders.forEach((value,index) =>{
      if (value == element) this.orders.splice(index,1);
    })
  }

  ngOnInit(): void {
  }

  get orderAddress() { return this.orderForm.get('address'); }

  get netPointCode(){ return this.orderForm.get('netPoint');}

}
