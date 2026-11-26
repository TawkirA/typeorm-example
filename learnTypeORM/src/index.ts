import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import 'reflect-metadata';
import { createConnection } from "typeorm";
import { Student } from './entity/Student';

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const user = new User()
    user.firstName = "Timber"
    user.lastName = "Saw"
    user.age = 25
    // await AppDataSource.manager.save(user)
    console.log("Saved a new user with id: " + user.id)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    console.log("Loaded users: ", users)

    const stud = new Student();
    stud.name = "Student1";
    stud.age = 12;

    await AppDataSource.manager.save(stud);

    const students = await AppDataSource.manager.find(Student);

    console.log('Students are ', students);

    console.log("Here you can setup and run express / fastify / any other framework.")

    // const connection = await createConnection({ type: 'mysql', 
    //     url: 'localhost:3306/typeorm' 
    // })

    // console.log('CoNN', connection);

}).catch(error => console.log(error))


