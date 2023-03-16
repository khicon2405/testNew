export class ProfileResponse {
    public error_code: string;
    public error_message: string;
    public data?: any;

    constructor(field1?: Partial<ProfileResponse>) {
      if (field1) {
        Object.assign(this, field1);
      }
    }
  }

  export class ProfileRequest {
    public fullname: string;
    public phone: string;
    public language: string;

    constructor(field2?: Partial<ProfileRequest>) {
      if (field2) {
        Object.assign(this, field2);
      }
    }
  }


  export class ProfilePassword {
    public old_password: string;
    public new_password: string;

    constructor(field3?: Partial<ProfileRequest>) {
      if (field3) {
        Object.assign(this, field3);
      }
    }
  }

  export class Profile {
    public fullname: string;
    public user_id: string;
    public username: string;
    public phone: string;
    public email: string;
    public address: string;
    public role: string;
    public role_id: string;
    public status: string;
    public last_login: string;
    public created_date: string;
    public center_name: string;
    public center_id: string;
    public avatar: string;
    public language: string;

    constructor(field4?: Partial<ProfileRequest>) {
      if (field4) {
        Object.assign(this, field4);
      }
    }
  }



