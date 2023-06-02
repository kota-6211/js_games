// ヘッダーのnav
const nav = document.querySelector('#nav');
// カバー（トップ画面）
const cover = document.querySelector('#cover');
// ヘッダーリストを配列で作る
const appNames = ['todo', 'typing', 'slide-puzzle', 'memory-card', 'life'];

// appNameをeach文で呼び出して全部表示する
appNames.forEach(appName => {
  // appNameに対してクラスとタグを付与
  const menu = document.createElement('a');
  menu.classList.add('nav-menu');
  menu.textContent = appName.toUpperCase();
  
  // appNameがクリックされた時の処理
  menu.addEventListener('click',() => {
    // 初めにカバー（トップ画面）のactiveクラスを消す
    cover.classList.remove('active');
    // 全appクラスのactiveクラスを消す
    const appEls = document.querySelectorAll('.app') ;
    appEls.forEach(appEl => {
      appEl.classList.remove('active');
    });
    // ここでクリックされた要素にactiveクラスが付与される
    const appEl = document.getElementById(appName);
    appEl.classList.add('active');
    const navMenus = document.querySelectorAll('.nav-menu');
    navMenus.forEach(navMenu => {
      navMenu.classList.remove('active');
    });
    menu.classList.add('avtive');
  });

  nav.appendChild(menu);
});

