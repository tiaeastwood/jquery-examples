// jquery
// $(document).ready in jquery means the actions can only be run once the page has fully loaded - all actions go inside this

$(document).ready(() => {
  const $catButton = $("#cat-button");
  const $catImage = $("#cat-image");
  const $puppyImage = $("#puppy-image");
  const $mysteryImage = $("#mystery-image");
  const $showBtn = $("#show-button");
  const $hideBtn = $("#hide-button");
  const $fadeOutBtn = $("#fadeOut-button");
  const $fadeInBtn = $("#fadeIn-button");
  const $fadeToggleBtn = $("#fadeToggle-button");
  const $slideUpBtn = $("#slideUp-button");
  const $slideDownBtn = $("#slideDown-button");
  const $slideToggleBtn = $("#slideToggle-button");

  $catButton.on("click", () => {
    $catImage.toggle();
  });

  $showBtn.on("click", () => {
    $puppyImage.show();
    $mysteryImage.hide();
  });

  $hideBtn.on("click", () => {
    $puppyImage.hide();
    $mysteryImage.show();
  });

  $fadeOutBtn.on("click", () => {
    $(".fade-img").fadeOut(900);
  });

  $fadeInBtn.on("click", () => {
    $(".fade-img").fadeIn(900);
  });

  $fadeToggleBtn.on("click", () => {
    $(".fade-img").fadeToggle("slow");
  });

  $slideUpBtn.on("click", () => {
    $(".slide-img").slideUp("slow");
  });

  $slideDownBtn.on("click", () => {
    $(".slide-img").slideDown("slow");
  });

  $slideToggleBtn.on("click", () => {
    $(".slide-img").slideToggle("slow");
  });
});
