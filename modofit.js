/* Modo Fit · tienda. Generado desde modofit-home-gtm.html con armar-js.py: no editar a mano. */
(function () {
  if (document.getElementById("mf-styles")) return;
  var st = document.createElement("style"); st.id = "mf-styles";
  st.textContent = ".mf,.mf *{box-sizing:border-box;margin:0;padding:0}\n.mf{--mf-ink:#001F17;--mf-ink2:#012A20;--mf-cream:#F4F2ED;--mf-mint:#00C776;--mf-green:#008D60;--mf-forest:#006947;--mf-line:rgba(0,31,23,.12);--mf-muted:#5B6B65;\n  font-family:Manrope,system-ui,sans-serif;color:var(--mf-ink);line-height:1.5;-webkit-font-smoothing:antialiased}\n.mf .mf-d{font-family:Archivo,sans-serif;font-stretch:125%;font-weight:900;text-transform:uppercase;letter-spacing:-.01em;line-height:.95}\n.mf .mf-k{font-family:Archivo,sans-serif;font-stretch:125%;font-weight:700;text-transform:uppercase;letter-spacing:.18em;font-size:11px}\n.mf a{color:inherit;text-decoration:none}\n.mf .mf-wrap{max-width:1120px;margin:0 auto;padding:0 16px}\n.mf .mf-sec{padding:64px 0}\n.mf .mf-chip{display:inline-block;background:var(--mf-ink);color:var(--mf-mint);padding:6px 12px;border-radius:999px}\n.mf .mf-h2{font-size:clamp(30px,5vw,46px);margin:14px 0 8px}\n.mf .mf-sub{color:var(--mf-muted);font-size:15px;max-width:520px}\n.mf .mf-center{text-align:center}.mf .mf-center .mf-sub{margin:0 auto}\n.mf .mf-btn{display:inline-block;text-align:center;font-family:Archivo,sans-serif;font-stretch:125%;font-weight:800;text-transform:uppercase;letter-spacing:.1em;font-size:13px;line-height:1.2;padding:17px 28px;border-radius:999px;background:var(--mf-mint);color:var(--mf-ink);border:0;cursor:pointer;transition:transform .15s,background .15s}\n.mf .mf-btn:hover{transform:translateY(-1px);background:#19D688}\n.mf .mf-btn-dark{background:var(--mf-ink);color:var(--mf-cream)}.mf .mf-btn-dark:hover{background:var(--mf-forest)}\n.mf .mf-btn-line{background:transparent;color:var(--mf-cream);box-shadow:inset 0 0 0 2px rgba(244,242,237,.4)}.mf .mf-btn-line:hover{background:rgba(244,242,237,.08)}\n.mf .mf-checks{display:flex;flex-wrap:wrap;gap:6px 18px;font-size:13px;font-weight:700}\n.mf .mf-checks span:before{content:\"✓\";color:var(--mf-mint);margin-right:6px;font-weight:800}\n\n/* Barra de oferta */\n.mf-bar{background:var(--mf-ink);color:var(--mf-cream);overflow:hidden;white-space:nowrap;position:relative;z-index:50}\n.mf-bar .mf-track{display:inline-flex;gap:48px;padding:9px 0;animation:mf-marq 28s linear infinite}\n.mf-bar .mf-track span{font-family:Archivo,sans-serif;font-stretch:125%;font-weight:700;font-size:11px;letter-spacing:.16em;text-transform:uppercase}\n.mf-bar .mf-track b{color:var(--mf-mint);font-weight:800}\n@keyframes mf-marq{to{transform:translateX(-50%)}}\n@media (prefers-reduced-motion:reduce){.mf-bar .mf-track{animation:none}}\n\n/* Hero */\n.mf .mf-hero{position:relative;background:var(--mf-ink);color:var(--mf-cream);overflow:hidden;min-height:560px;display:flex;align-items:center}\n.mf .mf-hero-img{position:absolute;inset:0;background-size:cover;background-position:center 25%;opacity:.55}\n.mf .mf-hero:after{content:\"\";position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,31,23,.96) 0%,rgba(0,31,23,.7) 50%,rgba(0,31,23,.2) 100%)}\n.mf .mf-hero .mf-wrap{position:relative;z-index:1;width:100%;padding-top:64px;padding-bottom:64px}\n.mf .mf-hero h1{font-size:clamp(44px,8.5vw,96px);margin:18px 0 16px}\n.mf .mf-hero h1 em{font-style:normal;color:var(--mf-mint);display:block}\n.mf .mf-hero p{font-size:16px;max-width:440px;color:rgba(244,242,237,.82);margin-bottom:22px}\n.mf .mf-hero .mf-chip{background:var(--mf-mint);color:var(--mf-ink)}\n.mf .mf-hero-price{display:flex;align-items:baseline;gap:10px;margin-bottom:24px}\n.mf .mf-hero-price small{font-size:13px;font-weight:700;color:rgba(244,242,237,.7);text-transform:uppercase;letter-spacing:.08em}\n.mf .mf-hero-price .mf-d{font-size:clamp(44px,6vw,64px);color:var(--mf-cream)}\n.mf .mf-hero-price span{font-weight:800;font-size:18px}\n.mf .mf-hero-cta{display:flex;flex-wrap:wrap;gap:10px;margin-bottom:22px}\n.mf .mf-hero .mf-checks{color:rgba(244,242,237,.85)}\n\n/* Packs */\n.mf .mf-packs{background:var(--mf-cream)}\n.mf .mf-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;margin-top:36px}\n.mf .mf-card{background:#fff;border-radius:20px;overflow:hidden;border:1px solid var(--mf-line);display:flex;flex-direction:column;transition:box-shadow .2s}\n.mf .mf-card:hover{box-shadow:0 18px 40px -20px rgba(0,31,23,.35)}\n.mf .mf-card-img{display:block;position:relative;aspect-ratio:4/5;background:#F1F1F1 center/cover no-repeat}\n.mf .mf-card-img2{position:absolute;inset:0;background:#6B6B6B center/cover no-repeat;opacity:0;transition:opacity .35s ease}\n@media (hover:hover){.mf .mf-card:hover .mf-card-img2{opacity:1}}\n.mf .mf-x4{z-index:2;position:absolute;top:14px;left:14px;background:var(--mf-ink);color:var(--mf-cream);border-radius:14px;padding:10px 12px 8px;text-align:center}\n.mf .mf-x4 .mf-d{font-size:30px;display:block}\n.mf .mf-x4 small{display:block;font-size:9px;letter-spacing:.14em;font-weight:700;text-transform:uppercase;color:var(--mf-mint);margin-top:3px}\n.mf .mf-tag{z-index:2;position:absolute;top:14px;right:14px;background:var(--mf-mint);color:var(--mf-ink);border-radius:999px;padding:6px 10px}\n.mf .mf-card-body{padding:22px 22px 24px;display:flex;flex-direction:column;flex:1}\n.mf .mf-card-title{font-weight:800;font-size:19px;line-height:1.25}\n.mf .mf-colors{display:flex;align-items:center;gap:8px;margin-top:8px;font-size:13px;color:var(--mf-muted)}\n.mf .mf-colors i{width:16px;height:16px;border-radius:50%;box-shadow:inset 0 0 0 1px rgba(0,31,23,.25)}\n.mf .mf-bul{list-style:none;margin:14px 0 0;display:flex;flex-direction:column;gap:5px;font-size:14px}\n.mf .mf-bul li:before{content:\"✓\";color:var(--mf-green);font-weight:800;margin-right:8px}\n.mf .mf-pricebox{margin-top:18px;padding-top:18px;border-top:1px dashed var(--mf-line)}\n.mf .mf-pricebox .mf-k{color:var(--mf-green)}\n.mf .mf-big{display:flex;align-items:baseline;gap:8px;margin:6px 0 4px}\n.mf .mf-big .mf-d{font-size:clamp(46px,6vw,58px)}\n.mf .mf-big span{font-weight:800;font-size:18px}\n.mf .mf-total{font-size:16px}.mf .mf-total b{font-weight:800}\n.mf .mf-pay{font-size:13px;color:var(--mf-muted);margin-top:8px}.mf .mf-pay b{color:var(--mf-ink)}\n.mf .mf-card .mf-btn{margin-top:20px;width:100%}\n.mf .mf-card-foot{display:flex;justify-content:space-between;flex-wrap:wrap;gap:6px;margin-top:12px;font-size:12.5px;color:var(--mf-muted)}\n.mf .mf-card-foot a{text-decoration:underline;font-weight:700;color:var(--mf-ink)}\n.mf .mf-steps-k{text-align:center;margin-top:28px;color:var(--mf-green)}\n.mf .mf-steps{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:10px;background:#fff;border:1px solid var(--mf-line);border-radius:18px;padding:16px}\n.mf .mf-step{display:flex;gap:10px;align-items:center;justify-content:center;padding:6px;white-space:nowrap}\n.mf .mf-step i{flex:none;width:30px;height:30px;border-radius:50%;background:var(--mf-ink);color:var(--mf-mint);font-style:normal;font-weight:800;font-size:13px;display:flex;align-items:center;justify-content:center}\n.mf .mf-step span{font-size:14px;color:var(--mf-muted)}.mf .mf-step b{color:var(--mf-ink)}\n\n/* Confianza */\n.mf .mf-trust{background:var(--mf-ink);color:var(--mf-cream);padding:32px 0}\n.mf .mf-trust .mf-wrap{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:20px}\n.mf .mf-t{display:flex;gap:14px;align-items:center}\n.mf .mf-t i{flex:none;width:46px;height:46px;border-radius:12px;background:var(--mf-ink2);display:flex;align-items:center;justify-content:center}\n.mf .mf-t b{display:block;font-size:15px}.mf .mf-t em{display:none}.mf .mf-t span{font-size:13px;color:rgba(244,242,237,.65)}\n\n\n/* Opiniones */\n.mf .mf-rev{background:#fff}\n.mf .mf-rev-head{max-width:820px;margin:0 auto}\n.mf .mf-summary{display:grid;grid-template-columns:auto 1fr;gap:32px;align-items:center;background:var(--mf-cream);border-radius:20px;padding:28px;margin-top:28px}\n.mf .mf-avg{font-size:72px}\n.mf .mf-stars{color:var(--mf-green);letter-spacing:2px;font-size:18px;white-space:nowrap}\n.mf .mf-stars s{text-decoration:none;color:#C9CFCC}\n.mf .mf-dist{display:flex;flex-direction:column;gap:6px}\n.mf .mf-dist div{display:grid;grid-template-columns:28px 1fr 34px;gap:10px;align-items:center;font-size:12.5px;color:var(--mf-muted)}\n.mf .mf-dist u{display:block;height:6px;border-radius:9px;background:#DCDFDB;overflow:hidden;text-decoration:none}\n.mf .mf-dist u em{display:block;height:100%;background:var(--mf-ink)}\n.mf .mf-filters{display:flex;flex-wrap:wrap;gap:8px;margin:24px 0 16px}\n.mf .mf-f{font:inherit;font-size:13px;font-weight:700;padding:8px 14px;border-radius:999px;border:1px solid var(--mf-line);background:#fff;color:var(--mf-ink);cursor:pointer}\n.mf .mf-f[aria-pressed=\"true\"]{background:var(--mf-ink);color:var(--mf-cream);border-color:var(--mf-ink)}\n.mf .mf-list{display:flex;flex-direction:column;gap:12px}\n.mf .mf-r{border:1px solid var(--mf-line);border-radius:16px;padding:18px 20px}\n.mf .mf-r-top{display:flex;gap:12px;align-items:center}\n.mf .mf-av{flex:none;width:38px;height:38px;border-radius:50%;background:var(--mf-cream);font-weight:800;display:flex;align-items:center;justify-content:center;font-size:14px}\n.mf .mf-r-name{font-weight:800;font-size:14px;display:flex;flex-wrap:wrap;gap:4px 8px;align-items:center}\n.mf .mf-ver{color:var(--mf-green);font-size:11.5px;font-weight:700}\n.mf .mf-r-meta{font-size:12px;color:var(--mf-muted)}\n.mf .mf-r-date{margin-left:auto;font-size:12px;color:var(--mf-muted);white-space:nowrap}\n.mf .mf-r p{margin-top:10px;font-size:14.5px}\n.mf .mf-more{text-align:center;margin-top:22px}\n.mf .mf-count{font-size:12px;color:var(--mf-muted);margin-top:10px}\n.mf .mf-empty{background:var(--mf-cream);border-radius:20px;padding:36px 24px;text-align:center;margin-top:28px}\n.mf .mf-empty p{color:var(--mf-muted);max-width:420px;margin:8px auto 20px}\n\n/* FAQ */\n.mf .mf-faq{background:var(--mf-cream)}\n.mf .mf-faq-grid{display:grid;grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:48px;align-items:start}\n.mf .mf-faq-side .mf-h2{margin-top:14px}\n.mf .mf-faq-side .mf-btn{margin-top:24px}\n.mf details{border-bottom:1px solid var(--mf-line)}\n.mf summary{list-style:none;cursor:pointer;padding:20px 36px 20px 0;font-weight:800;font-size:16px;position:relative}\n.mf summary::-webkit-details-marker{display:none}\n.mf summary:after{content:\"+\";position:absolute;right:4px;top:50%;transform:translateY(-50%);font-size:22px;font-weight:600;color:var(--mf-green);transition:transform .2s}\n.mf details[open] summary:after{transform:translateY(-50%) rotate(45deg)}\n.mf details div{padding:0 0 20px;color:var(--mf-muted);font-size:15px}\n.mf details div b{color:var(--mf-ink)}\n\n/* Cierre */\n.mf .mf-final{background:var(--mf-mint);color:var(--mf-ink);text-align:center}\n.mf .mf-final .mf-h2{font-size:clamp(36px,6vw,64px)}\n.mf .mf-final .mf-h2 em{font-style:normal;color:#fff}\n.mf .mf-final p{color:rgba(0,31,23,.78);margin:6px auto 26px;max-width:460px;font-weight:600}\n.mf .mf-final .mf-hero-cta{justify-content:center}\n.mf .mf-final .mf-btn{background:var(--mf-ink);color:var(--mf-cream)}\n.mf .mf-final .mf-btn:hover{background:var(--mf-forest)}\n.mf .mf-final .mf-btn-line{background:transparent;color:var(--mf-ink);box-shadow:inset 0 0 0 2px rgba(0,31,23,.55)}\n.mf .mf-final .mf-btn-line:hover{background:rgba(0,31,23,.08)}\n.mf .mf-final .mf-checks{justify-content:center;color:var(--mf-ink)}\n.mf .mf-final .mf-checks span:before{color:var(--mf-ink)}\n\n/* Barra fija de compra */\n.mf-sticky{position:fixed;left:0;right:0;bottom:0;z-index:9990;background:#001F17;color:#F4F2ED;transform:translateY(110%);transition:transform .25s;box-shadow:0 -10px 30px rgba(0,0,0,.25)}\n.mf-sticky.mf-on{transform:none}\n.mf-sticky .mf-wrap{display:flex;align-items:center;justify-content:space-between;gap:12px;padding-top:10px;padding-bottom:10px}\n.mf-sticky .mf-s-txt{font-size:13px;line-height:1.25}\n.mf-sticky .mf-s-txt b{display:block;font-family:Archivo,sans-serif;font-stretch:125%;font-weight:900;font-size:20px;white-space:nowrap}\n.mf-sticky .mf-s-txt b em{font-style:normal;color:#00C776;font-family:Manrope,sans-serif;font-size:14px;font-weight:800}\n.mf-sticky .mf-btn{padding:14px 22px;flex:none}\n\n/* Etiqueta PACK X4 sobre las fotos del listado de productos */\n.mf-badge{position:absolute;top:10px;left:10px;z-index:5;background:#001F17;color:#F4F2ED;font:800 10px/1 Archivo,sans-serif;font-stretch:125%;letter-spacing:.12em;text-transform:uppercase;padding:7px 9px;border-radius:999px;pointer-events:none}\n.mf-badge b{color:#00C776}\n\n/* Carrusel de la home: sin flechas ni \"1 / 1\" debajo del banner */\n[data-store=\"home-slider\"] .js-swiper-home-control{display:none!important}\n\n/* Ipanema */\nbody.mf-ipa .section-navigation-bar,body.mf-ipa .js-navigation-bar{display:none!important}\nbody.mf-ipa.mf-pdp #ns-block-description .js-product-description{background:#F4F2ED!important;border-radius:20px!important;padding:24px 20px!important;text-align:left!important;color:#001F17!important;font-family:Manrope,sans-serif!important;font-size:15px!important;line-height:1.6!important}\nbody.mf-ipa.mf-pdp #ns-block-description .js-product-description h2{font-family:Archivo,sans-serif!important;font-stretch:125%;font-weight:900!important;text-transform:uppercase;font-size:22px!important;line-height:1.05!important;margin:0 0 12px!important}\nbody.mf-ipa.mf-pdp #ns-block-description .js-product-description h3{font-weight:800!important;font-size:17px!important;margin:22px 0 8px!important}\nbody.mf-ipa.mf-pdp #ns-block-description .js-product-description ul{list-style:none!important;padding:0!important;margin:6px 0 10px!important}\nbody.mf-ipa.mf-pdp #ns-block-description .js-product-description li{position:relative;padding:3px 0 3px 26px!important}\nbody.mf-ipa.mf-pdp #ns-block-description .js-product-description li:before{content:\"✓\";position:absolute;left:2px;top:3px;color:#008D60;font-weight:800}\nbody.mf-ipa.mf-pdp #ns-block-description .js-product-description table{width:100%!important;border-collapse:collapse!important;background:#fff!important;border-radius:12px;overflow:hidden}\nbody.mf-ipa.mf-pdp #ns-block-description .js-product-description th,body.mf-ipa.mf-pdp #ns-block-description .js-product-description td{text-align:center!important;padding:9px 6px!important;border-bottom:1px solid rgba(0,31,23,.08)!important;font-size:14px!important}\nbody.mf-ipa.mf-pdp #ns-block-description .js-product-description th{background:#001F17!important;color:#F4F2ED!important;font-weight:800!important}\n\n/* Página de producto */\nbody.mf-pdp #single-product .js-product-name{font-family:Manrope,sans-serif!important;font-weight:800!important;text-transform:none;letter-spacing:-.01em;line-height:1.2!important;font-size:21px!important;color:#001F17!important;margin-bottom:10px!important}\nbody.mf-pdp #single-product #price_display{font-family:Archivo,sans-serif!important;font-stretch:125%;font-weight:900!important;font-size:40px!important;line-height:1!important;letter-spacing:-.01em;color:#001F17!important}\nbody.mf-pdp #single-product #compare_price_display{font-size:16px!important;opacity:.5;margin-left:8px}\nbody.mf-pdp #single-product .btn-add-to-cart,body.mf-pdp #single-product .js-addtocart-placeholder,body.mf-pdp #single-product input.js-addtocart.cart{background:#00C776!important;border-color:#00C776!important;color:#001F17!important;font-family:Archivo,sans-serif!important;font-stretch:125%;font-weight:800!important;text-transform:uppercase!important;letter-spacing:.04em!important;font-size:14px!important;white-space:nowrap!important;padding-left:10px!important;padding-right:10px!important;border-radius:999px!important;min-height:56px!important;box-shadow:none!important}\nbody.mf-pdp #single-product .btn-add-to-cart:hover,body.mf-pdp #single-product input.js-addtocart.cart:hover{background:#19D688!important}\nbody.mf-pdp #single-product .btn-variant{display:inline-flex!important;align-items:center!important;justify-content:center!important;vertical-align:middle;margin:0 8px 8px 0!important;box-shadow:none!important}\nbody.mf-pdp #single-product .btn-variant:not(.btn-variant-color){min-width:52px!important;height:46px!important;padding:0 14px!important;border-radius:12px!important;border:1px solid rgba(0,31,23,.25)!important;background:#fff!important}\nbody.mf-pdp #single-product .btn-variant:not(.btn-variant-color) .btn-variant-content{padding:0!important;line-height:1!important;font:700 15px Manrope,sans-serif!important;color:#001F17!important}\nbody.mf-pdp #single-product .btn-variant-color{width:42px!important;height:42px!important;min-width:0!important;min-height:0!important;padding:3px!important;border-radius:50%!important;border:1px solid rgba(0,31,23,.18)!important;background:#fff!important}\nbody.mf-pdp #single-product .btn-variant-color .btn-variant-content{display:block!important;width:100%!important;height:100%!important;border-radius:50%!important;margin:0!important}\nbody.mf-pdp #single-product .btn-variant.selected{border-color:#001F17!important;box-shadow:0 0 0 1.5px #001F17!important}\nbody.mf-pdp #single-product .btn-variant:not(.btn-variant-color).selected{background:#001F17!important}\nbody.mf-pdp #single-product .btn-variant:not(.btn-variant-color).selected .btn-variant-content{color:#fff!important}\n.mf-pdp-unit{display:inline-block;margin:10px 0 4px;background:#E3F8EE;color:#006947;font:800 14px/1.2 Manrope,sans-serif;padding:7px 12px;border-radius:999px}\n.mf-pdp-guide{display:inline-block;margin-left:10px;font:800 13px Manrope,sans-serif;color:#001F17!important;text-decoration:underline!important;cursor:pointer}\n.mf .mf-pdp-trust{background:#F4F2ED;border-radius:16px;padding:14px 16px;margin:0 0 20px;display:flex;flex-direction:column;gap:10px;text-align:left}\n.mf .mf-pt{display:flex;align-items:center;gap:12px;font-size:14px;line-height:1.35;color:#001F17}\n.mf .mf-pt i{flex:none;width:38px;height:38px;border-radius:10px;background:#fff;display:flex;align-items:center;justify-content:center}\n.mf .mf-pt b{font-weight:800}\n.mf .mf-pdp-wa{font-weight:800;font-size:13.5px;text-decoration:underline;color:#001F17;padding-top:2px}\n.mf-pdp-pay{display:inline-block;margin-top:2px;font:700 13px Manrope,sans-serif;color:#001F17!important;text-decoration:underline!important}\nbody.mf-pdp .js-max-installments-container,body.mf-pdp #single-product .js-free-shipping-minimum-message,body.mf-pdp #single-product .js-saved-money-message{display:none!important}\nbody.mf-pdp [data-store^=\"product-description-\"]{border:0!important;box-shadow:none!important;padding:0 16px!important;background:transparent!important;max-width:780px;margin:36px auto 0!important;text-align:left!important}\nbody.mf-pdp [data-store^=\"product-description-\"] > .user-content{background:#F4F2ED!important;border:0!important;border-radius:20px!important;box-shadow:none!important;padding:28px 24px!important;margin:0!important;text-align:left!important;font-family:Manrope,sans-serif!important;font-size:15px!important;line-height:1.6!important;color:#001F17!important}\nbody.mf-pdp [data-store^=\"product-description-\"] > .user-content *{text-align:left!important;color:#001F17!important;font-family:Manrope,sans-serif!important}\nbody.mf-pdp [data-store^=\"product-description-\"] > .user-content h2{font-family:Archivo,sans-serif!important;font-stretch:125%;font-weight:900!important;text-transform:uppercase;font-size:24px!important;line-height:1.05!important;margin:0 0 14px!important}\nbody.mf-pdp [data-store^=\"product-description-\"] > .user-content h3{font-weight:800!important;font-size:17px!important;margin:26px 0 8px!important}\nbody.mf-pdp [data-store^=\"product-description-\"] > .user-content p{margin:0 0 10px!important}\nbody.mf-pdp [data-store^=\"product-description-\"] > .user-content ul{list-style:none!important;padding:0!important;margin:6px 0 10px!important}\nbody.mf-pdp [data-store^=\"product-description-\"] > .user-content li{position:relative;padding:3px 0 3px 26px!important;margin:0!important}\nbody.mf-pdp [data-store^=\"product-description-\"] > .user-content li:before{content:\"✓\";position:absolute;left:2px;top:3px;color:#008D60!important;font-weight:800}\nbody.mf-pdp [data-store^=\"product-description-\"] > .user-content table{width:100%!important;border-collapse:collapse!important;background:#fff!important;border-radius:12px;overflow:hidden;margin:8px 0 12px!important}\nbody.mf-pdp [data-store^=\"product-description-\"] > .user-content th,body.mf-pdp [data-store^=\"product-description-\"] > .user-content td{text-align:center!important;padding:9px 6px!important;border-bottom:1px solid rgba(0,31,23,.08)!important;font-size:14px!important}\nbody.mf-pdp [data-store^=\"product-description-\"] > .user-content th{font-weight:800!important;background:#001F17!important;color:#F4F2ED!important}\n@media (max-width:767px){body.mf-pdp #single-product .btn-add-to-cart,body.mf-pdp #single-product .js-addtocart-placeholder{font-stretch:100%!important;letter-spacing:.03em!important;font-size:14px!important}}\n@media (min-width:768px){body.mf-pdp #single-product .row > .col-md-7{position:sticky;top:120px;align-self:flex-start}}\n@media (min-width:768px){body.mf-pdp #single-product .js-product-name{font-size:26px!important}body.mf-pdp #single-product #price_display{font-size:46px!important}}\n\n/* Tarjetas de producto del tema (listados, buscador, relacionados) con la línea de Modo FIT */\nbody.mf-ipa .js-item-product .product-item-name{font-family:Manrope,sans-serif!important;font-weight:800!important;font-size:15px!important;line-height:1.3!important;color:#001F17!important;letter-spacing:-.01em;min-height:2.6em;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}\nbody.mf-ipa .js-item-product{height:100%;display:flex!important;flex-direction:column}\nbody.mf-ipa .js-item-product .product-item-information{flex:1 1 auto;display:flex!important;flex-direction:column}\nbody.mf-ipa .js-item-product .product-item-quick-shop-container{margin-top:auto!important;padding-top:14px}\nbody.mf-ipa .js-item-product .product-item-price-container{display:flex!important;flex-wrap:wrap;align-items:center;gap:2px 8px;margin-top:6px!important;font-family:Manrope,sans-serif!important;color:#001F17!important}\nbody.mf-ipa .js-item-product .product-item-price{order:1;font-family:Archivo,sans-serif!important;font-stretch:125%;font-weight:900!important;font-size:22px!important;line-height:1.05!important;color:#001F17!important;letter-spacing:-.01em;margin:0!important}\nbody.mf-ipa .js-item-product .product-item-price-compare{order:0;flex-basis:100%;font-family:Manrope,sans-serif!important;font-size:13px!important;font-weight:600!important;color:#001F17!important;opacity:.45;margin:0!important}\nbody.mf-ipa .js-item-product .product-item-discount{order:2;display:inline-block;background:#E3F8EE!important;color:#006947!important;font:800 12px/1 Manrope,sans-serif!important;padding:5px 9px!important;border-radius:999px!important}\nbody.mf-ipa .js-item-product .product-item-discount *{color:#006947!important;font:inherit!important}\nbody.mf-ipa .js-item-product .product-item-payment-discount.mf-zero,body.mf-ipa .js-item-product .product-item-installments:empty{display:none!important}\nbody.mf-ipa .js-item-product .product-item-quick-shop-modal-trigger,body.mf-ipa .js-item-product input.js-addtocart.btn{display:block!important;width:100%!important;background:#00C776!important;border:0!important;border-radius:999px!important;color:#001F17!important;font-family:Archivo,sans-serif!important;font-stretch:125%;font-weight:800!important;font-size:12px!important;letter-spacing:.1em!important;text-transform:uppercase!important;text-align:center!important;padding:13px 16px!important;line-height:1.2!important;box-shadow:none!important;transition:background .15s}\nbody.mf-ipa .js-item-product .product-item-quick-shop-modal-trigger *{color:#001F17!important;font:inherit!important;letter-spacing:inherit!important}\nbody.mf-ipa .js-item-product .product-item-quick-shop-modal-trigger:hover,body.mf-ipa .js-item-product input.js-addtocart.btn:hover{background:#19D688!important}\nbody.mf-ipa .js-item-product .product-item-promo-label{background:#001F17!important;color:#00C776!important;font:800 10px/1 Archivo,sans-serif!important;font-stretch:125%!important;letter-spacing:.12em!important;text-transform:uppercase!important;padding:7px 10px!important;border-radius:999px!important;border:0!important;white-space:nowrap!important}\n@media (max-width:767px){body.mf-ipa .js-item-product .product-item-name{-webkit-line-clamp:3;min-height:3.9em}body.mf-ipa .js-item-product .product-item-promo-label{font-size:9px!important;letter-spacing:.08em!important;padding:6px 8px!important}}\nbody.mf-ipa .js-price-filter-container{display:none!important}\nbody.mf-ipa .js-item-product .product-item-colors-bullet{width:18px!important;height:18px!important;border-radius:50%!important;box-shadow:0 0 0 1px rgba(0,31,23,.2)!important}\n\n/* Armá tu pack (producto con variantes por prenda + promo nativa) */\nbody.mf-pk-on #single-product .js-product-variants,body.mf-pk-on #single-product .form-quantity-container,body.mf-pk-on #single-product .js-product-promo-container,body.mf-pk-on #single-product .js-price-container,body.mf-pk-on #single-product #btn-installments,body.mf-pk-on #single-product .js-added-to-cart-product-message{display:none!important}\nbody.mf-pk-on #single-product .product-actions{grid-template-columns:1fr!important}\n.mf-pk{font-family:Manrope,system-ui,sans-serif;color:#001F17;text-align:left;margin:4px 0 18px}\n.mf-pk-price{display:flex;align-items:baseline;flex-wrap:wrap;gap:4px 10px;margin:6px 0 16px}\n.mf-pk-price b{font-family:Archivo,sans-serif;font-stretch:125%;font-weight:900;font-size:40px;line-height:1;letter-spacing:-.01em}\n.mf-pk-price s{font-size:16px;opacity:.5}\n.mf-pk-price em{font-style:normal;background:#E3F8EE;color:#006947;font-weight:800;font-size:13px;padding:5px 10px;border-radius:999px}\n.mf-pk-price small{flex-basis:100%;font-size:13.5px;color:#5B6B65;font-weight:600}\n.mf-pk-h{display:flex;align-items:baseline;justify-content:space-between;gap:10px;font-weight:800;font-size:15px;margin:18px 0 10px}\n.mf-pk-h i{font-style:normal;font-weight:700;font-size:13px;color:#5B6B65}\n.mf-pk-h a{font-size:13px;color:#001F17!important;text-decoration:underline!important;cursor:pointer;font-weight:800}\n.mf-pk-opts{display:grid;grid-template-columns:1fr 1fr;gap:10px}\n.mf-pk-opt{position:relative;display:flex;flex-direction:column;align-items:flex-start;gap:2px;padding:16px 14px 13px;border-radius:16px;border:1.5px solid rgba(0,31,23,.18);background:#fff;color:#001F17;cursor:pointer;text-align:left;font-family:inherit;transition:border-color .15s,box-shadow .15s}\n.mf-pk-opt:hover{border-color:#001F17}\n.mf-pk-opt.on{border-color:#001F17;box-shadow:0 0 0 1.5px #001F17;background:#F4F2ED}\n.mf-pk-opt b{font-family:Archivo,sans-serif;font-stretch:125%;font-weight:900;font-size:15px;text-transform:uppercase;letter-spacing:.02em}\n.mf-pk-opt span{font-weight:800;font-size:19px}\n.mf-pk-opt small{font-size:12.5px;color:#5B6B65;font-weight:600}\n.mf-pk-opt em{position:absolute;top:-10px;right:10px;font-style:normal;background:#00C776;color:#001F17;font-weight:800;font-size:11px;padding:4px 9px;border-radius:999px;white-space:nowrap}\n.mf-pk-sizes{display:flex;flex-wrap:wrap;gap:8px}\n.mf-pk-sz{min-width:56px;height:46px;padding:0 14px;border-radius:12px;border:1px solid rgba(0,31,23,.25);background:#fff;color:#001F17;font:700 15px Manrope,sans-serif;cursor:pointer}\n.mf-pk-sz.on{background:#001F17;border-color:#001F17;color:#fff}\n.mf-pk-sz.mf-pk-need{animation:mfPkShake .4s}\n@keyframes mfPkShake{25%{transform:translateX(-4px)}75%{transform:translateX(4px)}}\n.mf-pk-colors{display:flex;flex-direction:column;gap:8px}\n.mf-pk-row{display:flex;align-items:center;gap:12px;padding:8px 10px 8px 8px;border-radius:14px;background:#F4F2ED}\n.mf-pk-row svg{flex:none;width:40px;height:40px;filter:drop-shadow(0 1px 1px rgba(0,0,0,.15))}\n.mf-pk-row span{flex:1;font-weight:800;font-size:15px}\n.mf-pk-step{display:flex;align-items:center;background:#fff;border-radius:999px;border:1px solid rgba(0,31,23,.15)}\n.mf-pk-step button{width:38px;height:38px;border:0;background:transparent;font:800 20px/1 Manrope,sans-serif;color:#001F17;cursor:pointer;border-radius:50%}\n.mf-pk-step button:disabled{opacity:.25;cursor:default}\n.mf-pk-step output{min-width:22px;text-align:center;font-weight:800;font-size:16px}\n.mf-pk-bar{display:flex;gap:4px;margin:12px 0 0}\n.mf-pk-bar i{flex:1;height:6px;border-radius:3px;background:rgba(0,31,23,.12)}\n.mf-pk-bar i.on{background:#00C776}\n.mf-pk-mix{display:flex;align-items:center;gap:8px;margin:14px 0 0;font-size:13.5px;font-weight:700;cursor:pointer}\n.mf-pk-mix input{width:18px;height:18px;accent-color:#001F17;margin:0}\n.mf-pk-units{display:none;flex-direction:column;gap:6px;margin-top:10px}\n.mf-pk.mf-pk-multi .mf-pk-units{display:flex}\n.mf-pk.mf-pk-multi .mf-pk-one{display:none}\n.mf-pk-u{display:flex;align-items:center;gap:8px;flex-wrap:wrap;font-size:13.5px;font-weight:700;padding:6px 0;border-bottom:1px solid rgba(0,31,23,.08)}\n.mf-pk-u svg{width:26px;height:26px;flex:none}\n.mf-pk-u span{min-width:96px}\n.mf-pk-u .mf-pk-sz{min-width:44px;height:36px;padding:0 10px;font-size:13.5px;border-radius:10px}\n.mf-pk-msg{margin-top:12px;font-weight:700;font-size:13.5px;color:#B3261E;min-height:0}\n.mf-pk-msg:empty{display:none}\n/* Footer de Ipanema con la línea de Modo FIT */\nbody.mf-foot [data-store=\"footer\"]{font-family:Manrope,system-ui,sans-serif!important}\nbody.mf-foot [data-store=\"footer\"] .footer-main-info{gap:40px}\nbody.mf-foot [data-store=\"footer\"] .footer-menu-title{font-family:Archivo,sans-serif!important;font-stretch:125%;font-weight:800!important;text-transform:uppercase;letter-spacing:.16em;font-size:12px!important;color:#00C776!important;margin-bottom:14px!important}\nbody.mf-foot [data-store=\"footer\"] .footer-menu-list a{font-family:Manrope,sans-serif!important;font-size:15px!important;font-weight:600!important;color:#F4F2ED!important;opacity:.85;text-decoration:none!important;transition:color .15s,opacity .15s}\nbody.mf-foot [data-store=\"footer\"] .footer-menu-list a:hover{color:#00C776!important;opacity:1}\nbody.mf-foot [data-store=\"footer\"] .footer-menu-list li{margin-bottom:10px!important}\nbody.mf-foot [data-store=\"footer\"] .footer-institutional-description{font-size:14.5px!important;line-height:1.55!important;opacity:.8;max-width:340px}\nbody.mf-foot [data-store=\"footer\"] .footer-institutional-header,body.mf-foot [data-store=\"footer\"] .footer-institutional-description{margin-bottom:0!important;padding-bottom:0!important}\nbody.mf-foot [data-store=\"footer\"] .footer-social-container{margin:16px 0 18px!important;padding:0!important}\nbody.mf-foot [data-store=\"footer\"] .footer-contact-info-container .footer-menu-list{margin:0!important;padding:0!important}\nbody.mf-foot [data-store=\"footer\"] .footer-social-link{display:inline-flex!important;align-items:center;justify-content:center;width:40px;height:40px;border-radius:50%;background:rgba(244,242,237,.08);transition:background .15s}\nbody.mf-foot [data-store=\"footer\"] .footer-social-link:hover{background:#00C776}\nbody.mf-foot [data-store=\"footer\"] .footer-social-link svg{width:18px!important;height:18px!important;fill:#F4F2ED!important}\nbody.mf-foot [data-store=\"footer\"] .footer-contact-info-container .footer-menu-list a{display:inline-flex!important;align-items:center;gap:10px}\nbody.mf-foot [data-store=\"footer\"] .mf-fi{display:inline-flex;font-style:normal}\nbody.mf-foot [data-store=\"footer\"] .mf-foot-hr{font-size:13px;opacity:.6;margin:-8px 0 12px 32px!important}\nbody.mf-foot [data-store=\"footer\"] .footer-seals-container .custom-seal-code{display:none!important}\nbody.mf-foot [data-store=\"footer\"] .footer-secondary-info{border-top:1px solid rgba(244,242,237,.12);margin-top:32px!important;padding-top:20px!important;font-size:12.5px!important;opacity:.7}\nbody.mf-foot [data-store=\"footer\"] .footer-secondary-info a{color:#F4F2ED!important}\n@media (max-width:767px){body.mf-foot [data-store=\"footer\"] .footer-menu-title{margin-bottom:0!important}body.mf-foot [data-store=\"footer\"] .footer-menu-accordion{border-bottom:1px solid rgba(244,242,237,.12)}}\n\n/* Páginas de contenido (preguntas frecuentes, cambios y devoluciones) */\nbody.template-page .page-header .container{max-width:792px}\nbody.template-page .page-content.user-content p{font-size:15.5px!important}\nbody.template-page .page-header-title{font-family:Archivo,sans-serif!important;font-stretch:125%;font-weight:900!important;text-transform:uppercase;letter-spacing:-.01em;color:#001F17!important}\nbody.template-page .page-content.user-content{max-width:760px;margin:0 auto 56px!important;font-family:Manrope,system-ui,sans-serif!important;font-size:15.5px;line-height:1.65;color:#001F17!important}\nbody.template-page .page-content.user-content > p:first-child{font-size:17px;color:#5B6B65}\nbody.template-page .page-content.user-content h2{font-family:Archivo,sans-serif!important;font-stretch:125%;font-weight:900!important;text-transform:uppercase;font-size:20px!important;line-height:1.15!important;margin:36px 0 12px!important;color:#001F17!important}\nbody.template-page .page-content.user-content h3{font-family:Manrope,sans-serif!important;font-weight:800!important;font-size:16.5px!important;margin:22px 0 6px!important;color:#001F17!important}\nbody.template-page .page-content.user-content ul{list-style:none!important;padding:0!important;margin:8px 0 14px!important}\nbody.template-page .page-content.user-content li{position:relative;padding:4px 0 4px 26px!important}\nbody.template-page .page-content.user-content li:before{content:\"✓\";position:absolute;left:2px;top:4px;color:#008D60;font-weight:800}\nbody.template-page .page-content.user-content a{color:#006947!important;font-weight:700;text-decoration:underline!important}\nbody.template-page .page-content.user-content strong{font-weight:800}\n\n/* Carrito con la línea de Modo FIT (los colores vienen de la paleta del tema) */\n#modal-cart .modal-title{font-family:Archivo,sans-serif!important;font-stretch:125%;font-weight:900!important;text-transform:uppercase;letter-spacing:.02em;font-size:18px!important;color:#001F17!important}\n#modal-cart .cart-item-name{font-family:Manrope,sans-serif!important;font-weight:800!important;color:#001F17!important;font-size:15px!important}\n#modal-cart .cart-item-variant{font-family:Manrope,sans-serif!important;font-weight:700!important;color:#5B6B65!important}\n#modal-cart .js-cart-item-subtotal{font-family:Archivo,sans-serif!important;font-stretch:125%;font-weight:900!important;color:#001F17!important}\n#modal-cart .cart-quantity-input,#modal-cart .js-cart-quantity-input{border-radius:999px!important;border-color:rgba(0,31,23,.2)!important;font:800 15px Manrope,sans-serif!important;color:#001F17!important}\n#modal-cart .cart-item-promo-label{font-family:Manrope,sans-serif!important;font-weight:800!important;letter-spacing:.02em}\n#modal-cart .cart-totals-total,#modal-cart .cart-totals-total *{font-family:Archivo,sans-serif!important;font-stretch:125%;font-weight:900!important;color:#001F17!important}\n#modal-cart [name=\"go_to_checkout\"]{font-family:Archivo,sans-serif!important;font-stretch:125%;font-weight:800!important;text-transform:uppercase!important;letter-spacing:.1em!important;font-size:14px!important}\n/* Carrito: renglones del pack sin +/-, y aviso si el pack está incompleto */\n.mf-pk-line .js-cart-quantity-btn,.mf-pk-line .cart-quantity-btn{visibility:hidden!important;pointer-events:none!important}\n.mf-pk-line .js-cart-quantity-input{pointer-events:none!important;background:transparent!important}\n.mf-pk-cart{font-family:Manrope,system-ui,sans-serif;border-radius:14px;padding:12px 14px;margin:0 0 12px;font-size:14px;line-height:1.35;text-align:left}\n.mf-pk-cart.ok{background:#E3F8EE;color:#006947;font-weight:700}\n.mf-pk-cart.bad{background:#FDECEA;color:#8C1D18;font-weight:700}\n.mf-pk-cart a{display:inline-block;margin-top:8px;background:#001F17;color:#F4F2ED!important;font-weight:800;font-size:13px;padding:9px 14px;border-radius:999px;text-decoration:none!important}\nbody.mf-pk-on .js-notification-cart{display:none!important}\n[name=\"go_to_checkout\"].mf-pk-block{opacity:.4!important;pointer-events:none!important}\n\n@media (max-width:760px){\n  .mf .mf-sec{padding:40px 0}\n  .mf .mf-h2{font-size:30px;margin:12px 0 6px}\n  .mf .mf-sub{font-size:14.5px}\n  .mf .mf-hero{min-height:0}\n  .mf .mf-hero:after{background:linear-gradient(0deg,rgba(0,31,23,.97) 45%,rgba(0,31,23,.4) 100%)}\n  .mf .mf-hero .mf-wrap{padding-top:88px;padding-bottom:32px}\n  .mf .mf-hero h1{margin:14px 0 12px}\n  .mf .mf-hero p{font-size:15px;margin-bottom:16px}\n  .mf .mf-hero-price{margin-bottom:18px}\n  .mf .mf-hero-cta{margin-bottom:16px}\n  .mf .mf-hero-cta .mf-btn{flex:1;padding:16px 8px;font-size:12px;letter-spacing:.04em;white-space:nowrap}\n  .mf .mf-final .mf-hero-cta .mf-btn{flex:1 1 100%}\n  .mf .mf-checks{font-size:12.5px;gap:6px 14px}\n  .mf .mf-grid{margin-top:24px;gap:16px}\n  .mf .mf-card-body{padding:18px 18px 20px}\n  .mf .mf-card-title{font-size:18px}\n  .mf .mf-pricebox{margin-top:14px;padding-top:14px}\n  .mf .mf-big .mf-d{font-size:52px}\n  .mf .mf-card .mf-btn{margin-top:16px;padding:18px 20px;font-size:14px}\n  .mf .mf-card-foot a{padding:6px 0}\n  .mf .mf-steps-k{text-align:left;margin-top:22px}\n  .mf .mf-steps{grid-template-columns:1fr;gap:2px;padding:10px 14px}\n  .mf .mf-step{justify-content:flex-start}\n  .mf .mf-trust{padding:22px 0}\n  .mf .mf-trust .mf-wrap{grid-template-columns:repeat(3,1fr);gap:8px}\n  .mf .mf-t{flex-direction:column;text-align:center;gap:8px}\n  .mf .mf-t b{display:none}\n  .mf .mf-t em{display:block;font-style:normal;font-weight:800;font-size:12.5px;white-space:nowrap}\n  .mf .mf-t span{display:none}\n  .mf .mf-summary{grid-template-columns:1fr;gap:18px;padding:22px}\n  .mf .mf-avg{font-size:60px}\n  .mf .mf-faq-grid{grid-template-columns:1fr;gap:4px}\n  .mf .mf-faq-side .mf-btn{margin-top:16px}\n  .mf summary{padding:17px 34px 17px 0;font-size:15.5px}\n  .mf .mf-r-top{flex-wrap:wrap}\n  .mf-sticky .mf-wrap{padding-bottom:calc(10px + env(safe-area-inset-bottom))}\n}";
  (document.head || document.documentElement).appendChild(st);
})();
(function () {
  if (window.__mfLoaded) return;
  window.__mfLoaded = true;

  /* ================= CONFIGURACIÓN (editá acá) ================= */
  var CFG = {
    WHATSAPP: '542352404858', // WhatsApp de atención (el mismo del footer y de las páginas de ayuda). Ej: '5491122334455' (sin + ni espacios). Vacío = se ocultan los botones de WhatsApp
    HOME_ONLY: true,         // las secciones solo aparecen en la home
    SHOW_BAR: true,          // barra de oferta arriba, en todas las páginas
    SHOW_BADGES: true,       // etiqueta PACK X4 sobre las fotos del listado de productos
    FOOTER_CLEAN: true,      // footer: WhatsApp con ícono, mail, horario; sin teléfono repetido ni botones grandes
    HORARIO: 'Lunes a viernes de 9 a 18 hs',
    PRODUCT_PAGE: true,      // mejora la página de producto: precio por prenda, botón, guía de talles, confianza y barra fija
    SIZE_GUIDE_MATCH: 'guia-de-talles', // parte del nombre de la foto de la guía de talles en la galería
    SHOW_STICKY: true,       // barra fija de compra abajo (home)
    HIDE_THEME_HOME: true,   // oculta lo que el tema muestra en la home debajo de nuestras secciones (banners, destacados)
    THEME_HOME_SELECTOR: '[data-store^="home-"], .js-home-sections-container, .js-home-slider',
    FREE_SHIPPING: 80000,    // envío gratis desde (configurado en Tiendanube)
    FREE_SHIPPING_UNITS: 8,  // cómo se comunica: "llevando 8 prendas" (8 prendas siempre superan FREE_SHIPPING). 0 = muestra el monto
    TRANSFER_PCT: 0,         // % de descuento por transferencia. 0 = no se muestra (ej: 10)
    CUOTAS: 0,               // cuotas SIN interés. 0 = solo dice "tarjeta en cuotas" (ej: 3)
    // Dónde se insertan las secciones: después del primer elemento que coincida
    MOUNT_AFTER: 'header, .js-head-main, .head-main',
    // Fotos de producto del listado (tema de Tiendanube). Si no aparece la etiqueta, revisá este selector
    BADGE_SELECTOR: '.js-item-product .js-item-image-container, .js-item-product .item-image, .item-product .item-image, .js-item-product .product-item-image-container',
    // 'banner' = usa el carrusel de imágenes de Tiendanube como portada (si tiene imágenes cargadas)
    // 'texto'  = usa la portada de texto de este código
    HERO: 'banner',
    SLIDER_SELECTOR: '[data-store="home-slider"]',
    HERO_IMG: '',            // URL de la foto del hero (ideal 1600x1000, modelo con fondo oscuro)
    // Precios y fotos: en la home se toman solos de la tienda (por id); estos quedan de respaldo
    PRODUCTS: [
      { id: 357413455, short: 'Musculosas', name: 'Musculosas de morley', url: '/productos/musculosa-morley-18110/',
        img: 'https://dcdn-us.mitiendanube.com/stores/007/918/673/products/musculosa-morley-a68604bcc9f5cf222d17890926422081-1024-1024.webp',
        x4: 61990, x3unit: 0, tag: 'Mejor precio',
        colors: [['Negro', '#111'], ['Gris', '#9A9A9A'], ['Blanco', '#fff']], sizes: 'M a XXL',
        bullets: ['Morley acanalado que marca sin apretar', 'Sisa deportiva para entrenar cómodo', 'Para el gym y para el día a día'] },
      { id: 357413606, short: 'Térmicas', name: 'Remeras térmicas de compresión', url: '/productos/remera-termica-compresion-x4-1kxls/',
        img: 'https://dcdn-us.mitiendanube.com/stores/007/918/673/products/compresion-gris-52677937449b9deec617890959540767-1024-1024.webp',
        x4: 77990, x3unit: 0, tag: '',
        colors: [['Negro', '#111'], ['Gris', '#9A9A9A']], sizes: 'XS a XL',
        bullets: ['Compresión que acompaña cada serie', 'Manga ranglan: hombros libres', 'Para entrenar o usar abajo de todo'] }
    ],
    // Opiniones reales: { name:'Juan P.', stars:5, text:'...', product:'Musculosa de morley (negra)', date:'2026-10-20', verified:true }
    // verified:true solo si la persona compró de verdad (pedido confirmado).
    REVIEWS: [],
    MIX_COLORS: false,       // true si se pueden combinar colores dentro de un mismo pack (hoy cada pack es de un color)
    // Armá tu pack: productos cargados POR PRENDA (variantes Color x Talle, precio de 1 prenda = pack x4 / 4).
    // En la página se eligen pack, talle y colores; en el carrito no se puede comprar algo que no sea múltiplo de 4.
    // off = % de la promo nativa "Descuento progresivo" de Tiendanube (solo se muestra; el descuento real lo hace la promo).
    PACK_BUILDER: [
      { id: 357413455, url: '/productos/musculosa-morley-18110/', noun: 'musculosa', nouns: 'musculosas', packs: [4, 8], off: { 8: 4 }, ship: { 8: true } }
    ],
    PACK_STEP: 4,            // el carrito exige múltiplos de esto en los productos del armador
    PACK_MAX_UNIT: 30000,    // seguro: si el precio cargado supera esto, el producto sigue a precio de pack y el armador no se activa
    REVIEWS_PAGE: 6,
    REVIEWS_EMPTY: 'hide'    // sin opiniones: 'hide' oculta la sección, 'cta' muestra "dejá tu opinión"
  };
  if (window.MF_OVERRIDE) { for (var ok in window.MF_OVERRIDE) CFG[ok] = window.MF_OVERRIDE[ok]; }
  /* ============================================================= */

  var d = document, P = CFG.PRODUCTS;
  var IPA = /theme-ipanema/.test((d.body || d.documentElement).className) || !!d.querySelector('.ns-section');
  var path = location.pathname.replace(/\/+$/, '');
  var isHome = !CFG.HOME_ONLY || path === '' || path === '/index.html';

  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function $m(n) { return '$' + String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, '.'); }
  function track(cta) { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: 'mf_click', mf_cta: cta }); }
  function wa(msg) { return 'https://wa.me/' + CFG.WHATSAPP + '?text=' + encodeURIComponent(msg); }
  function stars(n) { var s = ''; for (var i = 1; i <= 5; i++) s += i <= Math.round(n) ? '★' : '<s>★</s>'; return '<span class="mf-stars" aria-label="' + n + ' de 5 estrellas">' + s + '</span>'; }
  function icon(p, c) { var h = ''; for (var i = 1; i < p.length; i++) h += '<path d="' + p[i] + '"/>'; return '<svg width="' + (c ? 22 : 28) + '" height="' + (c ? 22 : 28) + '" viewBox="' + p[0] + '" fill="' + (c || '#00C776') + '" aria-hidden="true">' + h + '</svg>'; }
  // Íconos de Magnific (envio, cambio, pago en assets/iconos)
  var IC = {
    truck: ['0 0 512 512', 'm509.67 242.274-39.67-93.405c-5.098-12.007-16.861-19.465-30.7-19.465h-102.519v-36.182c0-15.439-12.561-28-28-28h-280.782c-15.438 0-27.999 12.561-27.999 28v271.005c0 15.439 12.561 28 27.999 28h38.652c3.942 30.724 30.243 54.551 62.022 54.551 31.778 0 58.079-23.827 62.021-54.551h163.674c3.942 30.724 30.243 54.551 62.021 54.551 31.779 0 58.08-23.827 62.022-54.551h10.589c12.683 0 23-10.318 23-23v-115.564c0-4.024-.74-7.642-2.33-11.389zm-20.267-6.791h-115.328v-56.623h91.279zm-473.403 128.744v-271.005c0-6.617 5.383-12 11.999-12h280.782c6.617 0 12 5.383 12 12v44.182 238.823h-130.086c-3.942-30.724-30.243-54.551-62.021-54.551-31.779 0-58.08 23.827-62.022 54.551h-38.653c-6.616 0-11.999-5.383-11.999-12zm112.674 66.551c-25.669 0-46.552-20.883-46.552-46.551s20.883-46.551 46.552-46.551c25.668 0 46.551 20.882 46.551 46.551s-20.883 46.551-46.551 46.551zm287.717 0c-25.668 0-46.551-20.883-46.551-46.551s20.883-46.551 46.551-46.551c25.669 0 46.552 20.882 46.552 46.551s-20.883 46.551-46.552 46.551zm72.609-54.551h-10.587c-3.942-30.724-30.243-54.551-62.022-54.551-31.778 0-58.079 23.827-62.021 54.551h-17.588v-230.824h102.518c7.308 0 13.428 3.724 15.974 9.719l3.286 7.737h-92.484c-4.418 0-8 3.582-8 8v72.624c0 4.418 3.582 8 8 8h129.741c.116.693.184 1.4.184 2.18v49.782h-12.308c-4.418 0-8 3.582-8 8s3.582 8 8 8h12.307v49.782c0 3.859-3.14 7-7 7zm-72.609-21.408c-16.215 0-29.407 13.192-29.407 29.408s13.192 29.408 29.407 29.408c16.216 0 29.408-13.192 29.408-29.408s-13.193-29.408-29.408-29.408zm0 42.816c-7.393 0-13.407-6.015-13.407-13.408s6.015-13.408 13.407-13.408c7.394 0 13.408 6.015 13.408 13.408s-6.015 13.408-13.408 13.408zm-287.717-42.816c-16.216 0-29.408 13.192-29.408 29.408s13.192 29.408 29.408 29.408c16.215 0 29.407-13.192 29.407-29.408s-13.192-29.408-29.407-29.408zm0 42.816c-7.394 0-13.408-6.015-13.408-13.408s6.015-13.408 13.408-13.408 13.407 6.015 13.407 13.408-6.015 13.408-13.407 13.408zm91.143-164.942c0 4.418-3.582 8-8 8h-130.125c-4.418 0-8-3.582-8-8s3.582-8 8-8h130.125c4.418 0 8 3.581 8 8zm-158.375-86.875c-4.418 0-8-3.582-8-8s3.582-8 8-8h130.125c4.418 0 8 3.582 8 8s-3.582 8-8 8zm49.501 31.437h130.125c4.418 0 8 3.582 8 8s-3.582 8-8 8h-130.125c-4.418 0-8-3.582-8-8s3.582-8 8-8z'],
    swap: ['0 0 512 512', 'm401.1055 229.1625v-105.6537c0-5.2517-2.0667-10.0198-5.4114-13.571l-51.8215-61.7893c-1.5215-1.814-3.7681-2.8618-6.1357-2.8618h-274.3936c-2.3677 0-4.6143 1.0479-6.1357 2.8618l-51.874 61.8521.0095.0081c-3.3015 3.5439-5.3396 8.2828-5.3396 13.5002v276.2363c0 10.9175 8.8823 19.7998 19.7998 19.7998h278.5131c21.7362 28.6371 56.1327 47.1685 94.7814 47.1685 65.561 0 118.8989-53.3379 118.8989-118.8989-.0001-62.885-49.0507-114.5177-110.8912-118.6521zm-31.5623-125.4818h-128.0564v-42.3785h92.5146zm-193.9338 16.0156h49.8618v55.8076l-4.8691-4.4995c-1.5938-1.4731-3.7144-2.2402-5.8833-2.1143-2.1665.1211-4.1914 1.1167-5.6104 2.7588l-8.5625 9.9063-8.5405-9.9004c-1.4175-1.6436-3.4414-2.6411-5.6079-2.7646-2.168-.1191-4.2905.6382-5.8857 2.1099l-4.9023 4.5229v-55.8267zm0-16.0156v-42.3785h49.8618v42.3784h-49.8618zm-108.5308-42.3785h92.5151v42.3784h-128.0568zm-47.2754 342.2271c-2.0513 0-3.7842-1.7329-3.7842-3.7842v-276.2363c0-2.1021 1.6978-3.8125 3.7842-3.8125h139.7905v74.1118c0 3.1807 1.8818 6.0596 4.7954 7.3354 1.0327.4521 2.126.6729 3.2109.6724 1.9751 0 3.9233-.7305 5.4321-2.1226l12.2544-11.3076 9.1899 10.6528c1.52 1.7627 3.7319 2.7764 6.0596 2.7773h.0039c2.3262 0 4.5376-1.0112 6.0586-2.7715l9.2134-10.6592 12.2319 11.3037c2.3364 2.1602 5.7314 2.7314 8.6445 1.4556 2.915-1.2749 4.7983-4.1548 4.7983-7.3364v-74.1118h139.7905c2.0664 0 3.8125 1.7461 3.8125 3.8125v105.6536c-61.8562 4.1333-110.9194 55.7666-110.9194 118.6521 0 20.1204 5.0317 39.0853 13.8926 55.7148h-268.2596zm373.2945 47.1685c-56.7456 0-102.9116-46.1533-102.9116-102.8833 0-56.7461 46.166-102.9121 102.9116-102.9121 56.73 0 102.8833 46.166 102.8833 102.9121 0 56.7299-46.1534 102.8833-102.8833 102.8833zm57.2456-114.959v24.123c0 16.9351-13.7651 30.7129-30.6851 30.7129h-27.3489l8.4148 5.9473c3.6118 2.5527 4.4702 7.5498 1.918 11.1611-1.5605 2.208-4.0342 3.3867-6.5464 3.3867-1.5977 0-3.2109-.4766-4.6147-1.4688l-28.9985-20.4946c-2.123-1.5005-3.3853-3.9375-3.3862-6.5371-.001-2.5991 1.2603-5.0376 3.3818-6.5391l28.9985-20.5225c3.6099-2.5547 8.6069-1.6997 11.1626 1.9106 2.5547 3.6099 1.6992 8.6079-1.9106 11.1626l-8.447 5.978h27.3767c8.0889 0 14.6694-6.5933 14.6694-14.6973v-24.123c0-8.0889-6.5806-14.6694-14.6694-14.6694h-75.8267c-4.4229 0-8.0078-3.585-8.0078-8.0078s3.585-8.0078 8.0078-8.0078h75.8267c16.9198.0001 30.685 13.7652 30.685 30.6852z'],
    card: ['0 0 64 64', 'm30.5 25h7.5c3.95043-.09873 3.95867-5.89804-.00009-6h-2.99991v-.5c-.10082-3.94848-5.89557-3.96141-6 .0001 0-.0001 0 .65713 0 .65713-8.74713 2.01512-7.52953 14.61219 1.50011 14.84278-.00011 0 2.99989 0 2.99989 0 1.96952.03285 1.97183 2.96617-.00007 3h-7.49993c-3.95043.09873-3.95867 5.89804.00009 6-.00009 0 2.99991 0 2.99991 0-.27401 4.73798 6.44033 4.59427 5.99996-.15727 3.4307-.70309 6.00004-3.76559 6.00004-7.34273 0-4.13574-3.36426-7.5-7.5-7.5h-3c-1.96952-.03285-1.97183-2.96617 0-3zm0 5h3c7.01577.2185 7.39365 10.21435.42325 10.97755-.52091.04003-.92325.4746-.92325.99706v1.52539c0 .55176-.44873 1-1 1s-1-.44824-1-1v-1.5c0-.55273-.44775-1-1-1h-4c-1.31221-.02634-1.31676-1.97414.00004-2-.00004 0 7.49996 0 7.49996 0 4.62555-.14845 4.62457-6.85259-.00008-7h-2.99992c-7.01577-.2185-7.39365-10.21435-.42325-10.97755.52091-.04003.92325-.4746.92325-.99706v-1.52539c0-.55176.44873-1 1-1s1 .44824 1 1v1.5c0 .55273.44775 1 1 1h4c1.31221.02634 1.31676 1.97414-.00004 2h-7.49996c-4.62555.14845-4.62457 6.85259 0 7z', 'm9.58154 41.00098c.73174.01145 1.24372-.82102.88279-1.46779-2.92039-5.51853-4.46433-11.74119-4.46433-17.99412v-7.59473c4.16473-.46252 7.47589-3.77954 7.93915-7.94434h32.06085c.55225 0 1-.44727 1-1s-.44775-1-1-1h-33c-.55225 0-1 .44727-1 1 0 3.85938-3.14014 7-7 7-.55225 0-1 .44727-1 1v8.53906c0 6.57812 1.62402 13.12402 4.69678 18.92969.1792.33887.52588.53223.88477.53223z', 'm59 12c-3.85986 0-7-3.14062-7-7 0-.55273-.44775-1-1-1s-1 .44727-1 1c0 4.625 3.50635 8.44531 8 8.94434v7.5957c0 16.4834-10.43506 31.07031-26.00049 36.4043-7.61297-2.58156-14.37456-7.65136-18.97949-14.25782-.31739-.45312-.94043-.56249-1.39258-.24609-.45264.31641-.56348.93945-.24707 1.39258 1.93652 2.77051 4.22461 5.29004 6.7998 7.48633 3.99268 3.41406 8.53613 5.98047 13.50488 7.62988 16.89364-4.66997 28.30695-20.99897 28.31506-38.40893-.00012-.00025-.00012-8.54029-.00012-8.54029 0-.55273-.44775-1-1-1z']
  };
  function perUnit(total, n) { return Math.ceil(total / n / 10) * 10; }
  var minUnit = 0;
  function setUnits() {
    minUnit = 0;
    for (var i = 0; i < P.length; i++) { P[i].unit = perUnit(P[i].x4, 4); if (!minUnit || P[i].unit < minUnit) minUnit = P[i].unit; }
  }
  function pickImg(im) {
    var ss = im.getAttribute('data-srcset') || im.getAttribute('srcset') || '';
    var m = ss.match(/(\S+)\s+1024w/) || ss.match(/(\S+)\s+\d+w\s*$/);
    var u = m ? m[1] : (im.getAttribute('data-src') || im.getAttribute('src') || '');
    if (!u || /^data:/.test(u)) return '';
    return u.indexOf('//') === 0 ? 'https:' + u : u;
  }
  // Lee el precio real de cada producto desde la tienda (los productos del tema traen sus variantes)
  function syncPrices() {
    for (var i = 0; i < P.length; i++) {
      if (!P[i].id) continue;
      var el = d.querySelector('[data-product-id="' + P[i].id + '"] [data-variants], [data-product-id="' + P[i].id + '"][data-variants]');
      if (!el) continue;
      try {
        var v = JSON.parse(el.getAttribute('data-variants')), min = 0;
        for (var j = 0; j < v.length; j++) if (v[j].available !== false && v[j].price_number && (!min || v[j].price_number < min)) min = v[j].price_number;
        if (min && pkCfg(P[i].id) && min <= CFG.PACK_MAX_UNIT) { min = Math.round(min * (CFG.PACK_STEP || 4)); pkLive = true; }
        if (min) P[i].x4 = min;
      } catch (e) {}
      // Foto principal del producto, la misma que muestra la tienda
      var im = d.querySelector('[data-store="product-item-image-' + P[i].id + '"] img');
      var src = im ? pickImg(im) : '';
      if (src) P[i].img = src;
      // Segunda foto (la del modelo) para mostrar al pasar el mouse
      var im2 = d.querySelector('[data-store="product-item-image-' + P[i].id + '"] img.item-image-secondary, [data-store="product-item-image-' + P[i].id + '"] img.product-item-image-secondary');
      var src2 = im2 ? pickImg(im2) : '';
      if (src2 && src2 !== src) P[i].img2 = src2;
    }
    setUnits();
  }
  setUnits();
  var FREE_U = CFG.FREE_SHIPPING_UNITS;
  var FREE_TAIL = FREE_U ? 'llevando ' + FREE_U + ' prendas' : 'desde ' + $m(CFG.FREE_SHIPPING);
  var FREE = 'Envío gratis ' + FREE_TAIL;
  var pkLive = false; // algún producto del armador ya está a precio por prenda
  var PAYS = CFG.CUOTAS ? CFG.CUOTAS + ' cuotas sin interés' : 'Mercado Pago o cuotas';
  var CHECKS = '<div class="mf-checks"><span>' + FREE + '</span><span>Cambio de talle</span><span>' + PAYS + '</span></div>';

  // Fuentes de la marca
  if (!d.getElementById('mf-fonts')) {
    var l = d.createElement('link'); l.id = 'mf-fonts'; l.rel = 'stylesheet';
    l.href = 'https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,700..900&family=Manrope:wght@500;700;800&display=swap';
    d.head.appendChild(l);
  }

  /* ---------- Barra de oferta (todas las páginas) ---------- */
  function bar() {
    var items = ['<b>Pack x4</b> en toda la web', 'Desde <b>' + $m(minUnit) + '</b> c/u', (FREE_U ? 'Envío gratis llevando <b>' + FREE_U + ' prendas</b>' : 'Envío gratis desde <b>' + $m(CFG.FREE_SHIPPING) + '</b>'), CFG.MIX_COLORS ? 'Combiná colores como quieras' : 'Envíos a todo el país'];
    if (CFG.TRANSFER_PCT) items.splice(2, 0, '<b>' + CFG.TRANSFER_PCT + '% off</b> por transferencia');
    var one = '<span>' + items.join('</span><span>·</span><span>') + '</span><span>·</span>';
    var el = d.createElement('div');
    el.className = 'mf mf-bar'; el.setAttribute('role', 'note');
    el.innerHTML = '<div class="mf-track">' + one + one + one + one + '</div>';
    // En Ipanema la cabecera es fija: la barra va adentro, en el lugar de la barra nativa
    var nb = IPA ? d.querySelector('.js-navigation-bar') : null;
    if (nb && nb.parentNode) nb.parentNode.insertBefore(el, nb);
    else d.body.insertBefore(el, d.body.firstChild);
  }

  /* ---------- Secciones de la home ---------- */
  function hero() {
    var btns = '';
    for (var i = 0; i < P.length; i++) btns += '<a class="mf-btn' + (i ? ' mf-btn-line' : '') + '" href="' + esc(P[i].url) + '" data-mf="hero-' + i + '">' + esc(P[i].short) + ' x4</a>';
    return '<section class="mf-hero" id="mf-hero">' +
      (CFG.HERO_IMG ? '<div class="mf-hero-img" style="background-image:url(\'' + esc(CFG.HERO_IMG) + '\')"></div>' : '') +
      '<div class="mf-wrap">' +
        '<span class="mf-chip mf-k">Pack x4 en toda la web</span>' +
        '<h1 class="mf-d">Llevá 4.<em>Pagá menos.</em></h1>' +
        '<p>Musculosas de morley y remeras térmicas de compresión. ' + (CFG.MIX_COLORS ? 'Combiná colores como quieras.' : 'Para el gym y para todos los días.') + '</p>' +
        '<div class="mf-hero-price"><small>Desde</small><span class="mf-d">' + $m(minUnit) + '</span><span>c/u</span></div>' +
        '<div class="mf-hero-cta">' + btns + '</div>' + CHECKS +
      '</div></section>';
  }

  function card(p, i) {
    var sw = '', bl = '';
    for (var c = 0; c < p.colors.length; c++) sw += '<i style="background:' + esc(p.colors[c][1]) + '" title="' + esc(p.colors[c][0]) + '"></i>';
    for (c = 0; c < p.bullets.length; c++) bl += '<li>' + esc(p.bullets[c]) + '</li>';
    var pay = '';
    if (CFG.TRANSFER_PCT) pay += '<div class="mf-pay"><b>' + $m(p.x4 * (1 - CFG.TRANSFER_PCT / 100)) + '</b> con transferencia (' + CFG.TRANSFER_PCT + '% off)</div>';
    pay += '<div class="mf-pay">' + (CFG.CUOTAS ? '<b>' + CFG.CUOTAS + ' cuotas sin interés de ' + $m(p.x4 / CFG.CUOTAS) + '</b>' : '<b>Mercado Pago</b>, cuotas o transferencia') + '</div>';
    return '<div class="mf-card">' +
      '<a class="mf-card-img" href="' + esc(p.url) + '" data-mf="img-' + i + '"' + (p.img ? ' style="background-image:url(\'' + esc(p.img) + '\')"' : '') + ' aria-label="' + esc(p.name) + '">' +
        (p.img2 ? '<span class="mf-card-img2" style="background-image:url(\'' + esc(p.img2) + '\')"></span>' : '') +
        '<span class="mf-x4"><span class="mf-d">x4</span><small>Pack</small></span>' +
        (p.tag ? '<span class="mf-tag mf-k">' + esc(p.tag) + '</span>' : '') +
      '</a>' +
      '<div class="mf-card-body">' +
        '<a class="mf-card-title" href="' + esc(p.url) + '" data-mf="title-' + i + '">' + esc(p.name) + '</a>' +
        '<div class="mf-colors">' + sw + '<span>' + (CFG.MIX_COLORS ? 'Combinables · ' : '') + 'Talles ' + esc(p.sizes) + '</span></div>' +
        '<ul class="mf-bul">' + bl + '</ul>' +
        '<div class="mf-pricebox"><span class="mf-k">Llevando 4</span>' +
          '<div class="mf-big"><span class="mf-d">' + $m(p.unit) + '</span><span>c/u</span></div>' +
          '<div class="mf-total">Pack x4: <b>' + $m(p.x4) + '</b></div>' +
          pay +
        '</div>' +
        '<a class="mf-btn" href="' + esc(p.url) + '" data-mf="buy-' + i + '">Comprar pack x4</a>' +
        '<div class="mf-card-foot"><span>' + (p.x3unit ? 'o pack x3 a ' + $m(p.x3unit) + ' c/u' : '4 prendas por pack') + '</span>' +
          (CFG.WHATSAPP ? '<a target="_blank" rel="noopener" data-mf="size-wa-' + i + '" href="' + wa('Hola! Quiero ayuda con el talle de ' + p.name) + '">¿Dudas con el talle?</a>' : '') +
        '</div>' +
      '</div></div>';
  }

  function packs() {
    var cards = '';
    for (var i = 0; i < P.length; i++) cards += card(P[i], i);
    return '<section class="mf-sec mf-packs" id="mf-packs"><div class="mf-wrap">' +
      '<div class="mf-center"><span class="mf-chip mf-k">Pack x4 en toda la web</span>' +
      '<h2 class="mf-h2 mf-d">Llevá 4, pagá menos.</h2>' +
      '<p class="mf-sub">' + (CFG.MIX_COLORS ? 'Elegí tu pack y combiná colores como quieras.' : 'Elegí tu prenda, el color y tu talle.') + ' 4 prendas al mejor precio por unidad.</p></div>' +
      '<div class="mf-grid">' + cards + '</div>' +
      '<div class="mf-steps-k mf-k">Cómo comprar</div>' +
      '<div class="mf-steps">' +
        '<div class="mf-step"><i>1</i><span><b>Elegí tu prenda</b></span></div>' +
        '<div class="mf-step"><i>2</i><span><b>Elegí color</b> y talle</span></div>' +
        '<div class="mf-step"><i>3</i><span><b>Agregalo al carrito</b> y pagá</span></div>' +
      '</div></div></section>';
  }

  function trust() {
    return '<section class="mf-trust"><div class="mf-wrap">' +
      '<div class="mf-t"><i>' + icon(IC.truck) + '</i><div><b>Envíos a todo el país</b><em>Envíos al país</em><span>Gratis ' + FREE_TAIL + ', con seguimiento</span></div></div>' +
      '<div class="mf-t"><i>' + icon(IC.swap) + '</i><div><b>Cambio de talle</b><em>Cambio de talle</em><span>Tenés 30 días para cambiarlo</span></div></div>' +
      '<div class="mf-t"><i>' + icon(IC.card) + '</i><div><b>Pago protegido</b><em>Pago protegido</em><span>Mercado Pago, cuotas o transferencia</span></div></div>' +
      '</div></section>';
  }

  function reviews() {
    var R = CFG.REVIEWS || [];
    var head = '<div class="mf-center"><span class="mf-chip mf-k">Opiniones verificadas</span>' +
      '<h2 class="mf-h2 mf-d">Lo que dicen los que compraron.</h2>';
    if (!R.length) {
      if (CFG.REVIEWS_EMPTY !== 'cta') return '';
      return '<section class="mf-sec mf-rev"><div class="mf-wrap mf-rev-head">' + head + '</div>' +
        '<div class="mf-empty"><strong>Estamos sumando las primeras opiniones.</strong>' +
        '<p>¿Ya tenés tu pack? Contanos cómo te quedó y tu opinión aparece acá.</p>' +
        (CFG.WHATSAPP ? '<a class="mf-btn mf-btn-dark" target="_blank" rel="noopener" data-mf="review-wa" href="' + wa('Hola! Quiero dejar mi opinión sobre mi compra en Modo Fit') + '">Dejar mi opinión</a>' : '') +
        '</div></div></section>';
    }
    var sum = 0, dist = [0, 0, 0, 0, 0, 0];
    for (var i = 0; i < R.length; i++) { sum += R[i].stars; dist[R[i].stars]++; }
    var avg = sum / R.length, rows = '';
    for (var s = 5; s >= 1; s--) {
      rows += '<div><span>' + s + ' ★</span><u><em style="width:' + (dist[s] / R.length * 100).toFixed(1) + '%"></em></u><span>' + dist[s] + '</span></div>';
    }
    var chips = '<button type="button" class="mf-f" data-f="0" aria-pressed="true">Todas (' + R.length + ')</button>';
    for (s = 5; s >= 1; s--) if (dist[s]) chips += '<button type="button" class="mf-f" data-f="' + s + '" aria-pressed="false">' + s + ' ★ (' + dist[s] + ')</button>';
    return '<section class="mf-sec mf-rev"><div class="mf-wrap mf-rev-head">' + head +
      '<p class="mf-sub">Cada opinión sale de una compra real.</p></div>' +
      '<div class="mf-summary"><div><div class="mf-avg mf-d">' + avg.toFixed(1).replace('.', ',') + '</div>' + stars(avg) +
      '<div class="mf-r-meta">Sobre ' + R.length + (R.length === 1 ? ' opinión' : ' opiniones') + '</div></div>' +
      '<div class="mf-dist">' + rows + '</div></div>' +
      '<div class="mf-filters">' + chips + '</div>' +
      '<div class="mf-list" id="mf-list"></div>' +
      '<div class="mf-more"><button type="button" class="mf-btn mf-btn-dark" id="mf-more">Ver más opiniones</button><div class="mf-count" id="mf-count"></div></div>' +
      '</div></section>';
  }

  function fmtDate(iso) {
    var m = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
    var p = String(iso || '').split('-');
    return p.length === 3 ? (+p[2]) + ' ' + m[+p[1] - 1] + ' ' + p[0] : esc(iso);
  }

  function bindReviews(root) {
    var R = (CFG.REVIEWS || []).slice().sort(function (a, b) { return a.date < b.date ? 1 : -1; });
    var list = root.querySelector('#mf-list'); if (!list) return;
    var more = root.querySelector('#mf-more'), count = root.querySelector('#mf-count');
    var filter = 0, shown = CFG.REVIEWS_PAGE;
    function render() {
      var f = [], html = '';
      for (var i = 0; i < R.length; i++) if (!filter || R[i].stars === filter) f.push(R[i]);
      for (i = 0; i < Math.min(shown, f.length); i++) {
        var r = f[i];
        html += '<article class="mf-r"><div class="mf-r-top"><span class="mf-av">' + esc(String(r.name).charAt(0)) + '</span>' +
          '<div><div class="mf-r-name">' + esc(r.name) + (r.verified ? ' <span class="mf-ver">✔ Compra verificada</span>' : '') + '</div>' +
          stars(r.stars) + (r.product ? ' <span class="mf-r-meta">' + esc(r.product) + '</span>' : '') + '</div>' +
          '<span class="mf-r-date">' + fmtDate(r.date) + '</span></div>' +
          (r.text ? '<p>' + esc(r.text) + '</p>' : '') + '</article>';
      }
      list.innerHTML = html;
      more.style.display = shown < f.length ? '' : 'none';
      count.textContent = 'Mostrando ' + Math.min(shown, f.length) + ' de ' + f.length;
    }
    var btns = root.querySelectorAll('.mf-f');
    for (var i = 0; i < btns.length; i++) btns[i].addEventListener('click', function () {
      for (var j = 0; j < btns.length; j++) btns[j].setAttribute('aria-pressed', 'false');
      this.setAttribute('aria-pressed', 'true');
      filter = +this.getAttribute('data-f'); shown = CFG.REVIEWS_PAGE; render();
    });
    more.addEventListener('click', function () { shown += CFG.REVIEWS_PAGE; render(); track('reviews-more'); });
    render();
  }

  // Ordenadas por la objeción que más frena la compra
  function faq() {
    var Q = [
      ['¿Qué talle me queda?', 'Cada producto tiene su <b>guía de talles</b> en las fotos. La térmica es una prenda al cuerpo: si la querés menos ajustada, elegí un talle más. Y si no te queda, <b>lo cambiamos</b>.'],
      ['¿Y si el talle no me queda?', '<b>Lo cambiamos.</b> Tenés <b>30 días</b> desde que lo recibís, con las prendas sin uso y con etiquetas. Escribinos por WhatsApp con tu número de pedido. <a href="/cambios-y-devoluciones/">Ver cambios y devoluciones</a>'],
      ['¿Cuánto tarda en llegar mi pedido?', 'Preparamos tu pedido en <b>3 a 7 días hábiles</b> y te pasamos el seguimiento apenas sale. Después depende del correo y de tu zona.'],
      ['¿El envío es gratis?', FREE_U ? 'Sí, <b>llevando ' + FREE_U + ' prendas</b>: un pack x8 o dos packs x4. Con un solo pack x4, el costo se calcula en el checkout con tu código postal.' : 'Sí, en compras <b>desde ' + $m(CFG.FREE_SHIPPING) + '</b>, o sea llevando 2 packs. En compras menores, el costo se calcula en el checkout con tu código postal.'],
      pkLive ? ['¿Puedo combinar colores y talles?', 'En las <b>musculosas, sí</b>: armás tu pack x4 o x8 eligiendo el color y el talle de cada una. Las térmicas vienen de a 4 del mismo color y talle.'] : CFG.MIX_COLORS ? ['¿Puedo combinar colores en el pack?', 'Sí, <b>combinás colores como quieras</b> dentro del mismo pack.'] : ['¿Cómo es el pack?', 'Son <b>4 prendas del mismo color y talle</b>. Si querés distintos colores, sumá un pack de cada uno: con 2 packs el envío es gratis.'],
      ['¿Qué medios de pago aceptan?', '<b>Mercado Pago, tarjeta en cuotas' + (CFG.CUOTAS ? ' (' + CFG.CUOTAS + ' sin interés)' : '') + ' y transferencia' + (CFG.TRANSFER_PCT ? ' con ' + CFG.TRANSFER_PCT + '% off' : '') + '.</b> Elegís el que prefieras en el checkout.'],
      ['¿Es seguro comprar en Modo Fit?', 'Sí. Somos una marca argentina, los pagos se procesan por <b>Mercado Pago</b> y te respondemos personas por WhatsApp, no un robot.']
    ];
    var items = '';
    for (var i = 0; i < Q.length; i++) items += '<details' + (i === 0 ? ' open' : '') + '><summary>' + Q[i][0] + '</summary><div>' + Q[i][1] + '</div></details>';
    return '<section class="mf-sec mf-faq"><div class="mf-wrap mf-faq-grid">' +
      '<div class="mf-faq-side"><span class="mf-chip mf-k">Preguntas frecuentes</span>' +
      '<h2 class="mf-h2 mf-d">Comprá tranquilo.</h2>' +
      '<p class="mf-sub">Lo que más nos preguntan antes de comprar. ¿Tenés otra duda? Te respondemos por WhatsApp.</p>' +
      (CFG.WHATSAPP ? '<a class="mf-btn mf-btn-dark" target="_blank" rel="noopener" data-mf="faq-wa" href="' + wa('Hola! Tengo una consulta sobre los packs de Modo Fit') + '">Escribinos</a>' : '') +
      '</div><div>' + items + '</div></div></section>';
  }

  function final() {
    var btns = '';
    for (var i = 0; i < P.length; i++) btns += '<a class="mf-btn' + (i ? ' mf-btn-line' : '') + '" href="' + esc(P[i].url) + '" data-mf="final-' + i + '">' + esc(P[i].short) + ' x4 · ' + $m(P[i].unit) + ' c/u</a>';
    return '<section class="mf-sec mf-final" id="mf-final"><div class="mf-wrap">' +
      '<h2 class="mf-h2 mf-d">Armá tu <em>pack x4.</em></h2>' +
      '<p>Elegí tu prenda, tu color y tu talle, y empezá a entrenar en Modo Fit.</p>' +
      '<div class="mf-hero-cta">' + btns + '</div>' + CHECKS +
      '</div></section>';
  }

  // Botones flotantes del tema (WhatsApp, etc.) pegados abajo: se suben cuando aparece la barra
  function floaters() {
    var out = [], all = d.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp"], [class*="whatsapp"], .js-btn-fixed-bottom');
    for (var i = 0; i < all.length; i++) {
      for (var el = all[i]; el && el !== d.body; el = el.parentElement) {
        if ((el.classList && el.classList.contains('mf-sticky')) || el.id === 'mf-home') break;
        if (getComputedStyle(el).position === 'fixed') { if (out.indexOf(el) < 0) out.push(el); break; }
      }
    }
    return out;
  }

  function liftAll(fl, h) {
    for (var i = 0; i < fl.length; i++) { fl[i].style.transition = 'transform .25s'; fl[i].style.transform = h ? 'translateY(-' + h + 'px)' : ''; }
  }

  function sticky(root, slider) {
    var s = d.createElement('div');
    s.className = 'mf mf-sticky';
    s.innerHTML = '<div class="mf-wrap"><div class="mf-s-txt">Pack x4 desde<b>' + $m(minUnit) + ' <em>c/u</em></b></div>' +
      '<a class="mf-btn" href="#mf-packs" data-mf="sticky">Elegir mi pack</a></div>';
    s.addEventListener('click', function (e) {
      if (e.target.getAttribute('data-mf') !== 'sticky') return;
      e.preventDefault(); track('sticky'); d.getElementById('mf-packs').scrollIntoView({ behavior: 'smooth' });
    });
    d.body.appendChild(s);
    var fl = null, on = false, tick = false;
    var targets = [slider || root.querySelector('#mf-hero'), root.querySelector('#mf-packs'), root.querySelector('#mf-final')];
    function lift(v) { if (!fl) fl = floaters(); liftAll(fl, v ? s.offsetHeight + 8 : 0); }
    // Se muestra cuando ya no se ve ningún botón de compra en pantalla
    function check() {
      tick = false;
      var vh = window.innerHeight, any = false;
      for (var i = 0; i < targets.length; i++) {
        if (!targets[i]) continue;
        var r = targets[i].getBoundingClientRect();
        if (r.bottom > 0 && r.top < vh) any = true;
      }
      if (any === !on) return;
      on = !any;
      s.className = 'mf mf-sticky' + (on ? ' mf-on' : '');
      lift(on);
    }
    function onScroll() { if (!tick) { tick = true; (window.requestAnimationFrame || setTimeout)(check); } }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    check();
  }

  // Oculta el contenido de la home del tema (banners, destacados) que queda debajo de nuestras secciones
  function hideTheme(root, keep) {
    var skip = /^(SCRIPT|STYLE|NOSCRIPT|LINK|TEMPLATE|FOOTER)$/;
    function hide(el) {
      if (skip.test(el.tagName) || el.id === 'mf-home' || el.classList.contains('mf-sticky')) return;
      if (el.contains(root) || (keep && (el === keep || el.contains(keep) || keep.contains(el)))) return;
      if (el.querySelector('footer, .js-footer, [data-store="footer"]') || /footer/i.test(el.className + ' ' + el.id)) return;
      if (getComputedStyle(el).position === 'fixed') return;
      el.style.display = 'none'; el.setAttribute('data-mf-hidden', '1');
    }
    for (var el = root.nextElementSibling; el; el = el.nextElementSibling) hide(el);
    var extra = d.querySelectorAll(CFG.THEME_HOME_SELECTOR);
    for (var i = 0; i < extra.length; i++) if (!root.contains(extra[i])) hide(extra[i]);
  }

  function home() {
    if (d.getElementById('mf-home')) return;
    var root = d.createElement('div');
    root.id = 'mf-home'; root.className = 'mf';
    // Portada: el banner del carrusel de Tiendanube si tiene imágenes; si no, la portada de texto
    var slider = CFG.HERO === 'banner' ? d.querySelector(CFG.SLIDER_SELECTOR) : null;
    if (slider && !slider.querySelector('.swiper-slide, img')) slider = null;
    root.innerHTML = (slider ? '' : hero()) + packs() + trust() + reviews() + faq() + final();
    if (slider && IPA && slider.closest) slider = slider.closest('.ns-section') || slider;
    var anchor = slider || d.querySelector(CFG.MOUNT_AFTER);
    if (anchor && anchor.parentNode) anchor.parentNode.insertBefore(root, anchor.nextSibling);
    else d.body.appendChild(root);
    bindReviews(root);
    if (CFG.HIDE_THEME_HOME) hideTheme(root, slider);
    root.addEventListener('click', function (e) {
      var t = e.target.closest ? e.target.closest('[data-mf]') : null;
      if (t) track(t.getAttribute('data-mf'));
    });
    if (CFG.SHOW_STICKY) sticky(root, slider);
  }

  /* ---------- Etiqueta PACK X4 en el listado de productos ---------- */
  function badges() {
    var els = d.querySelectorAll(CFG.BADGE_SELECTOR);
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      if (el.getAttribute('data-mf-b')) continue;
      el.setAttribute('data-mf-b', '1');
      if (getComputedStyle(el).position === 'static') el.style.position = 'relative';
      var b = d.createElement('span'); b.className = 'mf-badge'; b.innerHTML = 'Pack <b>x4</b>';
      el.appendChild(b);
    }
  }

  /* ---------- Página de producto ---------- */
  function num(t) { return +String(t || '').replace(/[^\d,]/g, '').replace(',', '.') || 0; }

  function pdp() {
    var box = d.getElementById('single-product');
    if (!box || box.getAttribute('data-mf-pdp')) return;
    box.setAttribute('data-mf-pdp', '1');
    d.body.classList.add('mf-pdp');
    var nameEl = box.querySelector('.js-product-name'), priceEl = box.querySelector('#price_display');
    var name = nameEl ? nameEl.textContent.replace(/\s+/g, ' ').trim() : '';
    var m = name.match(/x\s?(\d+)/i), units = m ? +m[1] : 0;
    var pfm = box.querySelector('[data-store^="product-form-"]');
    var pk = pkCfg(pfm ? pfm.getAttribute('data-store').replace('product-form-', '') : '');
    if (pk && priceEl && num(priceEl.textContent) > CFG.PACK_MAX_UNIT) pk = null; // todavía a precio de pack
    if (pk) units = 0;

    // Precio por prenda debajo del precio del pack
    var unit = null;
    if (priceEl && units > 1) {
      unit = d.createElement('div'); unit.className = 'mf-pdp-unit';
      var pc = box.querySelector('.js-price-container');
      if (pc && pc.parentNode) pc.parentNode.insertBefore(unit, pc.nextSibling);
    }
    // Oculta los textos de "0% de descuento" y "$0,00 con..." que deja el tema cuando no hay descuento
    function clean() {
      var z = box.querySelectorAll('.js-product-discount-container, .js-payment-discount-price-product-container');
      for (var i = 0; i < z.length; i++) if (/(^|[^\d])0% de descuento|\$\s?0,00/.test(z[i].textContent)) z[i].style.display = 'none';
    }
    function trim00(el) { if (el && /,00\s*$/.test(el.textContent)) el.textContent = el.textContent.replace(/,00\s*$/, ''); }
    var pay = box.querySelector('#btn-installments');
    if (pay) { pay.textContent = 'Ver medios de pago y cuotas'; pay.classList.add('mf-pdp-pay'); }
    function refresh() {
      trim00(priceEl); trim00(box.querySelector('#compare_price_display'));
      if (unit) { var p = num(priceEl.textContent); unit.textContent = p ? 'Pack x' + units + ' · ' + $m(perUnit(p, units)) + ' cada una' : ''; unit.style.display = p ? '' : 'none'; }
      clean();
    }
    refresh();
    if (priceEl && window.MutationObserver) new MutationObserver(refresh).observe(priceEl, { childList: true, characterData: true, subtree: true });

    // Talles en orden de menor a mayor
    var ORDER = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];
    var groups = box.querySelectorAll('.js-product-variants-group');
    for (var gi = 0; gi < groups.length; gi++) {
      var vs = groups[gi].querySelectorAll('.js-insta-variant, .js-variant-button'), arr = [], ok = vs.length > 1;
      for (var vi = 0; vi < vs.length; vi++) { var o = ORDER.indexOf(String(vs[vi].getAttribute('data-option')).toUpperCase()); if (o < 0) ok = false; arr.push([o, vs[vi]]); }
      if (!ok) continue;
      arr.sort(function (a, b) { return a[0] - b[0]; });
      var par = vs[0].parentNode;
      for (vi = 0; vi < arr.length; vi++) par.appendChild(arr[vi][1]);
    }

    // Link a la guía de talles (abre la foto de la guía de la galería)
    var guide = box.querySelector('a.js-product-slide-link[href*="' + CFG.SIZE_GUIDE_MATCH + '"]');
    if (guide) {
      var labels = box.querySelectorAll('.js-product-variants-group > label.form-label');
      for (var i = 0; i < labels.length; i++) if (/^\s*talle/i.test(labels[i].textContent)) {
        var g = d.createElement('a'); g.className = 'mf-pdp-guide'; g.href = guide.href; g.textContent = 'Ver guía de talles';
        g.addEventListener('click', function (e) { e.preventDefault(); track('pdp-size-guide'); guide.click(); });
        labels[i].appendChild(g); break;
      }
    }

    // Bloque de confianza debajo del botón de compra
    var buy = box.querySelector('.btn-add-to-cart, input.js-addtocart.js-prod-submit-form');
    var row = buy && buy.closest ? buy.closest('.product-actions, .row') : null;
    if (row && row.parentNode) {
      var t = d.createElement('div'); t.className = 'mf';
      t.innerHTML = '<div class="mf-pdp-trust">' +
        '<div class="mf-pt"><i>' + icon(IC.truck, '#008D60') + '</i><span><b>Envío gratis</b> ' + FREE_TAIL + '</span></div>' +
        '<div class="mf-pt"><i>' + icon(IC.swap, '#008D60') + '</i><span><b>Cambio de talle:</b> tenés 30 días para cambiarlo</span></div>' +
        '<div class="mf-pt"><i>' + icon(IC.card, '#008D60') + '</i><span><b>Pago protegido</b> con Mercado Pago</span></div>' +
        (CFG.WHATSAPP ? '<a class="mf-pdp-wa" target="_blank" rel="noopener" data-mf="pdp-wa" href="' + wa('Hola! Tengo una duda con el talle de ' + name) + '">¿Dudas con el talle? Escribinos por WhatsApp</a>' : '') +
        '</div>';
      t.addEventListener('click', function (e) { var a = e.target.closest ? e.target.closest('[data-mf]') : null; if (a) track(a.getAttribute('data-mf')); });
      row.parentNode.insertBefore(t, row.nextSibling);
    }

    var pb = pk && buy ? packBuilder(box, pk, buy) : null;
    if (CFG.SHOW_STICKY && buy) pdpSticky(box, buy, pb ? pb.price : priceEl, pb);
  }

  // Barra fija en producto: aparece cuando ya pasaste el botón de compra
  function pdpSticky(box, buy, priceEl, pb) {
    var s = d.createElement('div');
    s.className = 'mf mf-sticky';
    s.innerHTML = '<div class="mf-wrap"><div class="mf-s-txt"><span class="mf-s-lbl">' + (CFG.PDP_STICKY_LABEL || 'Pack x4') + '</span><b class="mf-s-price"></b></div>' +
      '<a class="mf-btn" href="#product_form" data-mf="pdp-sticky">' + (pb ? 'Armar mi pack' : 'Elegir talle') + '</a></div>';
    var pr = s.querySelector('.mf-s-price'), lb = s.querySelector('.mf-s-lbl');
    function setPrice() {
      var b = pb ? priceEl.querySelector('b') : priceEl, p = b ? num(b.textContent) : 0;
      pr.textContent = p ? $m(p) : '';
      if (pb) lb.textContent = pb.label();
    }
    setPrice();
    if (priceEl && window.MutationObserver) new MutationObserver(setPrice).observe(priceEl, { childList: true, characterData: true, subtree: true });
    s.addEventListener('click', function (e) {
      if (e.target.getAttribute('data-mf') !== 'pdp-sticky') return;
      e.preventDefault(); track('pdp-sticky');
      var v = (pb && pb.anchor) || box.querySelector('.js-product-variants') || buy;
      var y = v.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
    d.body.appendChild(s);
    var on = false, tick = false, fl = null;
    function check() {
      tick = false;
      var r = buy.getBoundingClientRect(), v = r.bottom < 0;
      if (v === on) return;
      on = v; s.className = 'mf mf-sticky' + (on ? ' mf-on' : '');
      if (!fl) fl = floaters();
      liftAll(fl, on ? s.offsetHeight + 8 : 0);
    }
    function onScroll() { if (!tick) { tick = true; (window.requestAnimationFrame || setTimeout)(check); } }
    window.addEventListener('scroll', onScroll, { passive: true });
    check();
  }

  /* ---------- Tarjetas de producto del tema: precios sin ",00" y sin "$0,00 con ..." ---------- */
  function listPrices() {
    var els = d.querySelectorAll('.js-item-product .js-price-display, .js-item-product .js-compare-price-display');
    for (var i = 0; i < els.length; i++) {
      var t = els[i].textContent;
      if (/,00\s*$/.test(t)) els[i].textContent = t.replace(/,00\s*$/, '').trim();
    }
    var z = d.querySelectorAll('.js-item-product .js-payment-discount-price-product-container');
    for (i = 0; i < z.length; i++) {
      var zero = /\$\s?0,00|^\s*$/.test(z[i].textContent.replace(/con|en cuotas/g, ''));
      if (zero !== z[i].classList.contains('mf-zero')) z[i].classList.toggle('mf-zero', zero);
    }
  }

  /* ---------- Armá tu pack ---------- */
  function pkCfg(id) {
    var L = CFG.PACK_BUILDER || [];
    for (var i = 0; i < L.length; i++) if (String(L[i].id) === String(id)) return L[i];
    return null;
  }
  function tank(color, sz) {
    var st = /^#f/i.test(color) ? 'rgba(0,31,23,.35)' : 'rgba(0,0,0,.15)';
    return '<svg viewBox="0 0 40 40" width="' + (sz || 40) + '" height="' + (sz || 40) + '" aria-hidden="true"><path d="M13 3h4c0 4 1.4 6.5 3 6.5S23 7 23 3h4c0 5 1.2 8 4 10v23.5c0 1-.8 1.5-1.5 1.5h-19c-.7 0-1.5-.5-1.5-1.5V13c2.8-2 4-5 4-10z" fill="' + color + '" stroke="' + st + '" stroke-width="1"/></svg>';
  }

  // Reemplaza los selectores del tema por: pack x4/x8, talle y cantidad de cada color.
  // Al comprar agrega una línea por cada color/talle; la promo nativa hace el descuento del x8.
  function packBuilder(box, pk, buy) {
    var form = box.querySelector('#product_form, form.js-product-form');
    var V = window.LS && LS.variants && LS.variants.length ? LS.variants : null;
    if (!V) { var dv = box.querySelector('[data-variants]'); try { V = dv ? JSON.parse(dv.getAttribute('data-variants')) : null; } catch (e) { V = null; } }
    if (!form || !buy || !V || !V.length) return null;
    var selects = form.querySelectorAll('select.js-variation-option'), ci = -1, si = -1;
    for (var i = 0; i < selects.length; i++) {
      var lab = form.querySelector('label[for="' + selects[i].id + '"]'), t = lab ? lab.textContent : '';
      if (/color/i.test(t)) ci = i; else if (/talle|size/i.test(t)) si = i;
    }
    if (ci < 0 || si < 0) return null;
    var colors = [], hex = {}, sizes = [];
    var cb = form.querySelectorAll('.js-variant-button[data-variation-id="' + ci + '"]');
    for (i = 0; i < selects[ci].options.length; i++) colors.push(selects[ci].options[i].value);
    for (i = 0; i < cb.length; i++) { var sp = cb[i].querySelector('.btn-variant-content'); hex[cb[i].getAttribute('data-option')] = sp && sp.style.background ? sp.style.backgroundColor || sp.style.background : '#999'; }
    for (i = 0; i < selects[si].options.length; i++) sizes.push(selects[si].options[i].value);
    function variant(c, s) { for (var k = 0; k < V.length; k++) if (V[k]['option' + ci] === c && V[k]['option' + si] === s) return V[k]; return null; }
    function ok(c, s) { var v = variant(c, s); return !!(v && v.available !== false); }
    var unit = 0, cmp = 0;
    for (i = 0; i < V.length; i++) {
      if (V[i].available === false) continue;
      if (V[i].price_number && (!unit || V[i].price_number < unit)) unit = V[i].price_number;
      if (V[i].compare_at_price_number > cmp) cmp = V[i].compare_at_price_number;
    }
    if (!unit || unit > CFG.PACK_MAX_UNIT) return null;
    var PK = pk.packs && pk.packs.length ? pk.packs : [4], OFF = pk.off || {}, SHIP = pk.ship || {};
    function total(n) { return Math.round(unit * n * (1 - (OFF[n] || 0) / 100)); }
    function hex2(c) { var h = hex[c] || '#999'; var m = h.match(/rgb\((\d+),\s*(\d+),\s*(\d+)/); return m ? '#' + [m[1], m[2], m[3]].map(function (x) { return ('0' + (+x).toString(16)).slice(-2); }).join('') : h; }

    var st = { n: PK[0], size: '', counts: {}, multi: false, us: [] };
    function spread(n) { st.counts = {}; for (var k = 0; k < colors.length; k++) st.counts[colors[k]] = 0; for (k = 0; k < n; k++) st.counts[colors[k % colors.length]]++; }
    spread(st.n);
    function sum() { var s = 0; for (var c in st.counts) s += st.counts[c]; return s; }
    function units() {
      var u = [], k = 0;
      for (var a = 0; a < colors.length; a++) for (var b = 0; b < st.counts[colors[a]]; b++) { u.push({ c: colors[a], s: st.multi ? (st.us[k] || '') : st.size }); k++; }
      return u;
    }

    var el = d.createElement('div');
    el.className = 'mf-pk';
    var priceEl = d.createElement('div'); priceEl.className = 'mf-pk-price';
    var opts = '';
    for (i = 0; i < PK.length; i++) {
      var n = PK[i], save = unit * n - total(n);
      opts += '<button type="button" class="mf-pk-opt" data-n="' + n + '">' + (SHIP[n] ? '<em>Envío gratis</em>' : save > 0 ? '<em>Ahorrás ' + $m(save) + '</em>' : '') +
        '<b>Pack x' + n + '</b><span>' + $m(total(n)) + '</span><small>' + $m(total(n) / n) + ' c/u' + (SHIP[n] ? ' + envío gratis' : '') + '</small></button>';
    }
    var sz = '';
    for (i = 0; i < sizes.length; i++) sz += '<button type="button" class="mf-pk-sz" data-s="' + esc(sizes[i]) + '">' + esc(sizes[i]) + '</button>';
    var guide = box.querySelector('a.js-product-slide-link[href*="' + CFG.SIZE_GUIDE_MATCH + '"]');
    el.innerHTML =
      '<div class="mf-pk-h">Elegí tu pack</div><div class="mf-pk-opts">' + opts + '</div>' +
      '<div class="mf-pk-one"><div class="mf-pk-h">Tu talle' + (guide ? '<a data-pk="guide">Ver guía de talles</a>' : '') + '</div><div class="mf-pk-sizes">' + sz + '</div></div>' +
      '<div class="mf-pk-h">Combiná colores <i class="mf-pk-cnt"></i></div><div class="mf-pk-colors"></div><div class="mf-pk-bar"></div>' +
      '<label class="mf-pk-mix"><input type="checkbox"> Quiero talles distintos</label><div class="mf-pk-units"></div>' +
      '<div class="mf-pk-msg" role="alert"></div>';
    var rows = el.querySelector('.mf-pk-colors'), bar = el.querySelector('.mf-pk-bar'), cnt = el.querySelector('.mf-pk-cnt');
    var msg = el.querySelector('.mf-pk-msg'), ulist = el.querySelector('.mf-pk-units'), mix = el.querySelector('.mf-pk-mix input');

    function render() {
      var full = sum(), n = st.n, t = total(n), c2 = cmp ? cmp * n : 0, pct = c2 > t ? Math.round((1 - t / c2) * 100) : 0;
      priceEl.innerHTML = '<b>' + $m(t) + '</b>' + (pct > 0 ? '<s>' + $m(c2) + '</s><em>' + pct + '% OFF</em>' : '') +
        '<small>Pack x' + n + ' · ' + $m(t / n) + ' cada ' + esc(pk.noun || 'prenda') + (SHIP[n] ? ' · <b style="font:inherit;color:#006947">envío gratis</b>' : '') + '</small>';
      var ob = el.querySelectorAll('.mf-pk-opt');
      for (var k = 0; k < ob.length; k++) ob[k].className = 'mf-pk-opt' + (+ob[k].getAttribute('data-n') === n ? ' on' : '');
      var sb = el.querySelectorAll('.mf-pk-one .mf-pk-sz');
      for (k = 0; k < sb.length; k++) sb[k].className = 'mf-pk-sz' + (sb[k].getAttribute('data-s') === st.size ? ' on' : '');
      var h = '';
      for (k = 0; k < colors.length; k++) {
        var c = colors[k], q = st.counts[c] || 0;
        h += '<div class="mf-pk-row">' + tank(hex2(c)) + '<span>' + esc(c) + '</span><div class="mf-pk-step">' +
          '<button type="button" data-c="' + esc(c) + '" data-d="-1" aria-label="Una ' + esc(c) + ' menos"' + (q ? '' : ' disabled') + '>−</button><output>' + q + '</output>' +
          '<button type="button" data-c="' + esc(c) + '" data-d="1" aria-label="Una ' + esc(c) + ' más"' + (full < n ? '' : ' disabled') + '>+</button></div></div>';
      }
      rows.innerHTML = h;
      cnt.textContent = full + ' de ' + n + (full < n ? ' · te faltan ' + (n - full) : ' ✓');
      h = ''; for (k = 0; k < n; k++) h += '<i' + (k < full ? ' class="on"' : '') + '></i>';
      bar.innerHTML = h;
      el.className = 'mf-pk' + (st.multi ? ' mf-pk-multi' : '');
      if (st.multi) {
        var u = units(); h = '';
        for (k = 0; k < u.length; k++) {
          h += '<div class="mf-pk-u">' + tank(hex2(u[k].c), 26) + '<span>' + esc(u[k].c) + '</span>';
          for (var z = 0; z < sizes.length; z++) h += '<button type="button" class="mf-pk-sz' + (u[k].s === sizes[z] ? ' on' : '') + '" data-u="' + k + '" data-s="' + esc(sizes[z]) + '">' + esc(sizes[z]) + '</button>';
          h += '</div>';
        }
        ulist.innerHTML = h;
      }
    }
    function valid() { var u = units(); if (u.length !== st.n) return false; for (var k = 0; k < u.length; k++) if (!u[k].s) return false; return true; }

    el.addEventListener('click', function (e) {
      var b = e.target.closest ? e.target.closest('button, a[data-pk]') : null;
      if (!b) return;
      if (b.getAttribute('data-pk') === 'guide') { e.preventDefault(); track('pdp-size-guide'); guide.click(); return; }
      msg.textContent = '';
      if (b.hasAttribute('data-n')) {
        var n = +b.getAttribute('data-n');
        if (n !== st.n) { st.n = n; spread(n); st.us = []; for (var k = 0; k < n; k++) st.us.push(st.size); track('pk-pack-' + n); }
      } else if (b.hasAttribute('data-d')) {
        var c = b.getAttribute('data-c'), dd = +b.getAttribute('data-d');
        if (dd > 0 && sum() >= st.n) return;
        st.counts[c] = Math.max(0, (st.counts[c] || 0) + dd);
      } else if (b.hasAttribute('data-u')) {
        st.us[+b.getAttribute('data-u')] = b.getAttribute('data-s');
      } else if (b.hasAttribute('data-s')) {
        st.size = b.getAttribute('data-s');
        for (var j = 0; j < st.n; j++) st.us[j] = st.size;
      }
      render();
    });
    mix.addEventListener('change', function () {
      st.multi = mix.checked;
      if (st.multi) { st.us = []; for (var k = 0; k < st.n; k++) st.us.push(st.size); }
      render();
    });

    // Compra: una línea por color/talle. Todas por ajax menos la última, que va por el botón del tema (así abre y refresca el carrito)
    var busy = false, bypass = false, qty = form.querySelector('input[name="quantity"]');
    function groups() {
      var u = units(), g = [], idx = {};
      for (var k = 0; k < u.length; k++) { var key = u[k].c + '|' + u[k].s; if (idx[key] == null) { idx[key] = g.length; g.push({ c: u[k].c, s: u[k].s, q: 0 }); } g[idx[key]].q++; }
      return g;
    }
    function fail(t) { busy = false; msg.textContent = t; }
    function addAjax(g) {
      var body = 'add_to_cart=' + encodeURIComponent(pk.id) + '&variation%5B' + ci + '%5D=' + encodeURIComponent(g.c) +
        '&variation%5B' + si + '%5D=' + encodeURIComponent(g.s) + '&quantity=' + g.q;
      return fetch('/comprar/', { method: 'POST', credentials: 'same-origin', body: body,
        headers: { 'X-Requested-With': 'XMLHttpRequest', 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } })
        .then(function (r) { return r.json(); })
        .then(function (j) { if (!j || j.success !== true) throw new Error('no'); });
    }
    function setSel(sel, v) { if (sel.value !== v) { sel.value = v; sel.dispatchEvent(new Event('change', { bubbles: true })); } }
    function go() {
      var full = sum();
      if (full < st.n) { var mi = st.n - full; msg.textContent = (mi === 1 ? 'Te falta 1 ' + (pk.noun || 'prenda') : 'Te faltan ' + mi + ' ' + (pk.nouns || 'prendas')) + ' para completar el pack x' + st.n + '.'; return; }
      if (!valid()) {
        msg.textContent = 'Elegí tu talle.';
        var need = el.querySelectorAll(st.multi ? '.mf-pk-units .mf-pk-sz' : '.mf-pk-one .mf-pk-sz');
        for (var k = 0; k < need.length; k++) { need[k].classList.remove('mf-pk-need'); void need[k].offsetWidth; need[k].classList.add('mf-pk-need'); }
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }
      var gs = groups();
      for (var j = 0; j < gs.length; j++) if (!ok(gs[j].c, gs[j].s)) { msg.textContent = 'No tenemos ' + gs[j].c + ' en talle ' + gs[j].s + '. Probá otra combinación.'; return; }
      busy = true; msg.textContent = '';
      track('pk-add-' + st.n);
      var i2 = 0;
      (function next() {
        if (i2 < gs.length - 1) { addAjax(gs[i2]).then(function () { i2++; next(); }, function () { fail('No pudimos agregarlo al carrito. Probá de nuevo.'); }); return; }
        var last = gs[gs.length - 1];
        setSel(selects[ci], last.c); setSel(selects[si], last.s);
        if (qty) { qty.value = last.q; qty.dispatchEvent(new Event('input', { bubbles: true })); qty.dispatchEvent(new Event('change', { bubbles: true })); }
        var w = d.querySelector('.js-cart-widget-amount'), before = w ? w.textContent : '';
        setTimeout(function () {
          bypass = true; buy.click(); bypass = false; busy = false;
          var tries = 0, iv = setInterval(function () {
            if ((w && w.textContent !== before) || ++tries > 40) {
              clearInterval(iv);
              if (qty) qty.value = 1;
              var open = d.querySelector('.js-modal-open-private[data-target="#modal-cart"]'), mc = d.getElementById('modal-cart');
              if (open && mc && !/(^|\s)(modal-show|show)(\s|$)/.test(mc.className)) open.click();
            }
          }, 150);
        }, 150);
      })();
    }
    d.addEventListener('click', function (e) {
      if (bypass || (e.target !== buy && !buy.contains(e.target))) return;
      e.preventDefault(); e.stopPropagation(); if (e.stopImmediatePropagation) e.stopImmediatePropagation();
      if (!busy) go();
    }, true);
    form.addEventListener('submit', function (e) { if (!bypass) { e.preventDefault(); e.stopPropagation(); if (!busy) go(); } }, true);

    var vwrap = form.querySelector('.js-product-variants');
    var pc = box.querySelector('.js-price-container');
    if (pc && pc.parentNode) pc.parentNode.insertBefore(priceEl, pc); else el.insertBefore(priceEl, el.firstChild);
    (vwrap || form.querySelector('.product-actions')).parentNode.insertBefore(el, vwrap || form.querySelector('.product-actions'));
    d.body.classList.add('mf-pk-on');
    render();
    return { price: priceEl, label: function () { return 'Pack x' + st.n; }, anchor: el };
  }

  // Precio de una línea del carrito según el tema (null si no se sabe)
  function lineUnit(itemId) {
    var it = window.LS && LS.cart && LS.cart.items ? LS.cart.items : null;
    if (!it) return null;
    for (var i = 0; i < it.length; i++) if (String(it[i].item_id) === String(itemId)) return it[i].unit_price / 100;
    return null;
  }
  // Carrito: los productos del armador solo se compran de a múltiplos de PACK_STEP
  function cartGuard() {
    if (!CFG.PACK_BUILDER || !CFG.PACK_BUILDER.length) return;
    var STEP = CFG.PACK_STEP || 4;
    var btns = d.querySelectorAll('[name="go_to_checkout"]');
    for (var b = 0; b < btns.length; b++) {
      var btn = btns[b], f = btn.form || (btn.closest ? btn.closest('form') : null);
      if (!f) continue;
      var lines = f.querySelectorAll('.js-cart-item[data-store^="cart-item-"]'), by = {}, list = [];
      for (var i = 0; i < lines.length; i++) {
        var id = lines[i].getAttribute('data-store').replace('cart-item-', ''), pk = pkCfg(id);
        if (!pk || lines[i].getAttribute('data-gift') === 'true') continue;
        // Línea agregada antes de pasar el producto a precio por prenda: hay que volver a armar el pack
        var lu = lineUnit(lines[i].getAttribute('data-item-id'));
        if (lu && lu > CFG.PACK_MAX_UNIT) { if (!by['old' + id]) { by['old' + id] = { pk: pk, q: 0, old: true }; list.unshift('old' + id); } continue; }
        if (!lines[i].classList.contains('mf-pk-line')) lines[i].classList.add('mf-pk-line');
        var qi = lines[i].querySelector('.js-cart-quantity-input'), q = qi ? parseInt(qi.value, 10) || 0 : 0;
        if (qi && !qi.readOnly) qi.readOnly = true;
        if (!by[id]) { by[id] = { pk: pk, q: 0 }; list.push(id); }
        by[id].q += q;
      }
      var box = f.querySelector('.mf-pk-cart'), bad = null, okTxt = '';
      for (i = 0; i < list.length; i++) {
        var o = by[list[i]];
        if (o.old || o.q % STEP) { bad = o; break; }
        var shipOk = false;
        for (var k in (o.pk.ship || {})) if (o.q >= +k && o.pk.ship[k]) shipOk = true;
        var inP = (o.pk.packs || [STEP]).indexOf(o.q) >= 0;
        okTxt += (okTxt ? '<br>' : '') + '✓ ' + (inP ? 'Pack x' + o.q + ' de ' + esc(o.pk.nouns || 'prendas') + ' listo' : o.q + ' ' + esc(o.pk.nouns || 'prendas') + ' (' + o.q / STEP + ' packs x' + STEP + ')') + (shipOk ? ' · envío gratis' : '');
      }
      if (!list.length) { if (box) box.parentNode.removeChild(box); btn.classList.remove('mf-pk-block'); continue; }
      if (!box) {
        box = d.createElement('div');
        var anchor = btn.closest ? btn.closest('.js-ajax-cart-submit') || btn : btn;
        anchor.parentNode.insertBefore(box, anchor);
      }
      var html, cls;
      if (bad && bad.old) {
        cls = 'mf-pk-cart bad';
        html = 'Actualizamos los packs de ' + esc(bad.pk.nouns || 'prendas') + ': ahora elegís el color y el talle de cada una. Eliminá el pack de tu carrito y armalo de nuevo.' +
          '<br><a href="' + esc(bad.pk.url) + '" data-mf="cart-rebuild">Armar mi pack</a>';
      } else if (bad) {
        var miss = STEP - bad.q % STEP;
        cls = 'mf-pk-cart bad';
        html = 'Los packs son de ' + STEP + ' ' + esc(bad.pk.nouns || 'prendas') + '. Te ' + (miss === 1 ? 'falta 1 ' + esc(bad.pk.noun || 'prenda') : 'faltan ' + miss + ' ' + esc(bad.pk.nouns || 'prendas')) + ' para completar tu pack.' +
          '<br><a href="' + esc(bad.pk.url) + '" data-mf="cart-complete">Completar mi pack</a>';
      } else { cls = 'mf-pk-cart ok'; html = okTxt; }
      if (box.className !== cls) box.className = cls;
      if (box.getAttribute('data-h') !== html) { box.innerHTML = html; box.setAttribute('data-h', html); }
      if (btn.classList.contains('mf-pk-block') !== !!bad) btn.classList.toggle('mf-pk-block', !!bad);
      if (!f.getAttribute('data-mf-pk')) {
        f.setAttribute('data-mf-pk', '1');
        f.addEventListener('submit', function (e) {
          var t = this.querySelector('[name="go_to_checkout"]');
          if (t && t.classList.contains('mf-pk-block')) { e.preventDefault(); e.stopPropagation(); }
        }, true);
      }
    }
  }

  // Compra rápida de los listados: en productos del armador lleva a la página del producto (ahí se arma el pack)
  var pkQuick = false;
  function pkQuickBuy() {
    if (pkQuick) return; pkQuick = true;
    d.addEventListener('click', function (e) {
      var t = e.target, it = t.closest ? t.closest('.js-item-product[data-product-id]') : null;
      if (!it) return;
      var pk = pkCfg(it.getAttribute('data-product-id'));
      if (!pk || !it.getAttribute('data-mf-pk-on') || !t.closest('.js-addtocart, .js-quickshop-modal-open, .js-open-quickshop, .js-product-form input[type="submit"], .js-product-form button, [data-component="product-list-item.add-to-cart"]')) return;
      e.preventDefault(); e.stopPropagation(); if (e.stopImmediatePropagation) e.stopImmediatePropagation();
      track('pk-list-quick'); location.href = pk.url;
    }, true);
  }
  // Listados (home, categorías, relacionados): el precio cargado es por prenda, se muestra el del pack x STEP
  function packPrices() {
    pkQuickBuy();
    var L = CFG.PACK_BUILDER || [], STEP = CFG.PACK_STEP || 4;
    for (var i = 0; i < L.length; i++) {
      var its = d.querySelectorAll('.js-item-product[data-product-id="' + L[i].id + '"]');
      for (var j = 0; j < its.length; j++) {
        var it = its[j], main = it.querySelector('.js-price-display');
        if (!main) continue;
        // El precio principal decide: si todavía es de pack (no se pasó a precio por prenda), no se toca nada
        var mc = main.textContent.replace(/\s+/g, ' ').trim();
        if (mc !== main.getAttribute('data-mf-pk')) {
          var mv = num(mc);
          if (!mv || mv > CFG.PACK_MAX_UNIT) { it.removeAttribute('data-mf-pk-on'); continue; }
          it.setAttribute('data-mf-pk-on', '1');
        }
        var els = it.querySelectorAll('.js-price-display, .js-compare-price-display');
        for (var k = 0; k < els.length; k++) {
          var e = els[k], cur = e.textContent.replace(/\s+/g, ' ').trim();
          if (!cur || cur === e.getAttribute('data-mf-pk')) continue;
          var v = num(cur); if (!v) continue;
          var t = $m(v * STEP); e.textContent = t; e.setAttribute('data-mf-pk', t);
        }
        var qb = it.querySelectorAll('input.js-addtocart[type="submit"]');
        // Etiqueta de la promo sobre la foto: en vez de "4% comprando 8 o más", lo que vende
        var big = L[i].packs ? L[i].packs[L[i].packs.length - 1] : 0, pl = it.querySelector('.product-item-promo-label');
        var plt = big ? 'x' + big + (L[i].ship && L[i].ship[big] ? ' · Envío gratis' : ' · Mejor precio') : '';
        if (pl && plt && pl.textContent.trim() !== plt) pl.textContent = plt;
        for (k = 0; k < qb.length; k++) if (qb[k].value !== 'Armar mi pack') qb[k].value = 'Armar mi pack';
      }
    }
  }


  /* ---------- Footer: solo menú, redes y datos legales ---------- */
  function footer() {
    var f = d.querySelector('[data-store="footer"]');
    if (!f || f.getAttribute('data-mf-foot')) return;
    f.setAttribute('data-mf-foot', '1');
    d.body.classList.add('mf-foot');
    var box = f.querySelector('.footer-contact-info-container .footer-menu-list');
    if (box) {
      var li = box.querySelectorAll('li');
      for (var i = 0; i < li.length; i++) {
        var a = li[i].querySelector('a'), h = a ? a.getAttribute('href') || '' : '';
        if (/^tel:/.test(h)) { li[i].style.display = 'none'; continue; }
        if (/wa\.me|whatsapp/.test(h)) {
          a.href = wa('Hola! Tengo una consulta'); a.target = '_blank'; a.rel = 'noopener';
          a.innerHTML = '<i class="mf-fi">' + icon(['0 0 24 24', 'M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2s.9 2.3 1 2.5c.1.2 1.7 2.6 4.1 3.6 1.5.7 2.1.7 2.9.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.4-.2z'], '#00C776') + '</i>WhatsApp: ' + esc(CFG.WHATSAPP.replace(/^549?/, '').replace(/^(\d{4})(\d{2})(\d{4})$/, '$1 $2-$3'));
          if (CFG.HORARIO) { var hr = d.createElement('li'); hr.className = 'mf-foot-hr'; hr.textContent = CFG.HORARIO; li[i].parentNode.insertBefore(hr, li[i].nextSibling); }
          continue;
        }
        if (/mailto:|email-protection/.test(h)) {
          var ic = d.createElement('i'); ic.className = 'mf-fi';
          ic.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00C776" stroke-width="2" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>';
          a.insertBefore(ic, a.firstChild);
        }
      }
    }
  }


  function init() {
    IPA = /theme-ipanema/.test(d.body.className) || !!d.querySelector('.ns-section');
    if (IPA) d.body.classList.add('mf-ipa');
    if (/(^|\s)template-home(\s|$)/.test(d.body.className)) isHome = true;
    syncPrices();
    if (CFG.SHOW_BAR) bar();
    if (isHome) home();
    if (CFG.PRODUCT_PAGE) pdp();
    if (CFG.FOOTER_CLEAN) footer();
    if (CFG.PACK_BUILDER && CFG.PACK_BUILDER.length) {
      cartGuard(); packPrices();
      if (window.MutationObserver) {
        var tp; new MutationObserver(function () { clearTimeout(tp); tp = setTimeout(function () { cartGuard(); packPrices(); }, 120); })
          .observe(d.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ['value'] });
      }
      d.addEventListener('input', function (e) { if (e.target && e.target.classList && e.target.classList.contains('js-cart-quantity-input')) setTimeout(cartGuard, 50); }, true);
    }
    listPrices();
    if (CFG.SHOW_BADGES) {
      badges();
      if (window.MutationObserver) {
        var t; new MutationObserver(function () { clearTimeout(t); t = setTimeout(function () { badges(); listPrices(); }, 200); })
          .observe(d.body, { childList: true, subtree: true });
      }
    }
  }
  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', init); else init();
})();
