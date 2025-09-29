// 팀원1: 싫어요 기능
function initDislike() {
  const dislikeBtn = document.getElementById('dislike-btn');
  const dislikeCountEl = document.getElementById('dislike-count');

  if (dislikeBtn && dislikeCountEl) {
    dislikeBtn.addEventListener('click', () => {
      const current = Number(dislikeCountEl.dataset.count || '0');
      const next = current + 1;
      dislikeCountEl.dataset.count = String(next);
      dislikeCountEl.textContent = String(next);
    });
  }
}
document.addEventListener('DOMContentLoaded', initDislike);
