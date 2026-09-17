import { IntentCategory, IntentDefinition, HistoricalExemplar } from '../types';

export const SELECTED_BRAND = {
  handle: '@SpotifyCares',
  name: 'Spotify Customer Care',
  channel: 'Twitter / X Support Feed',
  datasetSource: 'Kaggle Customer Support on Twitter (~3M tweets)',
  historicalVolume: '54,210 conversations examined',
  voiceGuidelines: {
    greeting: 'Casual, friendly, empathetic (e.g., "Hey there!", "Hi [Name]!")',
    style: 'Direct, jargon-free troubleshooting under 280 characters or clean DM invitation',
    signoff: 'Initial sign-off (e.g., "^SK", "^JM", "^NB")',
    prohibitions: 'Never promise arbitrary refunds in public tweets; never ask for passwords; never send generic robot replies',
  },
};

export const INTENT_DEFINITIONS: Record<IntentCategory, IntentDefinition> = {
  playback_streaming_issue: {
    id: 'playback_streaming_issue',
    name: 'Playback & Streaming Audio',
    description: 'Music pausing, songs skipping, stuttering, sound not playing, app freezing or crashing during playback, Web Player failure.',
    keywords: [
      'pause', 'pausing', 'stops', 'stopping', 'skip', 'skipping', 'stutter', 'stuttering', 
      'crash', 'crashing', 'crashes', 'freeze', 'freezing', 'audio', 'sound', 'volume', 
      'quiet', 'loud', 'carplay', 'bluetooth', 'airpods', 'headphones', 'web player', 
      'buffer', 'buffering', 'song stops', 'repeat', 'eq', 'equalizer', 'quality'
    ],
    examples: [
      '@SpotifyCares every song stops after 9 seconds on iOS 17',
      '@SpotifyCares why does my desktop app crash when I hit play on albums?',
      'Songs keep skipping randomly on shuffle. Anyone else having this glitch?'
    ],
    defaultEscalate: false,
  },
  subscription_billing: {
    id: 'subscription_billing',
    name: 'Subscription & Billing',
    description: 'Double charges, student discount verification failures, family plan invitation issues, failed premium renewal, receipt questions.',
    keywords: [
      'charge', 'charged', 'double charged', 'triple charged', 'billing', 'invoice', 
      'receipt', 'premium', 'student', 'sheerid', 'family plan', 'duo', 'payment', 
      'pay', 'card', 'debit', 'credit card', 'refund', 'money', 'cost', 'price', 
      'currency', 'vat', 'apple billing', 'subscription'
    ],
    examples: [
      '@SpotifyCares I got charged twice this month for Spotify Family. Please check!',
      '@SpotifyCares SheerID won\'t verify my student college email, keeps saying expired.',
      'My premium was cancelled even though my card has funds. How do I reactivate?'
    ],
    defaultEscalate: true,
  },
  playlist_library_sync: {
    id: 'playlist_library_sync',
    name: 'Playlist & Library Sync',
    description: 'Missing saved albums, disappeared playlists, local files not syncing to phone, liked songs count mismatch across devices.',
    keywords: [
      'playlist', 'playlists', 'disappeared', 'missing', 'lost', 'library', 'liked songs', 
      'local files', 'mp3', 'sync', 'syncing', 'vanished', 'restore playlist', 
      'recover playlist', 'folder', 'collaborative', 'collaborator'
    ],
    examples: [
      '@SpotifyCares half my starred playlists are suddenly gone after the update',
      'Local mp3 files from my Mac won\'t download or sync to my iPhone app',
      'Liked songs counter shows 0 on desktop but 1400 on my Android!'
    ],
    defaultEscalate: false,
  },
  offline_downloads: {
    id: 'offline_downloads',
    name: 'Offline Mode & Downloads',
    description: 'Downloaded songs greyed out on airplane mode, download limit reached, SD card storage errors, songs re-downloading repeatedly.',
    keywords: [
      'download', 'downloads', 'downloaded', 'offline', 'greyed out', 'airplane', 
      'airplane mode', 'flight', 'sd card', 'storage', 'not playing offline', 
      'download limit', 'subway', 'offline mode'
    ],
    examples: [
      '@SpotifyCares my downloaded songs won\'t play offline on my flight unless I have wifi',
      'Why are all my downloaded tracks suddenly greyed out? I have 20GB free space.',
      'Downloaded playlist keeps disappearing when I turn on offline mode.'
    ],
    defaultEscalate: false,
  },
  account_security_escalation: {
    id: 'account_security_escalation',
    name: 'Account Security & Unauthorized Access',
    description: 'Hacked account, unauthorized login from other country, changed email address without permission, password reset email not arriving.',
    keywords: [
      'hacked', 'hack', 'unauthorized', 'stolen', 'someone else', 'compromised', 
      'changed my email', 'changed email', 'password and email', 'login from', 
      'breach', 'locked out', 'security', '2fa', 'suspicious login', 'someone logged', 
      'stranger', 'reset email not arriving', 'takeover'
    ],
    examples: [
      '@SpotifyCares someone from Russia changed my account email and I cannot log in! Help!',
      '@SpotifyCares my account was hacked, random French rap is playing in my history',
      'Someone changed my password and email without my confirmation. Emergency!'
    ],
    defaultEscalate: true,
  },
  feature_feedback_catalog: {
    id: 'feature_feedback_catalog',
    name: 'Feature Feedback & Missing Catalog',
    description: 'Missing artist tracks, lyrics missing for regional songs, UI redesign complaints, podcast sorting requests, feature suggestions.',
    keywords: [
      'lyrics', 'missing song', 'missing track', 'album not available', 'artist catalog', 
      'ui', 'redesign', 'new update sucks', 'feature request', 'suggestion', 'hifi', 
      'lossless', 'musixmatch', 'idea exchange', 'remove the heart', 'plus button'
    ],
    examples: [
      '@SpotifyCares why are Jay-Z\'s older albums unavailable in the UK region?',
      'The new bottom navigation tab is terrible, please bring back the old library view!',
      'Can you add timestamp syncing for live podcasts? That would be awesome.'
    ],
    defaultEscalate: false,
  },
};

