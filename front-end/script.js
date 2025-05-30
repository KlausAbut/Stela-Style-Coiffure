document.addEventListener('DOMContentLoaded', ()=>{
    const tarifs = [
    { title: 'FORMULE ÉCLAT NATUREL',
        desc:  'Mise en valeur de votre beauté naturelle avec une coupe personnalisée.',
        price: '45 €' },
    { title: 'FORMULE TRANSFORMATION GLAMOUR',
        desc:  'Une transformation audacieuse avec coupe, couleur et brushing.',
        price: '85 €' },
    { title: 'FORMULE RÉVÉLATION DE STYLE',
        desc:  'Un relooking complet avec coupe, couleur, soin capillaire et coiffage.',
        price: '120 €' },
    { title: 'FORMULE DOUCEUR ET DÉTENTE',
        desc:  'Un moment de détente avec un soin capillaire, massage du cuir chevelu et brushing.',
        price: '60 €' },

    { title: 'FORMULE COIFFURE ÉVÉNEMENTIELLE',
        desc:  'Une coiffure élégante pour une occasion spéciale (mariage, soirée…).',
        price: '65 €' },
    { title: 'FORMULE JEUNESSE & ÉNERGIE',
        desc:  'Une coupe rafraîchissante pour les plus jeunes.',
        price: '30 €' },
    { title: 'FORMULE DÉTENTE ET COLORATION',
        desc:  'Relaxez-vous avec un soin capillaire et une coloration personnalisée.',
        price: '80 €' },
    { title: 'FORMULE COIFFURE EXPRESS',
        desc:  'Une coupe rapide pour un look soigné en un rien de temps.',
        price: '25 €' }
    ];


    // 2. Sélectionne tes deux colonnes
    const leftCol  = document.getElementById('col-left');
    const rightCol = document.getElementById('col-right');

    // 3. Parcours le tableau et injecte dans la bonne colonne
    tarifs.forEach((t, i) => {
    const card = document.createElement('div');
    card.className = 'tarifs-item';
    card.innerHTML = `
        <h3 class="tarifs-title">${t.title}</h3>
        <p>${t.desc}</p>
        <div class="tarifs-price">${t.price}</div>
    `;

    // les 4 premiers vont à gauche, les 4 suivants à droite
    if (i < 4) leftCol.appendChild(card);
    else        rightCol.appendChild(card);
    });

    // Animation au scroll
    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
        }
    });
    }, { threshold: 0.2 });

    // Cible tes sections et tes cartes
    document.querySelectorAll('section, .tarifs-item').forEach(el => {
    el.classList.add('hidden');
    observer.observe(el);
    });

    // Back-to-top
    const toTop = document.getElementById('toTop');
    window.addEventListener('scroll', () => {
    toTop.classList.toggle('show', window.scrollY > 300);
    });
    toTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    });

});

