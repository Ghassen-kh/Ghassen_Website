import { Component, OnInit } from '@angular/core';

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
  Adress:string;
  Skype:string;
  ProjectName: string;
  ProjectDate: string;
  ProjectPlace: string;

  Languages: string[];
  Projects: string[];
  Years: number[] = [];
  Skills : any = [];
  TeamMembers :any = [];
  ToDay:Date;

  ngOnInit() {
    this.Designation = 'Instrumentation and intelligent systems engineer';
    this.Username = 'Ghassen Khalouaoui';
    this.PhoneNumber = "(+216) 96626522";
    this.Linkedin = "linkedin.com/in/ghassen-khalouaoui";
    this.Github = "github.com/Ghassen-kh";
    this.Mail = "ghassen.khalouaoui15@gmail.com";
    this.Adress = "Sidi Thabet , Ariana, Tunisie";
    this.Skype="live:.cid.ebe9c8af118484e8";
    this.ProjectName = "Non-cooperative 3D face recognition in uncontrolled environment";
    this.ProjectDate = "From 02/2020 to 12/2020";
    this.ProjectPlace = "Tunis";
    this.ToDay=new Date();
    

    this.Languages = [
      'Arabic',
      'English',
      'Frensh',
      'German'
    ];

    this.Projects = ['Project A', 'Project B', 'Project C', 'Project D'];

    for (var i = 2019; i >= 2010; i--) {
      this.Years.push(i);
    }

    this.Skills = [
      {
        Name: 'C',
        Experience: 4,
        Level: "8/10",
      },
      {
        Name: 'C++',
        Experience: 4,
        Level: "7/10",
      },
      {
        Name: 'Java',
        Experience: 3,
        Level: "6/10",
      },
      {
        Name: 'Python',
        Experience: 1,
        Level: "5/10",
      },
    ];

    this.TeamMembers = [
      {
        Region: 'Modern C++ multithreading',
        Members: [
          { ID: 1, Skill: 'Skill1', Level1: 'Good' },
          { ID: 2, Skill: 'Skill2', Level1: 'Good' },
          { ID: 3, Skill: 'Skill3', Level1: 'Average' },
          { ID: 4, Skill: 'Skill4', Level1: 'Average' },
        ],
      },
      {
        Region: 'Computer Vision (OpenCV & Python)',
        Members: [
          { ID: 5, Skill: 'Skill1', Level1: 'Good' },
          { ID: 6, Skill: 'Skill2', Level1: 'Good' },
          { ID: 7, Skill: 'Skill3', Level1: 'Average' },
          { ID: 8, Skill: 'Skill4', Level1: 'Average' },
        ],
      },
      {
        Region: 'HTML, CSS and Javascript for Web Developers (JOHNS HOPKINS university)',
        Members: [
          { ID: 9, Skill: 'Skill1', Level1: 'Good' },
          { ID: 10, Skill: 'Skill2', Level1: 'Good' },
          { ID: 11, Skill: 'Skill3', Level1: 'Average' },
          { ID: 12, Skill: 'Skill4', Level1: 'Average' },
        ],
      },
      {
        Region: 'Agile Scrum (Advancia)',
        Members: [
          { ID: 13, Skill: 'Skill1', Level1: 'Good' },
          { ID: 14, Skill: 'Skill2', Level1: 'Good' },
          { ID: 15, Skill: 'Skill3', Level1: 'Average' },
          { ID: 16, Skill: 'Skill4', Level1: 'Average' },
        ],
      },
      {
        Region: 'Upper intermediate 3 General English level (British Council Tunis)',
        Members: [
          { ID: 13, Skill: 'Skill1', Level1: 'Good' },
          { ID: 14, Skill: 'Skill2', Level1: 'Good' },
          { ID: 15, Skill: 'Skill3', Level1: 'Average' },
          { ID: 16, Skill: 'Skill4', Level1: 'Average' },
        ],
      },
      {
        Region: 'Practitioner in Neurolinguistic Programming (Psynapse)',
        Members: [
          { ID: 13, Skill: 'Skill1', Level1: 'Good' },
          { ID: 14, Skill: 'Skill2', Level1: 'Good' },
          { ID: 15, Skill: 'Skill3', Level1: 'Average' },
          { ID: 16, Skill: 'Skill4', Level1: 'Average' },
        ],
      },
    ];
  }
  onProjectChange($event:any){
    if($event.target.innerHTML=="Project A"){
      this.ProjectName="Non-cooperative 3D face recognition in uncontrolled environment";
      this.ProjectDate="From 02/2020 to 12/2020";
      this.ProjectPlace="Tunis";
    }
    else
     if($event.target.innerHTML=="Project B"){
      this.ProjectName="Angular project ";
      this.ProjectDate="From 03/2021 to 04/2021";
      this.ProjectPlace="Tunis";
    }
    else
    if($event.target.innerHTML=="Project C"){
     this.ProjectName="javaFX project";
     this.ProjectDate="From 02/2021 to 03/2021";
     this.ProjectPlace="Tunis";
   }
   else
   if($event.target.innerHTML=="Project D"){
    this.ProjectName="embedded systems project";
    this.ProjectDate="From 03/2019 to 09/2019";
    this.ProjectPlace="INSAT";
  }
  }
}
