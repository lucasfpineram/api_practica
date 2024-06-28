document.addEventListener('DOMContentLoaded', () => {
    const editPopup = document.getElementById('editPopup');
    const deletePopup = document.getElementById('deletePopup');

    window.openEditPopup = () => {
        editPopup.active = true;
    };

    window.closeEditPopup = () => {
        editPopup.active = false;
    };

    window.openDeletePopup = () => {
        deletePopup.active = true;
    };

    window.closeDeletePopup = () => {
        deletePopup.active = false;
    };
});



