export class developer {

    lastName?: string;
    firstName?: string;
    age?: number;
    gender?: string;
    bio?: string;
    skills?: string[];

    constructor(lastName: string, firstName: string, age: number, gender: string, bio: string) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.age = age;
        this.gender = gender;
        this.bio = bio;
        this.skills = [];
    }
};