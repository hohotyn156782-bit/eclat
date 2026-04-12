// ===== i18n =====
const translations = {
    ru: {
        nav_best: 'Бестселлеры', nav_catalog: 'Каталог', nav_pyramid: 'Ноты',
        nav_quiz: 'Подобрать', nav_reviews: 'Отзывы',
        hero_pre: 'Элитная парфюмерия',
        hero_t1: 'Искусство', hero_t2: 'аромата',
        hero_sub: 'Откройте мир изысканных ароматов от ведущих парфюмерных домов. Каждый флакон — произведение искусства.',
        hero_cta1: 'Смотреть каталог', hero_cta2: 'Подобрать аромат',
        hero_scroll: 'Листайте вниз',
        best_label: 'Выбор покупателей', best_title: 'Бестселлеры',
        badge_hit: 'Хит', badge_new: 'Новинка',
        best1_notes: 'Уд, амбра, ваниль', best2_notes: 'Роза, пион, мускус',
        best3_notes: 'Уд, шафран, сандал', best4_notes: 'Ирис, жасмин, ветивер',
        type_unisex: 'Унисекс', type_women: 'Женский', type_men: 'Мужской',
        btn_cart: 'В корзину',
        cat_label: 'Коллекции', cat_title: 'Категории ароматов',
        cat_women: 'Для неё', cat_women_desc: 'Утончённые цветочные и фруктовые композиции', cat_women_count: '24 аромата',
        cat_men: 'Для него', cat_men_desc: 'Древесные, пряные и кожаные аккорды', cat_men_count: '18 ароматов',
        cat_unisex: 'Унисекс', cat_unisex_desc: 'Универсальные ароматы без границ', cat_unisex_count: '15 ароматов',
        pyr_label: 'Анатомия аромата', pyr_title: 'Пирамида нот',
        pyr_desc: 'Каждый аромат раскрывается в три этапа, создавая уникальную историю на вашей коже',
        pyr_top: 'Верхние ноты', pyr_top_time: '0 — 30 минут',
        pyr_top_notes: 'Цитрусовые, бергамот, лаванда, мята — первое впечатление, лёгкое и свежее',
        pyr_mid: 'Средние ноты', pyr_mid_time: '30 мин — 4 часа',
        pyr_mid_notes: 'Роза, жасмин, корица, кардамон — сердце аромата, его характер',
        pyr_base: 'Базовые ноты', pyr_base_time: '4 — 24 часа',
        pyr_base_notes: 'Сандал, мускус, амбра, ваниль — глубокий и стойкий шлейф',
        quiz_label: 'Персональный подбор', quiz_title: 'Подберём ваш идеальный аромат',
        q1: 'Для кого ищете аромат?', q1_a1: 'Для неё', q1_a2: 'Для него', q1_a3: 'Универсальный',
        q2: 'Какое настроение ближе?', q2_a1: 'Свежесть и лёгкость', q2_a2: 'Тепло и уют', q2_a3: 'Дерзость и страсть', q2_a4: 'Элегантность и класс',
        q3: 'Предпочтительная стойкость?', q3_a1: 'Лёгкий (2-4 часа)', q3_a2: 'Средний (4-8 часов)', q3_a3: 'Стойкий (8+ часов)',
        cat2_label: 'Коллекция', cat2_title: 'Полный каталог',
        filter_all: 'Все', filter_women: 'Женские', filter_men: 'Мужские', filter_unisex: 'Унисекс',
        c1_notes: 'Роза, пион, мускус', c2_notes: 'Уд, шафран, сандал',
        c3_notes: 'Уд, амбра, ваниль', c4_notes: 'Зелёный чай, магнолия, кедр',
        c5_notes: 'Кожа, табак, бергамот', c6_notes: 'Ирис, жасмин, ветивер',
        c7_notes: 'Лилия, фрезия, белый мускус', c8_notes: 'Ладан, кедр, пачули',
        promo_label: 'Специальное предложение', promo_title: 'Набор Discovery Set',
        promo_desc: '5 миниатюр по 10 ml в элегантной подарочной коробке. Попробуйте все наши бестселлеры, прежде чем выбрать свой.',
        promo_cta: 'Заказать со скидкой',
        rev_label: 'Отзывы', rev_title: 'Что говорят клиенты',
        rev1_text: '«Noir Absolu — это шедевр. Шлейф держится весь день, комплименты обеспечены. Флакон выглядит роскошно на полке.»',
        rev1_name: 'Александр В.',
        rev2_text: '«Rose Dorée — мой идеальный аромат. Нежный, но стойкий. Заказываю уже третий флакон, не могу без него.»',
        rev2_name: 'Елена К.',
        rev3_text: '«Discovery Set — гениальная идея. Попробовал все пять, влюбился в Oud Impérial. Теперь это мой signature scent.»',
        rev3_name: 'Михаил Д.',
        order_label: 'Быстрый заказ', order_title: 'Оформить заказ',
        order_desc: 'Оставьте заявку, и наш консультант свяжется с вами в течение 15 минут для подтверждения заказа.',
        order_p1: 'Бесплатная доставка от 5 000 ₽', order_p2: 'Подарочная упаковка в каждом заказе',
        order_p3: 'Возврат в течение 14 дней', order_p4: 'Пробники к каждому заказу',
        form_name: 'Ваше имя', form_phone: 'Телефон', form_comment: 'Комментарий',
        form_submit: 'Отправить заявку', form_note: 'Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности',
        cart_title: 'Корзина', cart_empty: 'Корзина пуста', cart_total: 'Итого:', cart_checkout: 'Оформить заказ',
        cart_remove: 'Удалить',
        footer_tagline: 'Элитная парфюмерия. Оригинальные ароматы от ведущих мировых брендов.',
        footer_nav: 'Навигация', footer_contacts: 'Контакты', footer_rights: 'Все права защищены.',
        success_title: 'Заявка отправлена!', success_text: 'Наш консультант свяжется с вами в течение 15 минут.',
        quiz_result_title: 'Ваш идеальный аромат', quiz_result_text: 'На основе ваших ответов мы подобрали:'
    },
    en: {
        nav_best: 'Bestsellers', nav_catalog: 'Catalog', nav_pyramid: 'Notes',
        nav_quiz: 'Find Yours', nav_reviews: 'Reviews',
        hero_pre: 'Luxury Perfumery',
        hero_t1: 'The Art of', hero_t2: 'Fragrance',
        hero_sub: 'Discover the world of exquisite fragrances from leading perfume houses. Every bottle is a work of art.',
        hero_cta1: 'View Catalog', hero_cta2: 'Find Your Scent',
        hero_scroll: 'Scroll down',
        best_label: 'Customer Favorites', best_title: 'Bestsellers',
        badge_hit: 'Hit', badge_new: 'New',
        best1_notes: 'Oud, amber, vanilla', best2_notes: 'Rose, peony, musk',
        best3_notes: 'Oud, saffron, sandalwood', best4_notes: 'Iris, jasmine, vetiver',
        type_unisex: 'Unisex', type_women: 'Women', type_men: 'Men',
        btn_cart: 'Add to Cart',
        cat_label: 'Collections', cat_title: 'Fragrance Categories',
        cat_women: 'For Her', cat_women_desc: 'Refined floral and fruity compositions', cat_women_count: '24 fragrances',
        cat_men: 'For Him', cat_men_desc: 'Woody, spicy and leather accords', cat_men_count: '18 fragrances',
        cat_unisex: 'Unisex', cat_unisex_desc: 'Universal fragrances without boundaries', cat_unisex_count: '15 fragrances',
        pyr_label: 'Anatomy of Fragrance', pyr_title: 'Fragrance Pyramid',
        pyr_desc: 'Every fragrance unfolds in three stages, creating a unique story on your skin',
        pyr_top: 'Top Notes', pyr_top_time: '0 — 30 minutes',
        pyr_top_notes: 'Citrus, bergamot, lavender, mint — the first impression, light and fresh',
        pyr_mid: 'Heart Notes', pyr_mid_time: '30 min — 4 hours',
        pyr_mid_notes: 'Rose, jasmine, cinnamon, cardamom — the heart of the fragrance, its character',
        pyr_base: 'Base Notes', pyr_base_time: '4 — 24 hours',
        pyr_base_notes: 'Sandalwood, musk, amber, vanilla — deep and lasting trail',
        quiz_label: 'Personal Selection', quiz_title: 'Find Your Perfect Scent',
        q1: 'Who are you looking for?', q1_a1: 'For Her', q1_a2: 'For Him', q1_a3: 'Universal',
        q2: 'What mood is closer?', q2_a1: 'Freshness & lightness', q2_a2: 'Warmth & comfort', q2_a3: 'Boldness & passion', q2_a4: 'Elegance & class',
        q3: 'Preferred longevity?', q3_a1: 'Light (2-4 hours)', q3_a2: 'Medium (4-8 hours)', q3_a3: 'Long-lasting (8+ hours)',
        cat2_label: 'Collection', cat2_title: 'Full Catalog',
        filter_all: 'All', filter_women: 'Women', filter_men: 'Men', filter_unisex: 'Unisex',
        c1_notes: 'Rose, peony, musk', c2_notes: 'Oud, saffron, sandalwood',
        c3_notes: 'Oud, amber, vanilla', c4_notes: 'Green tea, magnolia, cedar',
        c5_notes: 'Leather, tobacco, bergamot', c6_notes: 'Iris, jasmine, vetiver',
        c7_notes: 'Lily, freesia, white musk', c8_notes: 'Frankincense, cedar, patchouli',
        promo_label: 'Special Offer', promo_title: 'Discovery Set',
        promo_desc: '5 miniatures of 10 ml in an elegant gift box. Try all our bestsellers before choosing your favorite.',
        promo_cta: 'Order with Discount',
        rev_label: 'Reviews', rev_title: 'What Customers Say',
        rev1_text: '"Noir Absolu is a masterpiece. The trail lasts all day, compliments guaranteed. The bottle looks luxurious."',
        rev1_name: 'Alexander V.',
        rev2_text: '"Rose Dorée is my perfect scent. Delicate yet lasting. Ordering my third bottle, can\'t live without it."',
        rev2_name: 'Elena K.',
        rev3_text: '"Discovery Set is a genius idea. Tried all five, fell in love with Oud Impérial. It\'s now my signature scent."',
        rev3_name: 'Michael D.',
        order_label: 'Quick Order', order_title: 'Place an Order',
        order_desc: 'Leave a request and our consultant will contact you within 15 minutes to confirm your order.',
        order_p1: 'Free shipping from 5,000 ₽', order_p2: 'Gift wrapping with every order',
        order_p3: '14-day return policy', order_p4: 'Free samples with every order',
        form_name: 'Your Name', form_phone: 'Phone', form_comment: 'Comment',
        form_submit: 'Submit Request', form_note: 'By clicking, you agree to our privacy policy',
        cart_title: 'Cart', cart_empty: 'Your cart is empty', cart_total: 'Total:', cart_checkout: 'Checkout',
        cart_remove: 'Remove',
        footer_tagline: 'Luxury perfumery. Original fragrances from world-renowned brands.',
        footer_nav: 'Navigation', footer_contacts: 'Contacts', footer_rights: 'All rights reserved.',
        success_title: 'Request Sent!', success_text: 'Our consultant will contact you within 15 minutes.',
        quiz_result_title: 'Your Perfect Scent', quiz_result_text: 'Based on your answers, we recommend:'
    }
};

