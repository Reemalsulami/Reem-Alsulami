// script.js
document.addEventListener('DOMContentLoaded', function () {
  // تفعيل أزرار قائمة الجوال في كل صفحة (توجد أزواج IDs مختلفة)
  const menus = [
    {btnId: 'menuBtn', navId: 'siteNav'},
    {btnId: 'menuBtn2', navId: 'siteNav2'},
    {btnId: 'menuBtn3', navId: 'siteNav3'},
    {btnId: 'menuBtn4', navId: 'siteNav4'}
  ];

  menus.forEach(m => {
    const btn = document.getElementById(m.btnId);
    const nav = document.getElementById(m.navId);
    if (btn && nav) {
      btn.addEventListener('click', () => {
        nav.style.display = nav.style.display === 'block' ? '' : 'block';
      });
    }
  });



// =========================
// التقييم النهائي
// =========================
function calculateScore() {
    let score = 0;
    let total = 3;

    for (let i = 1; i <= total; i++) {
        let answer = document.querySelector(`input[name="q${i}"]:checked`);
        if (answer) score += parseInt(answer.value);
    }

    let resultBox = document.getElementById("result");
    resultBox.style.display = "block";

    if (score === 3) {
        resultBox.innerHTML = "🎉 ممتاز! حصلت على 3/3 — لديك وعي رقمي رائع!";
    } else if (score === 2) {
        resultBox.innerHTML = "👍 جيد! حصلت على 2/3 — تحتاجين إلى تركيز أكبر.";
    } else {
        resultBox.innerHTML = "⚠️ تحتاج إلى مراجعة المحتوى — نتيجتك " + score + "/3";
    }
  }
