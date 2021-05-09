import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lq-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.scss']
})
export class AuthorDetailsComponent implements OnInit {

 
  id: number;

  constructor(private route: ActivatedRoute) {
    this.id = +this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
  }

}