let currentLang = 'ru';

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.textContent = t[key];
    });
    document.getElementById('langToggle').textContent = lang === 'ru' ? 'EN' : 'RU';
    renderCart();
}

document.getElementById('langToggle').addEventListener('click', () => {
    setLanguage(currentLang === 'ru' ? 'en' : 'ru');
});

// ===== HEADER =====
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== BURGER =====
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
    document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
});
nav.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('active');
        nav.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// ===== HERO CONSTELLATION PARTICLES (Canvas) =====
const canvas = document.getElementById('heroCanvas');
const ctx = canvas.getContext('2d');
let particles = [];
let mouseX = -1000, mouseY = -1000;
const CONNECTION_DIST = 120;
const MOUSE_RADIUS = 200;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Track mouse for interactive effects
const heroSection = document.getElementById('hero');
const mouseGlow = document.getElementById('mouseGlow');

heroSection.addEventListener('mousemove', (e) => {
    const rect = heroSection.getBoundingClientRect();
    mouseX = e.clientX;
    mouseY = e.clientY - rect.top;
    mouseGlow.style.left = e.clientX + 'px';
    mouseGlow.style.top = e.clientY + 'px';
});

heroSection.addEventListener('mouseleave', () => {
    mouseX = -1000;
    mouseY = -1000;
});

