import { Request, Response } from "express";
import { getAllUsers, handleCreateUser } from "../services/user.service";

const getHomePage = async (req: Request, res: Response) => {
    //get users
    const users = await getAllUsers();
    console.log("check users:", users);
    return res.render("home", {
        name: users,
    });
};

const getCreateUserPage = (req: Request, res: Response) => {
    return res.render("create-user");
};

const postCreateUser = (req: Request, res: Response) => {
    const { fullname, email, address } = req.body;

    //handle create user
    handleCreateUser(fullname, email, address);

    return res.redirect("/");
};

export { getHomePage, getCreateUserPage, postCreateUser };
