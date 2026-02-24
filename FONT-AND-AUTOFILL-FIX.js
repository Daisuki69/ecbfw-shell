// ── FONT FIX ──────────────────────────────────────────────────────────────────
// Replace your existing GlobalStyle component in App.jsx with this.
// The old version referenced CerebriSansPro-Book.ttf which doesn't exist in /public.
// You only have .otf files, so format must be 'opentype'.

const GlobalStyle = () => (
  <style>{`
    @font-face {
      font-family: 'CerebriBook';
      src: url('/CerebriSansPro-Book.otf') format('opentype');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }

    @font-face {
      font-family: 'JekoMedium';
      src: url('/Jeko-Medium.otf') format('opentype');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }

    body {
      font-family: 'CerebriBook', sans-serif;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    input, button, textarea { font-family: inherit; }

    ::-webkit-scrollbar { width: 0; height: 0; }
    .txn-scroll::-webkit-scrollbar { width: 5px; }
    .txn-scroll::-webkit-scrollbar-track { background: transparent; }
    .txn-scroll::-webkit-scrollbar-thumb { background: #aaa; border-radius: 10px; }
    .txn-scroll::-webkit-scrollbar-thumb:hover { background: #888; }
    input::-ms-reveal, input::-ms-clear { display: none; }
    input::-webkit-credentials-auto-fill-button { display: none !important; }
    input[type='password']::-webkit-textfield-decoration-container { display: none; }
    input::-webkit-contacts-auto-fill-button,
    input::-webkit-caps-lock-indicator { display: none !important; }
  `}</style>
);

// ── AUTOFILL FIX ──────────────────────────────────────────────────────────────
// On your password input in LoginScreen, add these props:
//
// autoComplete="off"
// autoCorrect="off"
// autoCapitalize="off"
// spellCheck={false}
// data-lpignore="true"
// data-form-type="other"
//
// Example:
// <input
//   type={show ? "text" : "password"}
//   value={pw}
//   onChange={e => setPw(e.target.value)}
//   autoComplete="off"
//   autoCorrect="off"
//   autoCapitalize="off"
//   spellCheck={false}
//   data-lpignore="true"
//   data-form-type="other"
//   ...rest of your props
// />
