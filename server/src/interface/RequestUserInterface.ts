interface RequestUserInterface {
  _id: string;
  name: string;
  email: string;
  password?: string;
  isAdmin?: boolean;
}

export default RequestUserInterface;
