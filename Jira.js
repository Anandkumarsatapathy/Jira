let addBtn = document.querySelector(".add-btn");
let modalCont = document.querySelector(".modal-cont");
let mainCont = document.querySelector(".main-cont");

let addFlag = false;

addBtn.addEventListener("click", (e) => {
  /**Display Modal */
  /**Generate Ticket */
  /**AddFlag, true->Modal Display */
  /**AddFlag, False ->modal None */
  addFlag = !addFlag;
  console.log(addFlag);
  if (addFlag) {
    modalCont.style.display = "flex";
  } else {
    modalCont.style.display = "None";
  }
});
mainCont.addEventListener("keydown",(e)=>{
  let key = e.key;
  if(key==="shift"){
    createTicket();
    modalCont.style.display = "None";
   
  }
})

function createTicket() {
  let ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");
  ticketCont.innerHTML = `
        <div class="ticket-color ${ticketColor}"></div>
        <div class="ticket-id">#${id}</div>
        <div class="task-area">${ticketTask}</div>
        <div class="ticket-lock">
            <i class="fas fa-lock"></i>
        </div>
    `;
}
