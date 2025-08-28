## PROJECTS README
## Q1 : What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer : getElementsById --> give one Element by id
         getElementsByClassName ---> gives a list by class
         querySelectorAll ---> gives all matches
         querySelector --> give the first match
## Q2: How do you create and insert a new element into the DOM?
Answer : documnet.createElement("tag") then appendChild()/append()
## Q3:What is Event Bubbling and how does it work?
Answer: Event Bubling means when you click a child element, the event first runs on that element
and then goes up step by step to its parrent elements;
## Q4: What is Event Delegation in JavaScript? Why is it useful?
Answer : Event Delegation means we put one event listener on a parrent and it
can handle events from its child elements too. 
this is usefull because we write less code and its work for new child elements added later.
## Q5:What is the difference between preventDefault() and stopPropagation() methods?
** Answer:preventDefault() --> stop browsers normal action
       stopPropagation()--> stop event going to parent

