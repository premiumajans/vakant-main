export interface select {
  alt: [
    {
      id: number;
      name: string;
      translations: translations[];
    }
  ];
  salary: number;
  id: number;
  name: string;
  slug: string;
  status: number;
  translations: translations[];
}

export interface translations {
  locale: "en" | "az" | "ru";
  name: string;
}

export interface addItem {
  position: string;
  category: string;
  mode: string;
  city: string;
  experience: string;
  education: string;
  minimum_age: string;
  maximum_age: string;
  minimum_salary: string;
  maximum_salary: string;
  company: string;
  relevant_people: string;
  email: string;
  phone: string;
  tags: string;
  about_job: string;
  candidate_requirements: string;
  token: string;
}

export interface getItems {
  item: Item[]
}



export interface Item {
  "id": number,
  end_time:string,
  shared_time:string,
  vacancy_type:1 | 2,
  view_count:number,
  description: {
    candidate_requirement: string
    category_id: number;
    city_id: number;
    company: string;
    education_id: number;
    email: string;
    experience_id: number;
    id: number;
    job_description: string;
    max_age: number;
    max_salary: number;
    min_age: number;
    min_salary: number;
    mode_id: number;
    phone: string;
    position: string;
    relevant_people: string;
    tags: string;
    vacancy_id: number;
  }
}


