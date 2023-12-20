import { Component, OnInit } from '@angular/core';
import { Developer } from '../Models/Developer.model';
import { Skill } from '../Models/Skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})

export class DeveloperComponent implements OnInit {

  developer!: Developer;

  constructor() { }

  ngOnInit(): void {
    this.developer = new Developer("Doe", "John", 43, "Homme", "Reconversion");

    const skill1 = new Skill("React", "React", "React");
    const skill2 = new Skill("Java", "Java", "Java");

    this.developer.skills?.push(skill1);
    this.developer.skills?.push(skill2);
  }
}
