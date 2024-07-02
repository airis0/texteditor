
//変数
var html_contents;  //エディタの編集内容。表示される内容。
var html_data;      //ローカルストレージに保存されるデータ。

//エディタ実行
$("#editor-exe").click(function() {
  editor_exe();
});

//実行 関数
function editor_exe() {
  html_contents = $("#editor").val();
  $("#html-output").html(html_contents);
}

//保存 関数
function save_html() {
  html_data = html_contents;
  localStorage["html_data"] = html_data;
}

//復元 関数
function restore_html() {
  html_data = localStorage["html_data"];
  $("#editor").val(html_data);
}

//保存ボタンが押されたら
$("#save-btn").click(function(){
  localStorage.removeItem("Hashikawa");  
  save_html();
  alert("保存しました。");
});

//復元ボタンが押されたら
$("#restore-btn").click(function() {
  if ( $("#editor").val() == "" ) {
    alert("復元します。");
    restore_html();
    editor_exe();
  } else　if ( $("#editor").val() != "" ) {
    var restore_confirm = window.confirm("編集中の内容が消えますが、よろしいですか？");
    if ( restore_confirm == true ) {
      restore_html();
      editor_exe();
      alert("復元しました。");
    }
  }
});


//ヘルプボタンが押されたら
$("#help-btn").click(function() {
  alert("【ヘルプ】\n\nHTML/CSS/JavaScriptのコードをエディタ部分に記述し、「実行」ボタンを押すことで実行結果が画面上部に表示されます。\n\n「保存」ボタンを押すことで、記述内容を保存できます。\n\n\「復元」ボタンを押すことで、以前に保存した記述内容を復元できます。");
});
