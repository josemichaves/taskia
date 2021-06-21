export interface DbUser {
  _id: string;
  name: string;
  email: string;
}

export interface DbProject {
  _id: string;
  name: string;
  participants: [string];
  tasks: [DbTask];
  shareCode: number;
}

export interface DbTask {
  _id: string;
  name: string;
  completed: boolean;
}