import { Db, MongoClient, ObjectID } from 'mongodb';
import { Project, User } from '../types';

let db: Db | undefined;
export class DbService {
  static async connect() {
    return new Promise<void>((res, rej) => {
      const client = new MongoClient(
        'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false'
      );
      client.connect((err) => {
        if (err) {
          rej(err);
        } else {
          db = client.db('taskia');
          console.log('💾  Database ready');
          res();
        }
      });
    });
  }

  static async newUser(email: string, name: string) {
    await DbService.getDb()
      .collection('users')
      .insertOne({ name, email })
      .then((res) =>
        DbService.getDb()
          .collection('projects')
          .insertOne({ name: 'Default', participants: [res.insertedId] })
      );
  }

  static async getUserByEmail(email: string): Promise<User | null> {
    return DbService.getDb()
      .collection('users')
      .findOne({ email }, { timeout: true });
  }

  static async newTask(name: string, project: string) {
    await DbService.getDb()
      .collection('projects')
      .findOneAndUpdate(
        {
          name: project,
          participants: { $in: [new ObjectID('60cb12f36beab172c216a1d0')] },
        },
        {
          $push: {
            tasks: { name: name, completed: false },
          },
        },
        { upsert: true }
      );
  }

  static async newProject(name: string) {
    await DbService.getDb().collection('projects').insertOne({ name });
  }

  static async getAllProjectsForUser(
    userId: string
  ): Promise<Project[] | null> {
    return DbService.getDb()
      .collection('projects')
      .find({
        participants: { $in: [new ObjectID(userId)] },
      })
      .toArray();
  }

  static async getProject(projectId: string): Promise<any> {
    return await DbService.getDb()
      .collection('projects')
      .findOne({
        _id: new ObjectID(projectId),
      });
  }

  private static getDb(): Db {
    if (!db) {
      throw new Error("Can't get db");
    } else {
      return db;
    }
  }
}
