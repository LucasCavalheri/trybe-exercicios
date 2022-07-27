document.getElementById("header-container").style.backgroundColor = '#00b069';
document.querySelector(".emergency-tasks").style.backgroundColor = '#ff9f84';
let h3EmergencyTasks = document.querySelectorAll(".emergency-tasks h3");
for (let i = 0; i < h3EmergencyTasks.length; i += 1) {
    h3EmergencyTasks[i].style.backgroundColor = '#ca27f3'; 
}
document.querySelector(".no-emergency-tasks").style.backgroundColor = '#f9db5e';
let h3NoEmergencyTasks = document.querySelectorAll(".no-emergency-tasks h3");
for (let i = 0; i < h3NoEmergencyTasks.length; i += 1) {
    h3NoEmergencyTasks[i].style.backgroundColor = '#232525';
}
document.getElementById('footer-container').style.backgroundColor = '#003533';