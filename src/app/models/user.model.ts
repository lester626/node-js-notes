export class User {
  id?: string;
  name?: string;
  location?: string;
  phone?: string;
  image?: string;
  email?: string;
  about?: string;
  last_login?: string;
  update_at?: string;
  create_at?: string
  status?: string;
  password?: string;


  constructor(id?: string, name?: string, location?: string, phone?: string, image?: string, email?: string, about?: string, last_login?: string, update_at?: string, create_at?: string, status?: string, password?: string) {
    this.id = id;
    this.name = name;
    this.location = location;
    this.phone = phone;
    this.image = image;
    this.email = email;
    this.about = about;
    this.last_login = last_login;
    this.update_at = update_at;
    this.create_at = create_at;
    this.status = status;
    this.password = password;
  }
}
