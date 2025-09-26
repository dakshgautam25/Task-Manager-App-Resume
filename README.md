1. Problem Statement

“In day-to-day life, we often need to manage our tasks, such as to-dos or reminders. A common problem is that many people rely on writing things down or remembering them mentally, which is not efficient. I wanted to build a simple Task Manager web app where users can add, delete, and mark tasks as completed, with the ability to switch themes for better user experience. Another important requirement was to make sure tasks don’t disappear on page reload.”

🔹 2. Tech Stack Used

Frontend Framework: React

Styling: Tailwind CSS (for responsive UI)

State Management: Context API (to avoid prop drilling and manage global state)

Persistence: localStorage (to store tasks across browser sessions)

Tooling: Vite (for fast development environment and bundling)

🔹 3. Features

Add, delete, and toggle (mark complete/incomplete) tasks

Global state management with Context API → ensures data is shared across components easily

Light/Dark theme toggle → enhances user experience and accessibility

Data persistence with localStorage → tasks remain even after refreshing the page

Fully responsive UI built with Tailwind CSS

🔹 4. My Approach

Component Breakdown – I divided the app into components like TaskInput, TaskList, TaskItem, and ThemeSwitcher.

Global State – Used Context API to maintain the list of tasks and theme state globally.

Persistence – Integrated localStorage so tasks get saved and retrieved when the app reloads.

Styling – Used Tailwind CSS classes for building a clean, responsive interface.

🔹 5. Problems Faced & Solutions

Problem 1: Data was lost after refreshing the page.
✅ Solution: Integrated localStorage to save and fetch tasks.

Problem 2: Passing props across multiple components (prop drilling) made code messy.
✅ Solution: Used Context API for clean global state management.

Problem 3: Theme toggle was not applying across all components.
✅ Solution: Lifted theme state to global context so every component could access it.

Problem 4: Styling responsiveness was inconsistent at first.
✅ Solution: Learned Tailwind utility classes properly and tested on different screen sizes.

🔹 6. Learning Outcomes

Understood the importance of state management in React projects.

Learned how to persist data using localStorage.

Got hands-on experience with Context API and how it simplifies prop drilling issues.

Improved skills in designing responsive UIs with Tailwind CSS.
