import { Component, OnInit } from '@angular/core';
import { developer } from '../Models/developer.model';


@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrl: './developer.component.css'
})

export class DeveloperComponent implements OnInit {

  developer!: developer

  constructor() { }

  ngOnInit(): void {
    this.developer = new developer("Doe", "John", 43, "Homme", "Reconversion")
  }

}
