import { ProgressBarCalculatorProps } from "@/interfaces";

export const progressBarCalculator = ({
  currentProgress,
  goal,
}: ProgressBarCalculatorProps) =>
  currentProgress > goal
    ? "100%"
    : `${(currentProgress / goal) * 100}%`;
