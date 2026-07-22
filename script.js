/* ═══════════════════════════════════════════════════════════
   PORTFOLIO v2 — DIGITAL OPS COMMAND CENTER
   Georges Marcel | script.js
   ═══════════════════════════════════════════════════════════ */
'use strict';

/* ─── TRANSLATIONS ─── */
const I18N = {
  fr: {
    sidebar_role:'Full-Stack · IT Expert', online_label:'En ligne',
    nav_profil:'Profil', nav_status:'Status', nav_about:'À Propos',
    nav_skills:'Compétences', nav_exp:'Expérience', nav_proj:'Projets',
    nav_edu:'Formation', nav_quote:'Devis', nav_contact:'Contact', nav_avail:'Dispo',
    download_cv:'Télécharger CV', download_cv_full:'Télécharger le CV complet',
    hero_profile:'PROFIL', tw_prefix:'Spécialité\u00a0›\u00a0',
    stat_years:'ans d\'xp', stat_companies:'entreprises', stat_langs:'langues',
    btn_contact:'Me contacter', btn_missions:'Voir mes missions',
    scroll_hint:'Défiler',
    status_title:'Statut Opérationnel',
    s_avail:'Disponibilité', s_avail_val:'DISPONIBLE IMMÉDIATEMENT',
    s_location:'Localisation', s_languages:'Langues',
    s_response:'Réponse', s_response_val:'Sous 24h',
    s_phone:'Téléphone', status_dispo:'DISPONIBLE_IMMÉDIATEMENT',
    about_title:'À Propos de Moi',
    about_lead:'Professionnel digital polyvalent avec plus de <strong class="accent">9 ans d\'expérience</strong> en administration systèmes &amp; réseaux, support informatique ITIL N1/N2, développement web full-stack et community management.',
    about_body:'Expérience au sein des <strong>Nations Unies (MINUSCA)</strong> de 2019 à 2024, en environnement client exigeant et en formation professionnelle. Bilingue <strong>français-anglais</strong>. Disponible immédiatement.',
    chip_dispo:'Disponible immédiatement',
 badge_fne:'Matricule national',
 badge_un:'Votre Professionnel depuis 2015',
    aig_city:'Ville', aig_langs:'Langues', aig_domain:'Domaines',
    skills_title:'Compétences Techniques', radar_title:'Vue d\'ensemble', bars_title:'Niveaux détaillés',
    sk_support:'Support IT / ITIL N1-N2', sk_net:'Réseaux & Infrastructure',
    sk_dev:'Développement Web Full-Stack', sk_cm:'Community Management',
    cert_in_progress:'En cours',
    cat_sys:'Systèmes & ITSM', cat_net:'Réseaux & Sécurité', cat_dev:'Développement Web', cat_cm:'Community Management',
    exp_title:'Journal des Missions',
    job1_title:'Responsable des Systèmes d\'Information',
    job1_t1:'Pilotage infrastructure IT complète : parc, serveurs, réseau',
    job1_t2:'Administration ifpcafor.com + bases MySQL/PostgreSQL',
    job1_t3:'Déploiement PSSI et formation des équipes',
    job1_t4:'Community management Facebook / WhatsApp Business',
    job2_title:'Conseiller Technique Support, Helpdesk N1',
    job2_t1:'Gestion incidents N1 selon SLA et KPI',
    job2_t2:'Ticketing, support téléphonique et relation client digitale',
    job2_t3:'Traitement des insatisfactions et escalades',
    job3_title:'Responsable Informatique',
    job3_t1:'Admin Windows Server, Linux, LAN/Wi-Fi',
    job3_t2:'Mise en place PRA/PCA et gestion parc IT',
    job3_t3:'Gestion droits et groupes étudiants',
    job4_title:'Technicien Informatique, Consultant Freelance',
    job4_t1:'Installation et mise en réseau systèmes d\'impression',
    job4_t2:'Gestion logiciels, mises à jour et migrations',
    job4_t3:'Wi-Fi, support et diagnostic technique',
    job5_title:'Technicien Informatique & DIT, Freelance',
    job5_t1:'Maintenance corrective et remplacement pièces',
    job5_t2:'Gestion licences et supervision flux réseau',
    job6_title:'Informaticien, Développeur Web & Formateur',
    job6_t1:'Maintenance équipements et apps web',
    job6_t2:'Tests, documentation et formation utilisateurs',
    present:'Présent',
    proj_title:'Projets & Déploiements',
    p1_name:'Système d\'Information IFP CAFOR',
    p1_type:'Infrastructure IT · Admin SI · Community',
    p1_desc:'Déploiement complet de l\'infrastructure IT : réseau LAN/Wi-Fi, serveurs, site ifpcafor.com, bases MySQL/PostgreSQL, politique PSSI et community management Facebook/WhatsApp.',
    p2_name:'Infrastructure Réseau MINUSCA / ONU',
    p2_type:'IT Consulting · Réseau · Support ONU',
    p2_desc:'Consultant IT auprès des Nations Unies (MINUSCA) de 2019 à 2024. Mise en réseau des systèmes d\'impression, gestion logiciels, infrastructure Wi-Fi et support technique multi-sites.',
    p3_name:'Développement Full-Stack',
    p3_type:'Python · Django · React · Laravel',
    p3_desc:'Développement d\'applications web full-stack : backends Python/Django/Flask, APIs REST, frontends React.js, intégration bases de données PostgreSQL/MySQL/MongoDB.',
    edu_title:'Formations & Certifications',
    cert1:'Certification Cisco CCNA / MikroTik', cert2:'Licence Génie Logiciel',
    cert3:'BTS Génie Logiciel', cert4:'Maintenance Informatique et Réseaux',
    cert5:'Baccalauréat A4 ESP', in_progress:'En cours',
    refs_title:'Références Professionnelles',
    ref1_role:'Chef d\'agence MINUSCA U.N, Douala',
    ref2_role:'Ingénieur logiciel, Pondo Creative',
    ref3_role:'Présidente-directrice, Racine S.A.S',
    contact_title:'Ouvrir un Ticket',
    contact_sub:'Missions freelance · CDI/CDD · Consulting IT',
    cf_name:'Nom complet', cf_type:'Type de mission', cf_subject:'Sujet',
    cf_subject_ph:'Objet de votre demande',
    cf_message:'Message', cf_msg_ph:'Décrivez votre projet ou votre besoin...',
    mt_support:'Support IT', mt_dev:'Dev Web', mt_cm:'Community Mgmt', mt_other:'Autre',
    submit_btn:'Créer le ticket', tc_close:'Fermer',
    quote_title:'Demande de Devis', quote_sub:'Obtenez un devis gratuit pour votre projet IT',
    quote_services:'Sélectionnez vos services',
    qs_support:'Support IT', qs_support_desc:'Maintenance, dépannage, helpdesk',
    qs_dev:'Développement Web', qs_dev_desc:'Site web, application, API',
    qs_network:'Réseaux & Infrastructure', qs_network_desc:'LAN, Wi-Fi, serveurs',
    qs_cm:'Community Management', qs_cm_desc:'Réseaux sociaux, animation',
    qf_company:'Entreprise (optionnel)', qf_phone:'Téléphone',
    qf_budget:'Budget estimé', qf_budget_select:'Sélectionnez...',
    qf_deadline:'Délai souhaité', qf_deadline_select:'Sélectionnez...',
    qf_urgent:'Urgent (< 1 semaine)', qf_2weeks:'2 semaines',
    qf_1month:'1 mois', qf_3months:'3 mois', qf_flexible:'Flexible',
    qf_details:'Détails du projet', qf_details_ph:'Décrivez votre projet, vos besoins spécifiques...',
    quote_submit:'Demander un devis gratuit',
    filter_all:'Tous', filter_dev:'Développement', filter_network:'Réseau', filter_consulting:'Consulting',
    testimonials_title:'Témoignages Clients', testimonials_sub:'Ce que mes clients disent de mon travail',
    nav_testimonials:'Témoignages',
    blog_title:'Blog & Articles Techniques', blog_sub:'Partage d\'expertise IT: Sécurité, Réseaux, Développement',
    blog_cat_security:'Sécurité', blog_cat_network:'Réseaux', blog_cat_dev:'Développement',
    blog_1_title:'Guide de Sécurité Réseau pour PME', blog_1_excerpt:'Les meilleures pratiques pour sécuriser votre infrastructure réseau contre les cybermenaces courantes.',
    blog_2_title:'Optimisation Wi-Fi pour Entreprises', blog_2_excerpt:'Comment configurer un réseau Wi-Fi performant et sécurisé pour votre environnement professionnel.',
    blog_3_title:'React vs Vue: Choix 2026', blog_3_excerpt:'Comparatif approfondi des frameworks JavaScript pour choisir la meilleure solution pour votre projet.',
    nav_blog:'Blog',
    stat_visits:'Visites ce mois', stat_response:'Temps de réponse moyen', stat_projects:'Projets cette année',
    nav_presentation:'Présentation',
    verify_cert:'Vérifier la certification ↗', verify_school:'Vérifier l\'établissement ↗',
  },
  en: {
    sidebar_role:'Full-Stack · IT Expert', online_label:'Online',
    nav_profil:'Profile', nav_status:'Status', nav_about:'About',
    nav_skills:'Skills', nav_exp:'Experience', nav_proj:'Projects',
    nav_edu:'Education', nav_quote:'Quote', nav_contact:'Contact', nav_avail:'Avail.',
    download_cv:'Download CV', download_cv_full:'Download Full CV',
    hero_profile:'PROFILE', tw_prefix:'Specialty\u00a0›\u00a0',
    stat_years:'yrs experience', stat_companies:'companies', stat_langs:'languages',
    btn_contact:'Contact me', btn_missions:'View my missions',
    scroll_hint:'Scroll',
    status_title:'Operational Status',
    s_avail:'Availability', s_avail_val:'AVAILABLE IMMEDIATELY',
    s_location:'Location', s_languages:'Languages',
    s_response:'Response', s_response_val:'Within 24h',
    s_phone:'Phone', status_dispo:'AVAILABLE_IMMEDIATELY',
    about_title:'About Me',
    about_lead:'Versatile digital professional with over <strong class="accent">9 years of experience</strong> in systems administration, IT support ITIL N1/N2, full-stack web development, and community management.',
    about_body:'Experience with the <strong>United Nations (MINUSCA)</strong> from 2019 to 2024, in demanding client environments and professional training. Bilingual <strong>French-English</strong>. Available immediately.',
    chip_dispo:'Available immediately',
 badge_fne:'National registration',
 badge_un:'Your Professional since 2015',
    aig_city:'City', aig_langs:'Languages', aig_domain:'Domains',
    skills_title:'Technical Skills', radar_title:'Overview', bars_title:'Detailed levels',
    sk_support:'IT Support / ITIL N1-N2', sk_net:'Networks & Infrastructure',
    sk_dev:'Full-Stack Web Development', sk_cm:'Community Management',
    cert_in_progress:'In progress',
    cat_sys:'Systems & ITSM', cat_net:'Networks & Security', cat_dev:'Web Development', cat_cm:'Community Management',
    exp_title:'Mission Log',
    job1_title:'Head of Information Systems',
    job1_t1:'Full IT infrastructure management: fleet, servers, network',
    job1_t2:'Administration of ifpcafor.com + MySQL/PostgreSQL databases',
    job1_t3:'PSSI deployment and team training',
    job1_t4:'Community management Facebook / WhatsApp Business',
    job2_title:'Technical Support Advisor, Helpdesk N1',
    job2_t1:'N1 incident management per SLA and KPI',
    job2_t2:'Ticketing, phone support, and digital customer relations',
    job2_t3:'Handling of complaints and escalations',
    job3_title:'IT Manager',
    job3_t1:'Windows Server, Linux, LAN/Wi-Fi admin',
    job3_t2:'BCP/DRP setup and IT fleet management',
    job3_t3:'Rights and student group management',
    job4_title:'IT Technician, Freelance Consultant',
    job4_t1:'Installation and networking of printing systems',
    job4_t2:'Software management, updates and migrations',
    job4_t3:'Wi-Fi, support and technical diagnostics',
    job5_title:'IT Technician & DIT, Freelance',
    job5_t1:'Corrective maintenance and parts replacement',
    job5_t2:'License management and network flow supervision',
    job6_title:'IT Specialist, Web Developer & Trainer',
    job6_t1:'Equipment and web application maintenance',
    job6_t2:'Testing, user documentation and training',
    present:'Present',
    proj_title:'Projects & Deployments',
    p1_name:'IFP CAFOR Information System',
    p1_type:'IT Infrastructure · SI Admin · Community',
    p1_desc:'Complete IT infrastructure deployment: LAN/Wi-Fi network, servers, ifpcafor.com website, MySQL/PostgreSQL databases, PSSI policy and Facebook/WhatsApp community management.',
    p2_name:'MINUSCA / UN Network Infrastructure',
    p2_type:'IT Consulting · Network · UN Support',
    p2_desc:'IT Consultant for the United Nations (MINUSCA) from 2019 to 2024. Networking of printing systems, software management, Wi-Fi infrastructure and multi-site technical support.',
    p3_name:'Full-Stack Development',
    p3_type:'Python · Django · React · Laravel',
    p3_desc:'Full-stack web application development: Python/Django/Flask backends, REST APIs, React.js frontends, PostgreSQL/MySQL/MongoDB database integration.',
    edu_title:'Education & Certifications',
    cert1:'Cisco CCNA / MikroTik Certification', cert2:'Bachelor Software Engineering',
    cert3:'HND Software Engineering', cert4:'Computer Maintenance and Networks',
    cert5:'High School Diploma A4 ESP', in_progress:'In progress',
    refs_title:'Professional References',
    ref1_role:'Branch Manager MINUSCA U.N, Douala',
    ref2_role:'Software Engineer, Pondo Creative',
    ref3_role:'CEO, Racine S.A.S',
    contact_title:'Open a Ticket',
    contact_sub:'Freelance · Full-time/Contract · IT Consulting',
    cf_name:'Full name', cf_type:'Mission type', cf_subject:'Subject',
    cf_subject_ph:'Subject of your request',
    cf_message:'Message', cf_msg_ph:'Describe your project or need...',
    mt_support:'IT Support', mt_dev:'Web Dev', mt_cm:'Community Mgmt', mt_other:'Other',
    submit_btn:'Create ticket', tc_close:'Close',
    quote_title:'Request a Quote', quote_sub:'Get a free quote for your IT project',
    quote_services:'Select your services',
    qs_support:'IT Support', qs_support_desc:'Maintenance, troubleshooting, helpdesk',
    qs_dev:'Web Development', qs_dev_desc:'Website, application, API',
    qs_network:'Networks & Infrastructure', qs_network_desc:'LAN, Wi-Fi, servers',
    qs_cm:'Community Management', qs_cm_desc:'Social media, engagement',
    qf_company:'Company (optional)', qf_phone:'Phone',
    qf_budget:'Estimated budget', qf_budget_select:'Select...',
    qf_deadline:'Desired deadline', qf_deadline_select:'Select...',
    qf_urgent:'Urgent (< 1 week)', qf_2weeks:'2 weeks',
    qf_1month:'1 month', qf_3months:'3 months', qf_flexible:'Flexible',
    qf_details:'Project details', qf_details_ph:'Describe your project, specific needs...',
    quote_submit:'Request a free quote',
    filter_all:'All', filter_dev:'Development', filter_network:'Network', filter_consulting:'Consulting',
    testimonials_title:'Client Testimonials', testimonials_sub:'What my clients say about my work',
    nav_testimonials:'Testimonials',
    blog_title:'Tech Blog & Articles', blog_sub:'Sharing IT expertise: Security, Networks, Development',
    blog_cat_security:'Security', blog_cat_network:'Networks', blog_cat_dev:'Development',
    blog_1_title:'Network Security Guide for SMEs', blog_1_excerpt:'Best practices to secure your network infrastructure against common cyber threats.',
    blog_2_title:'Wi-Fi Optimization for Businesses', blog_2_excerpt:'How to configure a high-performance and secure Wi-Fi network for your professional environment.',
    blog_3_title:'React vs Vue: 2026 Choice', blog_3_excerpt:'In-depth comparison of JavaScript frameworks to choose the best solution for your project.',
    nav_blog:'Blog',
    stat_visits:'Visits this month', stat_response:'Average response time', stat_projects:'Projects this year',
    nav_presentation:'Presentation',
    verify_cert:'Verify certification ↗', verify_school:'Verify institution ↗',
  }
};

