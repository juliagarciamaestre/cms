export class Contact {
    public id: number;
    public name: string;
    public email: string;
    public phone: string;
    public imageUrl: string;
    public group: [];

    constructor(id: number, name: string,  email: string, phone: string, imageUrl: string, group: []){
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.imageUrl = imageUrl;
        this.group = group;
    }
}