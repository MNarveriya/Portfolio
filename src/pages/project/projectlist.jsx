import project from "../project/Project.module.css";
export const projectData = [
    {
        title: "Portfolio",
        description: "this is my first portfilio website. that website tells everything about me",
        btn1 :  <a href="https://portfolio-mukul.netlify.app/" target="_blank"> <button className={project.btn} role="button">Demo</button></a>,
        btn2 :  <a href="https://github.com/MNarveriya/portfolio.git" target="_blank"> <button className={project.btn} role="button">source code</button></a>
    },
    {
        title: "Toodolist",
        description: "this is dynamic toodolist. you can add list of user data and also delete any user data",
        btn1 :  <a href="https://toodolist-mukul.netlify.app/" target="_blank"> <button className={project.btn} role="button">Demo</button></a>,
        btn2 :  <a href="https://github.com/MNarveriya/toodolist-1.git" target="_blank"> <button className={project.btn} role="button">source code</button></a>
    },
    {
        title: "Google form",
        description: "this is a simple google form clone it just learn to how do work and it is used only html and css",
        btn1 :  <a href="https://google-form-mukul.netlify.app/" target="_blank"> <button className={project.btn} role="button">Demo</button></a>,
        btn2 :  <a href="https://github.com/MNarveriya/goole-form.git" target="_blank"> <button className={project.btn} role="button">source code</button></a>
    }
]