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
      <p>Créée en 1998, intégrée au groupe GEOSUP depuis 2020, GÉOTERRIA est un bureau d’études indépendant basé à La Garde et Éguilles. Spécialisée dans les missions G1 à G5, l’entreprise intervient sur tous types de projets en région PACA.</p>
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
        </div>
        <div class="team-card" data-member="pierre">
          <h3>Pierre Barneoud-Rousset</h3>
          <p>Directeur Technique</p>
        </div>
        <div class="team-card" data-member="stephane">
          <h3>Stéphane Castells</h3>
          <p>Responsable Projet</p>
        </div>
        <div class="team-card" data-member="sarah">
          <h3>Sarah Texier</h3>
          <p>Responsable Toulon</p>
        </div>
        <div class="team-card" data-member="zayad">
          <h3>Zayad Kaddouri</h3>
          <p>Responsable Aix</p>
        </div>
        <div class="team-card" data-member="kevin">
          <h3>Kévin Fagot</h3>
          <p>Chargé d'Affaires</p>
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
      parcours: "Parcours placeholder pour Samuel.",
      missions: "Missions réalisées : Direction générale, pilotage des projets, etc."
    },
    pierre: {
      nom: "Pierre Barneoud-Rousset",
      role: "Directeur Technique",
      parcours: "Parcours placeholder pour Pierre.",
      missions: "Missions : supervision technique, innovation, etc."
    },
    stephane: {
      nom: "Stéphane Castells",
      role: "Responsable Projet",
      parcours: "Parcours placeholder pour Stéphane.",
      missions: "Missions : gestion de projet, accompagnement client, etc."
    },
    sarah: {
      nom: "Sarah Texier",
      role: "Responsable Toulon",
      parcours: "Parcours placeholder pour Sarah.",
      missions: "Missions : gestion de l'agence Toulon, relation client, etc."
    },
    zayad: {
      nom: "Zayad Kaddouri",
      role: "Responsable Aix",
      parcours: "Parcours placeholder pour Zayad.",
      missions: "Missions : développement agence Aix, suivi chantiers, etc."
    },
    kevin: {
      nom: "Kévin Fagot",
      role: "Chargé d'Affaires",
      parcours: "Parcours placeholder pour Kévin.",
      missions: "Missions : développement commercial, gestion dossiers clients, etc."
    }
  };
  const m = memberData[memberKey];
  if (!m) return;
  document.getElementById('modal-body').innerHTML = `
    <div class="modal-profile">
      <h2>${m.nom}</h2>
      <h4>${m.role}</h4>
      <p><b>Parcours :</b> ${m.parcours}</p>
      <p><b>Missions accomplies :</b> ${m.missions}</p>
    </div>
  `;
  document.getElementById('member-modal').style.display = 'flex';
}

// Le reste du code (navigation SPA, etc.) ne change pas.
