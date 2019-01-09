function testModal() {
    // Get the button that opens the modal
    alert('test');
}


function newModal(ModalName, CallAction) {
    // Get the modal
    var modal = document.getElementById(ModalName);
    console.log(modal);
    // Get the button that opens the modal
    var btn = document.getElementById(CallAction);
    console.log(btn);
    // Get the <span> element that closes the modal
    var span = modal.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function () {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it

}
setTimeout(() => {
    newModal("modal--help", "buttonHelp");
    newModal("modal--credit", "buttonCredit");
});

function openModal(ModalName) {
    // Get the modal
    var modal = document.getElementById(ModalName);
    modal.style.display = "block";
}
function closeModal(ModalName) {
    modal.style.display = "none";
}