export class User {
  id?: string;
  name?: string;
  location?: string;
  phone?: string;
  image?: string;
  email?: string;
  about?: string;
  last_login?: string;
  updated_at?: string;
  created_at?: string;
  status?: string;
  password?: string;


  constructor(id?: string, name?: string, location?: string, phone?: string, image?: string, email?: string, about?: string, last_login?: string, updated_at?: string, created_at?: string, status?: string, password?: string) {
    this.id = id;
    this.name = name;
    this.location = location;
    this.phone = phone;
    this.image = image;
    this.email = email;
    this.about = about;
    this.last_login = last_login;
    this.updated_at = updated_at;
    this.created_at = created_at;
    this.status = status;
    this.password = password;
  }
}
