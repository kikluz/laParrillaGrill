function openTab(event, ListMenu, arrows) {
  var i, tabcontent, tablinks, tabArrow;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // tabArrow = document.getElementsByClassName("arrow");
  // for (i = 0; i < tabArrow.length; i++) {
  //   tabArrow[i].style.display = "none";
  // }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // document.getElementById(arrows).style.display = "block";
  document.getElementById(ListMenu).style.display = "block";
  event.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

/* eslint-disable */
// https://flexboxpatterns.com/tabs

// const $tabs = $('.tabs .tab');
//
// $tabs.click(function(event) {
//   let selectedClass = 'is-tab-selected';
//   $tabs.removeClass(selectedClass);
//   $(event.target).addClass(selectedClass);
// });
