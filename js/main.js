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
    var navMenu = document.querySelector('.nav-menu');
    if (navMenu.style.height === '0px') {
      navMenu.style.height = 'auto'; // 或者设置一个具体的高度
    } else {
      navMenu.style.height = '0';
    }
  });

  // 显示遮罩层和导航菜单
function openNav() {
    document.querySelector('.nav-menu').style.height = 'auto';
    document.querySelector('.overlay').style.display = 'block';
  }
  
  // 隐藏遮罩层和导航菜单
  function closeNav() {
    document.querySelector('.nav-menu').style.height = '0';
    document.querySelector('.overlay').style.display = 'none';
  }
  
  // 为汉堡按钮添加事件监听
  document.querySelector('.nav-toggle').addEventListener('click', openNav);
  
  // 为遮罩层添加事件监听
  document.querySelector('.overlay').addEventListener('click', closeNav);