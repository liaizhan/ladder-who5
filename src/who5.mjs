// WHO-5 Well-Being Index scoring. Five items about the last two weeks,
// each answered from 5 (all of the time) to 0 (at no time).
// Raw sum (0-25) times 4 gives a percentage score from 0 to 100.
// 28 and below: very low well-being, worth seeing a doctor.
// 50 and below: reduced well-being. The score is not a diagnosis.

const MULTIPLIER = 4;
export const LOW_MAX = 28;
export const REDUCED_MAX = 50;

export function who5Score(answers) {
  if (!Array.isArray(answers) || answers.length !== 5) {
    throw new Error('WHO-5 needs exactly 5 answers');
  }
  for (const a of answers) {
    if (!Number.isInteger(a) || a < 0 || a > 5) throw new Error('Each answer must be an integer from 0 to 5');
  }
  return answers.reduce((sum, a) => sum + a, 0) * MULTIPLIER;
}

export function who5Band(score) {
  if (score <= LOW_MAX) return 'low';
  if (score <= REDUCED_MAX) return 'reduced';
  return 'normal';
}
