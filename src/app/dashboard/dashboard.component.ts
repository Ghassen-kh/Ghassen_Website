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
          { ID: 1, Name: 'Ford', Status: 'Available' },
          { ID: 2, Name: 'Miller', Status: 'Available' },
          { ID: 3, Name: 'Jones', Status: 'Busy' },
          { ID: 4, Name: 'James', Status: 'Busy' },
        ],
      },
      {
        Region: 'Computer Vision (OpenCV & Python)',
        Members: [
          { ID: 5, Name: 'Anna', Status: 'Available' },
          { ID: 6, Name: 'Arun', Status: 'Available' },
          { ID: 7, Name: 'Varun', Status: 'Busy' },
          { ID: 8, Name: 'Jasmine', Status: 'Busy' },
        ],
      },
      {
        Region: 'HTML, CSS and Javascript for Web Developers (JOHNS HOPKINS university)',
        Members: [
          { ID: 9, Name: 'Krishna', Status: 'Available' },
          { ID: 10, Name: 'Mohan', Status: 'Available' },
          { ID: 11, Name: 'Raju', Status: 'Busy' },
          { ID: 12, Name: 'Farooq', Status: 'Busy' },
        ],
      },
      {
        Region: 'Agile Scrum (Advancia)',
        Members: [
          { ID: 13, Name: 'Jacob', Status: 'Available' },
          { ID: 14, Name: 'Smith', Status: 'Available' },
          { ID: 15, Name: 'Jones', Status: 'Busy' },
          { ID: 16, Name: 'James', Status: 'Busy' },
        ],
      },
      {
        Region: 'Upper intermediate 3 General English level (British Council Tunis)',
        Members: [
          { ID: 13, Name: 'Jacob', Status: 'Available' },
          { ID: 14, Name: 'Smith', Status: 'Available' },
          { ID: 15, Name: 'Jones', Status: 'Busy' },
          { ID: 16, Name: 'James', Status: 'Busy' },
        ],
      },
      {
        Region: 'Practitioner in Neurolinguistic Programming (Psynapse)',
        Members: [
          { ID: 13, Name: 'Jacob', Status: 'Available' },
          { ID: 14, Name: 'Smith', Status: 'Available' },
          { ID: 15, Name: 'Jones', Status: 'Busy' },
          { ID: 16, Name: 'James', Status: 'Busy' },
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
