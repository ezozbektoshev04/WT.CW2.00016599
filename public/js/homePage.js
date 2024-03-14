document.addEventListener("DOMContentLoaded", function () {
  fetchingEvents();
});

function fetchingEvents() {
  axios
    .get("/api/events")
    .then(function (response) {
      const events = response.data;
      renderingEvents(events);
    })
    .catch(function (error) {
      console.error("Error when fetching events", error);
    });
}

function renderingEvents(events) {
  const tableContent = document.querySelector("table tbody");
  tableContent.innerHTML = "";
  events.forEach((e) => {
    const content = document.createElement("tr");
    const event = e.event;
    content.innerHTML = `
        <td>${e.id}</td>
        <td>${event.eventName}</td>
        <td>${event.eventDateTime}</td>
        <td>${event.location}</td>
        <td>${event.description}</td>
        <td>
          <button class="btn-edit" data-id="${e.id}"
           onclick="updatingEvent('${e.id}')">Edit</button>
          <button class="btn-delete" data-id="${e.id}" onclick="deletingEvent('${e.id}')" >Delete</button>
        </td>
      `;
    tableContent.appendChild(content);
  });
}
function updatingEvent(id) {
  window.location.href = `/update/${id}`;
}
function deletingEvent(id) {
  if (confirm("Are you sure you want to delete this event?")) {
    axios
      .delete(`/api/events/${id}`)
      .then(function (response) {
        console.log("Deleting successful", response);
        fetchingEvents();
      })
      .catch(function (error) {
        console.error("Error is found deleting event", error);
      });
  }
}
