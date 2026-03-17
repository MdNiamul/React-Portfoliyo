# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetMyProjects*](#getmyprojects)
  - [*GetAllProjects*](#getallprojects)
- [**Mutations**](#mutations)
  - [*CreateNewUser*](#createnewuser)
  - [*CreateNewTask*](#createnewtask)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetMyProjects
You can execute the `GetMyProjects` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getMyProjects(): QueryPromise<GetMyProjectsData, undefined>;

interface GetMyProjectsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMyProjectsData, undefined>;
}
export const getMyProjectsRef: GetMyProjectsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getMyProjects(dc: DataConnect): QueryPromise<GetMyProjectsData, undefined>;

interface GetMyProjectsRef {
  ...
  (dc: DataConnect): QueryRef<GetMyProjectsData, undefined>;
}
export const getMyProjectsRef: GetMyProjectsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getMyProjectsRef:
```typescript
const name = getMyProjectsRef.operationName;
console.log(name);
```

### Variables
The `GetMyProjects` query has no variables.
### Return Type
Recall that executing the `GetMyProjects` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetMyProjectsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetMyProjectsData {
  projects: ({
    id: UUIDString;
    name: string;
    description?: string | null;
    dueDate?: DateString | null;
    createdAt: TimestampString;
  } & Project_Key)[];
}
```
### Using `GetMyProjects`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getMyProjects } from '@dataconnect/generated';


// Call the `getMyProjects()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getMyProjects();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getMyProjects(dataConnect);

console.log(data.projects);

// Or, you can use the `Promise` API.
getMyProjects().then((response) => {
  const data = response.data;
  console.log(data.projects);
});
```

### Using `GetMyProjects`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getMyProjectsRef } from '@dataconnect/generated';


// Call the `getMyProjectsRef()` function to get a reference to the query.
const ref = getMyProjectsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getMyProjectsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.projects);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.projects);
});
```

## GetAllProjects
You can execute the `GetAllProjects` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getAllProjects(): QueryPromise<GetAllProjectsData, undefined>;

interface GetAllProjectsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetAllProjectsData, undefined>;
}
export const getAllProjectsRef: GetAllProjectsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getAllProjects(dc: DataConnect): QueryPromise<GetAllProjectsData, undefined>;

interface GetAllProjectsRef {
  ...
  (dc: DataConnect): QueryRef<GetAllProjectsData, undefined>;
}
export const getAllProjectsRef: GetAllProjectsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getAllProjectsRef:
```typescript
const name = getAllProjectsRef.operationName;
console.log(name);
```

### Variables
The `GetAllProjects` query has no variables.
### Return Type
Recall that executing the `GetAllProjects` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetAllProjectsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetAllProjects`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getAllProjects } from '@dataconnect/generated';


// Call the `getAllProjects()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getAllProjects();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getAllProjects(dataConnect);

console.log(data.projects);

// Or, you can use the `Promise` API.
getAllProjects().then((response) => {
  const data = response.data;
  console.log(data.projects);
});
```

### Using `GetAllProjects`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getAllProjectsRef } from '@dataconnect/generated';


// Call the `getAllProjectsRef()` function to get a reference to the query.
const ref = getAllProjectsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getAllProjectsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.projects);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.projects);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateNewUser
You can execute the `CreateNewUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createNewUser(vars: CreateNewUserVariables): MutationPromise<CreateNewUserData, CreateNewUserVariables>;

interface CreateNewUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateNewUserVariables): MutationRef<CreateNewUserData, CreateNewUserVariables>;
}
export const createNewUserRef: CreateNewUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createNewUser(dc: DataConnect, vars: CreateNewUserVariables): MutationPromise<CreateNewUserData, CreateNewUserVariables>;

interface CreateNewUserRef {
  ...
  (dc: DataConnect, vars: CreateNewUserVariables): MutationRef<CreateNewUserData, CreateNewUserVariables>;
}
export const createNewUserRef: CreateNewUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createNewUserRef:
```typescript
const name = createNewUserRef.operationName;
console.log(name);
```

### Variables
The `CreateNewUser` mutation requires an argument of type `CreateNewUserVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateNewUserVariables {
  username: string;
  email?: string | null;
}
```
### Return Type
Recall that executing the `CreateNewUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateNewUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateNewUserData {
  user_insert: User_Key;
}
```
### Using `CreateNewUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createNewUser, CreateNewUserVariables } from '@dataconnect/generated';

