import { ProgressBarCalculatorProps } from "@/interfaces";
import { progressBarCalculator } from "@/utils/helpers";
import { FC } from "react";

const ProgressBar: FC<ProgressBarCalculatorProps> = ({
  goal,
  currentProgress,
}) => {
  return (
    <>
      <p className="uppercase font-semibold text-yellow-400">
        Progreso de peliculas producidas
      </p>
      <div className="w-full bg-neutral-200 dark:bg-neutral-600">
        <div
          className="bg-yellow-500 p-5 text-center text-3xl leading-none text-red-500 font-semibold"
          style={{ width: progressBarCalculator({ currentProgress, goal }) }}
        >
          {progressBarCalculator({ currentProgress, goal })}
        </div>
      </div>
      <p className="uppercase font-semibold text-sm text-yellow-400">
        seriesActuales:{'<('}{currentProgress}{')>'} {' --- '} metaTotal:{'<('}{goal}{')>'}
      </p>
    </>
  );
};

export default ProgressBar;
