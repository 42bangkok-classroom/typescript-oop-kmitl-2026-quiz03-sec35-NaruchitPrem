export class Person {
    firstname: string = '';
    lastname: string = '';

    private age: number = 0;

    static COUNTRY: string = 'THAILAND';

    setAge(age: number): number {
        this.age = age;
        return 0;
    }

    getAge(): number {
        return this.age;
    }

    getFullName(): string  {
        return `${this.firstname} ${this.lastname}`;
    }
}