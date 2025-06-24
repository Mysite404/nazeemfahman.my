// Save as "key-tracker.js" (for personal debugging only)
document.addEventListener('DOMContentLoaded', () => {
  const logs = [];
  
  document.addEventListener('keydown', (e) => {
    const keyData = {
      key: e.key,
      code: e.code,
      time: new Date().toISOString(),
    };
    logs.push(keyData);
    console.log("Key pressed:", keyData); // View in browser console
  });

  // (Optional) Save logs to a file when you press Ctrl+Shift+S
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === 'S') {
      const blob = new Blob([JSON.stringify(logs, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'keylogs.json';
      a.click();
      URL.revokeObjectURL(url);
    }
  });
});