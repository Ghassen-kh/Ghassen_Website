import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  Designation: string;
  Username: string;
  PhoneNumber: string;
  Linkedin: string;
  Github: string;
  Mail: string;
  Adress: string;
  Skype: string;
  ProjectName: string;
  ProjectDate: string;
  ProjectPlace: string;

  Languages: any = [];
  Projects: string[];
  Years: number[] = [];
  Skills: any = [];
  TeamMembers: any = [];
  ToDay: Date;
  @Output() y: string;

  ngOnInit() {
    this.Designation = 'Instrumentation and intelligent systems engineer';
    this.Username = 'Ghassen Khalouaoui';
    this.PhoneNumber = '(+216) 23.107.168';
    this.Linkedin = 'linkedin.com/in/ghassen-khalouaoui';
    this.Github = 'github.com/Ghassen-kh';
    this.Mail = 'ghassen.khalouaoui15@gmail.com';
    this.Adress = 'Sidi Thabet , Ariana, Tunisie';
    this.Skype = 'live:.cid.ebe9c8af118484e8';
    this.ProjectName = 'Non-cooperative 3D face recognition in uncontrolled environment';
    this.ProjectDate = 'From 02/2020 to 12/2020';
    this.ProjectPlace = 'Tunis';
    this.ToDay = new Date();


    this.Languages = [
    {
      name : 'Arabic',
      experience: '100'
    },
    {
      name : 'English',
      experience: '75'
    },
    {
      name : 'Frensh',
      experience: '70'
    },
    {
      name : 'German',
      experience: '10'
    }
  ];

    this.Projects = ['End of Study Internship', 'Angular project', 'javaFX project', 'Embedded systems project'];

    for (let i = 2021; i >= 2010; i--) {
      this.Years.push(i);
    }

    this.Skills = [
      {
        Name: 'Angular',
        Level: '70%',
      },
      {
        Name: 'TypeScript',
        Level: '70%',
      },
      {
        Name: 'Java',
        Level: '60%',
      },
      {
        Name: 'Python',
        Level: '50%',
      },
      {
        Name: 'C',
        Level: '80%',
      },
      {
        Name: 'C++',
        Level: '80%',
      },
      {
        Name: 'HTML5',
        Level: '80%',
      },
      {
        Name: 'CSS3',
        Level: '50%',
      },
      {
        Name: 'MySQL',
        Level: '60%',
      },
    ];

    this.TeamMembers = [
      {
        id: 'modern',
        Name: 'Modern C++ multithreading',
        Url: 'assets/c++.jpg',
        Members: [
          { Skill: 'Skill1', Level1: 'Good' },
          { Skill: 'Skill2', Level1: 'Good' },
          { Skill: 'Skill3', Level1: 'Average' },
          { Skill: 'Skill4', Level1: 'Average' },
        ],
      },
      {
        id: 'docker',
        Name: 'Docker Essentials & Building a Containerized Web Application',
        Url: 'assets/docker.jpg',
        Members: [
          { Skill: 'Skill1', Level1: 'Good' },
          { Skill: 'Skill2', Level1: 'Good' },
          { Skill: 'Skill3', Level1: 'Average' },
          { Skill: 'Skill4', Level1: 'Average' },
        ],
      },
      {
        id: 'computer',
        Name: 'Computer Vision (OpenCV & Python)',
        Url: 'assets/computer_vision.jpg',
        Members: [
          { Skill: 'Skill1', Level1: 'Good' },
          { Skill: 'Skill2', Level1: 'Good' },
          { Skill: 'Skill3', Level1: 'Average' },
          { Skill: 'Skill4', Level1: 'Average' },
        ],
      },
      {
        id: 'html',
        Name: 'HTML, CSS and Javascript for Web Developers (JOHNS HOPKINS university)',
        Url: 'assets/web.jpg',
        Members: [
          { Skill: 'Skill1', Level1: 'Good' },
          { Skill: 'Skill2', Level1: 'Good' },
          { Skill: 'Skill3', Level1: 'Average' },
          { Skill: 'Skill4', Level1: 'Average' },
        ],
      },
      {
        id: 'agile',
        Name: 'Agile Scrum (Advancia)',
        Url: 'assets/agile.jpg',
        Members: [
          { Skill: 'Skill1', Level1: 'Good' },
          { Skill: 'Skill2', Level1: 'Good' },
          { Skill: 'Skill3', Level1: 'Average' },
          { Skill: 'Skill4', Level1: 'Average' },
        ],
      },
      {
        id: 'english',
        Name: 'Upper intermediate 3 General English level (British Council Tunis)',
        Url: 'assets/english.jpg',
        Members: [
          { Skill: 'Skill1', Level1: 'Good' },
          { Skill: 'Skill2', Level1: 'Good' },
          { Skill: 'Skill3', Level1: 'Average' },
          { Skill: 'Skill4', Level1: 'Average' },
        ],
      },
      {
        id: 'pnl',
        Name: 'Practitioner in Neurolinguistic Programming (Psynapse)',
        Url: 'assets/pnl.jpg',
        Members: [
          { Skill: 'Skill1', Level1: 'Good' },
          { Skill: 'Skill2', Level1: 'Good' },
          { Skill: 'Skill3', Level1: 'Average' },
          { Skill: 'Skill4', Level1: 'Average' },
        ],
      },
    ];
  }
  onProjectChange($event: any){
    if ($event.target.innerHTML == 'End of Study Internship'){
      this.ProjectName = 'Non-cooperative 3D face recognition in uncontrolled environment';
      this.ProjectDate = 'From 02/2020 to 12/2020';
      this.ProjectPlace = 'Tunis';
    }
    else
     if ($event.target.innerHTML == 'Angular project'){
      this.ProjectName = 'Angular project ';
      this.ProjectDate = 'From 04/2021 to 05/2021';
      this.ProjectPlace = 'Tunis';
    }
    else
    if ($event.target.innerHTML == 'javaFX project'){
     this.ProjectName = 'javaFX project';
     this.ProjectDate = 'From 02/2021 to 03/2021';
     this.ProjectPlace = 'Tunis';
   }
   else
   if ($event.target.innerHTML == 'Embedded systems project'){
    this.ProjectName = 'Embedded systems project';
    this.ProjectDate = 'From 03/2019 to 09/2019';
    this.ProjectPlace = 'INSAT';
  }
  }
}
