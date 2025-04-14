export interface User {
    id: string;
    fullName: string;
    email: string;
    avatarUrl: string;
    status: 'attended' | 'absent';
  }
  
  export interface SearchFieldProps {
    users: User[];
    emailCheck?: boolean;
    width?: string;
  }
  