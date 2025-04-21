# Discover Your Sexual Temperament

Welcome to the official repository for the **Sexual Temperament Questionnaire**, a self-discovery tool inspired by the science in _Come As You Are_ by Dr. Emily Nagoski. 💜

This project helps users explore what turns them on and what holds them back by assessing their SIS (Sexual Inhibition System) and SES (Sexual Excitation System) profiles in a respectful, accessible, and visually polished way.

---

## 🚀 Motivation

Modern sex education is often clinical, shame-driven, or social-media distorted. I wanted to create a beautifully designed, emotionally intelligent, and scientifically grounded self-assessment tool that:

- Feels **personal** and not like a survey
- Uses **inclusive language and design** for all gender identities
- Delivers **detailed results** with personalized interpretations
- Makes the experience feel **modern and inviting**, not like homework

This project follows up on my previous work:
- 🧠 [Discover Your Attachment Style](https://utsavkth.github.io/Discover-Your-Attachment-Style/)
- ❤️ [Discover Your Love Language](https://utsavkth.github.io/Discover-Your-Love-Language/)

---

## 📦 Folder Structure
_All files are located in the root folder — no subdirectories._

```
📁 /root-directory
│
├── index.html                # Homepage form (name, gender, CTA)
├── quiz.html                 # Interactive quiz flow (JS-driven)
├── result.html               # Reads quiz scores and redirects
├── sexy-contexts.html        # Worksheet to help users explore turn-ons
│
├── style.css                 # Global styles for all pages
├── quiz.js                   # Core logic: load questions, handle answers
├── questions_female.js       # Questions for female-identifying users
├── questions_male.js         # Questions for male-identifying users
├── questions_neutral.js      # Questions for neutral/other users
│
├── result-female-*.html      # 9 result pages (SIS/SES combinations)
├── result-male-*.html        # 9 result pages (SIS/SES combinations)
├── result-neutral-*.html     # 9 result pages (SIS/SES combinations)
│
├── logo.png                  # Site logo
├── homepage-visual.png       # Homepage illustration
│
├── navbar.js                 # (upcoming) JS-injected shared navbar
├── darkmode.js               # (upcoming) Dark mode toggle logic
```

---

## 🌐 How It Works

1. **User lands on `index.html`**
   - Enters name + selects gender
   - Data stored in `localStorage`

2. **`quiz.html` loads**
   - Loads appropriate question set based on gender
   - User answers 11 questions
   - Answers + question types saved in `localStorage`

3. **`result.html` processes scores**
   - Determines SIS + SES level (Low, Medium, High)
   - Redirects to 1 of 27 gender-specific result pages

4. **`result-[gender]-[sis]-[ses].html` displays**
   - Personalized message
   - Suggestions based on temperament
   - Link to the `sexy-contexts.html` worksheet

---

## 🛠 Planned Features

- ✅ Fully responsive UI
- ✅ Personalized result pages (27 total)
- ✅ Homepage visual and branding
- 🔄 Shared navbar injected via JS
- 🌑 Dark/light mode toggle
- 📄 Optional result PDF export
- 🔗 Shareable result preview (social metadata)

---

## 📣 Credits
- Designed & Built by **Utsav**
- Scientific foundation: _Come As You Are_ by Dr. Emily Nagoski
- No trackers, no cookies, just clarity ❤️

---

## 🧠 Want to Contribute?
Feel free to fork and modify for your own psychology, wellness, or education projects. This is open-source by intent — make it better.

---

## 📍 Live Demo
Coming soon via GitHub Pages:
> https://utsavkth.github.io/Discover-Your-Sexual-Temperament

