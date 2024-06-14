document.addEventListener('DOMContentLoaded', function () {
    const editButtons = document.querySelectorAll('.edit-btn');

    editButtons.forEach((button) => {
        button.addEventListener('click', () => {
            window.location.href = '/Users/lucaspinera/Desktop/memoria_anual_gestion/edit.html';
        });
    });
});
