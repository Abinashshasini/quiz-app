export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export const fetchQuizQestions = async (
  amount: number,
  difficulty: Difficulty
) => {
  const endPoint = `https://opentdb.com/api.php?amount=${amount}&category=9&difficulty=${difficulty}&type=multiple`;

  const data = await (await fetch(endPoint)).json();

  console.log(data);
};
