export default interface User {
    id: number;
    name: string;
    email: string;
    score: boolean
  }
  
  export type UserId = User['id'];