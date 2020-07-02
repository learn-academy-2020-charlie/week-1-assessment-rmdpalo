# ASSESSMENT 1: Tech Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.   

1. What is a function? Why would you use one?

  Your answer: A function is a block of code that is used to perform a specific task.

  Researched answer: Functions are one of the fundamental building blocks in JS. It is a set of statements that performs a certain task or calculates values.



2. What is the difference between map and filter?

  Your answer: map iterates through each element of the array and returns the results in a new array. For filter, you must meed a certain condition to be added in to the returned, new array.

  Researched answer:
  -map returns a new array where a function has been applied to its elements.
  -filter will return a new array that contains the original values of the original array that meet a certain condition specified.



3. What is the difference between map/filter and a for loop?

  Your answer: map/filter are used for higher-order functions and are used exclusively for arrays. For loops we can use it for other data types, such as numbers.

  Researched answer: Honestly it was hard to find a definitive answer, but an article I read listed these as advantages of the higher-order functions over the for loop:
  -true iteration: you know that every element of the array is going to be iterated in the correct order
  -Immutability: the original array will be unaffected because it creates a new array.
  -map/filter are more specific while for loops are more general and would require more scrutiny in relation to the rest of the code.



4. What is the difference between console.log() and return?

  Your answer: console.log() can be used as a debugging tool to check if our logic is working, and this typically can't be seen on the user's end but on the console in the browser. Return gives back the result of a function as a usable value.

  Researched answer: return is a statement that allows a function to output a value back to where it was called. console log lets us inspect values for debugging purposes, and it immediately prints on the next line before it goes through the rest of your code.



5. In regards to functions, what is an argument?

  Your answer: a variable that is entered to be put through the logic inside the function.

  Researched answer: The parameters in a function call. In JS the arguments are passed by value: The function only gets to know the values, not the argument's locations. Changes to arguments are not reflected outside of the function.



6. Give a brief description of proper pair programming techniques. What are the roles of each person?

  Your answer: 
  brief proper pair programming techniques:
  -clear and open communication
  -both navigator and driver are engaged in the task, and must understand the how and why

  Roles:
  -Navigator
    -Looking miles ahead, macro perspective
    -will look ahead to see if code will conflict with future tasks
    -catch simple errors, bugs, and typos
  
  -Driver
    -Looking at what's directly around, micro perspective
    -using the editor
    -physically typing the code.

  Researched answer:
  Pair programmers keep each other on task. 
  Take initiative when their partner is stuck, lowering frustration.
  Take Breaks!

  "Strong Style" Pairing
  -The navigator gets to make all the decisions. When the driver needs/wants to contribute an idea, they must relinquish the keyboard. 
  -the driver does nothing that the reviewer did not direct them to. *"For an idea to go from your head to the computer it **must** go through someone else's hands." -LLewellyn Falco*
  (the argument for this is that it keeps the navigator engaged.
  example:
  "Many times I've observed where the driver says 'just a minute, I've got an idea' and keeps on working, the navigator goes on to check their social media or do some other irrelevant task.")

"Ping Pong" Pairing
-partner 1 starts off driving until they write a failing test and then hands off the keyboard to partner 2
-partner 2 makes that test pass, moves on until he writes the next failing test, and transfers the keyboard back to partner 1.
-repeat this process.



7. What is something we did in class this week you found helpful?  

  Your answer: I thought that learning about github and git was super helpful. It makes sharing work and keeping track of changes in code a lot easier, when I was trying to learn by myself there were only brief explanations on what github was, it was also very difficult if not impossible to completely grasp how to use it without being in a group setting.

  relative to learning by yourself alone, it's much more engaging and it's harder to get bored or get distracted. And having someone there to guide you is very helpful and efficient than just repeatedly running into a wall with your eyes closed until you eventually find the doorway.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

- Jest - 
From their website it seems that Jest is a     framework to make sure that your JS codebase is correct. It has a lot of features that make testing a lot easier.

- Class inheritance -
It is a way for us to extend a class with another class, expanding the functionality that we can apply on top of the existing one.

- React - 
React is a component-based JS library that will allow us to create interactive UI's. React components use a render() method that takes input data and returns what to display. 

- Yarn - 
Yarn is a package manager that doubles down as a project manager. You can organize your projects into sub components that are kept within a single repository. Yarn is open-source and not tied to a company. 

- React State - 
I honestly couldn't comprehend what I was reading but I think React State but I think it has to do with updating a component's state within the React library.

- this -
In Javascript "this" is a keyword that refers to the object that it belongs to. I think it has to do with DOM manipulation or OOP because it refers to an object. It can be used on methods like call() and apply().