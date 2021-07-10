import { Cat } from './models/Cat.mjs'

export const resolvers = {
    Query: {
        hello : () => 'hello',
        cat : () => Cat.find()
    },
    Mutation : {
        createCat : async(_, { name }) => {
            const kitty = new Cat({ name });
            await kitty.save()
            console.log(kitty)
            return kitty 
        }
    }
}
