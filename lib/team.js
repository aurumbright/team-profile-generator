class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {

    }

    getId() {

    }

    getEmail() {

    }

    getRole() {
        return 'Employee';
    }
}

class Manager extends Employee {
    constructor(name, id, email) {
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

class Engineer extends Employee {
    constructor(name, id, email) {
        super(name, id, email);

        this.github = github;
    }

    getRole() {
        return 'Engineer';
    }

    getGithub() {

    }
}

class Intern extends Employee {
    constructor(name, id, email) {
        super(name, id, email);

        this.school = school;
    }

    getRole() {
        return 'Intern';
    }

    getSchool() {

    }
}


module.exports = {
    Employee, 
    Manager, 
    Engineer, 
    Intern
};
