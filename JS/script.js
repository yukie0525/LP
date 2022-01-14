// おすすめプランのタブ切り替え
document.addEventListener('DOMContentLoaded', function(){
	// タブに対してクリックイベントを適用
	const tabs = document.getElementsByClassName('tab');
	for(let i = 0; i < tabs.length; i++) {
		tabs[i].addEventListener('click', tabSwitch, false);
	}

	// タブをクリックすると実行する関数
	function tabSwitch(){
		// タブのclassの値を変更
		document.getElementsByClassName('tab-active')[0].classList.remove('tab-active');
		this.classList.add('tab-active');
		// コンテンツのclassの値を変更
		document.getElementsByClassName('panel-active')[0].classList.remove('panel-active');
		const arrayTabs = Array.prototype.slice.call(tabs);
		const index = arrayTabs.indexOf(this);
		document.getElementsByClassName('panel')[index].classList.add('panel-active');
	};
}, false);

// よくあるご質問のアコーディオンメニュー
const menu = document.querySelectorAll(".js-menu");
 
function toggle() {
  const content = this.nextElementSibling;
  this.classList.toggle("is-active");
  content.classList.toggle("is-open");
}

for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener("click", toggle);
}