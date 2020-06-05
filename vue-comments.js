// remember when testing .... 

// 1. If you get the error that the wrapper itself is undefined, this is probably not a mistake in the way the wrapper is created, but rather an error the mounting is running into while creating the wrapper, like in a method or created function. For example the Article Component being mounted without an actual article => error while parsing/displaying

// 2. Cannot read property 'bindings' of null
    // usually a problem of importing a function or something.