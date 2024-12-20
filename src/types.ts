export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface InterviewState {
  isRecording: boolean;
  transcription: string;
  aiResponse: string;
  mistralApiKey: string;
  anthropicApiKey: string;
  selectedProvider: 'mistral' | 'anthropic';
  isLoading: boolean;
  chatHistory: ChatMessage[];
}

export interface AudioRecorderProps {
  onTranscriptionUpdate: (text: string) => void;
  isRecording: boolean;
}

export interface ApiProvider {
  id: 'mistral' | 'anthropic';
  name: string;
  icon: string;
}