class Particle {
    constructor(spread) {
        this.baseX = Math.random() * canvas.width;
        this.baseY = Math.random() * canvas.height;
        this.x = this.baseX;
        this.y = this.baseY;
        this.size = Math.random() * 2 + 0.5;
        this.driftX = (Math.random() - 0.5) * 0.3;
        this.driftY = (Math.random() - 0.5) * 0.2;
        this.shimmer = Math.random() * Math.PI * 2;
        this.shimmerSpeed = Math.random() * 0.03 + 0.01;
        this.opacity = Math.random() * 0.5 + 0.15;
        // floating orbit
        this.angle = Math.random() * Math.PI * 2;
        this.orbitRadius = Math.random() * 30 + 10;
        this.orbitSpeed = (Math.random() * 0.005 + 0.002) * (Math.random() > 0.5 ? 1 : -1);
    }
    update() {
        // Gentle orbit around base position
        this.angle += this.orbitSpeed;
        this.x = this.baseX + Math.cos(this.angle) * this.orbitRadius;
        this.y = this.baseY + Math.sin(this.angle) * this.orbitRadius * 0.6;

        // Slow drift
        this.baseX += this.driftX;
        this.baseY += this.driftY;

        // Wrap around edges
        if (this.baseX < -20) this.baseX = canvas.width + 20;
        if (this.baseX > canvas.width + 20) this.baseX = -20;
        if (this.baseY < -20) this.baseY = canvas.height + 20;
        if (this.baseY > canvas.height + 20) this.baseY = -20;

        // React to mouse — push away gently
        const dx = this.x - mouseX;
        const dy = this.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_RADIUS && dist > 0) {
            const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS * 2;
            this.x += (dx / dist) * force;
            this.y += (dy / dist) * force;
        }

