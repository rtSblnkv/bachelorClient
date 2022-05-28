import { Component } from '@angular/core';
import {Order} from "./model/Order";
import {NetPoint} from "./model/NetPoint";
import {RouteParams} from "./model/RouteParams";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import * as L from "leaflet";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Logistics';

  private netPoints: NetPoint[];
  private orders: Order[];
  private routeParams:RouteParams;
  private map: any;

  private netPointForm: FormGroup;
  private orderForm:FormGroup;
  private filterForm:FormGroup;

  vehicleTypes: Array<any> = [
    {
      id:1,
      name:"Пеший",
      value:"Pedestrian"
    },
    {
      id:2,
      name:"Мобильный",
      value:"Mobile"
    },
    {
      id:3,
      name:"Автомобильный",
      value:"Auto"
    }
  ]

  constructor(private fb: FormBuilder) {
    this.orders = [];
    this.netPoints = [];

    this.netPointForm = this.fb.group({
      code: ['', Validators.required],
      address: ['', Validators.required]
    });

    this.orderForm = this.fb.group({
      netPoint: ['', Validators.required],
      address: ['', Validators.required],
      type: ['']
    });

    this.filterForm = this.fb.group({
      withOptimizing: [false, Validators.required],
      optimizingDistance:[0],
      withTrafficJamsRouting: [false, Validators.required],
      vehicleType:[this.vehicleTypes[1].value,Validators.required]
    });

    this.routeParams = this.filterForm.value;

  }

  changeNetPoint(e: any){
    this.netPointCode?.setValue(e.target.value,{
      onlySelf:true,
    })
  }

  public addOrder(): void {
    this.orders.push(this.orderForm.value);
    this.resetOrderInput();
  }

  public resetOrderInput() : void {
    this.orderForm.reset();
  }

  public removeOrder(element: Order) : void {
    this.orders.forEach((value,index) =>{
      if (value == element) this.orders.splice(index,1);
    })
  }

  public addNetPoint(): void {
    this.netPoints.push(this.netPointForm.value);
    this.resetNetPointInput( );
  }

  public resetNetPointInput() : void {
    this.netPointForm.reset();
  }

  public removeNetPoint(element: NetPoint) : void {
    this.netPoints.forEach((value,index) =>{
      if (value == element) this.netPoints.splice(index,1);
    })
  }

  changeVehicleType(e:any){
    this.vehicleType?.setValue(e.targer.value,{
      onlySelf:true,
    })
  }

  optimizingEnable(e:any){
    this.withOptimizing?.setValue(e.target.checked)
  }

  private initMap(): void {
    this.map = L.map('map').setView([53.211772885475156, 50.17729037818708], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    L.marker([53.211772885475156, 50.17729037818708]).addTo(this.map);
    L.marker([53.201107707748605, 50.10843173214648]).addTo(this.map);
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  ngOnInit(): void {
  }

  get orderAddress() { return this.orderForm.get('address'); }

  get netPointCode(){ return this.orderForm.get('netPoint');}

  get vehicleType(){
    return this.filterForm.get('vehicleType');
  }

  get withOptimizing(){
    return this.filterForm.get('withOptimizing');
  }

  get optimizingDistance(){
    return this.filterForm.get('optimizingDistance');
  }

  get withTrafficJamsRouting(){
    return this.filterForm.get('withOptimizing');
  }
}
