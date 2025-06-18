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
      <p>Créée en 1998, intégrée au groupe GEOSUP depuis 2020, GÉOTERRIA est un bureau d’études indépendant basé à La Garde et Éguilles. Spécialisée dans les missions G1 à G5, l’hydrogéologie et l’environnement.</p>
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
      <h1>Organigramme Agence Sud 2025</h1>
      <div class="orga-grid">
        <!-- Direction -->
        <div class="orga-group">
          <h2>Direction</h2>
          <div class="team-card">
            <img src="images/samuel-turle.jpg" alt="Samuel TURLE">
            <h3>Samuel TURLE</h3>
            <p>Directeur Général</p>
          </div>
        </div>
        <!-- Technique -->
        <div class="orga-group">
          <h2>Direction Technique</h2>
          <div class="team-card">
            <img src="images/pierre-barneoud.jpg" alt="Pierre BARNEOUD-ROUSSET">
            <h3>Pierre BARNEOUD-ROUSSET</h3>
            <p>Directeur Technique</p>
          </div>
        </div>
        <!-- Support -->
        <div class="orga-group">
          <h2>Support</h2>
          <div class="team-card">
            <img src="images/alexandra-turle.jpg" alt="Alexandra TURLE">
            <h3>Alexandra TURLE</h3>
            <p>RH & Administratif</p>
          </div>
          <div class="team-card">
            <img src="images/jennifer-bonnard.jpg" alt="Jennifer BONNARD">
            <h3>Jennifer BONNARD</h3>
            <p>Comptabilité</p>
          </div>
        </div>
        <!-- SUD -->
        <div class="orga-group">
          <h2>Sud</h2>
          <div class="team-card">
            <img src="images/stephane-castells.jpg" alt="Stéphane CASTELLS">
            <h3>Stéphane CASTELLS</h3>
            <p>Responsable Région Sud & Matériel</p>
          </div>
        </div>
        <!-- Support Sud -->
        <div class="orga-group">
          <h2>Support Sud</h2>
          <div class="team-card">
            <img src="images/clara-pasquini.jpg" alt="Clara PASQUINI">
            <h3>Clara PASQUINI</h3>
            <p>Secrétariat</p>
          </div>
          <div class="team-card">
            <img src="images/alexandra-petit.jpg" alt="Alexandra PETIT">
            <h3>Alexandra PETIT</h3>
            <p>Assistante Chargée d’Affaires</p>
          </div>
        </div>
        <!-- Production Sud -->
        <div class="orga-group">
          <h2>Production Sud</h2>
          <div class="team-card">
            <img src="images/emilie-mus.jpg" alt="Émilie MUS">
            <h3>Émilie MUS</h3>
            <p>Responsable production groupe Région Sud</p>
          </div>
        </div>
        <!-- Agences & Travaux -->
        <div class="orga-group">
          <h2>Agences / Travaux</h2>
          <div class="orga-sub">
            <h3>Toulouse</h3>
            <div class="team-card"><h4>Kévin FAGOT</h4><p>Chargé d’Affaires</p></div>
          </div>
          <div class="orga-sub">
            <h3>Toulon</h3>
            <div class="team-card"><h4>Sarah TEXIER</h4><p>Responsable Toulon</p></div>
            <div class="team-card"><h4>Thibaut DRUMEZ</h4><p>Chargé d’Affaires</p></div>
            <div class="team-card"><h4>Samir MOUDEN</h4><p>Chargé d’Affaires</p></div>
          </div>
          <div class="orga-sub">
            <h3>Aix-en-Provence</h3>
            <div class="team-card"><h4>Zayad KADDOURI</h4><p>Responsable Agence Aix</p></div>
            <div class="team-card"><h4>Babacar NDIAYE</h4><p>Chargé d’Affaires</p></div>
          </div>
          <div class="orga-sub">
            <h3>Conduite Travaux</h3>
            <div class="team-card"><h4>Alexis LARIVE</h4><p>Conducteur de Travaux</p></div>
            <div class="team-card"><h4>Laurent BOUCHON</h4><p>Équipe 1 – EMCI 450.2 & Formation</p></div>
          </div>
          <div class="orga-sub">
            <h3>Équipes Travaux</h3>
            <div class="team-card"><h4>Yves SERVAJAN</h4><p>Équipe 2 – GE0205</p></div>
            <div class="team-card"><h4>Mensah AHIALE</h4><p>Aide</p></div>
            <div class="team-card"><h4>Chérif TIDJANE</h4><p>Équipe 4 – PAGANI</p></div>
            <div class="team-card"><h4>Michel BLANCHARD</h4><p>Équipe 5 – GE0205</p></div>
            <div class="team-card"><h4>Adam BLANCHARD</h4><p>Aide</p></div>
            <div class="team-card"><h4>Nicolas MASUYER</h4><p>Équipe 6 – 450.4</p></div>
            <div class="team-card"><h4>Benoît BOUCHON</h4><p>Aide</p></div>
            <div class="team-card"><h4>Didier DEBONO</h4><p>Équipe 3 – EMCI 450.1</p></div>
            <div class="team-card"><h4>Hugo VILLENAVE</h4><p>Aide</p></div>
          </div>
        </div>
      </div>
      <p style="margin-top:2em;color:#888;text-align:center;">
        <!-- Pour ajouter ou changer des photos, place-les dans /images et modifie le src ci-dessus -->
      </p>
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
  burger.addEventListener('click', () => {
    nav.classList.toggle('show');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setupNav();
  setupBurger();
  loadPage('accueil');
});