        this.shimmer += this.shimmerSpeed;
    }
    draw() {
        const o = this.opacity * (0.5 + Math.sin(this.shimmer) * 0.5);
        // Particle dot
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201, 169, 110, ${o})`;
        ctx.fill();
        // Glow halo
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201, 169, 110, ${o * 0.08})`;
        ctx.fill();
    }
}

// Create particles
const particleCount = window.innerWidth < 768 ? 40 : 90;
for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
}

function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < CONNECTION_DIST) {
                const opacity = (1 - dist / CONNECTION_DIST) * 0.12;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.strokeStyle = `rgba(201, 169, 110, ${opacity})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
            }
        }
        // Connect to mouse if nearby
        const mdx = particles[i].x - mouseX;
        const mdy = particles[i].y - mouseY;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mDist < MOUSE_RADIUS) {
            const opacity = (1 - mDist / MOUSE_RADIUS) * 0.25;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouseX, mouseY);
            ctx.strokeStyle = `rgba(232, 213, 163, ${opacity})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
        }
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => p.update());
    drawConnections();
    particles.forEach(p => p.draw());
    requestAnimationFrame(animateParticles);
}
animateParticles();

// ===== HERO SPARKLES (around bottle) =====
const sparklesContainer = document.getElementById('heroSparkles');
function createSparkles() {
    for (let i = 0; i < 18; i++) {
        const spark = document.createElement('div');
        const isStar = Math.random() > 0.6;
        spark.className = isStar ? 'sparkle sparkle--star' : 'sparkle';
        // Position in a cloud around center
        const angle = Math.random() * Math.PI * 2;
        const radius = 80 + Math.random() * 140;
        const cx = 50; // percent
        const cy = 50;
        spark.style.left = (cx + Math.cos(angle) * (radius / 4)) + '%';
        spark.style.top = (cy + Math.sin(angle) * (radius / 5)) + '%';
        spark.style.setProperty('--dur', (2 + Math.random() * 4) + 's');
        spark.style.setProperty('--delay', (Math.random() * 5) + 's');
        sparklesContainer.appendChild(spark);
    }
}
createSparkles();

