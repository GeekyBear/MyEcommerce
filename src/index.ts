import { AppDataSource } from "./data-source"
import { Name } from "./entity/Name"
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const user = new User()
    user.email = "chainsawman42@gmail.com"
    user.password = "123456"
    user.tokens = ["accessToken", "refreshToken"]

    const name = new Name();
    name.first = "Chainsaw"
    name.last = "Man"

    user.name = name

    await AppDataSource.manager.save(user)
    console.log("Saved a new user with id: " + user.id)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    console.log("Loaded users: ", users)

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
