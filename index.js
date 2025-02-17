document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggleMode");
    const body = document.body;
    const aboutDiv = document.querySelector(".about");
    const experienceDiv = document.querySelector(".experience");
    const techDiv = document.querySelector(".tech");
    const projectDiv = document.querySelector(".project");
    const topDiv = document.querySelector(".top");
    const connectDiv = document.querySelector(".connect");
    const anotherDiv = document.querySelector(".another");

    // Check localStorage for mode preference
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        aboutDiv.classList.add("dark-bg");
        experienceDiv.classList.add("dark-bg");
        techDiv.classList.add("dark-bg");
        topDiv.classList.add("dark-bg");
        projectDiv.classList.add("dark-bg");
        connectDiv.classList.add("dark-bg");
        anotherDiv.classList.add("dark-bg");
    }

    // Toggle dark mode and store preference
    toggleButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        aboutDiv.classList.toggle("dark-bg");
        experienceDiv.classList.toggle("dark-bg");
        techDiv.classList.toggle("dark-bg");
        topDiv.classList.add("dark-bg");
        projectDiv.classList.add("dark-bg");   
        connectDiv.classList.add("dark-bg");
        anotherDiv.classList.add("dark-bg"); 

if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
} else {
    localStorage.setItem("theme", "light");
    aboutDiv?.classList.remove("dark-bg");
    experienceDiv?.classList.remove("dark-bg");
    techDiv?.classList.remove("dark-bg");
    topDiv?.classList.remove("dark-bg");
    projectDiv?.classList.remove("dark-bg");
    connectDiv?.classList.remove("dark-bg");
    anotherDiv?.classList.remove("dark-bg"); 
}

    });
});
