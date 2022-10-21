import {Component, OnInit} from '@angular/core';
import {Cv} from "../Classes/cv";
import {CvService} from "../Services/cv.service";
import {Router} from "@angular/router";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css']
})
export class AddCvComponent {

  public expControls;
  public eduControls;
  public projControls;
  public hobyControls;
  public resControls;

  cv: Cv;
  public cvForm: FormGroup;


  constructor(private cvService: CvService, private router: Router, private fb: FormBuilder) {
    this.cv = new Cv();
    this.cv.experiences = [];
    this.cvForm = this.fb.group({
      prenom: ['', [Validators.required, Validators.maxLength(80)]],
      nom: ['', [Validators.required, Validators.maxLength(80)]],
      dateNaissance: ['', [Validators.required, Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(80)]],
      telephone: ['', [Validators.required, Validators.maxLength(20)]],
      adresse: ['', [Validators.required, Validators.maxLength(255)]],
      description: ['', [Validators.required, Validators.maxLength(255)]],
      experiences: this.fb.array([]),
      educations: this.fb.array([]),
      projets : this.fb.array([]),
      hobbies : this.fb.array([]),
      reseauxSx : this.fb.array([])

    });
    this.expControls = this.experiences();
    this.eduControls = this.educations();
    this.projControls=this.projets();
    this.hobyControls=this.hobbies();
    this.resControls=this.reseauxSx();
  }

  onSubmit() {
    console.log(this.cvForm.value);
    //this.cv.nom = this.cvForm.value['nom']
    this.saveCv(this.cvForm.value);
  }

  saveCv(cv : Cv) {
    this.cvService.addCv(cv).subscribe(
      data => {
        console.log(this.cv)
        this.goToCvsList();
      },
      error => console.log(error)
    );
  }

  goToCvsList() {
    this.router.navigate(["list-cv"]);
  }

  initExperience(): FormGroup {
    return this.fb.group({
      title: ['', [Validators.required]],
      company: ['', [Validators.required]],
      location: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }

  addNewExperience(): void {
    const control = <FormArray>this.cvForm.controls['experiences'];
    control.push(this.initExperience());
  }

  removeExperience(i: number): void {
    const control = <FormArray>this.cvForm.controls['experiences'];
    control.removeAt(i);
  }

  experiences(): FormArray {
    return this.cvForm.get("experiences") as FormArray
  }


  //Education

  educations(): FormArray {
    return this.cvForm.get("educations") as FormArray
  }

  addNewEdu() {
    const control = <FormArray>this.cvForm.controls['educations'];
    control.push(this.initEdu());  }

  initEdu(): FormGroup {
    return this.fb.group({
      ecole: ['', [Validators.required]],
      diplome: ['', [Validators.required]],
      locationE: ['', [Validators.required]],
      startDateE: ['', [Validators.required]],
      endDateE: ['', [Validators.required]],
      descriptionE: ['', [Validators.required]]
    });
  }

  removeEdu(j: number) {
    const control = <FormArray>this.cvForm.controls['educations'];
    control.removeAt(j);
  }

  //Réseau



  initReseau(): FormGroup {
    return this.fb.group({
      etiquette: ['', [Validators.required]],
      url: ['', [Validators.required]]
    });
  }

  addNewReseau(): void {
    const control = <FormArray>this.cvForm.controls['reseauxSx'];
    control.push(this.initReseau());
  }

  removeReseau(m: number): void {
    const control = <FormArray>this.cvForm.controls['reseauxSx'];
    control.removeAt(m);
  }

  reseauxSx(): FormArray {
    return this.cvForm.get("reseauxSx") as FormArray
  }
  //Projects


  projets(): FormArray {
    return this.cvForm.get("projets") as FormArray
  }

  addNewProj() {
    const control = <FormArray>this.cvForm.controls['projets'];
    this.projets().push(this.initProj());
  }

  initProj(): FormGroup {
    return this.fb.group({
      titleP: ['', Validators.required],
      startDateP: ['', Validators.required],
      endDateP: ['', Validators.required],
      descriptionP: ['', Validators.required]
    })
  }

  removeProj(l: number) {
    const control = <FormArray>this.cvForm.controls['projets'];
    control.removeAt(l);
  }

  //Hobby

  initHobby(): FormGroup {
    return this.fb.group({
      hobby: ['', [Validators.required]]
    });
  }

  addNewHobby(): void {
    const control = <FormArray>this.cvForm.controls['hobbies'];
    control.push(this.initHobby());
  }

  removeHobby(z: number): void {
    const control = <FormArray>this.cvForm.controls['hobbies'];
    control.removeAt(z);
  }

  hobbies(): FormArray {
    return this.cvForm.get("hobbies") as FormArray
  }


}
