// --- SPA navigation & contenus dynamiques ---
const pages = {
  accueil: `
    <section class="hero">
      <h1>GÉOTERRIA - Expertise Géotechnique depuis 1998</h1>
      <p>Études de sol et accompagnement technique sur-mesure en région PACA.</p>
      <a href="#contact" class="cta" data-page="contact">Demander un devis</a>
    </section>
  `,
  apropos: `
    <section class="page-section">
      <h1>À propos de GÉOTERRIA</h1>
      <p>Créée en 1998, intégrée au groupe GEOSUP depuis 2020, GÉOTERRIA est un bureau d’études indépendant basé à La Garde et Éguilles. Spécialisée dans les missions G1 à G5, l’histoire de l’entreprise s’inscrit dans une démarche de qualité et d’innovation.</p>
      <h2>Nos engagements</h2>
      <ul>
        <li><strong>Qualité :</strong> Conformité NF-P94-500, encadrement technique rigoureux.</li>
        <li><strong>Responsabilité :</strong> Démarche environnementale concrète, gestion des déchets, véhicules Crit’Air 1-2.</li>
        <li><strong>Excellence :</strong> Investissements continus en matériel, logiciels et formation.</li>
      </ul>
    </section>
  `,
  prestations: `
    <section class="page-section">
      <h1>Nos prestations</h1>
      <div class="services-grid">
        <div class="service-card">
          <h3>Missions géotechniques G1 à G5</h3>
          <p>Études pour avant-projet, conception, exécution, supervision et diagnostic de sinistres.</p>
        </div>
        <div class="service-card">
          <h3>Hydrogéologie</h3>
          <p>NPHE, essais Lefranc/Lugeon, études de débits, protection des ouvrages.</p>
        </div>
        <div class="service-card">
          <h3>Études environnementales</h3>
          <p>Diagnostics SSP, analyses de pollution, réemploi de matériaux.</p>
        </div>
        <div class="service-card">
          <h3>Instrumentation</h3>
          <p>Mesures de terrain, auscultation d’ouvrages, contrôles de compactage.</p>
        </div>
      </div>
    </section>
  `,
  equipe: `
    <section class="page-section">
      <h1>Notre équipe</h1>
      <div class="team-grid" id="team-grid">
        <div class="team-card" data-member="samuel">
          
          <h3>Samuel Turle</h3>
          <p>Directeur Général</p>
          <a href="mailto:samuel.turle@email.com">samuel.turle@email.com</a>
        </div>
        <div class="team-card" data-member="pierre">
         
          <h3>Pierre Barneoud-Rousset</h3>
          <p>Directeur Technique</p>
          <a href="mailto:pierre.barneoud@email.com">pierre.barneoud@email.com</a>
        </div>
        <div class="team-card" data-member="stephane">
          
          <h3>Stéphane Castells</h3>
          <p>Responsable Projet</p>
          <a href="mailto:stephane.castells@email.com">stephane.castells@email.com</a>
        </div>
        <div class="team-card" data-member="sarah">
          
          <h3>Sarah Texier</h3>
          <p>Responsable Toulon</p>
          <a href="mailto:sarah.texier@email.com">sarah.texier@email.com</a>
        </div>
        <div class="team-card" data-member="zayad">
          
          <h3>Zayad Kaddouri</h3>
          <p>Responsable Aix</p>
          <a href="mailto:zayad.kaddouri@email.com">zayad.kaddouri@email.com</a>
        </div>
        <div class="team-card" data-member="kevin">
          
          <h3>Kévin Fagot</h3>
          <p>Chargé d'Affaires</p>
          <a href="mailto:kevin.fagot@email.com">kevin.fagot@email.com</a>
        </div>
      </div>
      <!-- Modale fiche membre -->
      <div id="member-modal" class="modal" style="display:none;">
        <div class="modal-content">
          <span class="close-modal" id="close-modal">&times;</span>
          <div id="modal-body"></div>
        </div>
      </div>
    </section>
  `,
  contact: `
    <section class="page-section">
      <h1>Contactez-nous</h1>
      <form class="contact-form" id="contact-form">
        <label for="nom">Nom</label>
        <input type="text" id="nom" required>
        <label for="email">Email</label>
        <input type="email" id="email" required>
        <label for="message">Message</label>
        <textarea id="message" required></textarea>
        <button type="submit">Envoyer</button>
        <p id="msg-sent" style="color:#1d3557;display:none;font-weight:600;margin-top:1em;">Merci pour votre message !</p>
      </form>
      <div class="contact-info">
        <p><strong>Adresse :</strong> 42 Avenue Irène et Jean Frédéric Joliot Curie, 83130 La Garde</p>
        <p><strong>Téléphone :</strong> 04 94 94 21 99</p>
        <p><strong>Email :</strong> contact@geoterria.com</p>
      </div>
      <div class="contact-info" style="margin-top:1em;">
        <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=6.0192%2C43.1243%2C6.0260%2C43.1271&amp;layer=mapnik&amp;marker=43.1257,6.0226"
          style="border:1px solid #ccc; width:100%; max-width:450px; height:200px; border-radius:8px;" allowfullscreen="" loading="lazy"></iframe>
      </div>
    </section>
  `
};