let currentLang = 'fr';
let soundEnabled = false;
let audioCtx = null;

/* ═══════════════════════════════════════════
   LOADER — TERMINAL BOOT
═══════════════════════════════════════════ */
function initLoader() {
  const loader = document.getElementById('loader');
  const body   = document.getElementById('loader-body');
  if (!loader || !body) return;

  const lines = [
    { delay:  80, type:'comment', text:'# georges-marcel.sys v9.0 — boot sequence' },
    { delay: 180, type:'cmd',     text:'$ initializing kernel modules...' },
    { delay: 380, type:'ok',      text:'✓ ITIL N1/N2 ............. LOADED' },
    { delay: 520, type:'ok',      text:'✓ Django / React ......... LOADED' },
    { delay: 660, type:'ok',      text:'✓ LAN / Wi-Fi ............ ONLINE' },
    { delay: 800, type:'ok',      text:'✓ MINUSCA_ONU ............ CONNECTED' },
    { delay: 940, type:'cmd',     text:'$ checking availability...' },
    { delay:1100, type:'cyan',    text:'◉ STATUS: DISPONIBLE IMMÉDIATEMENT ✓' },
    { delay:1220, type:'comment', text:'# location: Douala, Cameroun · FR/EN' },
    { delay:1380, type:'cmd',     text:'$ launching portfolio interface...' },
    { delay:1500, type:'ok',      text:'✓ ready. Welcome.' },
  ];

  lines.forEach(({ delay, type, text }) => {
    setTimeout(() => {
      const el = document.createElement('div');
      el.className = `tl t-${type}`;
      el.textContent = text;
      body.appendChild(el);
      body.scrollTop = body.scrollHeight;
    }, delay);
  });

  setTimeout(() => {
    loader.classList.add('out');
    initAll();
  }, 2000);
}

