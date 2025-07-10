document.addEventListener("DOMContentLoaded", () => {
    const resetBtn = document.querySelector(".reset-btn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        const noRateRadio = document.getElementById("no-rate");
        if (noRateRadio) noRateRadio.checked = true;
      });
    }
});
  