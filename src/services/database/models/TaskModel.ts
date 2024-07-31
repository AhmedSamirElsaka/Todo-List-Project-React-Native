// import { useRealm } from "../index";
import { BSON } from "realm";
// import { useQuery } from "@realm/react";
// import { useRealm } from "@realm/react";
import { useUser, useRealm, useQuery } from "@realm/react";
import Realm from "realm";
import React, { useCallback, useState, useEffect } from "react";
// import  Task  from "./schemas/TaskSchema";
// import { TaskModel } from "./schemas/TaskSchema";
import { Task } from "../schemas/TaskSchema";
import { TaskModel } from "../schemas/TaskSchema";

// const realm = useRealm();

// export const getItems = () => {
//   return useQuery<Task>(Task).sorted("_id");
// };

// export const createItem = useCallback(
//   ({
//     id,
//     title,
//     status,
//     description,
//     createdAt = new Date().toString(),
//     updatedAt = new Date().toString(),
//   }: TaskModel) => {
//     // if the realm exists, create an Item
//     realm.write(() => {
//       //   console.log(dataExplorerMessage);
//       return new Task(realm, {
//         data: {
//           id,
//           title,
//           status,
//           description,
//           createdAt,
//           updatedAt,
//           isSynced: false,
//         },
//       });
//     });
//   },
//   [realm]
// );

// // deleteItem() deletes an Item with a particular _id
// export const deleteItem = useCallback(
//   (id: BSON.ObjectId) => {
//     // if the realm exists, get the Item with a particular _id and delete it
//     const item = realm.objectForPrimaryKey(Task, id); // search for a realm object with a primary key that is an objectId
//     if (item) {
//       if (item._id !== id) {
//         // Alert.alert("You can't delete someone else's task!");
//       } else {
//         realm.write(() => {
//           realm.delete(item);
//         });
//         // console.log(dataExplorerMessage);
//       }
//     }
//   },
//   [realm]
// );
// // toggleItemIsComplete() updates an Item with a particular _id to be 'completed'
// export const toggleItemIsComplete = useCallback(
//   (id: BSON.ObjectId) => {
//     // if the realm exists, get the Item with a particular _id and update it's 'isCompleted' field
//     const item = realm.objectForPrimaryKey(Task, id); // search for a realm object with a primary key that is an objectId
//     if (item) {
//       if (item._id !== id) {
//         // Alert.alert("You can't modify someone else's task!");
//       } else {
//         realm.write(() => {
//           item.data.status = "done";
//         });
//         // console.log(dataExplorerMessage);
//       }
//     }
//   },
//   [realm]
// );
// export const toggleItemnotComplete = useCallback(
//   (id: BSON.ObjectId) => {
//     // if the realm exists, get the Item with a particular _id and update it's 'isCompleted' field
//     const item = realm.objectForPrimaryKey(Task, id); // search for a realm object with a primary key that is an objectId
//     if (item) {
//       if (item._id !== id) {
//         // Alert.alert("You can't modify someone else's task!");
//       } else {
//         realm.write(() => {
//           item.data.status = "todo";
//         });
//         // console.log(dataExplorerMessage);
//       }
//     }
//   },
//   [realm]
// );
