import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

interface population {
  name: string;
  code: string;
}

@Component({
  selector: 'at-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projectForm: FormGroup;

  minProjectDate = new Date();
  val: number = 15;
  daysToExclude: number = 60;
  populations: population[];
  selectedPopulation: string;

  allDevs = [

    { label: 'Jill', value: 'Jill Cool' },
    { label: 'Joe', value: 'Joe Cool' },
    { label: 'Mary', value: 'Mary Cool' },
    { label: 'Susan', value: 'Susan Jones' },
    { label: 'Phil', value: 'Phil Stephens' },
    { label: 'Karen', value: 'Karen Phillips' },
    { label: 'Chris', value: 'Chris Hampton' },
    { label: 'Si', value: 'Si Chew' },
    { label: 'Terri', value: 'Terri Smith' }

  ]


  constructor(private fb: FormBuilder) {
    this.populations =  [
      { name: 'L/Q', code: 'L/Q'},
      { name: 'HRP', code: 'HRP'},
      { name: 'SHRP', code: 'SHRP'},
      { name: 'HRP-NED', code: 'HRP-NED'},
      { name: 'DOT', code: 'DOT'}
  ];

  }

  ngOnInit() {
    this.projectForm = this.fb.group({
      sampleSize: ['', [Validators.required]],
      daysToExclude: ['', [Validators.required]],
      population: ['', [Validators.required]],
      projectId: [''],
      description: ['My cool project'],
      startDate: [new Date(), Validators.required],
      projectType: ['B'],
      selectedDevs: [[]],
      rating: [3]
    })

  }

  hasFormErrors() {
    return !this.projectForm.valid;
  }

  onSubmit() {
    alert(JSON.stringify(this.projectForm.value));
  }








}