// ===== CATALOG FILTER =====
const filterBtns = document.querySelectorAll('.catalog__filter');
const catalogCards = document.querySelectorAll('#catalogGrid .product-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        catalogCards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// ===== QUIZ =====
const quizBox = document.getElementById('quizBox');
const progressBar = document.getElementById('quizProgress');
let quizStep = 1;
const quizAnswers = {};

const quizRecommendations = {
    women: {
        fresh: { name: 'Jardin Secret', notes_ru: 'Зелёный чай, магнолия, кедр', notes_en: 'Green tea, magnolia, cedar' },
        warm: { name: 'Rose Dorée', notes_ru: 'Роза, пион, мускус', notes_en: 'Rose, peony, musk' },
        bold: { name: 'Fleur Céleste', notes_ru: 'Ирис, жасмин, ветивер', notes_en: 'Iris, jasmine, vetiver' },
        elegant: { name: 'Pétale de Lune', notes_ru: 'Лилия, фрезия, белый мускус', notes_en: 'Lily, freesia, white musk' }
    },
    men: {
        fresh: { name: 'Bois d\'Encens', notes_ru: 'Ладан, кедр, пачули', notes_en: 'Frankincense, cedar, patchouli' },
        warm: { name: 'Oud Impérial', notes_ru: 'Уд, шафран, сандал', notes_en: 'Oud, saffron, sandalwood' },
        bold: { name: 'Cuir Sauvage', notes_ru: 'Кожа, табак, бергамот', notes_en: 'Leather, tobacco, bergamot' },
        elegant: { name: 'Noir Absolu', notes_ru: 'Уд, амбра, ваниль', notes_en: 'Oud, amber, vanilla' }
    },
    unisex: {
        fresh: { name: 'Jardin Secret', notes_ru: 'Зелёный чай, магнолия, кедр', notes_en: 'Green tea, magnolia, cedar' },
        warm: { name: 'Noir Absolu', notes_ru: 'Уд, амбра, ваниль', notes_en: 'Oud, amber, vanilla' },
        bold: { name: 'Fleur Céleste', notes_ru: 'Ирис, жасмин, ветивер', notes_en: 'Iris, jasmine, vetiver' },
        elegant: { name: 'Oud Impérial', notes_ru: 'Уд, шафран, сандал', notes_en: 'Oud, saffron, sandalwood' }
    }
};

quizBox.addEventListener('click', (e) => {
    const option = e.target.closest('.quiz__option');
    if (!option) return;

    const step = option.closest('.quiz__step');
    const stepNum = parseInt(step.dataset.step);
    quizAnswers[stepNum] = option.dataset.value;

    step.classList.remove('quiz__step--active');

    if (stepNum < 3) {
        quizStep = stepNum + 1;
        const nextStep = quizBox.querySelector(`[data-step="${quizStep}"]`);
        nextStep.classList.add('quiz__step--active');
        progressBar.style.width = (quizStep * 33) + '%';
    } else {
        // Show result
        progressBar.style.width = '100%';
        const gender = quizAnswers[1];
        const mood = quizAnswers[2];
        const rec = quizRecommendations[gender]?.[mood] || quizRecommendations.unisex.elegant;
        const t = translations[currentLang];
        const notes = currentLang === 'ru' ? rec.notes_ru : rec.notes_en;

        const resultStep = quizBox.querySelector('[data-step="result"]');
        document.getElementById('quizResult').innerHTML = `
            <div class="quiz__result-icon">✨</div>
            <p class="quiz__result-title">${t.quiz_result_title}</p>
            <p class="quiz__result-text">${t.quiz_result_text}</p>
            <p class="quiz__result-product">${rec.name}</p>
            <p class="quiz__result-notes">${notes}</p>
        `;
        resultStep.classList.add('quiz__step--active');
    }
});

// ===== CART =====
let cart = [];
const cartCount = document.getElementById('cartCount');
const cartModal = document.getElementById('cartModal');
const cartBody = document.getElementById('cartBody');
const cartFooter = document.getElementById('cartFooter');
const cartTotal = document.getElementById('cartTotal');

document.getElementById('cartBtn').addEventListener('click', () => {
    cartModal.classList.add('open');
    document.body.style.overflow = 'hidden';
});

document.getElementById('cartOverlay').addEventListener('click', closeCart);
document.getElementById('cartClose').addEventListener('click', closeCart);
document.getElementById('cartCheckout').addEventListener('click', () => {
    closeCart();
    document.body.style.overflow = '';
});

function closeCart() {
    cartModal.classList.remove('open');
    document.body.style.overflow = '';
}

// Add to cart buttons
document.addEventListener('click', (e) => {
    const btn = e.target.closest('.product-card__cart');
    if (!btn) return;

    const card = btn.closest('.product-card');
    const name = card.dataset.nameRu;
    const price = parseInt(card.dataset.price);

    const existing = cart.find(i => i.name === name);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ name, price, qty: 1 });
    }

    btn.textContent = '✓';
    btn.classList.add('added');
    setTimeout(() => {
        btn.textContent = translations[currentLang].btn_cart;
        btn.classList.remove('added');
    }, 1500);

    renderCart();
});

