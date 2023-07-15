// components/CarouselControls.tsx
import classNames from "classnames";

type Props = {
  canScrollPrev: boolean;
  canScrollNext: boolean;
  onPrev(): void;
  onNext(): void;
};
const CarouselControls = (props: Props) => {
  return (
    <div className="flex justify-end gap-2 ">
      <button
        onClick={() => {
          if (props.canScrollPrev) {
            props.onPrev();
          }
        }}
        disabled={!props.canScrollPrev}
        className={classNames({
          "bg-transparent hover:bg-transparent font-bold text-neutral-400 dark:text-white py-2 px-4 border-[3px] border-neutral-400 dark:border-neutral-600 rounded": true,
          "bg-indigo-200": !props.canScrollPrev,
          "bg-indigo-400": props.canScrollPrev,
        })}
      >
        Prev
      </button>
      <button 
        onClick={() => {
          if (props.canScrollNext) {
            props.onNext();
          }
        }}
        disabled={!props.canScrollNext}
        className={classNames({
          "bg-transparent hover:bg-transparent text-neutral-400 font-bold dark:text-white py-2 px-4 border-[3px] border-neutral-400 dark:border-neutral-600 rounded": true,
          "bg-indigo-200": !props.canScrollNext,
          "bg-indigo-400": props.canScrollNext,
        })}
      >
        Next
      </button>
    </div>
  );
};
export default CarouselControls;
