import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  component: string | undefined = "";

  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    this.component = this.route.children[0].component?.name;
    console.log(this.component);
    
  }

  onAddUser(){
    
  }

  onAddCoupon(){

  }

  onCreateCoupon(){

  }
  
}
