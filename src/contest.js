export const jsQuiz = {

questions : [
  {
    question: "C++ uses which approach ?",
    choices: [
      "right-left",
      "top-down",
      "left-right",
      "bottom-up",
    ],
    type: "MCQ",
    correctanswer: "bottom-up",
  },
   {
    question: "Which of the following data type is supported in C++ but not in C ?",
    choices: [
      "int",
      "bool",
      "double",
      "float",
    ],
    type: "MCQ",
    correctanswer: "bool",
  },
   {
    question: "Which of the following is a linear data structure?",
    choices: [
      "Array",
      "AVL Trees",
      "Binary Tree",
      "Graph",
    ],
    type: "MCQ",
    correctanswer: "Array",
  },
  {
    question: "Which of the following is not the type of queue?",
    choices: [
      "Priority Queue",
      "Singled-Ended Queue",
      "Circular-Queue",
      "Ordinaey Queue",
    ],
    type: "MCQ",
    correctanswer: "Singled-Ended Queue",
  },
    {
    question: "When a pop() operation is called on an empty queue, what is the condition called?",
    choices: [
      "Overflow",
      "Underflow",
      "Syntax-Error",
      "Garbage Value",
    ],
    type: "MCQ",
    correctanswer: "Underflow",
  }
]
};


export const resultinitialstate = {
  score: 0,
  correctanswer: 0,
  wronganswer: 0
};