export const HISTORICAL_EXEMPLARS: HistoricalExemplar[] = [
  {
    id: 'ex-01',
    intent: 'playback_streaming_issue',
    customerQuery: '@SpotifyCares songs keep pausing every 10-15 seconds on my iPhone 13. Very annoying!',
    brandReply: 'Hey! A quick clean reinstall often does the trick for this. Check out the steps here: http://spoti.fi/reinstall. If that doesn\'t help, let us know your iOS & Spotify version. ^SK',
    keyResolutionStep: 'Recommend clean reinstall + ask for iOS and Spotify app build versions.',
  },
  {
    id: 'ex-02',
    intent: 'playback_streaming_issue',
    customerQuery: '@SpotifyCares desktop app won\'t play any audio through my bluetooth headphones on Mac.',
    brandReply: 'Hi there! Could you try disabling "Hardware Acceleration" under Settings > Advanced? Also try logging out and back in. Let us know how it goes! ^JM',
    keyResolutionStep: 'Toggle Hardware Acceleration in Desktop Settings + re-login.',
  },
  {
    id: 'ex-03',
    intent: 'subscription_billing',
    customerQuery: '@SpotifyCares I got charged $16.99 twice on my credit card this morning for Spotify Family. Why?!',
    brandReply: 'Hey! We\'d love to take a closer look at what happened with those charges. Can you shoot us a DM with the email address linked to your account? We\'ll sort it out: http://spoti.fi/contact-dm. ^NB',
    keyResolutionStep: 'Acknowledge double charge + safely request account email via Twitter DM link.',
  },
  {
    id: 'ex-04',
    intent: 'subscription_billing',
    customerQuery: '@SpotifyCares SheerID says my student status failed to renew, but I am still enrolled full time.',
    brandReply: 'Hey! You can re-upload fresh student documents directly through SheerID here: http://spoti.fi/student. If you\'re still stuck, DM us your university name & country so we can assist. ^SK',
    keyResolutionStep: 'Provide official student verification link + offer DM escalation if documents rejected.',
  },
  {
    id: 'ex-05',
    intent: 'playlist_library_sync',
    customerQuery: '@SpotifyCares woke up and 4 of my main workout playlists disappeared from my library completely!',
    brandReply: 'Hey! Don\'t panic—you can restore recently deleted playlists directly from your Account Page under "Recover playlists" on spotify.com: http://spoti.fi/recover. Let us know if they show up! ^JM',
    keyResolutionStep: 'Direct user to self-serve Recover Playlists feature in web account settings.',
  },
  {
    id: 'ex-06',
    intent: 'playlist_library_sync',
    customerQuery: '@SpotifyCares local MP3 files stored on my laptop won\'t sync to my Android phone over local wifi.',
    brandReply: 'Hi! Make sure both devices are on the exact same Wi-Fi network and that local files sharing is toggled ON in both apps. A quick router restart helps too! ^NB',
    keyResolutionStep: 'Verify identical Wi-Fi subnet + toggle local files toggle on both devices.',
  },
  {
    id: 'ex-07',
    intent: 'offline_downloads',
    customerQuery: '@SpotifyCares my downloaded songs are greyed out on airplane mode while I\'m traveling.',
    brandReply: 'Hey there! Could you check if "Offline Mode" is toggled ON in Settings > Playback? Also ensure you\'ve connected online within the last 30 days to refresh the licenses. ^SK',
    keyResolutionStep: 'Verify Offline Mode toggle in settings + remind of 30-day online license renewal requirement.',
  },
  {
    id: 'ex-08',
    intent: 'offline_downloads',
    customerQuery: '@SpotifyCares my downloads keep clearing whenever I switch storage to external SD card.',
    brandReply: 'Hi! Please make sure your SD card is formatted to exFAT or FAT32 with at least 1GB extra space. If issue persists, try clearing the app cache first in Settings > Storage. ^JM',
    keyResolutionStep: 'Check SD card filesystem format + clear app storage cache.',
  },
  {
    id: 'ex-09',
    intent: 'account_security_escalation',
    customerQuery: '@SpotifyCares someone from another country hacked my account and changed the email! I cannot log in!',
    brandReply: 'Hey! That sounds concerning. Please send us a direct message right away with the original email or receipt number so our Security team can secure your account immediately: http://spoti.fi/contact-dm. ^URGENT',
    keyResolutionStep: 'Immediate security escalation via secure DM link. Prohibit auto-handling.',
  },
  {
    id: 'ex-10',
    intent: 'account_security_escalation',
    customerQuery: '@SpotifyCares random songs from Germany are playing on my Spotify right now, I think someone is in my account!',
    brandReply: 'Hey! Head to spotify.com/account and click "Sign out everywhere", then reset your password immediately. If you need help regaining access, DM us right away: http://spoti.fi/contact-dm. ^SK',
    keyResolutionStep: 'Provide Sign out everywhere instructions + urgent DM handoff for human security staff.',
  },
  {
    id: 'ex-11',
    intent: 'feature_feedback_catalog',
    customerQuery: '@SpotifyCares why are half the songs on Taylor Swift\'s earlier deluxe album unavailable in Spain?',
    brandReply: 'Hey! Music availability depends on licensing agreements with rights holders and can vary by country. We\'re always working to expand our catalog—thanks for letting us know! ^NB',
    keyResolutionStep: 'Politely explain regional copyright licensing + catalog expansion efforts.',
  },
  {
    id: 'ex-12',
    intent: 'feature_feedback_catalog',
    customerQuery: '@SpotifyCares please add synced lyrics for all French indie tracks, it\'s the only feature missing!',
    brandReply: 'Hey there! We love that idea! You can share your feedback and vote on feature ideas with our developers in the Spotify Community Idea Exchange: http://spoti.fi/ideas. ^SK',
    keyResolutionStep: 'Direct customer to Spotify Community Idea Exchange vote forum.',
  }
];

