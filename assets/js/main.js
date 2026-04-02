// JH Drivers - JS principal
// Gestion du formulaire de devis, FAQ, responsive menu, etc.

document.addEventListener('DOMContentLoaded', function () {
    // Message de confirmation Formspree (formulaire index)
    const devisForm = document.getElementById('devis');
    const formSuccessMsg = document.getElementById('form-success-message');
    if (devisForm && formSuccessMsg) {
      devisForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(devisForm);
        fetch('https://formspree.io/f/mojpnaqy', {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        })
        .then(response => {
          if (response.ok) {
            devisForm.style.display = 'none';
            formSuccessMsg.style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            return response.json().then(data => {
              alert(data.errors ? data.errors.map(e => e.message).join('\n') : 'Erreur lors de l\'envoi.');
            });
          }
        })
        .catch(() => {
          alert('Erreur lors de l\'envoi du formulaire.');
        });
      });
    }
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
    // On retire la gestion du submit ici pour permettre l'envoi réel via Formspree
    // Si vous souhaitez garder une confirmation personnalisée, utilisez l'événement 'onsubmit' côté HTML ou gérez la réponse Formspree côté JS.
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
