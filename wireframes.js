  function show(id){document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));document.getElementById(id).classList.add('active');document.querySelectorAll('.proto-nav a').forEach(a=>a.classList.remove('active'));window.scrollTo(0,0);closePartPopup();if(id==='forgot')setResetState('forgot',false);if(id==='vendor-forgot')setResetState('vendor-forgot',false);}
  function tog(id){document.getElementById(id).classList.toggle('open')}
  function setResetState(prefix, confirmed) {
    document.getElementById(prefix + '-form-state').style.display = confirmed ? 'none' : 'block';
    document.getElementById(prefix + '-confirm-state').style.display = confirmed ? 'block' : 'none';
  }
  function setViewer(group, targetId, el) {
    document.querySelectorAll('[data-view-group="' + group + '"]').forEach(function(view) {
      view.style.display = view.id === targetId ? 'block' : 'none';
    });
    document.querySelectorAll('[data-thumb-group="' + group + '"]').forEach(function(thumb) {
      thumb.classList.remove('active');
    });
    if (el) el.classList.add('active');
    closePartPopup();
  }

  function showPartPopup(el, partNum, partName, max) {
    closePartPopup();
    const popup = document.createElement('div');
    popup.id = 'part-popup';
    popup.style.cssText = 'position:absolute;z-index:200;background:#fff;border:2px solid #1a1a1a;border-radius:6px;padding:14px 16px;width:230px;box-shadow:4px 4px 0 #1a1a1a;';
    let opts = '';
    for (let i = 1; i <= max; i++) opts += `<option>${i}</option>`;
    popup.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px;">
        <div>
          <div style="font-size:13px;font-weight:700;line-height:1.3;">${partName}</div>
          <div style="font-family:monospace;font-size:10px;color:#666;margin-top:2px;">${partNum}</div>
        </div>
        <span onclick="closePartPopup()" style="cursor:pointer;font-size:16px;color:#999;line-height:1;margin-left:8px;">×</span>
      </div>
      <div style="display:flex;align-items:center;gap:8px;">
        <select style="flex:1;border:1.5px solid #d1d5db;border-radius:4px;padding:5px 8px;font-size:12px;font-family:monospace;">
          ${opts}
        </select>
        <button onclick="closePartPopup()" style="background:#1a1a1a;color:#fff;border:none;border-radius:4px;padding:6px 12px;font-size:12px;font-weight:600;cursor:pointer;white-space:nowrap;">+ Cart</button>
      </div>
      ${max < 10 ? `<div style="font-size:10px;color:#92500a;margin-top:7px;">Max qty: ${max}</div>` : ''}
    `;
    const rect = el.getBoundingClientRect();
    const container = el.closest('.schematic-wrap');
    const containerRect = container.getBoundingClientRect();
    let top = rect.bottom - containerRect.top + 6;
    let left = rect.left - containerRect.left;
    popup.style.top = top + 'px';
    popup.style.left = left + 'px';
    container.appendChild(popup);
  }

  function closePartPopup() {
    const p = document.getElementById('part-popup');
    if (p) p.remove();
  }

  document.addEventListener('click', function(e) {
    const popup = document.getElementById('part-popup');
    if (popup && !popup.contains(e.target) && !e.target.classList.contains('hs')) closePartPopup();
  });
