/**
 * main.js - Minimal Script for Tech Editorial Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
    // 現在年の自動設定
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // スムーズスクロールとアクティブナビゲーションリンクの管理
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section, .hero-section');

    const updateActiveNav = () => {
        const scrollPosition = window.scrollY + 120;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPosition >= top && scrollPosition < top + height) {
                navLinks.forEach(link => {
                    const href = link.getAttribute('href');
                    if (href === `#${id}`) {
                        link.style.color = 'var(--tech-blue)';
                    } else {
                        link.style.color = '';
                    }
                });
            }
        });
    };

    window.addEventListener('scroll', updateActiveNav, { passive: true });
});