// --- Modal équipe ---
function showMemberModal(memberKey) {
  const memberData = {
    samuel: {
      nom: "Samuel Turle",
      role: "Directeur Général",
      photo: "https://randomuser.me/api/portraits/men/11.jpg",
      mail: "samuel.turle@email.com",
      parcours: "Parcours placeholder pour Samuel.",
      missions: "Missions réalisées : Direction générale, pilotage des projets, etc."
    },
    pierre: {
      nom: "Pierre Barneoud-Rousset",
      role: "Directeur Technique",
      photo: "https://randomuser.me/api/portraits/men/22.jpg",
      mail: "pierre.barneoud@email.com",
      parcours: "Parcours placeholder pour Pierre.",
      missions: "Missions : supervision technique, innovation, etc."
    },
    stephane: {
      nom: "Stéphane Castells",
      role: "Responsable Projet",
      photo: "https://randomuser.me/api/portraits/men/33.jpg",
      mail: "stephane.castells@email.com",
      parcours: "Parcours placeholder pour Stéphane.",
      missions: "Missions : gestion de projet, accompagnement client, etc."
    },
    sarah: {
      nom: "Sarah Texier",
      role: "Responsable Toulon",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
      mail: "sarah.texier@email.com",
      parcours: "Parcours placeholder pour Sarah.",
      missions: "Missions : gestion de l'agence Toulon, relation client, etc."
    },
    zayad: {
      nom: "Zayad Kaddouri",
      role: "Responsable Aix",
      photo: "https://randomuser.me/api/portraits/men/55.jpg",
      mail: "zayad.kaddouri@email.com",
      parcours: "Parcours placeholder pour Zayad.",
      missions: "Missions : développement agence Aix, suivi chantiers, etc."
    },
    kevin: {
      nom: "Kévin Fagot",
      role: "Chargé d'Affaires",
      photo: "https://randomuser.me/api/portraits/men/66.jpg",
      mail: "kevin.fagot@email.com",
      parcours: "Parcours placeholder pour Kévin.",
      missions: "Missions : développement commercial, gestion dossiers clients, etc."
    }
  };
  const m = memberData[memberKey];
  if (!m) return;
  document.getElementById('modal-body').innerHTML = `
    <div class="modal-profile">
      <img src="${m.photo}" alt="${m.nom}">
      <h2>${m.nom}</h2>
      <h4>${m.role}</h4>
      <p><b>Mail :</b> <a href="mailto:${m.mail}">${m.mail}</a></p>
      <p><b>Parcours :</b> ${m.parcours}</p>
      <p><b>Missions accomplies :</b> ${m.missions}</p>
    </div>
  `;
  document.getElementById('member-modal').style.display = 'flex';
}

// --- Navigation SPA ---
function loadPage(page) {
  const content = document.getElementById('main-content');
  content.innerHTML = pages[page] || pages.accueil;
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.toggle('active', link.dataset.page === page);
  });

  // Focus main for accessibility
  if (content) content.focus?.();

  // Contact form feedback
  if (page === "contact") {
    const form = document.getElementById("contact-form");
    const msg = document.getElementById("msg-sent");
    if (form && msg) {
      form.addEventListener("submit", e => {
        e.preventDefault();
        msg.style.display = "block";
        setTimeout(() => { msg.style.display = "none"; }, 3500);
        form.reset();
      });
    }
  }

  // Équipe : logique des cartes + modale
  if (page === "equipe") {
    document.querySelectorAll('.team-card').forEach(card => {
      card.addEventListener('click', () => {
        showMemberModal(card.getAttribute('data-member'));
      });
    });
    const closeModal = document.getElementById('close-modal');
    if (closeModal) {
      closeModal.addEventListener('click', () => {
        document.getElementById('member-modal').style.display = 'none';
      });
    }
    document.getElementById('member-modal').addEventListener('click', e => {
      if (e.target === document.getElementById('member-modal')) {
        document.getElementById('member-modal').style.display = 'none';
      }
    });
  }

  // CTA scroll
  document.querySelectorAll('.cta[data-page]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      loadPage(link.dataset.page);
      window.scrollTo({top: 0, behavior: 'smooth'});
    });
  });
}

function setupNav() {
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      loadPage(link.dataset.page);
      window.scrollTo({top: 0, behavior: 'smooth'});
      if (window.innerWidth < 900) document.getElementById('nav-links').classList.remove('show');
    });
  });
}

function setupBurger() {
  const burger = document.getElementById('burger-menu');
  const nav = document.getElementById('nav-links');
  if (burger && nav) {
    burger.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setupNav();
  setupBurger();
  loadPage('accueil');
});
