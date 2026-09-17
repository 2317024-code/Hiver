export type IntentCategory =
  | 'playback_streaming_issue'
  | 'subscription_billing'
  | 'playlist_library_sync'
  | 'offline_downloads'
  | 'account_security_escalation'
  | 'feature_feedback_catalog';

export interface IntentDefinition {
  id: IntentCategory;
  name: string;
  description: string;
  keywords: string[];
  examples: string[];
  defaultEscalate: boolean;
}

export type EscalationAction = 'auto_handle' | 'escalate_to_human';

export interface HistoricalExemplar {
  id: string;
  intent: IntentCategory;
  customerQuery: string;
  brandReply: string;
  keyResolutionStep: string;
  similarityScore?: number;
}

export interface AgentProcessResult {
  tweetId?: string;
  customerMessage: string;
  classifiedIntent: IntentCategory;
  intentConfidence: number;
  intentReasoning: string;
  retrievedExemplars: HistoricalExemplar[];
  groundedReply: string;
  escalationAction: EscalationAction;
  escalationConfidence: number;
  escalationReason: string;
  executionTimeMs: number;
  modelUsed: string;
}

export interface GoldenExample {
  id: string;
  tweetId: string;
  author: string;
  text: string;
  goldIntent: IntentCategory;
  goldEscalation: EscalationAction;
  goldEscalationReason: string;
  canonicalReply: string;
  humanJudgeScore: {
    accuracy: number; // 1-5
    groundedness: number; // 1-5
    brandTone: number; // 1-5
    escalationSafety: number; // 1-5
  };
  sampleTag: 'typical' | 'ambiguous' | 'high_urgency' | 'typo_slang' | 'churn_risk';
}

export interface EvaluationItemResult {
  exampleId: string;
  text: string;
  goldIntent: IntentCategory;
  predIntent: IntentCategory;
  intentMatch: boolean;
  goldEscalation: EscalationAction;
  predEscalation: EscalationAction;
  escalationMatch: boolean;
  isFalseNegativeEscalation: boolean; // Critical risk: failed to escalate security/billing risk
  generatedReply: string;
  judgeScores: {
    accuracy: number; // 1-5
    groundedness: number; // 1-5
    brandTone: number; // 1-5
    escalationSafety: number; // 1-5
    overall: number; // 1-5
  };
  escalationReason: string;
}

export interface ModelMetricsSummary {
  modelName: string;
  modelType: 'trivial_baseline' | 'simple_baseline' | 'proposed_agent';
  sampleCount: number;
  intentAccuracy: number;
  intentMacroF1: number;
  intentPerClassF1: Record<IntentCategory, number>;
  escalationAccuracy: number;
  escalationPrecision: number;
  escalationRecall: number;
  escalationSafetyScore: number; // 100 - (False Negative Rate * 100)
  falseNegativeCount: number; // number of times it auto-handled a dangerous ticket
  averageJudgeScore: number;
  humanAgreementKappa: number; // Cohen's Kappa with human ground-truth ratings
  averageLatencyMs: number;
}

export interface FailureModeItem {
  id: string;
  title: string;
  frequency: string;
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM';
  tweetExample: string;
  goldExpected: string;
  agentActual: string;
  rootCause: string;
  actionableHypothesis: string;
}

export interface DecisionItem {
  number: number;
  title: string;
  decision: string;
  rationale: string;
  tradeoffAccepted: string;
}