/* ═══════════════════════════════════════════
   CURSOR
═══════════════════════════════════════════ */
function initCursor() {
  if (window.matchMedia('(pointer:coarse)').matches) return;
  const dot  = document.getElementById('cursor');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  let rx = 0, ry = 0, mx = 0, my = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

  function tick() {
    if (dot) { dot.style.left = mx + 'px'; dot.style.top = my + 'px'; }
    rx += (mx - rx) * .14;
    ry += (my - ry) * .14;
    if (ring) { ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

  document.querySelectorAll('a, button, .sidebar-item, .ticket-card, .os-window, .scat-card, .ref-card').forEach(el => {
    el.addEventListener('mouseenter', () => { dot?.classList.add('hover'); ring?.classList.add('hover'); });
    el.addEventListener('mouseleave', () => { dot?.classList.remove('hover'); ring?.classList.remove('hover'); });
  });
}

/* ═══════════════════════════════════════════
   NETWORK CANVAS
═══════════════════════════════════════════ */
function initNetworkCanvas() {
  const canvas = document.getElementById('network-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H;
  const nodes = [
    { label:'Douala',    px:.5,  py:.5,  color:'#00F5C0', r:6, pulse:0 },
    { label:'MINUSCA',   px:.75, py:.22, color:'#0EA5E9', r:5, pulse:0 },
    { label:'IFP CAFOR', px:.25, py:.2,  color:'#22C55E', r:5, pulse:0 },
    { label:'INTELCIA',  px:.82, py:.72, color:'#F59E0B', r:4, pulse:0 },
    { label:'ISLTI',     px:.18, py:.75, color:'#0EA5E9', r:4, pulse:0 },
    { label:'Genius',    px:.5,  py:.85, color:'#22C55E', r:4, pulse:0 },
  ];
  const edges = [
    [0,1],[0,2],[0,3],[0,4],[0,5],[1,2],[3,4]
  ];

  // Packets travelling along edges
  const packets = edges.map(([a,b]) => ({ a, b, t: Math.random(), speed: .003 + Math.random()*.003 }));

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Edges
    edges.forEach(([a, b]) => {
      const na = nodes[a], nb = nodes[b];
      const x1 = na.px * W, y1 = na.py * H;
      const x2 = nb.px * W, y2 = nb.py * H;
      const grad = ctx.createLinearGradient(x1, y1, x2, y2);
      grad.addColorStop(0, na.color + '30');
      grad.addColorStop(1, nb.color + '30');
      ctx.beginPath();
      ctx.moveTo(x1, y1); ctx.lineTo(x2, y2);
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1;
      ctx.stroke();
    });

    // Packets
    packets.forEach(p => {
      p.t += p.speed;
      if (p.t > 1) p.t = 0;
      const na = nodes[p.a], nb = nodes[p.b];
      const x = na.px * W + (nb.px * W - na.px * W) * p.t;
      const y = na.py * H + (nb.py * H - na.py * H) * p.t;
      ctx.beginPath();
      ctx.arc(x, y, 2, 0, Math.PI * 2);
      ctx.fillStyle = na.color + 'CC';
      ctx.fill();
    });

    // Nodes
    nodes.forEach(n => {
      const x = n.px * W, y = n.py * H;
      n.pulse = (n.pulse + .025) % (Math.PI * 2);
      const r = n.r + Math.sin(n.pulse) * 1.5;

      // Pulse ring
      const pulseAlpha = (.4 + .3 * Math.sin(n.pulse));
      const pulseR = r + 6 + 4 * Math.abs(Math.sin(n.pulse));
      ctx.beginPath(); ctx.arc(x, y, pulseR, 0, Math.PI*2);
      ctx.strokeStyle = n.color + Math.round(pulseAlpha * 255).toString(16).padStart(2,'0');
      ctx.lineWidth = 1; ctx.stroke();

      // Core
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI*2);
      ctx.fillStyle = n.color;
      ctx.fill();

      // Label
      ctx.font = '10px JetBrains Mono, monospace';
      ctx.fillStyle = n.color + 'CC';
      ctx.fillText(n.label, x + r + 5, y + 4);
    });

    frame++;
    if (frame % 2 === 0) requestAnimationFrame(draw); // ~30fps
    else requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
}

/* ═══════════════════════════════════════════
   HERO TERMINAL ANIMATION
═══════════════════════════════════════════ */
function initHeroTerminal() {
  const body = document.getElementById('terminal-body');
  if (!body) return;

  const lines = [
    { delay:  200, type:'comment', text:'# booting georges-marcel.sys...' },
    { delay:  500, type:'cmd',     text:'root@gm:~$ load --module support_itil' },
    { delay:  800, type:'ok',      text:'  ✓ ITIL N1/N2 · MINUSCA · INTELCIA' },
    { delay: 1100, type:'cmd',     text:'root@gm:~$ load --module dev_fullstack' },
    { delay: 1400, type:'ok',      text:'  ✓ Django · React · Laravel · PostgreSQL' },
    { delay: 1700, type:'cmd',     text:'root@gm:~$ load --module community_mgr' },
    { delay: 2000, type:'ok',      text:'  ✓ Facebook · WhatsApp · Analytics' },
    { delay: 2300, type:'cmd',     text:'root@gm:~$ check --status availability' },
    { delay: 2600, type:'cyan',    text:'  ◉ STATUS: DISPONIBLE IMMÉDIATEMENT ✓' },
    { delay: 2900, type:'warn',    text:'  ⚡ location: Douala, Cameroun · FR/EN' },
  ];

  lines.forEach(({ delay, type, text }) => {
    setTimeout(() => {
      const el = document.createElement('div');
      el.className = `tl t-${type}`;
      el.textContent = text;
      body.appendChild(el);
      body.scrollTop = body.scrollHeight;
    }, delay);
  });
}

/* ═══════════════════════════════════════════
   TYPEWRITER
═══════════════════════════════════════════ */
function initTypewriter() {
  const el = document.getElementById('tw-text');
  if (!el) return;

  const roles = {
    fr:['Support IT Helpdesk N1/N2', 'Développeur Web Full-Stack', 'Admin Systèmes & Réseaux', 'Community Manager', 'Consultant IT ONU'],
    en:['IT Helpdesk Support N1/N2', 'Full-Stack Web Developer', 'Systems & Network Admin', 'Community Manager', 'UN IT Consultant'],
  };

  let ri = 0, ci = 0, deleting = false;

  function tick() {
    const list = roles[currentLang];
    const word = list[ri % list.length];
    if (deleting) {
      ci--;
      el.textContent = word.slice(0, ci);
      if (ci <= 0) { deleting = false; ri++; setTimeout(tick, 500); return; }
      setTimeout(tick, 40);
    } else {
      ci++;
      el.textContent = word.slice(0, ci);
      if (ci >= word.length) { deleting = true; setTimeout(tick, 2200); return; }
      setTimeout(tick, 65);
    }
  }
  setTimeout(tick, 3200);
}

/* ═══════════════════════════════════════════
   COUNTERS
═══════════════════════════════════════════ */
function initCounters() {
  const els = document.querySelectorAll('.hstat-num[data-count]');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      io.unobserve(e.target);
      const target = +e.target.dataset.count;
      let n = 0; const step = target / 35;
      const iv = setInterval(() => {
        n = Math.min(n + step, target);
        e.target.textContent = Math.round(n);
        if (n >= target) clearInterval(iv);
      }, 35);
    });
  }, { threshold: .5 });
  els.forEach(el => io.observe(el));
}

