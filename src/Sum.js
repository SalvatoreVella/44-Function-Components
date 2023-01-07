import React, {useState} from "react";

export default function Sum({numbers}) {
    return <h1>The sum is: {numbers.reduce((prev, curr) => prev + curr, 0)}</h1>
}