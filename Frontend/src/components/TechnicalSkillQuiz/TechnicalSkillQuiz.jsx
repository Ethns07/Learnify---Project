// TechnicalSkillQuiz.jsx
// A production-grade React quiz component that meets every requirement.

import React, { useEffect, useState, useCallback } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./TechnicalSkillQuiz.css";

// ──────────────────────────────────────────────────────────────
// 1. DATA
// ──────────────────────────────────────────────────────────────
const QUIZ_DATA = [
  {
    id: 1,
    question: "Which HTTP method is idempotent by definition?",
    choices: ["PUT", "PATCH", "POST", "DELETE"],
    answer: "PUT",
    points: 10,
  },
  {
    id: 2,
    question: "What does CSS “box-sizing: border-box” do?",
    choices: [
      "Includes padding & border in the element’s width/height",
      "Resets all inherited styles",
      "Enables flexbox layout",
      "Adds a shadow around the element",
    ],
    answer: "Includes padding & border in the element’s width/height",
    points: 10,
  },
  {
    id: 3,
    question: "In React, what hook replaces componentDidMount?",
    choices: ["useEffect", "useState", "useReducer", "useRef"],
    answer: "useEffect",
    points: 10,
  },
  {
    id: 4,
    question: "Which SQL clause filters groups after aggregation?",
    choices: ["HAVING", "WHERE", "GROUP BY", "ORDER BY"],
    answer: "HAVING",
    points: 10,
  },
  {
    id: 5,
    question: "What is Big-O of accessing an array element by index?",
    choices: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    answer: "O(1)",
    points: 10,
  },
  {
    id: 6,
    question:
      "Which Git command undoes the last commit while keeping changes staged?",
    choices: [
      "git reset --soft HEAD~1",
      "git revert HEAD",
      "git reset --hard HEAD~1",
      "git checkout HEAD~1",
    ],
    answer: "git reset --soft HEAD~1",
    points: 10,
  },
];

const TOTAL_POINTS = QUIZ_DATA.reduce((sum, q) => sum + q.points, 0);
const PASS_THRESHOLD = 45; // %

// ──────────────────────────────────────────────────────────────
// 2. COMPONENT
// ──────────────────────────────────────────────────────────────
const TechnicalSkillQuiz = ({ onClose }) => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState(Array(QUIZ_DATA.length).fill(null));
  const [timeLeft, setTimeLeft] = useState(30);
  const [showResult, setShowResult] = useState(false);

  // ── Timer logic
  useEffect(() => {
    if (timeLeft === 0) {
      handleSubmit();
      return;
    }
    const id = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(id);
  }, [timeLeft]);

  // ── Handlers
  const selectAnswer = (choice) => {
    const newAnswers = [...answers];
    newAnswers[current] = choice;
    setAnswers(newAnswers);
  };

  const nextQuestion = useCallback(() => {
    if (current < QUIZ_DATA.length - 1) {
      setCurrent((c) => c + 1);
      setTimeLeft(35);
    } else {
      handleSubmit();
    }
  }, [current]);

  const handleSubmit = useCallback(() => {
    let earned = 0;
    QUIZ_DATA.forEach((q, idx) => {
      if (answers[idx] === q.answer) earned += q.points;
    });
    const percentage = ((earned / TOTAL_POINTS) * 100).toFixed(2);
    setShowResult({ earned, total: TOTAL_POINTS, percentage });
  }, [answers]);

  // ── UI
  if (showResult) {
    const passed = parseFloat(showResult.percentage) >= PASS_THRESHOLD;
    return (
      <div className="modal-overlay d-flex align-items-center justify-content-center">
        <div
          className="card shadow-lg text-center p-4"
          style={{ maxWidth: 450 }}
        >
          <div className="card-body">
            <h5 className="card-title mb-3">
              {passed ? "🎉 Enrollment Success!" : "📚 Keep Going!"}
            </h5>
            <p className="card-text">
              You scored <strong>{showResult.percentage}%</strong> (
              {showResult.earned}/{showResult.total} points).
            </p>
            <p className="fw-bold">
              {passed
                ? "Congrats, you have successfully enrolled"
                : "Sorry! your passing marks is less than 45%"}
            </p>

            {passed ? (
              " "
            ) : (
              <button className="btn btn-primary" onClick={onClose}>
                Close
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  const question = QUIZ_DATA[current];

  return (
    <div className="modal-overlay d-flex align-items-center justify-content-center">
      <div className="card shadow-lg w-100 mx-3" style={{ maxWidth: 600 }}>
        {/* Header */}
        <div className="card-header d-flex justify-content-between align-items-center">
          <span>
            Question {current + 1} of {QUIZ_DATA.length}
          </span>
          <span className="badge bg-danger">{timeLeft}s</span>
        </div>

        {/* Body */}
        <div className="card-body">
          <h5 className="card-title mb-3">{question.question}</h5>
          <div className="list-group">
            {question.choices.map((choice) => (
              <label
                key={choice}
                className={`list-group-item list-group-item-action d-flex align-items-center ${
                  answers[current] === choice ? "active" : ""
                }`}
              >
                <input
                  type="radio"
                  name={`q${question.id}`}
                  value={choice}
                  checked={answers[current] === choice}
                  onChange={() => selectAnswer(choice)}
                  className="form-check-input me-2"
                />
                {choice}
              </label>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="card-footer text-end">
          <button className="btn btn-primary" onClick={nextQuestion}>
            {current === QUIZ_DATA.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkillQuiz;
