document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("confirmationModal");
    const closeBtn = document.querySelector(".close");
    const confirmYesBtn = document.getElementById("confirmYes");
    const confirmNoBtn = document.getElementById("confirmNo");
    let targetRow;  // Pour stocker la ligne à supprimer

    // Ouvrir le modal lorsque le bouton "Supprimer" est cliqué
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            targetRow = button.closest('tr'); // Stocker la ligne cible
            modal.style.display = "block";
        });
    });

    // Fermer le modal quand l'utilisateur clique sur la croix
    closeBtn.addEventListener('click', () => {
        modal.style.display = "none";
    });

    // Fermer le modal quand l'utilisateur clique sur "Non"
    confirmNoBtn.addEventListener('click', () => {
        modal.style.display = "none";
    });

    // Supprimer la ligne quand l'utilisateur clique sur "Oui"
    confirmYesBtn.addEventListener('click', () => {
        if (targetRow) {
            targetRow.remove();
        }
        modal.style.display = "none";
    });

    // Fermer le modal si l'utilisateur clique en dehors de celui-ci
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});