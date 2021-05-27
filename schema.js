const axios = require("axios");

const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema,
  GraphQLNonNull,
} = require("graphql");

const LaunchType = new GraphQLObjectType({
  name: "Launch",
  fields: () => ({
    flight_number: { type: GraphQLInt },
    mission_name: { type: GraphQLString },
    launch_year: { type: GraphQLString },
    launch_date_local: { type: GraphQLString },
    launch_success: { type: GraphQLBoolean },
    rocket: { type: RocketType },
  }),
});

// Rocket Type
const RocketType = new GraphQLObjectType({
  name: "Rocket",
  fields: () => ({
    rocket_id: { type: GraphQLString },
    rocket_name: { type: GraphQLString },
    rocket_type: { type: GraphQLString },
  }),
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    launches: {
      type: new GraphQLList(LaunchType),
      resolve(parent, args) {
        return axios
          .get("https://api.spacexdata.com/v3/launches")
          .then((res) => res.data);
      },
    },
    launch: {
      type: LaunchType,
      args: {
        flight_number: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return axios
          .get(`https://api.spacexdata.com/v3/launches/${args.flight_number}`)
          .then((res) => res.data);
      },
    },
    rockets: {
      type: new GraphQLList(RocketType),
      resolve(parent, args) {
        return axios
          .get("https://api.spacexdata.com/v3/rockets")
          .then((res) => res.data);
      },
    },
    rocket: {
      type: RocketType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return axios
          .get(`https://api.spacexdata.com/v3/rockets/${args.id}`)
          .then((res) => res.data);
      },
    },
  },
});
//Mutation
// const mutation = new GraphQLObjectType({
//   name: "Mutation",
//   fields: {
//     addLunches: {
//       type: LaunchType,
//       args: {
//         flight_number: { type: new GraphQLNonNull(GraphQLInt) },
//         mission_name: { type: new GraphQLNonNull(GraphQLString) },
//         launch_year: { type: new GraphQLNonNull(GraphQLString) },
//         launch_date_local: { type: new GraphQLNonNull(GraphQLString) },
//         launch_success: { type: new GraphQLNonNull(GraphQLBoolean) },
//         rocket: {
//           type: RocketType,
//           args: {
//             rocket_id: { type: new GraphQLNonNull(GraphQLString) },
//             rocket_name: { type: new GraphQLNonNull(GraphQLString) },
//             rocket_type: { type: new GraphQLNonNull(GraphQLString) },
//           },
//         },
//       },
//       resolve(parentValue, args) {
//         return axios
//           .post("https://api.spacexdata.com/v3/launches", {
//             flight_number: args.flight_number,
//             mission_name: args.mission_name,
//             launch_year: args.launch_year,
//             launch_date_local: args.launch_date_local,
//             launch_success: args.launch_success,
//             rocket: {
//               rocket_id: args.rocket_id,
//               rocket_name: args.rocket_name,
//               rocket_type: args.rocket_type,
//             },
//           })
//           .then((res) => res.data);
//       },
//     },
//   },
// });

module.exports = new GraphQLSchema({
  query: RootQuery,
});
