const IOTA_NODE_URL = 'https://nodes.devnet.iota.org'
const IOTA_MAM_MODE = 'public';
const MAM_EXPLORER_URL = `https://mam-explorer.firebaseapp.com/?provider=${encodeURIComponent(IOTA_NODE_URL)}&mode=${IOTA_MAM_MODE}&root=` 

export default {
    IOTA_NODE_URL: IOTA_NODE_URL,
    IOTA_MAM_MODE: IOTA_MAM_MODE,
    MAM_EXPLORER_URL: MAM_EXPLORER_URL,
}