// The `CreateNewUser` mutation requires an argument of type `CreateNewUserVariables`:
const createNewUserVars: CreateNewUserVariables = {
  username: ..., 
  email: ..., // optional
};

// Call the `createNewUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createNewUser(createNewUserVars);
// Variables can be defined inline as well.
const { data } = await createNewUser({ username: ..., email: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createNewUser(dataConnect, createNewUserVars);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
createNewUser(createNewUserVars).then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

### Using `CreateNewUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createNewUserRef, CreateNewUserVariables } from '@dataconnect/generated';

// The `CreateNewUser` mutation requires an argument of type `CreateNewUserVariables`:
const createNewUserVars: CreateNewUserVariables = {
  username: ..., 
  email: ..., // optional
};

// Call the `createNewUserRef()` function to get a reference to the mutation.
const ref = createNewUserRef(createNewUserVars);
// Variables can be defined inline as well.
const ref = createNewUserRef({ username: ..., email: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createNewUserRef(dataConnect, createNewUserVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

## CreateNewTask
You can execute the `CreateNewTask` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createNewTask(vars: CreateNewTaskVariables): MutationPromise<CreateNewTaskData, CreateNewTaskVariables>;

interface CreateNewTaskRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateNewTaskVariables): MutationRef<CreateNewTaskData, CreateNewTaskVariables>;
}
export const createNewTaskRef: CreateNewTaskRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createNewTask(dc: DataConnect, vars: CreateNewTaskVariables): MutationPromise<CreateNewTaskData, CreateNewTaskVariables>;

interface CreateNewTaskRef {
  ...
  (dc: DataConnect, vars: CreateNewTaskVariables): MutationRef<CreateNewTaskData, CreateNewTaskVariables>;
}
export const createNewTaskRef: CreateNewTaskRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createNewTaskRef:
```typescript
const name = createNewTaskRef.operationName;
console.log(name);
```

### Variables
The `CreateNewTask` mutation requires an argument of type `CreateNewTaskVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateNewTaskVariables {
  title: string;
  status: string;
  description?: string | null;
  dueDate?: DateString | null;
  priority?: string | null;
  projectId?: UUIDString | null;
}
```
### Return Type
Recall that executing the `CreateNewTask` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateNewTaskData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateNewTaskData {
  task_insert: Task_Key;
}
```
### Using `CreateNewTask`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createNewTask, CreateNewTaskVariables } from '@dataconnect/generated';

// The `CreateNewTask` mutation requires an argument of type `CreateNewTaskVariables`:
const createNewTaskVars: CreateNewTaskVariables = {
  title: ..., 
  status: ..., 
  description: ..., // optional
  dueDate: ..., // optional
  priority: ..., // optional
  projectId: ..., // optional
};

// Call the `createNewTask()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createNewTask(createNewTaskVars);
// Variables can be defined inline as well.
const { data } = await createNewTask({ title: ..., status: ..., description: ..., dueDate: ..., priority: ..., projectId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createNewTask(dataConnect, createNewTaskVars);

console.log(data.task_insert);

// Or, you can use the `Promise` API.
createNewTask(createNewTaskVars).then((response) => {
  const data = response.data;
  console.log(data.task_insert);
});
```

### Using `CreateNewTask`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createNewTaskRef, CreateNewTaskVariables } from '@dataconnect/generated';

// The `CreateNewTask` mutation requires an argument of type `CreateNewTaskVariables`:
const createNewTaskVars: CreateNewTaskVariables = {
  title: ..., 
  status: ..., 
  description: ..., // optional
  dueDate: ..., // optional
  priority: ..., // optional
  projectId: ..., // optional
};

// Call the `createNewTaskRef()` function to get a reference to the mutation.
const ref = createNewTaskRef(createNewTaskVars);
// Variables can be defined inline as well.
const ref = createNewTaskRef({ title: ..., status: ..., description: ..., dueDate: ..., priority: ..., projectId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createNewTaskRef(dataConnect, createNewTaskVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.task_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.task_insert);
});
```

