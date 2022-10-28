import { Component, OnInit } from '@angular/core';
import { Cv } from "../Classes/cv";
import { CvService } from "../Services/cv.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Projects } from '../Classes/projects';
import { Education } from '../Classes/education';
import { Experience } from '../Classes/experience';
import { ReseauxSociaux } from '../Classes/reseaux-sociaux';
import { Hobby } from '../Classes/hobby';

@Component({
  selector: 'app-check-cv',
  templateUrl: './check-cv.component.html',
  styleUrls: ['./check-cv.component.css']
})
export class CheckCvComponent implements OnInit {

  public expControls;
  public eduControls;
  public projControls;
  public hobyControls;
  public resControls;
  pageTitle: string;
  cv: Cv;
  public cvForm: FormGroup;

  constructor(private cvService: CvService, private router: Router, private fb: FormBuilder, private route: ActivatedRoute) { }
  ngOnInit() {
    this.cv = new Cv();
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
      projets: this.fb.array([]),
      hobbies: this.fb.array([]),
      reseauxSx: this.fb.array([])

    });
    this.expControls = this.experiences();
    this.eduControls = this.educations();
    this.projControls = this.projets();
    this.hobyControls = this.hobbies();
    this.resControls = this.reseauxSx();

    this.route.paramMap.subscribe(params => {
      const cvId = +params.get('id');
      if (cvId) {
        this.pageTitle = 'Modifier Cv';
        this.getCv(cvId);
      }
      else {
        this.pageTitle = 'Créer Cv';
        this.cv = {
          id: null,
          prenom: '',
          nom: '',
          dateNaissance: '',
          adresse: '',
          email: '',
          telephone: '',
          description: '',
          reseauxSociaux: [],
          experiences: [],
          educations: [],
          projets: [],
          hobbies: []
        };
      }
    });
  }

  getCv(id: number) {
    this.cvService.getCv(id)
      .subscribe(
        (cv: Cv) => {
          this.editCv(cv);
          this.cv = cv;
        },
        (err: any) => console.log(err)
      );
  }

  editCv(cv: Cv) {
    this.cvForm.patchValue({
      prenom: cv.prenom,
      nom: cv.nom,
      dateNaissance: cv.dateNaissance,
      adresse: cv.adresse,
      email: cv.email,
      telephone: cv.telephone,
      description: cv.description,

    });

    this.cvForm.setControl('reseauxSociaux', this.setExistingreseauxSociaux(cv.reseauxSociaux));
    this.cvForm.setControl('experiences', this.setExistingExperience(cv.experiences));
    this.cvForm.setControl('educations', this.setExistingEducation(cv.educations));
    this.cvForm.setControl('projets', this.setExistingProjets(cv.projets));
    this.cvForm.setControl('hobbies', this.setExistingHobbies(cv.hobbies));
  }

  setExistingreseauxSociaux(RSets: ReseauxSociaux[]): FormArray {
    const formArray = new FormArray([]);
    RSets.forEach(rs => {
      formArray.push(this.fb.group({
        etiquette: rs.etiquette,
        Url: rs.Url
      }));
    });

    return formArray;
  }

  setExistingExperience(ExpSets: Experience[]): FormArray {
    const formArray = new FormArray([]);
    ExpSets.forEach(exp => {
      formArray.push(this.fb.group({
        title: exp.title,
        company: exp.company,
        location: exp.location,
        startDate: exp.startDate,
        endDate: exp.endDate,
        description: exp.description
      }));
    });

    return formArray;
  }

  setExistingEducation(EducSets: Education[]): FormArray {
    const formArray = new FormArray([]);
    EducSets.forEach(educ => {
      formArray.push(this.fb.group({
        ecole: educ.ecole,
        diplome: educ.diplome,
        locationE: educ.locationE,
        startDateE: educ.startDateE,
        endDateE: educ.endDateE,
        descriptionE: educ.descriptionE
      }));
    });

    return formArray;
  }

  setExistingProjets(PSets: Projects[]): FormArray {
    const formArray = new FormArray([]);
    PSets.forEach(pro => {
      formArray.push(this.fb.group({
        titleP: pro.titleP,
        startDateP: pro.startDateP,
        endDateP: pro.endDateP,
        descriptionP: pro.descriptionP
      }));
    });

    return formArray;
  }

  setExistingHobbies(HobSets: Hobby[]): FormArray {
    const formArray = new FormArray([]);
    HobSets.forEach(comp => {
      formArray.push(this.fb.group({
        hobby: comp.hobby
      }));
    });

    return formArray;
  }


  /* onSubmit() {
     console.log(this.cvForm.value);
     //this.cv.nom = this.cvForm.value['nom']
     this.saveCv(this.cvForm.value);
   }
 
   saveCv(cv: Cv) {
     this.cvService.create(cv).subscribe(
       data => {
         console.log(this.cv)
         this.goToCvsList();
       },
       error => console.log(error)
     );
   }
 */

  //essai
  onSubmit(): void {
    console.log(this.cvForm.value);
    this.mapFormValuesToCvModel();
    if (this.cv.id) {
      this.cvService.update(this.cv.id, this.cvForm.value).subscribe(
        () => this.router.navigate(['list-cv']),
        (err: any) => console.log(err)
      );
    } else {
      this.saveCv(this.cvForm.value);
    }
  }

  saveCv(cv: Cv) {
    this.cvService.create(cv)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.goToCvsList();
        },
        error: (e) => console.error(e)
      });
  }

  goToCvsList() {
    this.router.navigate(["list-cv"]);
  }
  /////////////////////////////////
  mapFormValuesToCvModel() {
    this.cv.prenom = this.cvForm.value.firstName;
    this.cv.nom = this.cvForm.value.lastName;
    this.cv.dateNaissance = this.cvForm.value.dateNaissance;
    this.cv.adresse = this.cvForm.value.adresse;
    this.cv.email = this.cvForm.value.email;
    this.cv.telephone = this.cvForm.value.phone;
    this.cv.description = this.cvForm.value.description;
    this.cv.reseauxSociaux = this.cvForm.value.reseauxSociaux;
    this.cv.experiences = this.cvForm.value.experiences;
    this.cv.educations = this.cvForm.value.educations;
    this.cv.projets = this.cvForm.value.projets;
    this.cv.hobbies = this.cvForm.value.hobbies;

  }



  /////////////////////////

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
    control.push(this.initEdu());
  }

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

