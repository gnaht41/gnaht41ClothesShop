window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        document.getElementById("backtotop").style.display = "block";
    } else {
        document.getElementById("backtotop").style.display = "none";
    }
}

// Khi người dùng nhấp vào nút, cuộn lên đỉnh trang
function scrollToTop() {
    document.body.scrollTop = 0; // Dành cho Safari
    document.documentElement.scrollTop = 0; // Dành cho Chrome, Firefox, IE và Opera
}