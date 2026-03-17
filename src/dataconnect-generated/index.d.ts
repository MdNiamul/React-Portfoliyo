import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface CreateNewTaskData {
  task_insert: Task_Key;
}

export interface CreateNewTaskVariables {
  title: string;
  status: string;
  description?: string | null;
  dueDate?: DateString | null;
  priority?: string | null;
  projectId?: UUIDString | null;
}

export interface CreateNewUserData {
  user_insert: User_Key;
}

export interface CreateNewUserVariables {
  username: string;
  email?: string | null;
}

export interface GetAllProjectsData {
  projects: ({
    id: UUIDString;
    name: string;
    description?: string | null;
    dueDate?: DateString | null;
    user: {
      id: UUIDString;
      username: string;
    } & User_Key;
  } & Project_Key)[];
}

export interface GetMyProjectsData {
  projects: ({
    id: UUIDString;
    name: string;
    description?: string | null;
    dueDate?: DateString | null;
    createdAt: TimestampString;
  } & Project_Key)[];
}

export interface Project_Key {
  id: UUIDString;
  __typename?: 'Project_Key';
}

export interface Task_Key {
  id: UUIDString;
  __typename?: 'Task_Key';
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateNewUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateNewUserVariables): MutationRef<CreateNewUserData, CreateNewUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateNewUserVariables): MutationRef<CreateNewUserData, CreateNewUserVariables>;
  operationName: string;
}
export const createNewUserRef: CreateNewUserRef;

export function createNewUser(vars: CreateNewUserVariables): MutationPromise<CreateNewUserData, CreateNewUserVariables>;
export function createNewUser(dc: DataConnect, vars: CreateNewUserVariables): MutationPromise<CreateNewUserData, CreateNewUserVariables>;

interface GetMyProjectsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMyProjectsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetMyProjectsData, undefined>;
  operationName: string;
}
export const getMyProjectsRef: GetMyProjectsRef;

export function getMyProjects(): QueryPromise<GetMyProjectsData, undefined>;
export function getMyProjects(dc: DataConnect): QueryPromise<GetMyProjectsData, undefined>;

interface CreateNewTaskRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateNewTaskVariables): MutationRef<CreateNewTaskData, CreateNewTaskVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateNewTaskVariables): MutationRef<CreateNewTaskData, CreateNewTaskVariables>;
  operationName: string;
}
export const createNewTaskRef: CreateNewTaskRef;

export function createNewTask(vars: CreateNewTaskVariables): MutationPromise<CreateNewTaskData, CreateNewTaskVariables>;
export function createNewTask(dc: DataConnect, vars: CreateNewTaskVariables): MutationPromise<CreateNewTaskData, CreateNewTaskVariables>;

interface GetAllProjectsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetAllProjectsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetAllProjectsData, undefined>;
  operationName: string;
}
export const getAllProjectsRef: GetAllProjectsRef;

export function getAllProjects(): QueryPromise<GetAllProjectsData, undefined>;
export function getAllProjects(dc: DataConnect): QueryPromise<GetAllProjectsData, undefined>;

