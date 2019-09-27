import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-collegue-component',
  templateUrl: './single-collegue-component.component.html',
  styleUrls: ['./single-collegue-component.component.css']
})
export class SingleCollegueComponentComponent implements OnInit {

  matricule:string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.matricule = this.route.snapshot.params['matricule'];
  }

}
