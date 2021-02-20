// いつものaddEventLister
document.addEventListener('DOMContentLoaded', async () => {
  const loadEl = document.querySelector('#event');
  loadEl.addEventListener('click', onKarteEvent);
});

// いつものaddEventLister
document.addEventListener('DOMContentLoaded', async () => {
  const loadEL = document.querySelector('#event');
  loadEL.addEventListener('click', buy);
});

// カスタムイベント送信
async function onKarteEvent() {
  const res = await tracker.track('アサルトリリィは神ゲー', {
    color: 'red',
    size: 20,
    is_empty: false
  });
}

// 購買行動送信
async function buy() {
  const res = await tracker.buy({
    revenue: 2000,
  });
}
