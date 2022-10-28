import { Experience } from "./experience";
import { Education } from "./education";
import { Projects } from "./projects";
import { ReseauxSociaux } from "./reseaux-sociaux";
import { Hobby } from "./hobby";

export class Cv {
  // @ts-ignore
  id?: number;
  // @ts-ignore
  prenom?: string;
  // @ts-ignore
  nom?: string;
  // @ts-ignore
  dateNaissance?: string;
  // @ts-ignore
  email?: string;
  // @ts-ignore
  telephone?: string;
  // @ts-ignore
  adresse?: string;
  // @ts-ignore
  description?: string;
  // @ts-ignore
  experiences?: Experience[];
  // @ts-ignore
  educations?: Education[];
  // @ts-ignore
  hobbies?: Hobby[];
  // @ts-ignore
  projets?: Projects[];
  // @ts-ignore
  reseauxSociaux?: ReseauxSociaux[];
}
