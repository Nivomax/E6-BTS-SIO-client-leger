// JH Drivers - JS principal
// Gestion du formulaire de devis, FAQ, responsive menu, etc.

document.addEventListener('DOMContentLoaded', function () {
  // Gestion boutons exclusifs type de trajet (un seul sélectionné)
  const trajetBtns = document.querySelectorAll('.trajet-btn');
  const typeTrajetInput = document.getElementById('type_trajet');
  if (trajetBtns.length && typeTrajetInput) {
    trajetBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        trajetBtns.forEach(b => b.classList.remove('selected'));
        this.classList.add('selected');
        typeTrajetInput.value = this.dataset.value;
      });
    });
    // Sélectionner par défaut le premier bouton (transfert)
    trajetBtns[0].classList.add('selected');
    typeTrajetInput.value = trajetBtns[0].dataset.value;
  }

  // Gestion boutons exclusifs véhicule
  const vehiculeBtns = document.querySelectorAll('.vehicule-btn');
  const vehiculeInput = document.getElementById('vehicule');
  vehiculeBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      vehiculeBtns.forEach(b => b.classList.remove('selected'));
      this.classList.add('selected');
      if (vehiculeInput) vehiculeInput.value = this.dataset.value;
    });
  });

  // FAQ toggle
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', function () {
      const answer = this.nextElementSibling;
      if (answer.style.display === 'block') {
        answer.style.display = 'none';
      } else {
        document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
        answer.style.display = 'block';
      }
    });
  });

  // Formulaires : message d'envoi (simulation)
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Votre demande a bien été envoyée. Merci !');
      form.reset();
      // Masquer champs retour si besoin
      if (typeTrajet) {
        retourFields.forEach(el => el.style.display = 'none');
        document.querySelectorAll('.retour-fields[type="text"]').forEach(el => el.style.display = 'none');
      }
    });
  });

  // Sélecteur de langue (simulation)
  document.querySelectorAll('#lang-select').forEach(sel => {
    sel.addEventListener('change', function () {
      alert('La version anglaise sera bientôt disponible.');
      this.value = 'fr';
    });
  });

  // Back to top button
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 120) {
        backToTop.classList.add('show');
      } else {
        backToTop.classList.remove('show');
      }
    });
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
