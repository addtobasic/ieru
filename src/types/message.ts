import { LikedBy } from "./likedBy";

export interface Message {
  id: string;
  message: string;
  user: string;
  photoURL: string;
  isAnonym: boolean;
  likedBy: LikedBy[];
  timestamp: Date;
}
