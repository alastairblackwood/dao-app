import react from "react";

const userLogin = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      if (email === "test@test.com" && password === "password") {
        resolve();
      } else {
        reject();
      }
    }, 3000);
  });
};

export default userLogin;
