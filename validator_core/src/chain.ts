export interface ValidationChain {
  validate(): Promise<boolean>;
  addValidator(validator: Validator): void;
  getResults(): ValidationResult[];
}

export interface Validator {
  validate(): Promise<boolean>;
  getName(): string;
}

export interface ValidationResult {
  valid: boolean;
  validatorName: string;
  message?: string;
  timestamp: number;
}
