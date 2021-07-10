import express  from'express';
import { ApolloServer,gql } from 'apollo-server-express';
import {resolvers} from './resolvers.mjs'
import {typeDefs}  from './typeDefs.mjs'
import mongoose from "mongoose";


const startServer  = async() => {
    const app = express();

    const server = new ApolloServer({
        typeDefs,
        resolvers,
      });

    server.applyMiddleware({ app });

    await mongoose.connect('mongodb://localhost:27017/test3', {useNewUrlParser: true, useUnifiedTopology: true});
    
    app.listen({ port: 4000 } ,() => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`))

}
startServer()