// Helper: retrieve top-k exemplars grounded in the classified intent and query tokens
export function retrieveGroundedExemplars(intent: IntentCategory, query: string, topK = 2): HistoricalExemplar[] {
  const queryTokens = query.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(Boolean);
  
  const scored = HISTORICAL_EXEMPLARS.map(ex => {
    let score = 0;
    if (ex.intent === intent) score += 10;
    const exTokens = (ex.customerQuery + ' ' + ex.keyResolutionStep).toLowerCase().split(/\s+/);
    for (const token of queryTokens) {
      if (token.length > 3 && exTokens.includes(token)) {
        score += 2;
      }
    }
    return { ...ex, similarityScore: score };
  });

  scored.sort((a, b) => (b.similarityScore || 0) - (a.similarityScore || 0));
  return scored.slice(0, topK);
}

// Deterministic Escalation Policy Check
export function evaluateEscalationRules(text: string, intent: IntentCategory): { action: 'auto_handle' | 'escalate_to_human'; reason: string; confidence: number } {
  const lower = text.toLowerCase();

  // 1. Mandatory Critical Security Escalations
  const hasSecurityKeyword = 
    intent === 'account_security_escalation' ||
    lower.includes('hacked') ||
    lower.includes('compromised') ||
    lower.includes('stolen') ||
    lower.includes('unauthorized') ||
    lower.includes('breach') ||
    lower.includes('locked out') ||
    lower.includes('takeover') ||
    (lower.includes('password') && (lower.includes('changed') || lower.includes('reset') || lower.includes('without') || lower.includes('help'))) ||
    (lower.includes('email') && (lower.includes('changed') || lower.includes('someone') || lower.includes('different') || lower.includes('without'))) ||
    (lower.includes('someone') && (lower.includes('controlling') || lower.includes('playing') || lower.includes('logged') || lower.includes('changed'))) ||
    (lower.includes('emergency') && (lower.includes('account') || lower.includes('login') || lower.includes('email')));

  if (hasSecurityKeyword) {
    return {
      action: 'escalate_to_human',
      reason: 'CRITICAL SECURITY: Suspected unauthorized account access, credential tampering, or account lockout requires human identity verification via private DM.',
      confidence: 0.99,
    };
  }

  // 2. High-Severity Financial / Chargeback / Legal Threats
  const hasBillingRisk = 
    lower.includes('chargeback') ||
    lower.includes('fraud') ||
    lower.includes('legal') ||
    lower.includes('sue') ||
    lower.includes('lawyer') ||
    lower.includes('bbb') ||
    lower.includes('better business bureau') ||
    (lower.includes('twice') && (lower.includes('charged') || lower.includes('billed') || lower.includes('pay'))) ||
    (lower.includes('double') && (lower.includes('charged') || lower.includes('charge') || lower.includes('billed'))) ||
    (lower.includes('refund') && (lower.includes('money') || lower.includes('cancel') || lower.includes('dispute') || lower.includes('card') || lower.includes('bank')));

  if (hasBillingRisk) {
    return {
      action: 'escalate_to_human',
      reason: 'HIGH RISK BILLING/LEGAL: Financial dispute, duplicate charge, or legal complaint requires human billing specialist review.',
      confidence: 0.96,
    };
  }

  // 3. Repeated Failure / High Frustration / Churn Risk
  const hasChurnRisk = 
    lower.includes('already tried') ||
    lower.includes('already did') ||
    lower.includes('reinstall') && (lower.includes('3 times') || lower.includes('already') || lower.includes('still')) ||
    lower.includes('tried everything') ||
    lower.includes('still not working') ||
    lower.includes('still broken') ||
    lower.includes('still crashing') ||
    lower.includes('cancelling') ||
    lower.includes('switching to') ||
    lower.includes('worst customer service') ||
    (lower.includes('birthday') && lower.includes('deleting'));

  if (hasChurnRisk) {
    return {
      action: 'escalate_to_human',
      reason: 'REPEATED DISSATISFACTION / CHURN RISK: Customer attempted standard troubleshooting steps without success, suffered major data loss, or poses active churn risk.',
      confidence: 0.94,
    };
  }

  // 4. Default by Intent category
  if (intent === 'subscription_billing') {
    if (lower.includes('charged') || lower.includes('card') || lower.includes('bill') || lower.includes('money')) {
      return {
        action: 'escalate_to_human',
        reason: 'BILLING PRIVACY: Resolving account-specific payment transactions requires private DM lookup of email/billing identifiers.',
        confidence: 0.88,
      };
    }
  }

  // 5. Standard Troubleshooting Auto-Handle
  return {
    action: 'auto_handle',
    reason: 'RESOLVABLE VIA PLAYBOOK: Issue matches standard historical troubleshooting steps (cache clear, reinstall guide, or community link). Safe for automated response.',
    confidence: 0.91,
  };
}
