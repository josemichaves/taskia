import { gql } from 'apollo-server';

export const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    email: String!
  }

  type Task {
    name: String!
    completed: Boolean
  }

  type Project {
    _id: ID!
    name: String!
    participants: [ID]
    tasks: [Task]
  }

  type GenericResponse {
    ok: Boolean!
    err: String
  }

  type Query {
    getUserByEmail(email: String!): User
    getProjectById(projectId: String!): Project
    getAllUserProjects(userId: String!): [Project!]
  }

  type Mutation {
    signup(email: String!, name: String!): GenericResponse!
    newTask(taskName: String!, projectId: String!): GenericResponse!
    newProject(projectName: String!, userId: String!): GenericResponse!
  }
`;