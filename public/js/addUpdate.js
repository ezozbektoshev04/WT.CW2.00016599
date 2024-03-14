if (mode === "Update") {
  const eventData = data;

  document.querySelector("#eventName").value = eventData.eventName || "";
  document.querySelector("#eventDateTime").value =
    eventData.eventDateTime || "";
  document.querySelector("#location").value = eventData.location || "";
  document.querySelector("#description").value = eventData.description || "";
}

function submittingForm() {
  const eventData = {
    eventName: document.querySelector("#eventName").value,
    eventDateTime: document.querySelector("#eventDateTime").value,
    location: document.querySelector("#location").value,
    description: document.querySelector("#description").value,
  };

  document.getElementById("eventDescriptionValidation").textContent = "";
  document.getElementById("eventLocationValidation").textContent = "";
  document.getElementById("eventDateTimeValidation").textContent = "";
  document.getElementById("eventNameValidation").textContent = "";

  const url = mode === "Update" ? `/api/events/${dataId}` : "/api/events";
  const method = mode === "Update" ? "put" : "post";

  axios[method](url, eventData)
    .then((response) => {
      alert("Success!");
      location.href = "/";
    })
    .catch((error) => {
      if (error.response) {
        const errors = error.response.data.errors;
        Object.keys(errors).forEach((field) => {
          const errorMessage = errors[field];
          if (errorMessage.path === "eventName") {
            document.getElementById("eventNameValidation").textContent =
              errorMessage.msg || "";
          } else if (errorMessage.path === "eventDateTime") {
            document.getElementById("eventDateTimeValidation").textContent =
              errorMessage.msg || "";
          } else if (errorMessage.path === "location") {
            document.getElementById("eventLocationValidation").textContent =
              errorMessage.msg || "";
          } else if (errorMessage.path === "description") {
            document.getElementById("eventDescriptionValidation").textContent =
              errorMessage.msg || "";
          }
        });
      } else {
        alert(error);
      }
    });
}
