// jquery
// $(document).ready in jquery means the actions can only be run once the page has fully loaded - all actions go inside this

// .show() changes css display style to inline

$(document).ready(() => {
  const $catButton = $("#cat-button");
  const $catImage = $("#cat-image");

  $catButton.on("click", () => {
    $catImage.show();
  });

  $catImage.on("mouseleave", () => {
    $catImage.hide();
  });
});
