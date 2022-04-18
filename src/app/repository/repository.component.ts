import { Component, OnInit } from '@angular/core';
import { TherepoService } from '../get-repo/therepo.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  repoProfile: any;
  repos!: string;
  name!:string;
  description!: string;
  url!: string;
  language!: string;
  update_at!:Date;

  constructor(private service: TherepoService) {  }

  ngOnInit(): void {
  }

}
