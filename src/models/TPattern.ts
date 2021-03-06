import TPatternUnit from '@/models/TPatternUnit';

export type TPattern = {
    name: string;
    type: string;
    icon: string;
    pattern: TPatternUnit[];
}

export default TPattern;