/* ═══════════════════════════════════════════
   RADAR CHART
═══════════════════════════════════════════ */
function initRadarChart() {
  const svg = document.getElementById('radar-svg');
  const legendEl = document.getElementById('radar-legend');
  if (!svg) return;

  const cx = 160, cy = 160, maxR = 110;
  const axes = [
    { label:'Systèmes',  labelEN:'Systems',   value:.95, color:'#00F5C0' },
    { label:'Réseaux',   labelEN:'Networks',   value:.90, color:'#0EA5E9' },
    { label:'Dev Web',   labelEN:'Dev Web',    value:.88, color:'#22C55E' },
    { label:'Community', labelEN:'Community',  value:.85, color:'#F59E0B' },
    { label:'Soft Skills',labelEN:'Soft Skills',value:.92, color:'#A78BFA' },
  ];
  const N = axes.length;
  const angleStep = (Math.PI * 2) / N;
  const startAngle = -Math.PI / 2;

  function polarToXY(angle, r) {
    return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
  }

  let svgHTML = '';

  // Grid rings
  [.25,.5,.75,1].forEach(f => {
    const pts = axes.map((_, i) => {
      const p = polarToXY(startAngle + i * angleStep, maxR * f);
      return `${p.x},${p.y}`;
    }).join(' ');
    svgHTML += `<polygon points="${pts}" fill="none" stroke="rgba(0,245,192,0.08)" stroke-width="1"/>`;
  });

  // Axes lines
  axes.forEach((_, i) => {
    const p = polarToXY(startAngle + i * angleStep, maxR);
    svgHTML += `<line x1="${cx}" y1="${cy}" x2="${p.x}" y2="${p.y}" stroke="rgba(0,245,192,0.12)" stroke-width="1"/>`;
  });

  // Data polygon (starts at 0, animated to full via class)
  const dataPoints = axes.map((a, i) => {
    const p = polarToXY(startAngle + i * angleStep, maxR * a.value);
    return `${p.x},${p.y}`;
  }).join(' ');
  svgHTML += `<polygon id="radar-poly" points="${dataPoints}" fill="rgba(0,245,192,0.1)" stroke="#00F5C0" stroke-width="1.5" opacity="0"/>`;

  // Axis labels
  axes.forEach((a, i) => {
    const angle = startAngle + i * angleStep;
    const p = polarToXY(angle, maxR + 22);
    svgHTML += `<text x="${p.x}" y="${p.y}" text-anchor="middle" dominant-baseline="middle" font-family="JetBrains Mono, monospace" font-size="10" fill="rgba(212,232,240,0.7)" class="radar-lbl" data-fr="${a.label}" data-en="${a.labelEN}">${a.label}</text>`;
  });

  // Value dots
  axes.forEach((a, i) => {
    const p = polarToXY(startAngle + i * angleStep, maxR * a.value);
    svgHTML += `<circle cx="${p.x}" cy="${p.y}" r="4" fill="${a.color}" opacity="0" class="radar-dot"/>`;
  });

  svg.innerHTML = svgHTML;

  // Animate on scroll
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      io.unobserve(e.target);
      const poly = document.getElementById('radar-poly');
      const dots = document.querySelectorAll('.radar-dot');
      if (poly) {
        poly.style.transition = 'opacity .8s ease';
        poly.style.opacity = '1';
      }
      dots.forEach((d, i) => {
        d.style.transition = `opacity .4s ${i*.1}s ease`;
        d.style.opacity = '1';
      });
    });
  }, { threshold:.3 });
  io.observe(svg);

  // Legend
  if (legendEl) {
    legendEl.innerHTML = axes.map(a =>
      `<div class="radar-legend-item">
        <div class="radar-legend-dot" style="background:${a.color}"></div>
        <span class="rl-lbl" data-fr="${a.label}" data-en="${a.labelEN}">${a.label}</span>
       </div>`
    ).join('');
  }
}

