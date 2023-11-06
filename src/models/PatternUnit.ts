import type { IPatternUnit } from '@/models/IPatternUnit';

export class PatternUnit implements IPatternUnit {
  startDelay: number;
  duration: number;
  weakMagnitude: number;
  strongMagnitude: number;

  constructor(
    startDelay: number,
    duration: number,
    weakMagnitude: number,
    strongMagnitude: number,
  ) {
    this.startDelay = startDelay;
    this.duration = duration;
    this.weakMagnitude = weakMagnitude;
    this.strongMagnitude = strongMagnitude;
  }
}

export default PatternUnit;
