import { main } from "../src/main";
import {describe, expect, test} from '@jest/globals';

describe('Test case 1', () => {
    test('Breakfast 1,2,3', () => {
        expect(main("Breakfast 1,2,3")).toBe("Eggs, Toast, Coffee");
    });
});

describe('Test case 2', () => {
    test('Breakfast 2,3,1', () => {
        expect(main("Breakfast 2,3,1")).toBe("Eggs, Toast, Coffee");
    });
});

describe('Test case 3', () => {
    test('Breakfast 1,2,3,3,3', () => {
        expect(main("Breakfast 1,2,3,3,3")).toBe("Eggs, Toast, Coffee(3)");
    });
});

describe('Test case 4', () => {
    test('Breakfast 1', () => {
        expect(main("Breakfast 1")).toBe("Unable to process: Side is missing");
    });
});

describe('Test case 5', () => {
    test('Lunch 1,2,3', () => {
        expect(main("Lunch 1,2,3")).toBe("Sandwich, Chips, Soda");
    });
});

describe('Test case 6', () => {
    test('Lunch 1,2', () => {
        expect(main("Lunch 1,2")).toBe("Sandwich, Chips, Water");
    });
});

describe('Test case 7', () => {
    test('Lunch 1,1,2,3', () => {
        expect(main("Lunch 1,1,2,3")).toBe("Unable to process: Sandwich cannot be ordered more than once");
    });
});

describe('Test case 8', () => {
    test('Lunch 1,2,2', () => {
        expect(main("Lunch 1,2,2")).toBe("Sandwich, Chips(2), Water");
    });
});

describe('Test case 9', () => {
    test('Lunch', () => {
        expect(main("Lunch")).toBe("Unable to process: Main is missing, Side is missing");
    });
});

describe('Test case 10', () => {
    test('Dinner 1,2,3,4', () => {
        expect(main("Dinner 1,2,3,4")).toBe("Steak, Potatoes, Wine, Water, Cake");
    });
});

describe('Test case 11', () => {
    test('Dinner 1,2,3', () => {
        expect(main("Dinner 1,2,3")).toBe("Unable to process: Dessert is missing");
    });
});

describe('Test case 12', () => {
    test('Brunch 1,2,3', () => {
        expect(main("Brunch 1,2,3")).toBe("Wrong Meal Type");
    });
});