# Frontend Mentor - Multi-step form solution

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made

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
- [React Hook Form](https://react-hook-form.com/) - Performant, flexible and extensible forms with easy-to-use validation.
- [Zod](https://zod.dev/) - TypeScript-first schema validation with static type inference
- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow

### What I learned

This project was a great opportunity to practice building a complex, multi-step form in React. Here are some of the key things I learned:

- **State Management:** I used the `useState` hook to manage the current step of the form and the user's selections. This allowed me to easily control the flow of the form and update the UI as the user progresses.

```tsx
const [currentStep, setCurrentStep] = useState(1);
const [maxStepReached, setMaxStepReached] = useState(1);
```

- **Conditional Rendering:** I used conditional rendering to display the correct component for each step of the form. This made the code more organized and easier to read.

```tsx
{currentStep === 1 && <PersonalInfo />}
{currentStep === 2 && <SelectPlan />}
{currentStep === 3 && <PickAddons />}
{currentStep === 4 && <FinishUp />}
{currentStep === 5 && <Appreciation />}
```

- **Handling User Interactions:** I created functions to handle the "Next Step" and "Go Back" buttons, as well as the step indicators. This allowed me to create a smooth and intuitive user experience.

```tsx
const handleNextStep = () => {
  if (currentStep < 5) {
    const newStep = currentStep + 1;
    if (newStep > maxStepReached) {
      setMaxStepReached(newStep);
    }
    setCurrentStep(newStep);
  }
};
```

- **Responsive Design:** I used Tailwind CSS to create a responsive design that works well on both mobile and desktop devices. The `useEffect` hook was used to detect the screen size and render the appropriate background image.

```tsx
const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);
```

## Author

- Website - [Your Name](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)

## Acknowledgments

- This project was completed as a challenge from [Frontend Mentor](https://www.frontendmentor.io).