/* ═══════════════════════════════════════════
   SKILL BARS
═══════════════════════════════════════════ */
function initSkillBars() {
  const fills = document.querySelectorAll('.sbar-fill');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      io.unobserve(e.target);
      e.target.style.width = e.target.dataset.w + '%';
    });
  }, { threshold:.3 });
  fills.forEach(f => io.observe(f));
}

/* ═══════════════════════════════════════════
   OS WINDOWS 3D TILT
═══════════════════════════════════════════ */
function initOSTilt() {
  document.querySelectorAll('.os-window').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width  - .5;
      const y = (e.clientY - rect.top)  / rect.height - .5;
      card.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 6}deg) scale(1.02)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(800px) rotateY(0) rotateX(0) scale(1)';
      card.style.transition = 'transform .5s ease';
    });
    card.addEventListener('mouseenter', () => {
      card.style.transition = 'transform .1s ease';
    });
  });
}

/* ═══════════════════════════════════════════
   REVEAL ON SCROLL
═══════════════════════════════════════════ */
function initReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold:.1 });
  document.querySelectorAll('.reveal').forEach((el, i) => {
    el.style.transitionDelay = (i % 6) * .08 + 's';
    io.observe(el);
  });
}

/* ═══════════════════════════════════════════
   SIDEBAR ACTIVE + PROGRESS
═══════════════════════════════════════════ */
function initSidebar() {
  const fill     = document.getElementById('sidebar-scroll-fill');
  const items    = document.querySelectorAll('.sidebar-item[data-section]');
  const sections = [...document.querySelectorAll('section[id]')];

  // Mobile menu
  const btn      = document.getElementById('mobile-menu-btn');
  const sidebar  = document.getElementById('sidebar');
  const overlay  = document.getElementById('sidebar-overlay');

  function closeMenu() {
    sidebar?.classList.remove('mobile-open');
    overlay?.classList.remove('active');
    btn?.classList.remove('open');
    btn?.setAttribute('aria-expanded', 'false');
  }
  btn?.addEventListener('click', () => {
    const open = sidebar?.classList.toggle('mobile-open');
    overlay?.classList.toggle('active', open);
    btn?.classList.toggle('open', open);
    btn?.setAttribute('aria-expanded', String(open));
  });
  overlay?.addEventListener('click', closeMenu);
  document.querySelectorAll('.sidebar-item').forEach(a => a.addEventListener('click', () => {
    if (window.innerWidth < 769) closeMenu();
  }));

  // Scroll: progress + active section
  function onScroll() {
    const scrolled = window.scrollY;
    const total    = document.documentElement.scrollHeight - window.innerHeight;
    if (fill) fill.style.width = Math.min(100, (scrolled / total) * 100) + '%';

    let current = sections[0]?.id || 'hero';
    sections.forEach(sec => {
      if (scrolled + window.innerHeight / 3 >= sec.offsetTop) current = sec.id;
    });
    items.forEach(item => item.classList.toggle('active', item.dataset.section === current));
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Smooth scroll with offset
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
    });
  });
}

/* ═══════════════════════════════════════════
   THEME TOGGLE
═══════════════════════════════════════════ */
function initThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;

  const saved = localStorage.getItem('gm_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);

  btn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('gm_theme', next);
    playClick();
  });
}

/* ═══════════════════════════════════════════
   LANGUAGE TOGGLE
═══════════════════════════════════════════ */
function applyLang(lang) {
  currentLang = lang;
  const t = I18N[lang];

  // data-i18n attributes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t[key];
      } else {
        el.innerHTML = t[key];
      }
    }
  });

  // data-i18n-placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key]) el.placeholder = t[key];
  });

  // Radar labels
  document.querySelectorAll('.radar-lbl').forEach(el => {
    el.textContent = lang === 'en' ? el.dataset.en : el.dataset.fr;
  });
  document.querySelectorAll('.rl-lbl').forEach(el => {
    el.textContent = lang === 'en' ? el.dataset.en : el.dataset.fr;
  });

  // Lang button
  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) langBtn.textContent = lang === 'fr' ? 'EN' : 'FR';

  localStorage.setItem('gm_lang', lang);
}

function initLangToggle() {
  const btn = document.getElementById('lang-toggle');
  if (!btn) return;
  const saved = localStorage.getItem('gm_lang') || 'fr';
  applyLang(saved);

  btn.addEventListener('click', () => {
    applyLang(currentLang === 'fr' ? 'en' : 'fr');
    playClick();
  });
}

