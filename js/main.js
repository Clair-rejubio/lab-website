document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');
    const dropdowns = document.querySelectorAll('.dropdown');

    // Hamburger menu toggle
    hamburgerMenu?.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        // Toggle hamburger animation
        hamburgerMenu.classList.toggle('active');
    });

    // Dropdown handling
    dropdowns.forEach(dropdown => {
        const dropdownBtn = dropdown.querySelector('.dropbtn');
        const dropdownContent = dropdown.querySelector('.dropdown-content');

        dropdownBtn?.addEventListener('click', (e) => {
            // Mobile view handling
            if (window.innerWidth <= 768) {
                e.preventDefault();
                e.stopPropagation();

                // Close other dropdowns
                dropdowns.forEach(other => {
                    if (other !== dropdown) {
                        other.classList.remove('active');
                        other.querySelector('.dropdown-content').style.display = 'none';
                    }
                });

                // Toggle current dropdown
                dropdown.classList.toggle('active');
                dropdownContent.style.display =
                    dropdownContent.style.display === 'block' ? 'none' : 'block';
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-menu') && !e.target.closest('.hamburger-menu')) {
            navMenu.classList.remove('active');
            hamburgerMenu?.classList.remove('active');

            // Close all dropdowns
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
                dropdown.querySelector('.dropdown-content').style.display = 'none';
            });
        }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navMenu.classList.remove('active');
            hamburgerMenu?.classList.remove('active');

            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
                dropdown.querySelector('.dropdown-content').style.display = '';
            });
        }
    });
});
