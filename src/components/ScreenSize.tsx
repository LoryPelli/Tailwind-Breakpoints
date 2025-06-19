import { useWindowSize } from '@uidotdev/usehooks';

export default () => {
    const { width, height } = useWindowSize();
    return (
        <div className="flex flex-col items-center rounded-2xl border-2 border-dotted p-2 shadow-2xl sm:p-4 sm:text-3xl">
            <div className="flex gap-x-1">
                <span>Width:</span>
                <span className="font-bold">{width}</span>
            </div>
            <div className="flex gap-x-1">
                <span>Height:</span>
                <span className="font-bold">{height}</span>
            </div>
        </div>
    );
};
