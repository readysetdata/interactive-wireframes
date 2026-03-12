  function show(id){document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));document.getElementById(id).classList.add('active');document.querySelectorAll('.proto-nav a').forEach(a=>a.classList.remove('active'));window.scrollTo(0,0)}
  function tog(id){document.getElementById(id).classList.toggle('open')}
