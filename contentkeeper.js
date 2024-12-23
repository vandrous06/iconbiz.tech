 document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && (e.key === 'u' || e.key === 'U' || e.key === 'i' || e.key === 'I' || e.key === 'j' || e.key === 'J')) {
      e.preventDefault();
    }
  });

 document.addEventListener('contextmenu', function (e) {
   e.preventDefault();
 });
