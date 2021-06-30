import { IconType } from "react-icons/lib";

export interface IService {
  title: string
  about: string
  Icon: IconType
} 

export interface IProject {
  id: number;
  name: string;
  description: string;
  image_path: string; 
  deployed_url: string;
  github_url: string;
  category: Category[]; 
  key_techs: string[];
}


export type Category = "react" | "django" | "next"; 
