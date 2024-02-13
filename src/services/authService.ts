import jwt from "jsonwebtoken";
import * as authRepository from "../repositories/authRepository";
import { TypeUserData } from "../types/UserTypes";
import { comparePassword, hashPassword } from "../utils/encryptUtils";
import { conflictError, unauthorizedError } from "./../utils/errorUtils";

export async function createAdmin(data: TypeUserData) {
  const userExists = await authRepository.findUserName(data.name);
  if (userExists) throw conflictError("Username exists");
  const emailExists = await authRepository.findEmail(data.email);
  if (emailExists) throw conflictError("Email exists");
  const passwordCrypt = hashPassword(data.password);

  const newData = { ...data, password: passwordCrypt };

  await authRepository.insert(newData);
}

export async function loginAdmin(
  email: string,
  password: string,
  code: number
) {
  const userExists = await authRepository.findEmail(email);
  if (!userExists)
    throw unauthorizedError("User or password or credential wrong");
  const passwordMatch = await comparePassword(password, userExists.password);
  if (!passwordMatch)
    throw unauthorizedError("User or password or credential wrong");

  const token = jwt.sign(
    { userId: userExists.id },
    `${process.env.JWT_SECRET}`,
    {
      expiresIn: 60 * 60,
    }
  );

  return token;
}

export async function getByUserId(id: string) {
  const user = await authRepository.findUserById(id);
  return user;
}