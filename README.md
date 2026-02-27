# 💼 Emmanuel A. Arévalo – Interactive CV

Modern and interactive personal CV built with **HTML, CSS and Vanilla JavaScript**.

This project showcases my profile as a **Systems Engineering student, Digital Designer and Junior Web Developer**, combining clean UI design with functional features like dynamic translation and GitHub integration.

---

## 🚀 Features

- 🌙 Dark / Light mode toggle
- 🌎 Spanish / English dynamic translation
- 💾 Language & theme persistence using LocalStorage
- 📊 GitHub API integration (recent repositories)
- 📋 Copy email / phone buttons
- 🧲 Magnetic hover button effects
- 🎯 Scroll reveal animations
- 🎨 Premium gradient background with anti-banding fix
- 📱 Fully responsive design

---

## 🛠 Tech Stack

- **HTML5**
- **CSS3** (Custom properties, gradients, glass UI)
- **Vanilla JavaScript (ES6+)**
- GitHub REST API
- LocalStorage API

---

## 📂 Project Structure


cv/
│
├── index.html
├── css/
│ └── style.css
├── js/
│ └── main.js
└── README.md


---

## 🌍 Translation System

The project includes a custom bilingual system (ES / EN).

Text elements use:

```html
data-i18n="key_name"

Translations are managed in main.js:

const translations = {
  es: { ... },
  en: { ... }
}

✔ Language is stored in LocalStorage
✔ Automatically applied on page reload
✔ Toggle button switches between Spanish and English

🌗 Theme System

Theme switching is handled using:

data-theme="dark"
data-theme="light"

✔ Stored in LocalStorage
✔ Dynamic icon update
✔ Smooth visual transition

🔗 GitHub Integration

The CV dynamically fetches recent repositories using:

https://api.github.com/users/{username}/repos

Displays:

Repository name

Description

Main language

Last update date

Includes:

Rate limit handling

Fallback for empty descriptions

🎨 UI Design

Glass morphism cards

Soft shadows and modern spacing

Gradient background with noise overlay (prevents banding lines)

Clean navigation pills

Responsive grid layout

📱 Responsive Design

Optimized for:

Desktop

Tablet

Mobile

Built with:

CSS Grid

Flexbox

Media queries

📦 How to Run Locally

Clone the repository:

git clone https://github.com/yourusername/cv.git

Open in VS Code

Use Live Server

Open in browser

📌 Future Improvements

Smooth animated language transitions

Project preview modals

Contact form backend integration

Automatic PDF generation

Animated skill charts

👨‍💻 Author

Emmanuel Alejandro Arévalo Aceves

Systems Engineering Student
Digital Designer
Junior Web Developer
English Level: B2

GitHub:
https://github.com/EmmanuelArevaloAceves

LinkedIn:
https://www.linkedin.com/in/emmanuel-alejandro-arevalo-aceves/

📜 License

Personal portfolio project.
Free to use for learning purposes.


---

Si quieres, te hago una versión más estratégica orientada a:

- 🧠 Junior Backend Developer  
- 🚀 Full Stack Developer  
- 📊 Software Engineer Intern  
- 🎯 Tech + Business profile  

Solo dime qué perfil quieres proyectar.