document.getElementById("sidebarHandle").addEventListener("click", () => {
    var sidebar = document.getElementById("sidebarBody");
    if (sidebar.style.transform === "translate(100%, 0%)") {
        sidebar.style.transform = "translate(0%, 0%)";
        document.getElementById("sidebarHandleIcon").innerHTML = "⟭";
    } else {
        sidebar.style.transform = "translate(100%, 0%)";
        document.getElementById("sidebarHandleIcon").innerHTML = "⟬";
    }
});