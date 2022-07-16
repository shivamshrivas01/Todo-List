// console.log("hello");
$(document).on("click", ".btn", function () {
  var inputData = $(this).siblings("input").val();
  var listData =
    `
    <div class="list-parent">
    <div class="list-item">
    <div class="item-number"> <i class="fa-solid fa-circle-arrow-right"></i></div>    
    <div class="item"> ` +
    inputData +
    `</div>
    <div class="edit-btn"> <i class="fa-solid fa-pen-to-square"></i> </div>
    <div class="delete-btn"><i class="fa-solid fa-trash"></i></div>
    <div class="check"><input type="checkbox"></div>
    <div class="list-error"></div>
    </div>
    </div>
    `;

  if ($.trim(inputData) == "") {
    alert("Input field empty!");
  } else {
    // console.log(listData);
    $(this).parents(".main-container").find(".todo-list").append(listData);
    $(this).parents("main-container").find(".error").empty();
  }
  $(this).siblings("input").val("");
});

$(document).keydown(function (event) {
  if (event.which == 13) {
    event.preventDefault();
    $(".btn").click();
  }
});

$(document).on("click", ".delete-btn", function () {
  $(this).parent(".list-item").remove();
});

$(document).on("click", ".edit-btn", function () {
  $(this).attr("class", "update-todo");
  $(this).html('<i class="fa-solid fa-circle-check"></i>');

  var listText = $(this).parent(".list-item").find(".item").html();
  var listDataHeight = $(this).parent(".list-item").find(".item").innerHeight();

  $(this).parent(".list-item").find(".item").attr("class", "update-data");
  if (listDataHeight > 50) {
    $(this)
      .parent(".list-item")
      .find(".update-data")
      .html(
        '<textarea style="height:' +
          listDataHeight +
          'px">' +
          listText +
          "</textarea>"
      );
  } else {
    $(this)
      .parent(".list-item")
      .find(".update-data")
      .html(
        '<textarea style="height:' +
          listDataHeight +
          'px">' +
          listText +
          "</textarea>"
      );
  }
});

//update todo script
$(document).on("click", ".update-todo", function () {
  var listText = $(this).parent(".list-item").find("textarea").val();
  if ($.trim(listText) == "") {
    $(this)
      .parents(".list-parent")
      .find(".list-error")
      .text("Cannot be Empty!");
  } else {
    $(this).attr("class", "edit-btn");
    $(this).html("<i class='fa-solid fa-pen-to-square'></i>");
    $(this).parent(".list-item").find(".update-data").attr("class", "item");
    var listText = $(this).parent(".list-item").find(".item").html(listText);
    $(this).parents(".list-parent").find(".list-error").empty();
  }
});
