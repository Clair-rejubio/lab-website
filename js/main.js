// Navigation menu toggle for mobile
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');

    menuToggle?.addEventListener('click', () => {
        nav.classList.toggle('active');

    const img = new Image();
        img.src = 'images/official account qrcode.jpg';
    });
});

// 获取所有的dropdown元素
var dropdowns = document.getElementsByClassName("dropdown");

// 为每个dropdown添加点击事件监听器
for (var i = 0; i < dropdowns.length; i++) {
    dropdowns[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.querySelector(".dropdown-content");
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}

document.querySelector('.nav-toggle').addEventListener('click', function() {
    const navContainer = document.querySelector('.nav-container');
    if (navContainer.style.display === 'block') {
      navContainer.style.display = 'none';
    } else {
      navContainer.style.display = 'block';
    }
  });