/* ═══════════════════════════════════════════
   SOUND FX
═══════════════════════════════════════════ */
function getAudioCtx() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
}
function playClick() {
  if (!soundEnabled) return;
  try {
    const ctx  = getAudioCtx();
    const osc  = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    osc.frequency.value = 800;
    osc.type = 'square';
    gain.gain.setValueAtTime(.06, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(.001, ctx.currentTime + .06);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + .06);
  } catch(e) {}
}
function initSound() {
  const btn = document.getElementById('sound-toggle');
  if (!btn) return;
  const saved = localStorage.getItem('gm_sound') === 'true';
  soundEnabled = saved;
  document.body.classList.toggle('sound-muted', !soundEnabled);

  btn.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    document.body.classList.toggle('sound-muted', !soundEnabled);
    localStorage.setItem('gm_sound', soundEnabled);
    btn.classList.toggle('active', soundEnabled);
    if (soundEnabled) playClick();
  });

  // Click sound on all interactive elements
  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('click', () => playClick());
  });
}

/* ═══════════════════════════════════════════
   CV DOWNLOAD COUNTER
═══════════════════════════════════════════ */
function initCVCounter() {
  const base   = 47;
  const stored = parseInt(localStorage.getItem('gm_cv_count') || base, 10);
  const display = stored;

  document.querySelectorAll('#cv-dl-count, #cv-dl-count2').forEach(el => {
    if (el) el.textContent = display;
  });

  document.querySelectorAll('#cv-download-btn, #cv-btn-contact').forEach(btn => {
    btn?.addEventListener('click', () => {
      const next = display + 1;
      localStorage.setItem('gm_cv_count', next);
      document.querySelectorAll('#cv-dl-count, #cv-dl-count2').forEach(el => {
        if (el) el.textContent = next;
      });
    });
  });
}

/* ═══════════════════════════════════════════
   STATUS TIMESTAMP
═══════════════════════════════════════════ */
function initStatusTimestamp() {
  const el = document.getElementById('status-ts');
  if (!el) return;
  function update() {
    const now = new Date();
    el.textContent = now.toLocaleTimeString('fr-FR', { hour:'2-digit', minute:'2-digit', second:'2-digit' });
  }
  update();
  setInterval(update, 1000);
}

/* ═══════════════════════════════════════════
   MISSION TYPE SELECTOR
═══════════════════════════════════════════ */
function initMissionType() {
  const grid   = document.getElementById('mission-type-grid');
  const hidden = document.getElementById('cf-type');
  if (!grid) return;

  grid.querySelectorAll('.mtype-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      grid.querySelectorAll('.mtype-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      if (hidden) hidden.value = btn.dataset.type;
      playClick();
    });
  });
}

/* ═══════════════════════════════════════════
   EMAILJS CONFIGURATION
═══════════════════════════════════════════ */
// Configure EmailJS - Replace with your actual service ID, template ID, and public key
const EMAILJS_SERVICE_ID = 'service_g7kqgnx';
const EMAILJS_CONTACT_TEMPLATE = 'template_vf60d99';
const EMAILJS_QUOTE_TEMPLATE = 'template_vf60d99';
const EMAILJS_PUBLIC_KEY = 'eJeX74xmPYniU8P9m';

function initEmailJS() {
  if (typeof emailjs !== 'undefined') {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }
}

/* ═══════════════════════════════════════════
   CONTACT FORM + TICKET ANIMATION
═══════════════════════════════════════════ */
function initContactForm() {
  const form     = document.getElementById('contact-form');
  const overlay  = document.getElementById('ticket-created');
  const tcBody   = document.getElementById('tc-body');
  const tcClose  = document.getElementById('tc-close');
  const btnTxt   = document.getElementById('btn-submit-txt');
  const charEl   = document.getElementById('char-count');
  const msgEl    = document.getElementById('cf-message');
  if (!form) return;

  // Live char count
  msgEl?.addEventListener('input', () => {
    const len = msgEl.value.length;
    if (charEl) charEl.textContent = len;
    msgEl.style.borderColor = len > 500 ? 'var(--red)' : '';
  });

  tcClose?.addEventListener('click', () => {
    overlay?.classList.remove('show');
    overlay?.setAttribute('aria-hidden', 'true');
  });

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const name  = form.querySelector('#cf-name')?.value.trim();
    const email = form.querySelector('#cf-email')?.value.trim();
    const msg   = form.querySelector('#cf-message')?.value.trim();
    const subj  = form.querySelector('#cf-subject')?.value.trim();
    const mtype = document.getElementById('cf-type')?.value || 'support';

    if (!name || !email || !msg) {
      shakeForm(form);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      shakeForm(form);
      return;
    }

    // Send via EmailJS if configured
    if (typeof emailjs !== 'undefined' && EMAILJS_SERVICE_ID !== 'YOUR_SERVICE_ID') {
      try {
        btnTxt.textContent = 'Envoi...';
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_CONTACT_TEMPLATE, {
          from_name: name,
          from_email: email,
          subject: subj,
          message: msg,
          mission_type: mtype,
        });
      } catch (error) {
        console.error('EmailJS error:', error);
        // Continue with animation even if email fails
      }
    }

    if (btnTxt) btnTxt.textContent = currentLang === 'fr' ? 'Création du ticket...' : 'Creating ticket...';
    form.querySelector('#btn-submit').disabled = true;
    await new Promise(r => setTimeout(r, 1200));

    const ticketId = Math.floor(Math.random() * 90000) + 10000;
    const ts = new Date().toLocaleString('fr-FR');

    if (tcBody && overlay) {
      const lines = [
        `> ticket.sys --create --type ${mtype}`,
        ``,
        `[TICKET #${ticketId}] CREATED ✓`,
        `Status  : OPEN`,
        `From    : ${name} <${email}>`,
        `Subject : ${subj || mtype}`,
        `Date    : ${ts}`,
        ``,
        `> Merci ! Je vous répondrai sous 24h.`,
        `> contact@georgesedimo.com`,
      ];
      tcBody.innerHTML = '';
      overlay.classList.add('show');
      overlay.setAttribute('aria-hidden', 'false');
      lines.forEach((line, i) => {
        setTimeout(() => {
          const el = document.createElement('div');
          el.textContent = line || '\u00a0';
          tcBody.appendChild(el);
          tcBody.scrollTop = tcBody.scrollHeight;
        }, i * 90);
      });
    }

    form.reset();
    if (charEl) charEl.textContent = '0';
    if (btnTxt) btnTxt.textContent = I18N[currentLang].submit_btn;
    form.querySelector('#btn-submit').disabled = false;
    // Reset mission type
    document.querySelectorAll('.mtype-btn').forEach((b, i) => b.classList.toggle('active', i === 0));
  });
}

function shakeForm(form) {
  form.animate([
    { transform:'translateX(-6px)' },
    { transform:'translateX(6px)' },
    { transform:'translateX(-4px)' },
    { transform:'translateX(4px)' },
    { transform:'translateX(0)' },
  ], { duration: 300 });
}

