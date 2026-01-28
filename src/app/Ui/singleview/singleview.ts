import { ChangeDetectorRef, Component } from '@angular/core';
import { Apiservice } from '../../apiservice';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-singleview',
  imports: [CommonModule],
  templateUrl: './singleview.html',
  styleUrl: './singleview.css',
})
export class Singleview {
  singleproduct: any;

  constructor(private route: ActivatedRoute,private apiservice: Apiservice,private cdr:ChangeDetectorRef) {}
  ngOnInit() {
    const productid = this.route.snapshot.paramMap.get('titleid');
    if (productid) {
      this.apiservice.getsingleproducts(productid).subscribe((data) => {
        this.singleproduct = data;
        console.log(data);
        this.cdr.detectChanges();
      });
    }
  }
}