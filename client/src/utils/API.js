import axios from "axios";

export default {
  // Gets all useers
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    console.log(userData)
    return axios.post("/api/users", userData);
  },
  
// Gets all buckets
getBuckets: function() {
  return axios.get("/api/buckets");
},
// Gets the user with the given id
getBucket: function(id) {
  return axios.get("/api/buckets/" + id);
},
// Deletes the user with the given id
deleteBucket: function(id) {
  return axios.delete("/api/buckets/" + id);
},
// Saves a user to the database
saveBucket: function(userData) {
  console.log(userData)
  return axios.post("/api/buckets", userData);
},


// Gets all comments
getComments: function() {
  return axios.get("/api/comments");
},
// Gets the user with the given id
getComment: function(id) {
  return axios.get("/api/comments/" + id);
},
// Deletes the user with the given id
deleteComment: function(id) {
  return axios.delete("/api/comments/" + id);
},
// Saves a user to the database
saveComment: function(userData) {
  console.log(userData)
  return axios.post("/api/comments", userData);
}

};