/* ═══════════════════════════════════════════
   KONAMI CODE
═══════════════════════════════════════════ */
function initKonami() {
  const seq = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','KeyB','KeyA'];
  let idx = 0;
  const overlay = document.getElementById('konami-overlay');
  const body    = document.getElementById('konami-body');
  const closeBtn = document.getElementById('konami-close');

  document.addEventListener('keydown', e => {
    if (e.code === seq[idx]) {
      idx++;
      if (idx === seq.length) {
        idx = 0;
        openKonami();
      }
    } else {
      idx = e.code === seq[0] ? 1 : 0;
    }
  });

  closeBtn?.addEventListener('click', () => {
    overlay?.classList.remove('active');
  });
  overlay?.addEventListener('click', e => {
    if (e.target === overlay) overlay.classList.remove('active');
  });

  function openKonami() {
    if (!overlay || !body) return;
    overlay.classList.add('active');
    body.innerHTML = '';

    const lines = [
      '> sudo su -',
      '[sudo] password for user: **************',
      '',
      'root@georges-marcel:~# whoami',
      'MOUSSANGO EDIMO GEORGES MARCEL',
      '',
      'root@georges-marcel:~# cat /etc/profile.d/secret.conf',
      '',
      '┌─ CLASSIFIED INFORMATION ──────────────────┐',
      '│  FNE: CO1-2018-2399                        │',
      '│  Clearance: MINUSCA / NATIONS UNIES        │',
      '│  Cert: Cisco CCNA (in progress)            │',
      '│  Easter egg: FOUND ✓                       │',
      '│  Skills: 40+ technologies                  │',
      '│  Coffee consumed: ∞ cups                   │',
      '└────────────────────────────────────────────┘',
      '',
      '> "Un bon admin IT ne dort jamais vraiment,',
      '>  il fait juste du monitoring les yeux fermés."',
      '',
      '> Bravo d\'avoir trouvé cet easter egg !',
      '> contact@georgesedimo.com',
    ];

    lines.forEach((line, i) => {
      setTimeout(() => {
        const el = document.createElement('div');
        el.textContent = line || '\u00a0';
        body.appendChild(el);
        body.scrollTop = body.scrollHeight;
      }, i * 80);
    });
  }
}

/* ═══════════════════════════════════════════
   HERO SCROLL CUE CLICK
═══════════════════════════════════════════ */
function initHeroScrollCue() {
  const el = document.getElementById('hero-scroll-cue');
  el?.addEventListener('click', () => {
    document.getElementById('live-status')?.scrollIntoView({ behavior:'smooth' });
  });
}

/* ═══════════════════════════════════════════
   PROJECT FILTERS
═══════════════════════════════════════════ */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projects = document.querySelectorAll('.os-window');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter projects
      projects.forEach(proj => {
        const categories = proj.dataset.category || '';
        if (filter === 'all' || categories.includes(filter)) {
          proj.classList.remove('hidden');
        } else {
          proj.classList.add('hidden');
        }
      });

      playClick();
    });
  });
}

/* ═══════════════════════════════════════════
   PROJECT MODAL
═══════════════════════════════════════════ */
const projectDetails = {
  'proj-1': {
    title: 'Système d\'Information IFP CAFOR',
    description: 'Déploiement complet de l\'infrastructure IT pour l\'Institut de Formation Professionnelle CAFOR. Ce projet comprenait la mise en place d\'un réseau LAN/Wi-Fi sécurisé, l\'administration de serveurs Windows Server, le développement du site web institutionnel ifpcafor.com, et la gestion des bases de données MySQL/PostgreSQL.',
    technologies: ['Windows Server', 'MySQL', 'PostgreSQL', 'PHP', 'WordPress', 'LAN', 'Wi-Fi', 'PSSI'],
    duration: '6 mois',
    role: 'Responsable SI'
  },
  'proj-2': {
    title: 'Infrastructure Réseau MINUSCA / UN',
    description: 'Consultant IT auprès des Nations Unies (MINUSCA) de 2019 à 2024. Mise en réseau des systèmes d\'impression multi-sites, gestion des logiciels et migrations, infrastructure Wi-Fi sécurisée, et support technique pour les bureaux de Douala.',
    technologies: ['Wi-Fi', 'Réseau', 'Windows Server', 'Print Management', 'Migration', 'Support IT'],
    duration: '2019-2024',
    role: 'Consultant IT'
  },
  'proj-3': {
    title: 'Applications Web Full-Stack',
    description: 'Développement d\'applications web modernes utilisant les technologies React, Django et Node.js. Création d\'APIs RESTful, bases de données PostgreSQL, et interfaces utilisateur réactives avec gestion d\'état.',
    technologies: ['React', 'Django', 'Node.js', 'PostgreSQL', 'REST API', 'JavaScript', 'CSS3'],
    duration: 'En cours',
    role: 'Développeur Full-Stack'
  }
};

function initProjectModal() {
  const modal = document.getElementById('project-modal');
  const overlay = document.getElementById('modal-overlay');
  const closeBtn = document.getElementById('modal-close');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  const projects = document.querySelectorAll('.os-window');

  // Open modal on project click
  projects.forEach(proj => {
    proj.addEventListener('click', () => {
      const projId = proj.id;
      const details = projectDetails[projId];

      if (details) {
        modalTitle.textContent = details.title;
        modalBody.innerHTML = `
          <div class="modal-section">
            <div class="modal-section-title">Description</div>
            <p class="modal-description">${details.description}</p>
          </div>
          <div class="modal-section">
            <div class="modal-section-title">Technologies</div>
            <div class="modal-tech-list">
              ${details.technologies.map(tech => `<span class="modal-tech-item">${tech}</span>`).join('')}
            </div>
          </div>
          <div class="modal-section">
            <div class="modal-section-title">Informations</div>
            <p class="modal-description">
              <strong>Durée:</strong> ${details.duration}<br>
              <strong>Rôle:</strong> ${details.role}
            </p>
          </div>
        `;
        modal.classList.add('show');
        modal.setAttribute('aria-hidden', 'false');
        playClick();
      }
    });
  });

  // Close modal
  const closeModal = () => {
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
  };

  closeBtn?.addEventListener('click', closeModal);
  overlay?.addEventListener('click', closeModal);

  // Close on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
      closeModal();
    }
  });
}

/* ═══════════════════════════════════════════
   TESTIMONIALS CAROUSEL
═══════════════════════════════════════════ */
function initTestimonialsCarousel() {
  const track = document.getElementById('testimonial-track');
  const items = document.querySelectorAll('.testimonial-item');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.getElementById('testimonial-prev');
  const nextBtn = document.getElementById('testimonial-next');

  let currentIndex = 0;
  let autoPlayInterval;

  function showTestimonial(index) {
    items.forEach((item, i) => {
      item.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
    currentIndex = index;
  }

  function nextTestimonial() {
    const nextIndex = (currentIndex + 1) % items.length;
    showTestimonial(nextIndex);
  }

  function prevTestimonial() {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    showTestimonial(prevIndex);
  }

  function startAutoPlay() {
    autoPlayInterval = setInterval(nextTestimonial, 5000);
  }

  function stopAutoPlay() {
    clearInterval(autoPlayInterval);
  }

  // Navigation buttons
  prevBtn?.addEventListener('click', () => {
    prevTestimonial();
    stopAutoPlay();
    startAutoPlay();
    playClick();
  });

  nextBtn?.addEventListener('click', () => {
    nextTestimonial();
    stopAutoPlay();
    startAutoPlay();
    playClick();
  });

  // Dot navigation
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showTestimonial(index);
      stopAutoPlay();
      startAutoPlay();
      playClick();
    });
  });

  // Start autoplay
  startAutoPlay();

  // Pause on hover
  track?.addEventListener('mouseenter', stopAutoPlay);
  track?.addEventListener('mouseleave', startAutoPlay);
}

