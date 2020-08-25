import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Dress } from 'src/app/dto/dress';
import { DressService } from 'src/app/services/dress.service';

@Component({
  selector: 'app-dress-form',
  templateUrl: './dress-form.component.html',
  styleUrls: ['./dress-form.component.css']
})
export class DressFormComponent implements OnInit {

  dressForm : FormGroup;
  constructor(private dressService: DressService) { }

  ngOnInit(): void {
     this.dressForm =new FormGroup({
       'name':new FormControl(),
       'color':new FormControl(),
        'size':new FormControl(),
        'price':new FormControl()
     })
  }

  save(){
    let d = new Dress();
    d.name=this.dressForm.get('name').value;
    d.color=this.dressForm.get('color').value;
    d.size=this.dressForm.get('size').value;
    d.price=this.dressForm.get('price').value;

    this.dressService.save(d).subscribe(
     
      data => {
        this.dressForm.reset();
        console.log(data);
      }
    )
  }

}
