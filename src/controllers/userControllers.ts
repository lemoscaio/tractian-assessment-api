import { Request, Response } from "express"

import * as userService from "@services/userService"

export async function getUserInfo(req: Request, res: Response) {
  const { email: userEmail }: { email: string } = res.locals.user

  const user = await userService.getUserInfo(userEmail)

  res.send(user)
}
