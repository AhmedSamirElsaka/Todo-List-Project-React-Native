import Realm, { BSON } from "realm";

export type TaskModel = {
  id: string;
  title: string;
  status: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  isSynced: boolean;
};
export class Task extends Realm.Object<Task> {
  _id!: BSON.ObjectId;
  data!: TaskModel;
  static schema: Realm.ObjectSchema = {
    name: "Task",
    primaryKey: "_id",
    properties: {
      // This allows us to automatically generate a unique _id for each Item
      id: { type: "objectId", default: () => new BSON.ObjectId() },
      // All todo items will default to incomplete
      title: "string",
      status: "string",
      description: "string",
      createdAt: "date",
      updatedAt: "date",
    },
  };
}
