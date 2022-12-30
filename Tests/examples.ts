import * as dotenv from "dotenv";

void dotenv.config();

function add(a: number, b: number)
{
 console.log(a + b);
}

void add(7, 7);

function sub(a: number, b: number)
{
 console.log(a - b);
}

void sub(10, 5);

// Whatever...

/**
 * @param {a} number
 * @param {b} number
 */
