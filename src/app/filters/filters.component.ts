import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

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

  filterForm:FormGroup;

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      withOptimizing: [false, Validators.required],
      optimizingDistance:[0],
      withTrafficJamsRouting: [false, Validators.required],
      vehicleType:[this.vehicleTypes[1].value,Validators.required]
    });
  }

  changeVehicleType(e:any){
    this.vehicleType?.setValue(e.targer.value,{
      onlySelf:true,
    })
  }

  optimizingEnable(e:any){
    this.withOptimizing?.setValue(e.target.checked)
  }

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

  ngOnInit(): void {
  }

}