function renderCart() {
    const t = translations[currentLang];
    cartCount.textContent = cart.reduce((sum, i) => sum + i.qty, 0);
    cartCount.classList.toggle('visible', cart.length > 0);

    if (cart.length === 0) {
        cartBody.innerHTML = `<p class="cart-modal__empty">${t.cart_empty}</p>`;
        cartFooter.style.display = 'none';
        return;
    }

    cartFooter.style.display = 'block';
    let total = 0;
    cartBody.innerHTML = cart.map((item, i) => {
        total += item.price * item.qty;
        return `
            <div class="cart-item">
                <div class="cart-item__info">
                    <p class="cart-item__name">${item.name} ${item.qty > 1 ? `× ${item.qty}` : ''}</p>
                    <p class="cart-item__price">${(item.price * item.qty).toLocaleString()} ₽</p>
                </div>
                <button class="cart-item__remove" data-index="${i}">${t.cart_remove}</button>
            </div>
        `;
    }).join('');

    cartTotal.textContent = total.toLocaleString() + ' ₽';

    cartBody.querySelectorAll('.cart-item__remove').forEach(btn => {
        btn.addEventListener('click', () => {
            cart.splice(parseInt(btn.dataset.index), 1);
            renderCart();
        });
    });
}

// ===== ORDER FORM =====
document.getElementById('orderForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;
    const t = translations[currentLang];
    form.classList.add('success');
    form.innerHTML = `
        <div style="text-align:center;">
            <div style="font-size:3rem;margin-bottom:16px;">✨</div>
            <h3 style="font-family:'Cormorant Garamond',serif;font-size:1.5rem;color:var(--white);margin-bottom:8px;">${t.success_title}</h3>
            <p style="color:var(--text-muted);">${t.success_text}</p>
        </div>
    `;
});

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
    const els = document.querySelectorAll(
        '.product-card, .category-card, .review-card, .promo__inner, .order__inner, .quiz__box, .pyramid__level'
    );
    els.forEach(el => {
        if (!el.classList.contains('pyramid__level')) el.classList.add('fade-up');
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, i * 100);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    els.forEach(el => observer.observe(el));
}

initScrollAnimations();

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
        const href = a.getAttribute('href');
        if (href === '#' || href === '') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== CUSTOM STAR CURSOR =====
const cursor = document.getElementById('cursor');
if (cursor && window.matchMedia('(hover: hover)').matches) {
    let curX = 0, curY = 0;
    let targetX = 0, targetY = 0;
    let trailCounter = 0;

    document.addEventListener('mousemove', (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
    });

    // Smooth follow with lerp
    function updateCursor() {
        curX += (targetX - curX) * 0.18;
        curY += (targetY - curY) * 0.18;
        cursor.style.transform = `translate(${curX - 14}px, ${curY - 14}px)`;

        // Create trail sparkles on movement
        trailCounter++;
        const speed = Math.abs(targetX - curX) + Math.abs(targetY - curY);
        if (trailCounter % 3 === 0 && speed > 2) {
            createTrail(curX, curY);
        }

        requestAnimationFrame(updateCursor);
    }
    updateCursor();

    function createTrail(x, y) {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.left = (x - 3) + 'px';
        trail.style.top = (y - 3) + 'px';
        trail.style.width = trail.style.height = (2 + Math.random() * 4) + 'px';
        document.body.appendChild(trail);
        setTimeout(() => trail.remove(), 600);
    }

    // Hover effect on interactive elements
    const hoverTargets = document.querySelectorAll('a, button, input, select, textarea, .product-card, .category-card, .quiz__option, .faq__question');
    hoverTargets.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
    });

    // Hide cursor when leaving window
    document.addEventListener('mouseleave', () => { cursor.style.opacity = '0'; });
    document.addEventListener('mouseenter', () => { cursor.style.opacity = '1'; });
}
