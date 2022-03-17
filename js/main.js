// jquery
// $(document).ready in jquery means the actions can only be run once the page has fully loaded - all actions go inside this

// .show() changes css display style to inline

$(document).ready(() => {
  const $catButton = $("#cat-button");
  const $catImage = $("#cat-image");
  const $puppyImage = $("#puppy-image");
  const $mysteryImage = $("#mystery-image");
  const $grid2 = $("#grid-item-2");
  const $fadeKitten = $("#fade-kitten");
  const $fadeOutBtn = $("#fadeOut-button");
  const $fadeInBtn = $("#fadeIn-button");

  $catButton.on("click", () => {
    $catImage.toggle();
  });

  $grid2.on("mouseenter", () => {
    $puppyImage.show();
    $mysteryImage.hide();
  });

  $grid2.on("mouseleave", () => {
    $puppyImage.hide();
    $mysteryImage.show();
  });

  $fadeOutBtn.on("click", () => {
    $fadeKitten.fadeOut(900);
  });

  $fadeInBtn.on("click", () => {
    $fadeKitten.fadeIn(900);
  });
});
