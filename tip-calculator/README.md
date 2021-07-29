# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Links

- Solution URL: [https://github.com/mariusfa/frontend-mentor/tree/main/tip-calculator](https://github.com/mariusfa/frontend-mentor/tree/main/tip-calculator)
- Live Site URL: [https://tip-calculator-mf.netlify.app/](https://tip-calculator-mf.netlify.app/)

## My process

### Built with

- React (create-react app)
- Emotion.sh for styling
- Typescript create-react-app template
- CSS grid and flex
- Netlify deploy

### What I learned

Learned that I should have startet with the mobile layout first, and not the desktop layout. This was my first real intro to writing my own CSS. 

I also learned som handy react snippets for form handling. Aka have a single state variable for all form input and then use this handle change function: 
```typescript
const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};
```
For html I learned the importance of `<form>`. This handles next button and enter/submit actions for keyboards and phones.

### Continued development

For further projects I would like to explore the css units, aka rem/em/ch. Still a little mystery for me.

Furthermore look into structuering css/emotion. Maybe take a look at emotion themes and styled components.

### Useful resources

- [Emotion docs](https://emotion.sh/docs/introduction) - This helped me for setting up css props for my components
- [Flexbox overview](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - This was useful for understanding the different flexbox options

## Author

- Github - [Marius Fagerland](https://github.com/mariusfa)
- Frontend Mentor - [@mariusfa](https://www.frontendmentor.io/profile/mariusfa)
