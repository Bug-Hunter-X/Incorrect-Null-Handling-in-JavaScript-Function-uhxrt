# Incorrect Null Handling in JavaScript

This repository demonstrates a common JavaScript bug: improper handling of null values. The `foo` function adds two numbers.  However, if either input is null, the function returns null, which may not be the desired behavior.  A more robust solution would either return 0, throw an error, or handle null values in a more specific way depending on the use case.

## Bug
The original code incorrectly returns null when either parameter is null. This behavior might lead to unexpected results and potential errors in subsequent parts of the program.

## Solution
The solution offers more sophisticated ways to handle null values. The solution file demonstrates more appropriate ways to handle null or undefined values, such as returning 0 or throwing an exception for better error handling.
