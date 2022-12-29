import { BadBy } from "./badBy";
import { GoodBy } from "./goodBy";
import { LikedBy } from "./likedBy";

export interface Message {
  id: string;
  message: string;
  user: string;
  photoURL: string;
  isAnonym: boolean;
  likedBy: LikedBy[];
  goodBy: GoodBy[];
  badBy: BadBy[];
  timestamp: Date;
}
