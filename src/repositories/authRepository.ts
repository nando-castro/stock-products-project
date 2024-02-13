import client from "../databases/database";
import { TypeUserData } from "../types/UserTypes";

export async function insert(data: TypeUserData) {
  await client.user.create({ data });
}

export async function findUserName(name: string) {
  const rows = await client.user.findFirst({ where: { name } });
  return rows;
}

export async function findEmail(email: string) {
  const rows = await client.user.findFirst({ where: { email } });
  return rows;
}

export async function findUserById(id: string) {
  const rows = await client.user.findUnique({ where: { id } });
  return rows;
}