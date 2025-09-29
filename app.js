// 팀원2: 알림 + 좋아요 기능
function initLikeAndAlert() {
  const alertBtn = document.getElementById('alert-btn');
  if (alertBtn) {
    alertBtn.addEventListener('click', () => {
      alert('안녕하세요! 협업 실습입니다.');
    });
  }

  const likeBtn = document.getElementById('like-btn');
  const likeCountEl = document.getElementById('like-count');
  if (likeBtn && likeCountEl) {
    likeBtn.addEventListener('click', () => {
      const current = Number(likeCountEl.dataset.count || '0');
      const next = current + 1;
      likeCountEl.dataset.count = String(next);
      likeCountEl.textContent = String(next);
    });
  }
}

document.addEventListener('DOMContentLoaded', initLikeAndAlert);
