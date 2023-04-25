export interface select {
  alt: [
    {
      id: number;
      name: string;
      translations: translations[]
    }
  ];
  salary:number;
  id: number;
  name: string;
  slug: string;
  status: number;
  translations: translations[]
}


export interface translations {
        locale: "en" | "az" | "ru"
        name: string
}

export interface addItem {
  position: string
    category: string
    mode: string
    city: string
    experience: string
    education: string
    minimum_age: string
    maximum_age: string
    minimum_salary: string
    maximum_salary: string
    company: string
    relevant_people: string
    email: string
    phone: string
    tags: string
    about_job:string
    candidate_requirements:string
    token:string
}