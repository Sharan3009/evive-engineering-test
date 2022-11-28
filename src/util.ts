import fs from "fs";
import { MealData } from "./Interface/MealData";

export const readJSON = (path:string):MealData => {
    let jsonStr:string = fs.readFileSync(path, "utf8");
    return JSON.parse(jsonStr);
}