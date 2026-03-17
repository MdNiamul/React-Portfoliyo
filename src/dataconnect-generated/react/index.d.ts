import { CreateNewUserData, CreateNewUserVariables, GetMyProjectsData, CreateNewTaskData, CreateNewTaskVariables, GetAllProjectsData } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateNewUser(options?: useDataConnectMutationOptions<CreateNewUserData, FirebaseError, CreateNewUserVariables>): UseDataConnectMutationResult<CreateNewUserData, CreateNewUserVariables>;
export function useCreateNewUser(dc: DataConnect, options?: useDataConnectMutationOptions<CreateNewUserData, FirebaseError, CreateNewUserVariables>): UseDataConnectMutationResult<CreateNewUserData, CreateNewUserVariables>;

export function useGetMyProjects(options?: useDataConnectQueryOptions<GetMyProjectsData>): UseDataConnectQueryResult<GetMyProjectsData, undefined>;
export function useGetMyProjects(dc: DataConnect, options?: useDataConnectQueryOptions<GetMyProjectsData>): UseDataConnectQueryResult<GetMyProjectsData, undefined>;

export function useCreateNewTask(options?: useDataConnectMutationOptions<CreateNewTaskData, FirebaseError, CreateNewTaskVariables>): UseDataConnectMutationResult<CreateNewTaskData, CreateNewTaskVariables>;
export function useCreateNewTask(dc: DataConnect, options?: useDataConnectMutationOptions<CreateNewTaskData, FirebaseError, CreateNewTaskVariables>): UseDataConnectMutationResult<CreateNewTaskData, CreateNewTaskVariables>;

export function useGetAllProjects(options?: useDataConnectQueryOptions<GetAllProjectsData>): UseDataConnectQueryResult<GetAllProjectsData, undefined>;
export function useGetAllProjects(dc: DataConnect, options?: useDataConnectQueryOptions<GetAllProjectsData>): UseDataConnectQueryResult<GetAllProjectsData, undefined>;
