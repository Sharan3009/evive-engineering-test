import { Item } from "./Item";

export interface MealData {
    Breakfast: Map<number,Item>;
    Lunch: Map<number,Item>;
    Dinner: Map<number,Item>;
}