// CSS
import './css/index.css';

// Auto-import component + block CSS
import.meta.glob(['../templates/_components/**/*.css', '../templates/_blocks/**/*.css'], { eager: true });

// Auto-import component + block JS
import.meta.glob(['../templates/_components/**/*.js', '../templates/_blocks/**/*.js'], { eager: true });


// JS
import './js/index.js';