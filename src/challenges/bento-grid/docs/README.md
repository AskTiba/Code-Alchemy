# Frontend Mentor - Bento grid solution

This is a solution to the [Bento grid challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/bento-grid-RMydElrlOj). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size

### Screenshot

![](./preview.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript at Any Scale
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- Semantic HTML5 markup
- CSS Grid
- Flexbox
- Mobile-first workflow

### What I learned

This project was a great exercise in creating a responsive bento grid layout. Here are some of the key concepts I applied:

- **CSS Grid:** I used CSS Grid to create the bento grid layout. This allowed me to easily define the structure of the grid and place items within it.

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
```

- **Responsive Design:** I used Tailwind CSS's responsive design features to ensure that the grid looks great on all screen sizes. By using utility classes like `md:grid-cols-2` and `lg:grid-cols-3`, I was able to easily change the number of columns in the grid based on the screen size.

- **Mobile-First Workflow:** I followed a mobile-first workflow, which means that I designed for mobile devices first and then added media queries to adapt the layout for larger screens. This is a best practice for responsive design and helps to ensure that the user experience is optimized for all devices.

## Author

- Website - [Your Name](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)

## Acknowledgments

- This project was completed as a challenge from [Frontend Mentor](https://www.frontendmentor.io).