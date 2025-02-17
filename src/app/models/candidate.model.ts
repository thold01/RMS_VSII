export interface Candidate {
  name: string;
  idCard: string;
  email: string;
  major: string;
  dob: string;
  gender: string;
  experience: number;
  height: number;
  weight: number;
  position: string;
  issueDate: string;
  issuePlace: string;
  address: string;
  phone: string;
  university: string;
  degree: string;
  grade: string;
  graduationScore: number;
  degreeType: string;
  education: {
    highSchool: { name: string; level: string; grade: string; icon?: string }[];
    university: string;
    degree: string;
    grade: string;
    graduationScore: number;
    degreeType: string;
  };
  jobs: { title: string; company: string; period: string; location: string }[];
  awards: { year: string; title: string }[];
}