/* ═══════════════════════════════════════════
   PRESENTATION MODE
═══════════════════════════════════════════ */
function initPresentationMode() {
  const toggleBtn = document.getElementById('presentation-toggle');
  const sections = ['hero', 'live-status', 'about', 'skills', 'experience', 'projects', 'testimonials', 'blog', 'quote', 'contact'];
  
  let isPresentationActive = false;
  let currentSectionIndex = 0;
  let presentationInterval;
  let synth = window.speechSynthesis;

  const presentationTexts = {
    fr: [
      "Bienvenue sur mon portfolio. Je suis Georges Marcel, développeur Full-Stack et expert IT.",
      "Je suis actuellement disponible pour de nouvelles missions.",
      "Découvrez mon parcours et mes compétences.",
      "Mes compétences techniques incluent le développement web, l'administration réseaux et le support IT.",
      "Plus de 9 ans d'expérience professionnelle.",
      "Voici quelques-uns de mes projets récents.",
      "Voici ce que mes clients disent de mon travail.",
      "Découvrez mes articles techniques sur l'IT.",
      "N'hésitez pas à me contacter pour vos projets.",
      "Merci de votre attention."
    ],
    en: [
      "Welcome to my portfolio. I am Georges Marcel, Full-Stack developer and IT expert.",
      "I am currently available for new missions.",
      "Discover my background and skills.",
      "My technical skills include web development, network administration and IT support.",
      "Over 9 years of professional experience.",
      "Here are some of my recent projects.",
      "Here's what my clients say about my work.",
      "Discover my technical articles on IT.",
      "Feel free to contact me for your projects.",
      "Thank you for your attention."
    ]
  };

  function speak(text) {
    if (synth && isPresentationActive) {
      synth.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = currentLang === 'fr' ? 'fr-FR' : 'en-US';
      utterance.rate = 0.9;
      synth.speak(utterance);
    }
  }

  function scrollToSection(index) {
    const section = document.getElementById(sections[index]);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      const texts = presentationTexts[currentLang] || presentationTexts.fr;
      speak(texts[index] || '');
    }
  }

  function startPresentation() {
    isPresentationActive = true;
    currentSectionIndex = 0;
    toggleBtn.classList.add('active');
    
    scrollToSection(currentSectionIndex);
    
    presentationInterval = setInterval(() => {
      currentSectionIndex = (currentSectionIndex + 1) % sections.length;
      scrollToSection(currentSectionIndex);
    }, 8000);
  }

  function stopPresentation() {
    isPresentationActive = false;
    toggleBtn.classList.remove('active');
    clearInterval(presentationInterval);
    if (synth) {
      synth.cancel();
    }
  }

  toggleBtn?.addEventListener('click', () => {
    playClick();
    if (isPresentationActive) {
      stopPresentation();
    } else {
      startPresentation();
    }
  });

  // Stop on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && isPresentationActive) {
      stopPresentation();
    }
  });
}

/* ═══════════════════════════════════════════
   QUOTE FORM
═══════════════════════════════════════════ */
function initQuoteForm() {
  const form = document.getElementById('quote-form');
  const overlay = document.getElementById('quote-sent');
  const body = document.getElementById('qs-body');
  const closeBtn = document.getElementById('qs-close');
  const btnTxt = document.getElementById('btn-quote-txt');

  if (!form || !overlay || !body) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const formData = new FormData(form);
    const services = Array.from(document.querySelectorAll('.quote-service-input:checked')).map(el => el.value);

    // Send via EmailJS if configured
    if (typeof emailjs !== 'undefined' && EMAILJS_SERVICE_ID !== 'YOUR_SERVICE_ID') {
      try {
        if (btnTxt) btnTxt.textContent = 'Envoi...';
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_QUOTE_TEMPLATE, {
          from_name: formData.get('name'),
          from_email: formData.get('email'),
          company: formData.get('company'),
          phone: formData.get('phone'),
          budget: formData.get('budget'),
          deadline: formData.get('deadline'),
          details: formData.get('details'),
          services: services.join(', '),
        });
      } catch (error) {
        console.error('EmailJS error:', error);
        // Continue with animation even if email fails
      }
    }

    // Generate terminal output
    const lines = [
      '> quote_request --init',
      '> processing data...',
      '',
      `> Client: ${formData.get('name')}`,
      `> Email: ${formData.get('email')}`,
      formData.get('company') ? `> Company: ${formData.get('company')}` : '',
      formData.get('phone') ? `> Phone: ${formData.get('phone')}` : '',
      '',
      '> Services selected:',
      ...services.map(s => `>   - ${s.toUpperCase()}`),
      '',
      `> Budget: ${formData.get('budget') || 'Not specified'}`,
      `> Deadline: ${formData.get('deadline') || 'Flexible'}`,
      '',
      '> ✓ Quote request sent successfully!',
      '> Response expected within 24h',
      '> Thank you for your interest!',
    ].filter(Boolean);

    body.innerHTML = '';
    lines.forEach((line, i) => {
      setTimeout(() => {
        const el = document.createElement('div');
        el.textContent = line;
        body.appendChild(el);
        body.scrollTop = body.scrollHeight;
      }, i * 100);
    });

    overlay.classList.add('show');
    form.reset();
  });

  closeBtn?.addEventListener('click', () => {
    overlay.classList.remove('show');
  });

  overlay?.addEventListener('click', e => {
    if (e.target === overlay) overlay.classList.remove('show');
  });
}

/* ═══════════════════════════════════════════
   INIT ALL
═══════════════════════════════════════════ */
function initAll() {
  initEmailJS();
  initCursor();
  initNetworkCanvas();
  initHeroTerminal();
  initTypewriter();
  initCounters();
  initRadarChart();
  initSkillBars();
  initOSTilt();
  initReveal();
  initSidebar();
  initThemeToggle();
  initLangToggle();
  initSound();
  initCVCounter();
  initStatusTimestamp();
  initProjectFilters();
  initProjectModal();
  initTestimonialsCarousel();
  initPresentationMode();
  initQuoteForm();
  initMissionType();
  initContactForm();
  initKonami();
  initHeroScrollCue();
}

/* ─── ENTRY POINT ─── */
document.addEventListener('DOMContentLoaded', initLoader);
