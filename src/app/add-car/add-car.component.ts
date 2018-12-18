import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  // carName = '';
  // carYear = 2018;
  @Output('onAddCar') carEmitter = new EventEmitter<{name: string, year: number}>();
  @ViewChild('carYearInput') carYearInput: ElementRef; 

  constructor() { }

  addCar(carNameEl: HTMLInputElement) { 

    console.log(this.carYearInput);
    this.carEmitter.emit({
      // name: this.carName,
      name: carNameEl.value,
      // year: this.carYear,
      year: +this.carYearInput.nativeElement.value
    });  
    // this.carName = '';
    carNameEl.value = '';
    // this.carYear = 2018;
    this.carYearInput.nativeElement.value = 2018;
  }

  ngOnInit() {
  }

}
