import { Request, Response } from "express";
import * as authService from "../services/authService";
import { TypeUserData } from "../types/UserTypes";

export async function createController(req: Request, res: Response) {
  const data: TypeUserData = req.body;
  await authService.createAdmin(data);
  res.sendStatus(201);
}

export async function authAdmin(req: Request, res: Response) {
  const { email, password, code } = req.body;
  const token = await authService.loginAdmin(email, password, code);
  res.status(200).send({ token });
}

export async function teste(req: Request, res: Response) {
  res.status(200).send("Ok deu bom");
}