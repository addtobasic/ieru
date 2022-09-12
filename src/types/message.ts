export interface Message {
  id: string;
  message: string;
  user: string;
  photoURL: string;
  isAnonym: boolean;
  timestamp: Date;
}
