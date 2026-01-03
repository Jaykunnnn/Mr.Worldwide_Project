const courses = document.querySelectorAll(".course");
const actions = document.getElementById("actions");
const selectedCourseText = document.getElementById("selected-course");

let selectedCourse = null;

courses.forEach(course => {
    course.addEventListener("click", () => {
    
        courses.forEach(c => c.classList.remove("selected"));
        course.classList.add("selected");

        selectedCourse = course.dataset.course;
        selectedCourseText.textContent = selectedCourse;

        actions.classList.remove("hidden");
    });
});

function goToSurveyOverview() {
    if (selectedCourse) {
        window.location.href = "survey-overview.html";
    }
}

function goToCourse() {
    if (selectedCourse) {
        window.location.href = "index.html";
    }
}
