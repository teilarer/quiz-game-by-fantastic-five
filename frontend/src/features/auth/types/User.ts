export default interface User {
    id: number;
    name: string;
    email: string;
    score: number;
  }
  
  export type UserId = User['id'];